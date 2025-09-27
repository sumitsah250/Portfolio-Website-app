import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ width: "100%", height: "100%", overflow: "visible", position: "relative" }}>
            <Spline 
              scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Additional animated grid overlay for extra futuristic feel */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-8 max-w-6xl mx-auto transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Greeting */}
        <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-mono">
          <span className="text-[#00FFD1]">&gt;</span> Hi, I'm
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-mono tracking-tight">
          <span className="text-[#00FFD1]">SUMIT</span> SAH
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
          ANDROID DEVELOPER & AI ENTHUSIAST
          <span className="animate-pulse text-[#00FFD1]">_</span>
        </div>
        
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Building the future with Android development, Machine Learning, and AI. 
          Passionate about creating scalable, intelligent mobile solutions that make a difference.
        </p>

        {/* Enhanced Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center bg-gray-900 bg-opacity-30 rounded-lg p-4 border border-[#00FFD1] border-opacity-30">
            <div className="text-3xl font-bold text-[#00FFD1] font-mono">15K+</div>
            <div className="text-sm text-gray-400">Downloads</div>
          </div>
          <div className="text-center bg-gray-900 bg-opacity-30 rounded-lg p-4 border border-[#00FFD1] border-opacity-30">
            <div className="text-3xl font-bold text-[#00FFD1] font-mono">5K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center bg-gray-900 bg-opacity-30 rounded-lg p-4 border border-[#00FFD1] border-opacity-30">
            <div className="text-3xl font-bold text-[#00FFD1] font-mono">4+</div>
            <div className="text-sm text-gray-400">Published Apps</div>
          </div>
        </div>

        {/* Creative CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="creative-btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1] via-[#6FD2C0] to-[#00FFD1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-0 h-full bg-[#00FFD1] group-hover:w-full transition-all duration-500 ease-out"></div>
            <span className="absolute right-4 group-hover:translate-x-2 transition-transform text-black opacity-0 group-hover:opacity-100">→</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('github').scrollIntoView({ behavior: 'smooth' })}
            className="creative-btn-secondary group relative overflow-hidden"
          >
            <span className="relative z-10">EXPLORE CODE</span>
            <div className="absolute inset-0 border border-[#00FFD1] group-hover:border-2 transition-all"></div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#00FFD1] rounded-full group-hover:w-full group-hover:h-full transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2"></div>
            <span className="absolute right-4 group-hover:translate-x-2 transition-transform text-black opacity-0 group-hover:opacity-100">{'</>'}</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#00FFD1] animate-bounce hover:scale-110 transition-transform"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#00FFD1] rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-[#00FFD1] rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-[#00FFD1] rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;