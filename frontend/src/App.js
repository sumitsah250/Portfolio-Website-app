import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <Projects />
          <GitHub />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;