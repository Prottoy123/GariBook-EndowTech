import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Stats from './components/sections/Stats';
import ServicesGrid from './components/sections/ServicesGrid';
import PromoSections from './components/sections/PromoSections';
import Features from './components/sections/Features';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-white text-[#121212]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ServicesGrid />
        <PromoSections />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
