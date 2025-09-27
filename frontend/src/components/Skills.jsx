import React, { useEffect, useState } from 'react';
import { 
  Smartphone, Code, Brain, Database, Cloud, Palette, 
  Wrench, GitBranch, Cpu, Settings, Layers, Target 
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillsData = [
    // Core Technologies
    { name: 'Android Development', icon: <Smartphone size={32} />, category: 'Core' },
    { name: 'Machine Learning', icon: <Brain size={32} />, category: 'Core' },
    { name: 'Artificial Intelligence', icon: <Cpu size={32} />, category: 'Core' },
    
    // Programming Languages
    { name: 'Java', icon: <Code size={32} />, category: 'Languages' },
    { name: 'Python', icon: <Code size={32} />, category: 'Languages' },
    { name: 'C++', icon: <Code size={32} />, category: 'Languages' },
    { name: 'JavaScript', icon: <Code size={32} />, category: 'Languages' },
    
    // Tools & Platforms
    { name: 'Firebase', icon: <Cloud size={32} />, category: 'Tools' },
    { name: 'TensorFlow', icon: <Target size={32} />, category: 'Tools' },
    { name: 'Android Studio', icon: <Settings size={32} />, category: 'Tools' },
    { name: 'Git & GitHub', icon: <GitBranch size={32} />, category: 'Tools' },
    { name: 'Figma', icon: <Palette size={32} />, category: 'Tools' },
  ];

  const categories = [...new Set(skillsData.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      'Core': 'from-[#00FFD1] to-[#6FD2C0]',
      'Languages': 'from-green-500 to-emerald-500',
      'Tools': 'from-blue-500 to-cyan-500'
    };
    return colors[category] || 'from-[#00FFD1] to-[#6FD2C0]';
  };

  return (
    <section id="skills" className="py-20 bg-black relative">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-small"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>SKILLS<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-[#00FFD1] font-mono text-center mb-6">
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skillsData
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`group relative bg-gray-900 bg-opacity-50 rounded-lg p-4 border border-gray-800 
                          hover:border-[#00FFD1] transition-all duration-300 cursor-pointer text-center ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        style={{ transitionDelay: `${(categoryIndex * 50) + (index * 30)}ms` }}
                      >
                        
                        {/* Background Gradient on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(category)} 
                          opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon */}
                          <div className="text-[#00FFD1] group-hover:scale-110 transition-transform duration-300 mb-2 flex justify-center">
                            {skill.icon}
                          </div>
                          
                          {/* Skill Name */}
                          <h4 className="text-white font-medium text-xs group-hover:text-[#00FFD1] transition-colors leading-tight">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Hover Effect Lines */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Condensed Additional Technologies */}
          <div className="text-center mt-12">
            <h3 className="text-lg font-bold text-white mb-6 font-mono">
              Additional Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'MVVM', 'Realm', 'MongoDB', 'Scikit-learn', 'OpenCV', 'PyTorch',
                'Material Design', 'REST APIs', 'Arduino', 'Postman'
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className={`bg-gray-900 bg-opacity-70 px-3 py-1 rounded-full border border-[#00FFD1] border-opacity-30
                    text-[#00FFD1] font-mono text-xs hover:bg-[#00FFD1] hover:text-black 
                    transition-all duration-300 cursor-default ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${index * 50 + 800}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;