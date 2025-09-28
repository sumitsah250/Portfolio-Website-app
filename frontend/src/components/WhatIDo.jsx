import React, { useEffect, useState } from 'react';
import { Brain, Smartphone, Code, Cpu, Database, Zap } from 'lucide-react';

const WhatIDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('what-i-do');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: <Smartphone size={48} />,
      title: 'Android Development',
      description: 'Creating powerful, user-friendly mobile applications with modern architecture',
      image: "/images/androidimage.png",
      points: [
        'Native Android app development with Java',
        'Firebase integration and real-time databases',
        'MVVM architecture and clean code practices',
        'Material Design and modern UI/UX',
        'Play Store optimization and deployment'
      ],
      technologies: ['Java', 'Android Studio', 'Firebase', 'MVVM', 'Material Design']
    },
    {
      id: 2,
      icon: <Brain size={48} />,
      title: 'AI & Deep Learning',
      description: 'Building intelligent systems with machine learning and artificial intelligence',
      image: '/images/aimlthemeimage.png',
      points: [
        'Machine learning model development with Python',
        'Deep learning using TensorFlow and PyTorch',
        'Computer vision and image processing',
        'Natural language processing applications',
        'AI integration in mobile applications'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV']
    }
  ];

  return (
    <section id="what-i-do" className="py-20 bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-small"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>WHAT I DO<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specializing in cutting-edge technologies to build innovative solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                
                {/* Image Side */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay with Icon */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute top-6 right-6 text-[#00FFD1] group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Animated Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFD1] via-transparent to-[#6FD2C0] rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#00FFD1]">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-mono">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3 mb-8">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FFD1] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-[#00FFD1] font-bold font-mono mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-gray-900 bg-opacity-70 px-3 py-2 rounded-lg text-sm text-gray-300 border border-[#00FFD1] border-opacity-30 hover:border-opacity-100 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <button 
                      onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                      className="creative-btn-primary group"
                    >
                      <span className="relative z-10">VIEW PROJECTS</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1] via-[#6FD2C0] to-[#00FFD1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-900 bg-opacity-30 rounded-lg p-6 border border-[#00FFD1] border-opacity-30">
              <Code className="w-8 h-8 text-[#00FFD1] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-mono">50+</div>
              <div className="text-gray-400 text-sm">Projects Built</div>
            </div>
            <div className="bg-gray-900 bg-opacity-30 rounded-lg p-6 border border-[#00FFD1] border-opacity-30">
              <Database className="w-8 h-8 text-[#00FFD1] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-mono">150K+</div>
              <div className="text-gray-400 text-sm">Lines of Code</div>
            </div>
            <div className="bg-gray-900 bg-opacity-30 rounded-lg p-6 border border-[#00FFD1] border-opacity-30">
              <Cpu className="w-8 h-8 text-[#00FFD1] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-mono">30+</div>
              <div className="text-gray-400 text-sm">ML Models</div>
            </div>
            <div className="bg-gray-900 bg-opacity-30 rounded-lg p-6 border border-[#00FFD1] border-opacity-30">
              <Zap className="w-8 h-8 text-[#00FFD1] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-mono">2.5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;