import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Play, Users, Download, Filter } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: 'SEE All Books & Guides 2081',
      description: 'A comprehensive study app for Class 10 students, providing essential resources and guides. Features intuitive UI design, powerful search functionality, and efficient data handling.',
      image: '/images/seeguideapp.png',
      category: 'Android',
      tech: ['Java', 'Firebase', 'Android Studio', 'Material Design'],
      stats: {
        users: '5K+ Active Users',
        downloads: '15K+ Downloads'
      },
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.boss.class10allguidemanual2081'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Pustak Bazzar',
      description: 'An innovative book resale application featuring comprehensive user profiles, advanced filtering options, and a robust admin panel for seamless management.',
      image: '/images/pustakbazzar.png',
      category: 'Android',
      tech: ['Java', 'Android Studio', 'Firebase Auth', 'Firestore', 'MVVM'],
      highlights: [
        'MVVM Architecture Implementation',
        'Advanced Admin Panel',
        'Real-time Data Synchronization'
      ],
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.boss.pustakbazzar'
      },
      featured: true
    },
{
  id: 7,
  title: 'Paisa Expense Manager',
  description: 'A smart expense manager app designed to track daily expenses, categorize spending, and provide insightful analytics for better financial management.',
  image: '/images/paisa.png',
  category: 'Android',
  tech: ['Java', 'Android Studio', 'Realm', 'Google Drive Backup'],
  highlights: [
    'Simple & Intuitive UI',
    'Realm Database Integration',
    'Google Drive Backup & Restore'
  ],
  links: {
    playStore: 'https://play.google.com/store/apps/details?id=com.paisa.expense_manager'
  },
  featured: true
},
{
  id: 8,
  title: 'Kuraakaani',
  description: 'A modern chatting application designed for fast, secure, and real-time messaging with a clean UI and seamless user experience.',
  image: '/images/kurakani.png',
  category: 'Android',
  tech: ['Java', 'Android Studio', 'Firebase Auth', 'Firestore', 'Glide'],
  highlights: [
    'Real-time Messaging',
    'User Authentication & Profiles',
    'Media Sharing Support'
  ],
  links: {
    github: 'https://github.com/sumitsah250/android-files/tree/master/KuraaKaani'
  },
},

{
  id: 3,
  title: 'Sign Language Detection ML Model',
  description: 'A deep learning-based model for recognizing and translating sign language gestures into text in real-time, improving accessibility and communication.',
  image: '/images/Sign_language_detection.png',
  category: 'ML/AI',
  tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
  highlights: [
    'Real-time Gesture Recognition',
    'Custom CNN/LSTM Architecture',
    'Improves Accessibility'
  ],
  links: {
    github: 'https://github.com/sumitsah250/sign-language'
  }
},
{
  id: 6,
  title: 'Forest Fire Detection System',
  description: 'An IoT-powered system designed to detect forest fires at an early stage using sensors and real-time monitoring, helping prevent large-scale environmental damage.',
  image: '/images/Wild_fire_detection.png',
  category: 'ML/AI',
  tech: ['Arduino', 'ESP32', 'IoT Sensors', 'Firebase', 'Android App'],
  highlights: [
    'Early Fire Detection with Sensors',
    'Real-time Alerts & Monitoring',
    'Mobile App Integration'
  ],
  links: {
    github: 'https://github.com/sumitsah250/OSMHackFest2024'
  }
},

    {
      id: 5,
      title: 'Line Following Robot',
      description: 'Autonomous line-following robot built with Arduino and infrared sensors. Implements PID control for smooth navigation and obstacle detection.',
      image: '/images/LineFollowingRobot.jpg',
      category: 'Robotics',
      tech: ['Arduino', 'C++', 'Sensors', 'Motors', 'PID Control'],
      highlights: [
        'PID Control Algorithm',
        'Obstacle Detection',
        'Autonomous Navigation'
      ],
      links: {
        github: 'https://github.com/sumitsah250/Robotics/tree/master/Line%20followig%20bot'
      }
    },
    {
  id: 4,
  title: 'Rowboatics – Wireless Controlled Boat',
  description: 'A wirelessly controlled boat designed for the IIT Bombay TechFest competition. The boat can be navigated using a Flysky joystick remote and is optimized for speed, maneuverability, and obstacle navigation.',
  image: '/images/Rc_boat.png', 
  category: 'Robotics',
  tech: ['Arduino', 'BLDC Motor', 'ESC Controller', 'Flysky Remote', 'IoT'],
  highlights: [
    'Wireless Joystick Control',
    '3D Printed Propeller Design',
    'Optimized for Obstacle Navigation'
  ],
  links: {
    github: 'https://github.com/sumitsah250/Robotics/tree/master/rowboatics'
  }
},


  ];

  const filters = ['All', 'Android', 'ML/AI', 'Robotics'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>PROJECTS<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Featured projects showcasing my expertise across different domains
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-mono text-sm border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#00FFD1] text-black border-[#00FFD1]'
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#00FFD1] hover:text-[#00FFD1]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden border border-gray-800 
                  hover:border-[#00FFD1] transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#00FFD1] text-black px-3 py-1 rounded-full text-xs font-bold font-mono">
                    {project.category}
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold font-mono">
                      FEATURED
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Hover Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      {project.links.playStore && (
                        <a 
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#00FFD1] text-black p-3 rounded-full hover:scale-110 transition-transform"
                        >
                          <Play size={20} />
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 text-white p-3 rounded-full hover:scale-110 transition-transform"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  
                  <h3 className="text-xl font-bold text-white font-mono group-hover:text-[#00FFD1] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-2 gap-3 py-3">
                      <div className="text-center bg-gray-800 bg-opacity-50 rounded-lg p-2">
                        <div className="flex items-center justify-center gap-1 text-[#00FFD1]">
                          <Users size={12} />
                          <span className="font-mono text-xs">{project.stats.users}</span>
                        </div>
                      </div>
                      <div className="text-center bg-gray-800 bg-opacity-50 rounded-lg p-2">
                        <div className="flex items-center justify-center gap-1 text-[#00FFD1]">
                          <Download size={12} />
                          <span className="font-mono text-xs">{project.stats.downloads}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#00FFD1] mt-1">•</span>
                          <span className="text-gray-400 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-800 px-2 py-1 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-gray-500 text-xs self-center">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('github').scrollIntoView({ behavior: 'smooth' })}
              className="creative-btn-secondary group"
            >
              <span className="relative z-10">VIEW ALL ON GITHUB</span>
              <div className="absolute inset-0 border border-[#00FFD1] group-hover:border-2 transition-all"></div>
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#00FFD1] rounded-full group-hover:w-full group-hover:h-full transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;