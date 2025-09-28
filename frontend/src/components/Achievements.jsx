import React, { useEffect, useState } from 'react';
import { Trophy, Award, Users, Calendar, Medal, Target } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    {
      id: 1,
      icon: <Trophy size={32} />,
      title: 'Janakpur Hackathon',
      description: 'Secured 4th place among 25+ national teams',
      category: 'Competition',
      date: '2023',
      details: 'Developed an innovative mobile solution under 48 hours with team collaboration',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      icon: <Award size={32} />,
      title: 'OSM Hackfest Runner-up',
      description: 'College-level hackathon achievement',
      category: 'Competition',
      date: '2023',
      details: 'Created a winning project showcasing technical skills and innovation',
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 3,
      icon: <Users size={32} />,
      title: 'Robotics Club Leadership',
      description: 'Senior Member at WRC Robotics Club',
      category: 'Leadership',
      date: '2022-Present',
      details: 'Conducted sessions for 150+ students on Git, robotics, and research writing',
      color: 'from-green-400 to-cyan-500'
    },
    {
      id: 4,
      icon: <Medal size={32} />,
      title: 'Published Apps Success',
      description: '15K+ downloads & 5K+ active users',
      category: 'Development',
      date: '2023-2024',
      details: 'Successfully launched and maintained multiple Android applications on Play Store',
      color: 'from-pink-400 to-red-500'
    },
    {
      id: 5,
      icon: <Target size={32} />,
      title: 'Academic Excellence',
      description: 'GPA 3.93 in +2 Science',
      category: 'Academic',
      date: '2021',
      details: 'Maintained high academic performance while pursuing technical interests',
      color: 'from-indigo-400 to-blue-600'
    },
    {
      id: 6,
      icon: <Calendar size={32} />,
      title: 'Workshop Organizer',
      description: 'Organized multiple technical workshops',
      category: 'Leadership',
      date: '2022-2023',
      details: 'Led workshops on modern development practices and emerging technologies',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('achievements');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>ACHIEVEMENTS<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestones and recognitions that mark my journey in technology and leadership
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className={`group relative bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-gray-800 
                  hover:border-[#00FFD1] transition-all duration-500 cursor-pointer overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[#00FFD1] group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <span className="bg-gray-800 px-2 py-1 rounded-full text-xs text-gray-400 font-mono">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-[#00FFD1] transition-colors">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    {achievement.details}
                  </p>
                  
                  {/* Date */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#00FFD1] font-mono text-sm font-bold">
                      {achievement.date}
                    </span>
                    <div className="w-8 h-8 bg-[#00FFD1] bg-opacity-10 rounded-full flex items-center justify-center
                      group-hover:bg-opacity-20 transition-colors">
                      <div className="w-2 h-2 bg-[#00FFD1] rounded-full group-hover:animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00FFD1] font-mono mb-2">2+</div>
              <div className="text-gray-400 text-sm">Hackathon Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00FFD1] font-mono mb-2">150+</div>
              <div className="text-gray-400 text-sm">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00FFD1] font-mono mb-2">5+</div>
              <div className="text-gray-400 text-sm">Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00FFD1] font-mono mb-2">3.93</div>
              <div className="text-gray-400 text-sm">Academic GPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;