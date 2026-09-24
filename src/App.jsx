import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Stats from './components/sections/Stats';
import ServicesGrid from './components/sections/ServicesGrid';
import FreedomJourney from './components/sections/FreedomJourney';
import PeopleTogether from './components/sections/PeopleTogether';
import BookingArrival from './components/sections/BookingArrival';
import SmartDriver from './components/sections/SmartDriver';
import FeaturedNews from './components/sections/FeaturedNews';
import PassengerSpeak from './components/sections/PassengerSpeak';
import BeyondDestinations from './components/sections/BeyondDestinations';
import DownloadApp from './components/sections/DownloadApp';
import Footer from './components/layout/Footer';
import FloatingWidgets from './components/layout/FloatingWidgets';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="font-sans antialiased bg-white text-[#121212]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ServicesGrid />
        <FreedomJourney />
        <PeopleTogether />
        <BookingArrival />
        <SmartDriver />
        <FeaturedNews />
        <PassengerSpeak />
        <BeyondDestinations />
        <DownloadApp />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
