import React from 'react';
import exploreImg from '../../assets/garibook/explore.jpeg';
import freedomImg from '../../assets/garibook/freedom.jpg';
import safeTravelSvg from '../../assets/garibook/safe_travel.svg';
import preferredCarImg from '../../assets/garibook/prefarred_car.jpg';
import smoothImg from '../../assets/garibook/smooth.jpg';
import rightArrow from '../../assets/garibook/right-arrow.png';

const BookingArrival = () => {
  return (
    <section className="booking-arrival-wrapper section-padding-ptb-70 bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Download App CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div
            className="section-header max-w-2xl"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[48px] text-white leading-tight tracking-tight">
              From Booking to Arrival — It’s All in Your Hands
            </h2>
          </div>

          <div
            data-aos="flip-right"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex justify-start lg:justify-end"
          >
            <a
              href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0e52ff] hover:bg-[#0038c4] active:scale-[0.98] text-white font-semibold text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
            >
              <span>Download App</span>
              <img src={rightArrow} alt="" className="w-5 h-5 brightness-0 invert" />
            </a>
          </div>
        </div>

        {/* 5 Cards Bento Grid with Animated Sliding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-7">
          {/* Card 1: Explore (Wide - 8 cols) */}
          <div
            className="sm:col-span-2 md:col-span-8 overflow-hidden rounded-2xl sm:rounded-3xl h-[260px] sm:h-[320px] lg:h-[380px] shadow-lg group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <img
              src={exploreImg}
              alt="Explore Garibook"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Card 2: Freedom (4 cols) */}
          <div
            className="sm:col-span-1 md:col-span-4 overflow-hidden rounded-2xl sm:rounded-3xl h-[260px] sm:h-[320px] lg:h-[380px] shadow-lg group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <img
              src={freedomImg}
              alt="Freedom with Garibook"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Card 3: Safe Travel (4 cols) */}
          <div
            className="sm:col-span-1 md:col-span-4 overflow-hidden rounded-2xl sm:rounded-3xl h-[240px] sm:h-[300px] lg:h-[340px] shadow-lg group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <img
              src={safeTravelSvg}
              alt="Safe Travel"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Card 4: Preferred Car (4 cols) */}
          <div
            className="sm:col-span-1 md:col-span-4 overflow-hidden rounded-2xl sm:rounded-3xl h-[240px] sm:h-[300px] lg:h-[340px] shadow-lg group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <img
              src={preferredCarImg}
              alt="Preferred Car"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Card 5: Smooth Ride (4 cols) */}
          <div
            className="sm:col-span-1 md:col-span-4 overflow-hidden rounded-2xl sm:rounded-3xl h-[240px] sm:h-[300px] lg:h-[340px] shadow-lg group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <img
              src={smoothImg}
              alt="Smooth Ride"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingArrival;
