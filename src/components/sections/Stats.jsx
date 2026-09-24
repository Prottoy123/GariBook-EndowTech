import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  // Animation 2: ScrollTrigger-based reveal for the "Stats Section" 
  // (numbers counting up from 0 to their target values as they enter the viewport).
  useGSAP(() => {
    const counters = gsap.utils.toArray('.stat-counter');
    
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'));
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out"
          });
        },
        once: true
      });
    });
  }, { scope: containerRef });

  const stats = [
    { target: 150, suffix: 'K+', label: 'Trip Requests' },
    { target: 75, suffix: 'K+', label: 'Total Customers' },
    { target: 12, suffix: 'K+', label: 'Active Drivers' },
    { target: 64, suffix: '', label: 'District Covered' } // Note: "District Covered" based on prompt
  ];

  return (
    <section ref={containerRef} className="py-24 bg-[#0e52ff] text-white overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e52ff] to-[#0038c4] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16">
          From Everyday Rides to <br /> Meaningful Journeys
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-black mb-2 text-[#fdd300] flex items-center justify-center">
                <span className="stat-counter" data-target={stat.target}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <span className="text-lg font-medium opacity-90">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
