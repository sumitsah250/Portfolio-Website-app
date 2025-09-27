// GitHub API Service for real-time activity
const GITHUB_USERNAME = 'sumitsah250'; // Your GitHub username
const GITHUB_API_BASE = 'https://api.github.com';

class GitHubAPI {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes cache
  }

  async fetchWithCache(url, cacheKey) {
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      this.cache.set(cacheKey, { data, timestamp: Date.now() });
      return data;
    } catch (error) {
      console.error(`GitHub API Error for ${cacheKey}:`, error);
      // Return cached data if available, otherwise return empty array/null
      return cached ? cached.data : (cacheKey.includes('repos') ? [] : null);
    }
  }

  // Get user profile information
  async getProfile() {
    return this.fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
      'profile'
    );
  }

  // Get user's repositories (sorted by updated date)
  async getRepositories(limit = 6) {
    const repos = await this.fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${limit}`,
      'repos'
    );
    
    return repos.filter(repo => !repo.fork).slice(0, limit);
  }

  // Get recent events/activity
  async getRecentActivity(limit = 10) {
    return this.fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events/public?per_page=${limit}`,
      'activity'
    );
  }

  // Get languages used across repositories
  async getTopLanguages() {
    try {
      const repos = await this.getRepositories(20);
      const languageStats = {};

      // Get language data for each repo (limited to avoid rate limiting)
      const languagePromises = repos.slice(0, 10).map(async (repo) => {
        try {
          const languages = await this.fetchWithCache(
            repo.languages_url,
            `languages-${repo.name}`
          );
          
          Object.entries(languages || {}).forEach(([lang, bytes]) => {
            languageStats[lang] = (languageStats[lang] || 0) + bytes;
          });
        } catch (error) {
          console.warn(`Failed to fetch languages for ${repo.name}`);
        }
      });

      await Promise.all(languagePromises);

      // Convert to sorted array
      return Object.entries(languageStats)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 8)
        .map(([name, bytes]) => ({ name, bytes }));
    } catch (error) {
      console.error('Error fetching top languages:', error);
      return [];
    }
  }

  // Get contribution stats (from profile)
  async getContributionStats() {
    const profile = await this.getProfile();
    if (!profile) return null;

    return {
      publicRepos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
      totalStars: 0, // Will be calculated from repos
      accountCreated: profile.created_at
    };
  }

  // Calculate total stars across repositories
  async getTotalStars() {
    try {
      const repos = await this.getRepositories(100);
      return repos.reduce((total, repo) => total + (repo.stargazers_count || 0), 0);
    } catch (error) {
      console.error('Error calculating total stars:', error);
      return 0;
    }
  }

  // Format activity for display
  formatActivity(events) {
    return events.map(event => {
      const createdAt = new Date(event.created_at);
      const timeAgo = this.getTimeAgo(createdAt);
      
      let actionText = '';
      let icon = '•';
      
      switch (event.type) {
        case 'PushEvent':
          const commitCount = event.payload.commits?.length || 1;
          actionText = `Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''} to ${event.repo.name}`;
          icon = '📝';
          break;
        case 'CreateEvent':
          if (event.payload.ref_type === 'repository') {
            actionText = `Created repository ${event.repo.name}`;
            icon = '🎉';
          } else {
            actionText = `Created ${event.payload.ref_type} in ${event.repo.name}`;
            icon = '🌿';
          }
          break;
        case 'ForkEvent':
          actionText = `Forked ${event.repo.name}`;
          icon = '🍴';
          break;
        case 'WatchEvent':
          actionText = `Starred ${event.repo.name}`;
          icon = '⭐';
          break;
        case 'IssuesEvent':
          actionText = `${event.payload.action} issue in ${event.repo.name}`;
          icon = '🐛';
          break;
        case 'PullRequestEvent':
          actionText = `${event.payload.action} pull request in ${event.repo.name}`;
          icon = '🔀';
          break;
        default:
          actionText = `Activity in ${event.repo.name}`;
          icon = '📊';
      }

      return {
        id: event.id,
        action: actionText,
        icon,
        timeAgo,
        repoName: event.repo.name,
        type: event.type
      };
    });
  }

  // Helper to calculate time ago
  getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 30) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  }
}

export default new GitHubAPI();