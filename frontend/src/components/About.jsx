import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>ABOUT<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Side with Animation */}
            <div className="relative">
              <div className="relative z-10 max-w-md mx-auto">
                {/* Animated Portrait Placeholder */}
                <div className="relative group">
                  <img 
                    src="/images/profileimage.png"
                    alt="Sumit Sah - Professional Portrait"
                    className="w-full h-96 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
               
                  {/* Floating Animation */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00FFD1] rounded-full animate-bounce opacity-70"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#6FD2C0] rounded-full animate-pulse"></div>
                </div>
                
              </div>
            </div>

            {/* Content Side */}
            <div className="text-white space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 font-mono text-[#00FFD1]">
                  Hello, I'm Sumit
                </h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Passionate Android Developer with expertise in Java, Firebase, and Realm. 
                    I specialize in creating scalable, user-centric mobile solutions with clean 
                    architecture and high performance.
                  </p>
                  
                  <p>
                    Currently pursuing Bachelor of Computer Engineering at Institute of Engineering, WRC. 
                    I've successfully built and published apps with 5K+ active users and 15K+ downloads, 
                    demonstrating my ability to create impactful mobile solutions.
                  </p>
                  
                  <p>
                    As a Senior Member of the Robotics Club, I've conducted sessions on Git, robotics, 
                    and research writing for over 150 students, showcasing my leadership and knowledge-sharing abilities.
                  </p>
                </div>
              </div>

              {/* Updated Quick Stats */}
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-gray-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FFD1] font-mono">15K+</div>
                  <div className="text-sm text-gray-400">App Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FFD1] font-mono">5K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
              </div>

              {/* Updated Contact Links */}
              <div className="space-y-4">
                <a 
                  href="mailto:sumitsah250@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#00FFD1] transition-colors"
                >
                  <Mail size={20} />
                  <span>sumitsah250@gmail.com</span>
                </a>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <a 
                    href="https://github.com/sumitsah250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-[#00FFD1] transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/sumit-sah-3675b91a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-[#00FFD1] transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://instagram.com/sumitsah.250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                  
                  <a 
                    href="https://facebook.com/sumitsah250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;