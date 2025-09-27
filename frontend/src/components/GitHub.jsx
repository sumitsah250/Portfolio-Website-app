import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  GitBranch, 
  Star, 
  Users, 
  BookOpen, 
  Activity,
  ExternalLink,
  RefreshCw,
  Calendar
} from 'lucide-react';
import GitHubAPI from '../services/githubAPI';

const GitHubActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [activity, setActivity] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        profileData,
        reposData,
        activityData,
        languagesData,
        statsData
      ] = await Promise.allSettled([
        GitHubAPI.getProfile(),
        GitHubAPI.getRepositories(4),
        GitHubAPI.getRecentActivity(3),
        GitHubAPI.getTopLanguages(),
        GitHubAPI.getContributionStats()
      ]);

      // Handle results
      if (profileData.status === 'fulfilled') setProfile(profileData.value);
      if (reposData.status === 'fulfilled') setRepos(reposData.value || []);
      if (activityData.status === 'fulfilled') {
        const formattedActivity = GitHubAPI.formatActivity(activityData.value || []);
        setActivity(formattedActivity);
      }
      if (languagesData.status === 'fulfilled') setLanguages(languagesData.value || []);
      if (statsData.status === 'fulfilled') setStats(statsData.value);

      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError('Failed to load GitHub data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchGitHubData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num?.toString() || '0';
  };

  if (loading && !profile) {
    return (
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-gray-400 mt-4">Loading GitHub activity...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Github size={48} className="text-white" />
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">
              GITHUB ACTIVITY
            </h2>
          </div>
          <div className="w-20 h-px bg-gray-600 mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <Activity size={16} />
            <span className="text-sm">Live from GitHub</span>
            {lastUpdated && (
              <>
                <span>•</span>
                <span className="text-sm">
                  Updated {GitHubAPI.getTimeAgo(lastUpdated)}
                </span>
              </>
            )}
            <motion.button
              onClick={fetchGitHubData}
              disabled={loading}
              className="ml-2 p-1 text-gray-500 hover:text-gray-300 disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RefreshCw 
                size={14} 
                className={loading ? 'animate-spin' : ''} 
              />
            </motion.button>
          </div>
        </motion.div>

        {error && (
          <motion.div
            className="bg-red-900/20 border border-red-800 p-4 rounded mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-red-400">{error}</p>
          </motion.div>
        )}

        {/* GitHub Stats Overview */}
        {stats && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: BookOpen, label: 'Repositories', value: formatNumber(stats.publicRepos) },
              { icon: Users, label: 'Followers', value: formatNumber(stats.followers) },
              { icon: Star, label: 'Total Stars', value: formatNumber(stats.totalStars) },
              { icon: Calendar, label: 'Years Active', value: new Date().getFullYear() - new Date(stats.accountCreated).getFullYear() }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <stat.icon size={24} className="text-gray-400 mx-auto mb-3" />
                <div className="text-2xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-white mb-8 tracking-wide">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {activity.length > 0 ? activity.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-4 p-4 border border-gray-800 bg-black/20 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-lg">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.action}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{item.timeAgo}</p>
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-8 text-gray-500">
                  <Activity size={32} className="mx-auto mb-3 opacity-50" />
                  <p>No recent activity available</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Recent Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-white mb-8 tracking-wide">
              Latest Repositories
            </h3>
            <div className="space-y-4">
              {repos.length > 0 ? repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-800 bg-black/20 backdrop-blur-sm hover:border-gray-600 transition-all duration-300 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <GitBranch size={16} className="text-gray-400 flex-shrink-0" />
                        <h4 className="text-white font-light truncate group-hover:text-gray-300 transition-colors duration-300">
                          {repo.name}
                        </h4>
                        <ExternalLink size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      {repo.description && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                          {repo.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star size={12} />
                            {repo.stargazers_count}
                          </span>
                        )}
                        <span>Updated {GitHubAPI.getTimeAgo(new Date(repo.updated_at))}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )) : (
                <div className="text-center py-8 text-gray-500">
                  <BookOpen size={32} className="mx-auto mb-3 opacity-50" />
                  <p>No repositories available</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Top Languages */}
        {languages.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-white mb-8 text-center tracking-wide">
              Top Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="px-4 py-2 border border-gray-700 bg-gray-900/40 text-gray-300 text-sm tracking-wide hover:border-gray-500 hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {lang.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* GitHub Profile Link */}
        {profile && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-light tracking-wider"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              VIEW FULL PROFILE
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;