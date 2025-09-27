import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/sumitsah250',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/sumit-sah-3675b91a9',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:sumitsah250@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold font-mono text-white hover:text-[#00FFD1] transition-colors"
            >
              <span className="text-[#00FFD1]">&lt;</span>
              SUMIT SAH
              <span className="text-[#00FFD1]">/&gt;</span>
            </button>
            
            <p className="text-gray-400 max-w-md leading-relaxed">
              Passionate Android Developer building scalable, user-centric mobile solutions. 
              Always exploring new technologies and creating impactful applications.
            </p>

            <div className="flex items-center gap-2 text-[#00FFD1]">
              <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
              <span className="text-sm font-mono">Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-mono mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300 
                      font-mono text-sm"
                  >
                    <span className="text-[#00FFD1]">&gt;</span> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-bold font-mono mb-6">Connect</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00FFD1] 
                    transition-colors duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span className="font-mono text-sm">{social.label}</span>
                </a>
              ))}
              
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={20} />
                <span className="font-mono text-sm">+977-9809641235</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm font-mono">
              © {currentYear} Sumit Sah. All rights reserved. Built with passion and code.
            </div>

            {/* Tech Stack */}
            <div className="text-gray-400 text-sm font-mono">
              Built with React • Styled with Tailwind CSS • Deployed with ❤️
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-[#00FFD1] bg-opacity-10 p-3 rounded-full border border-[#00FFD1] 
                border-opacity-30 text-[#00FFD1] hover:bg-opacity-20 transition-all duration-300 
                group"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-[#00FFD1] rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-[#00FFD1] rounded-full animate-pulse delay-700"></div>
    </footer>
  );
};

export default Footer;