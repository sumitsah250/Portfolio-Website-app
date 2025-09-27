# Portfolio Backend API Contracts

## Overview
This document defines the API contracts needed to convert the frontend from mock data to a fully functional backend system.

## Current Mock Data to Replace

### 1. Contact Form (Currently Simulated)
**Frontend Location**: `/components/Contact.jsx`
**Mock Behavior**: Simulates form submission with setTimeout
**Backend Needed**: Store contact messages in MongoDB

### 2. Static Data (Currently Hardcoded)
**Frontend Locations**: Various components
**Mock Behavior**: Static arrays and objects
**Backend Needed**: Serve dynamic data via APIs

## API Endpoints Required

### 1. Contact Form API
```
POST /api/contact
Body: {
  name: string,
  email: string, 
  message: string
}
Response: {
  success: boolean,
  message: string,
  id?: string
}
```

### 2. Portfolio Data APIs
```
GET /api/profile
Response: {
  name: string,
  title: string,
  bio: string,
  stats: {
    downloads: string,
    activeUsers: string,
    publishedApps: string
  },
  contact: {
    email: string,
    location: string,
    social: []
  }
}

GET /api/projects
Response: {
  projects: [{
    id: string,
    title: string,
    description: string,
    category: string,
    tech: string[],
    image: string,
    stats?: object,
    links: object,
    featured: boolean
  }]
}

GET /api/skills
Response: {
  skills: [{
    name: string,
    category: string,
    icon?: string
  }],
  additionalTech: string[]
}

GET /api/achievements  
Response: {
  achievements: [{
    id: string,
    title: string,
    description: string,
    category: string,
    date: string,
    details: string
  }]
}
```

## MongoDB Models Needed

### 1. Contact Model
```javascript
{
  _id: ObjectId,
  name: string,
  email: string, 
  message: string,
  createdAt: Date,
  status: string // 'new', 'read', 'replied'
}
```

### 2. Profile Model (Single Document)
```javascript
{
  _id: ObjectId,
  name: string,
  title: string,
  bio: string,
  stats: object,
  contact: object,
  updatedAt: Date
}
```

### 3. Project Model
```javascript
{
  _id: ObjectId,
  title: string,
  description: string,
  category: string,
  tech: string[],
  image: string,
  stats: object,
  links: object,
  featured: boolean,
  order: number,
  createdAt: Date
}
```

### 4. Skill Model
```javascript
{
  _id: ObjectId,
  name: string,
  category: string,
  icon: string,
  order: number
}
```

### 5. Achievement Model
```javascript
{
  _id: ObjectId,
  title: string,
  description: string,
  category: string,
  date: string,
  details: string,
  order: number
}
```

## Frontend Integration Changes

### Files to Update:
1. `/components/Contact.jsx` - Replace mock form submission with real API call
2. `/components/About.jsx` - Fetch profile data from API
3. `/components/Projects.jsx` - Fetch projects from API
4. `/components/Skills.jsx` - Fetch skills from API  
5. `/components/Achievements.jsx` - Fetch achievements from API

### API Integration Strategy:
- Use existing axios setup in frontend
- Add error handling and loading states
- Maintain existing UI/UX while switching to backend data
- Keep mock data as fallback during development

## Implementation Priority:
1. **Phase 1**: Contact form API (immediate functionality)
2. **Phase 2**: Portfolio data APIs (dynamic content)
3. **Phase 3**: Admin interface for content management (future enhancement)

## Error Handling:
- Graceful degradation if APIs fail
- User-friendly error messages
- Loading indicators during API calls
- Retry mechanisms for failed requests