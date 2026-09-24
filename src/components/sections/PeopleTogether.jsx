import React from 'react';
import airportImg from '../../assets/garibook/Airport Rental_Webp.webp';
import familyImg from '../../assets/garibook/family_trips.webp';
import groupTourImg from '../../assets/garibook/Group Tour_Webp.webp';

const EXPERIENCES = [
  {
    id: 'airport',
    title: 'Airport Rentals',
    img: airportImg,
    delay: 200,
  },
  {
    id: 'family',
    title: 'Family Trips',
    img: familyImg,
    delay: 300,
  },
  {
    id: 'tours',
    title: 'Long Tours',
    img: groupTourImg,
    delay: 400,
  },
];

const PeopleTogether = () => {
  return (
    <section className="people-together-wrapper section-padding-ptb-70 bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - AOS Fade-Up */}
        <div
          className="section-header max-w-3xl mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#121212] leading-[1.18] tracking-tight">
            More Than Miles — <br />
            We Bring People Together
          </h2>
        </div>

        {/* 3 Visual Experience Cards - Individual AOS Fade-Up Sliding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="people-together-box relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 ease-out h-[360px] sm:h-[420px] lg:h-[460px]"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={item.delay}
            >
              {/* Background Photo with subtle hover zoom */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Top Vignette Gradient for Crystal Clear White Text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

              {/* Title Text positioned at top-left matching Garibook */}
              <div className="people-together-text absolute top-0 left-0 pt-6 sm:pt-8 md:pt-10 pl-6 sm:pl-8 md:pl-10 z-10 pointer-events-none">
                <h4 className="font-['Montserrat'] font-bold text-2xl sm:text-[28px] lg:text-[32px] text-white tracking-tight drop-shadow-md">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleTogether;
