import React from 'react';
import freedomBanner from '../../assets/garibook/garibook_freedom.webp';
import carIcon from '../../assets/garibook/car.svg';
import driveIcon from '../../assets/garibook/drive.svg';
import priceIcon from '../../assets/garibook/price.svg';

const FEATURES_DATA = [
  {
    icon: carIcon,
    title: 'Choose the Car',
    desc: 'Pick what suits your comfort.',
    delay: 200,
  },
  {
    icon: driveIcon,
    title: 'Choose the Driver',
    desc: 'Based on ratings and reviews.',
    delay: 400,
  },
  {
    icon: priceIcon,
    title: 'Choose the Price',
    desc: 'Select the bid that fits your budget.',
    delay: 600,
  },
];

const FreedomJourney = () => {
  return (
    <section className="freedom-wrapper section-padding-ptb-70 bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Exact Title & AOS Fade-Up */}
        <div
          className="section-header max-w-3xl mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="200"
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[48px] text-white leading-tight tracking-tight">
            Freedom in Every Journey
          </h2>
        </div>

        {/* Freedom Banner Image - AOS Zoom-In */}
        <div
          className="freedom-inner-image w-full"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <img
            src={freedomBanner}
            alt="Freedom in Every Journey - Garibook"
            className="w-full h-auto max-h-[580px] object-cover rounded-t-2xl sm:rounded-t-3xl shadow-2xl"
          />
        </div>

        {/* 3 Freedom Feature Cards - AOS Staggered Fade-Up Sliding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16 pt-4">
          {FEATURES_DATA.map((item, idx) => (
            <div
              key={idx}
              className="layout-two-box-item flex flex-col items-start"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={item.delay}
            >
              {/* Feature Icon */}
              <div className="h-14 sm:h-16 w-auto flex items-center mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="ltbt-text">
                <h5 className="font-['Montserrat'] font-semibold text-2xl sm:text-[28px] lg:text-[32px] text-white leading-tight mb-2 sm:mb-3">
                  {item.title}
                </h5>
                <p className="text-lg sm:text-[20px] lg:text-[24px] text-[#9d9d9d] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreedomJourney;

