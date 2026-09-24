import React, { useState, useEffect, useRef } from 'react';
import intercitySvg from '../../assets/garibook/intercity_car_rental.svg';
import rideshareSvg from '../../assets/garibook/rideshare.svg';
import airportSvg from '../../assets/garibook/airport_rental.svg';
import hourlySvg from '../../assets/garibook/hourly_rental.svg';
import businessImg from '../../assets/garibook/busines.jpeg';
import clubImg from '../../assets/garibook/garibook_club.jpg';
import vmsImg from '../../assets/garibook/Frame_1000001473.png';
import rightArrow from '../../assets/garibook/right-arrow.png';

const RIDES_SERVICES = [
  {
    id: 'intercity',
    title: 'Intercity Car Rental',
    desc: 'Travel hassle-free from city to city across Bangladesh with the best quality cars, ensuring comfort all the way.',
    img: intercitySvg,
  },
  {
    id: 'rideshare',
    title: 'Ride share',
    desc: 'Move easily within the city for any need- quick, smooth, and stress-free.',
    img: rideshareSvg,
  },
  {
    id: 'airport',
    title: 'Airport Rental',
    desc: 'Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.',
    img: airportSvg,
  },
  {
    id: 'hourly',
    title: 'Hourly Rental',
    desc: 'Rent a car by the hour, tailored to your needs.',
    img: hourlySvg,
  },
];

const ServicesGrid = () => {
  const [activeTab, setActiveTab] = useState('rides');
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Index 0 active by default
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll entrance observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const tabs = [
    { id: 'rides', label: 'Rides' },
    { id: 'business', label: 'Garibook Business' },
    { id: 'club', label: 'Garibook Club' },
    { id: 'vms', label: 'VMS' },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#121212] tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Tab Buttons matching Garibook's exact style */}
        <div
          className={`flex flex-wrap items-center gap-3 sm:gap-4 pb-8 sm:pb-12 transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 sm:px-10 py-3 sm:py-3.5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0e52ff] text-white shadow-md'
                  : 'bg-[#e9e9e9] text-[#121212] hover:bg-gray-300/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Rides */}
        {activeTab === 'rides' && (
          <div className="pt-2 sm:pt-4">
            <h3
              className={`font-['Montserrat'] font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#121212] leading-tight mb-8 sm:mb-12 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Every Ride, Every Need <br className="hidden sm:inline" /> One Platform.
            </h3>

            {/* 4 Service Cards Grid using exact authentic Garibook styles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {RIDES_SERVICES.map((service, index) => {
                const isActive = activeCardIndex === index;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveCardIndex(index)}
                    onMouseLeave={() => setActiveCardIndex(0)}
                    style={{
                      transitionDelay: `${isVisible ? index * 120 + 200 : 0}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    }}
                    className={`box-item-wrap-one w-full cursor-pointer transition-all duration-500 ${
                      isActive ? 'active shadow-lg shadow-blue-500/20' : ''
                    }`}
                  >
                    {/* Vehicle Illustration with sliding white background badge */}
                    <div className="box-iwo-img position-relative z-1 mb-2">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-[72px] w-auto object-contain transition-all duration-500"
                      />
                    </div>

                    {/* Card Title & Description */}
                    <div className="box-iwo-text mt-4">
                      <h5 className="font-['Montserrat'] font-semibold text-xl sm:text-2xl mb-3 text-[#121212] transition-colors duration-500">
                        {service.title}
                      </h5>
                      <p className="text-base sm:text-[17px] leading-relaxed text-[#9d9d9d] transition-colors duration-500">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Garibook Business */}
        {activeTab === 'business' && (
          <div className="pt-6 sm:pt-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f5f8ff] rounded-2xl p-6 sm:p-10 lg:p-14">
              <div className="lg:col-span-6">
                <h3 className="font-['Montserrat'] font-bold text-2xl sm:text-3xl lg:text-[40px] text-[#121212] leading-tight mb-5">
                  Modern Car Rentals <br /> for Business
                </h3>
                <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed mb-8">
                  Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.
                </p>
                <a
                  href="#business"
                  className="inline-flex items-center gap-3 bg-[#0e52ff] hover:bg-[#0038c4] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <img src={rightArrow} alt="" className="w-5 h-5 brightness-0 invert" />
                </a>
              </div>
              <div className="lg:col-span-6">
                <img
                  src={businessImg}
                  alt="Garibook Business"
                  className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Garibook Club */}
        {activeTab === 'club' && (
          <div className="pt-6 sm:pt-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f5f8ff] rounded-2xl p-6 sm:p-10 lg:p-14">
              <div className="lg:col-span-6">
                <h3 className="font-['Montserrat'] font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#121212] leading-tight mb-5">
                  Turn Your Car into Earnings with Garibook Club
                </h3>
                <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed mb-8">
                  Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.
                </p>
                <a
                  href="#club"
                  className="inline-flex items-center gap-3 bg-[#0e52ff] hover:bg-[#0038c4] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <img src={rightArrow} alt="" className="w-5 h-5 brightness-0 invert" />
                </a>
              </div>
              <div className="lg:col-span-6">
                <img
                  src={clubImg}
                  alt="Garibook Club"
                  className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: VMS */}
        {activeTab === 'vms' && (
          <div className="pt-6 sm:pt-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f5f8ff] rounded-2xl p-6 sm:p-10 lg:p-14">
              <div className="lg:col-span-6">
                <h3 className="font-['Montserrat'] font-bold text-2xl sm:text-3xl lg:text-[38px] text-[#121212] leading-tight mb-5">
                  Vehicle Management System - VMS
                </h3>
                <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed mb-8">
                  Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.
                </p>
                <a
                  href="#vms"
                  className="inline-flex items-center gap-3 bg-[#0e52ff] hover:bg-[#0038c4] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <img src={rightArrow} alt="" className="w-5 h-5 brightness-0 invert" />
                </a>
              </div>
              <div className="lg:col-span-6">
                <img
                  src={vmsImg}
                  alt="Vehicle Management System"
                  className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
