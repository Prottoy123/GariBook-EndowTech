import React, { useState, useEffect, useRef } from 'react';
import citySkyline from '../../assets/garibook/frame_1.312c65e3.png';
import sedanCar from '../../assets/garibook/Sedan_GiF.9efd9ae4.gif';

const STATS_DATA = [
  { label: 'Trip Requests', value: '300,000', suffix: '+', delay: 100 },
  { label: 'Total Customers', value: '850,000', suffix: '+', delay: 200 },
  { label: 'Active Drivers', value: '35,000', suffix: '+', delay: 300 },
  { label: 'District Covered', value: '64', suffix: '', delay: 400 },
];

const Stats = () => {
  const contentRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px', // স্ক্রিনের একটু ভেতরে আসলেই ট্রিগার হবে
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0e52ff] pt-24 sm:pt-32 lg:pt-36 pb-48 sm:pb-52 lg:pb-56 text-white z-0">
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10"
      >
        {/* Heading Section */}
        <div
          className="w-full mb-16 lg:mb-48"
          style={{
            // স্ট্রং এবং ক্লিয়ার স্লাইডিং অ্যানিমেশন
            transition: 'opacity 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(60px)',
          }}
        >
          <h2 className="font-['Montserrat'] font-bold text-[36px] sm:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.2] text-white tracking-tight text-left">
            From Everyday Rides to Meaningful<br className="hidden lg:block" /> Journeys
          </h2>
        </div>

        {/* Stats Section - Mobile View (flex-col) and Desktop View (flex-row) */}
        <div className="w-full flex justify-start lg:justify-end">
          <ul className="flex flex-col lg:flex-row items-start justify-start lg:justify-end gap-10 lg:gap-x-12 p-0 m-0 list-none">
            {STATS_DATA.map((stat, idx) => (
              <li
                key={idx}
                className="flex flex-col items-start"
                style={{
                  // নাম্বারের জন্য স্ন্যাপি অ্যানিমেশন
                  transition: 'opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  transitionDelay: `${inView ? stat.delay : 0}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(60px)',
                }}
              >
                {/* Counter value */}
                <h4 className="font-['Montserrat'] font-bold text-[34px] sm:text-4xl lg:text-[38px] xl:text-[42px] text-[#fdd300] tracking-tight leading-tight mb-1 whitespace-nowrap">
                  {stat.value}{stat.suffix}
                </h4>
                {/* Counter label */}
                <span className="font-semibold text-[17px] sm:text-lg lg:text-[18px] text-white/95 whitespace-nowrap">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Moving City Skyline and Continuous Driving Sedan Car */}
      <div className="absolute bottom-0 left-0 w-full h-[95px] sm:h-[115px] pointer-events-none overflow-hidden z-10">
        <div
          className="absolute bottom-0 left-0 h-20 sm:h-24 w-[400%] animate-moveCity bg-repeat-x bg-contain opacity-90"
          style={{ backgroundImage: `url(${citySkyline})` }}
        />
        <div className="absolute left-6 sm:left-14 -bottom-2 z-20 w-36 sm:w-56 pointer-events-none">
          <img
            src={sedanCar}
            alt="Garibook Sedan Animation"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;