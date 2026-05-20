import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Play, Users, Download } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

 const experienceData = [
  {
    id: 1,
    title: 'Mobile Application (Flutter) Intern',
    company: 'MarginTop Solutions Pvt. Ltd.',
    category: 'Internship',
    duration: 'Dec 2025 – Mar 2025',
    description: 'Completed a 3-month internship focused on Flutter mobile application development. Contributed to real-world projects and gained hands-on experience in building scalable and efficient applications.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Mobile App Development'],
    highlights: [
      'Contributed to Flutter development projects',
      'Adapted quickly to team workflow and development practices',
      'Built innovative solutions with clean and efficient code',
      'Demonstrated strong learning ability and dedication'
    ],
    links: {
      certificate: 'https://drive.google.com/drive/folders/1jc7pD2sNubyu6D2uPsGZMiGdNqyQWeNu?usp=sharing'
    },
    featured: true
  },
  {
  id: 101,
  title: 'MeaningBy.com',
  company: 'Freelance Client',
  category: 'Freelance',
  duration: '2025 – Present', // adjust if needed
  description: 'Developed and deployed a live educational platform focused on dictionary, translations, and writing resources. Handled full-cycle development including design, backend integration, and deployment.',
  tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'], // edit based on what you used
  highlights: [
    'Designed and built complete platform from scratch',
    'Deployed and maintaining live production website',
    'Implemented translation and dictionary features',
    'Optimized performance and user experience'
  ],
  image: '/images/meaningby.png',
  links: { 
    demo: 'https://meaningby.com' 
  },
  featured: true
}
];

  const filters = ['All', 'Internship', 'Freelance', 'Full-Time'];

  const filteredExperience = activeFilter === 'All' 
    ? experienceData 
    : experienceData.filter(exp => exp.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>EXPERIENCE<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional internships, freelance work, and projects demonstrating hands-on experience.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-mono text-sm border transition-all duration-300 ${activeFilter === filter ? 'bg-[#00FFD1] text-black border-[#00FFD1]' : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#00FFD1] hover:text-[#00FFD1]'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`group bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden border border-gray-800 hover:border-[#00FFD1] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6 space-y-4">
                  {exp.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold font-mono">
                      FEATURED
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white font-mono group-hover:text-[#00FFD1] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>

                  {exp.highlights && (
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#00FFD1] mt-1">•</span>
                          <span className="text-gray-400 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech?.map(tech => (
                      <span key={tech} className="bg-gray-800 px-2 py-1 rounded-full text-xs text-gray-300">{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-3">
                    {exp.links?.certificate && (
                      <a href={exp.links.certificate} target="_blank" rel="noopener noreferrer" className="bg-[#00FFD1] text-black p-2 rounded-full hover:scale-110 transition-transform">
                        <Download size={16} />
                      </a>
                    )}
                    {exp.links?.github && (
                      <a href={exp.links.github} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform">
                        <Github size={16} />
                      </a>
                    )}
                    {exp.links?.demo && (
                      <a href={exp.links.demo} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:scale-110 transition-transform">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;