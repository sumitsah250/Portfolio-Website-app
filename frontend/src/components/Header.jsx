import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold font-mono text-white hover:text-[#00FFD1] transition-colors"
            >
              <span className="text-[#00FFD1]">&lt;</span>
              SUMIT
              <span className="text-[#00FFD1]">/&gt;</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-[#00FFD1] font-mono transition-colors duration-300 
                    relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFD1] transition-all duration-300 
                    group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-sm px-6 py-2 min-h-10"
              >
                Let's Talk →
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#00FFD1] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black bg-opacity-95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-8 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-[#00FFD1] font-mono 
                    transition-colors duration-300 py-2"
                >
                  <span className="text-[#00FFD1]">&gt;</span> {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-800">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full text-sm"
                >
                  Let's Talk →
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;