import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BookingWidget from '../booking/BookingWidget';
import rightArrow from '../../assets/garibook/right-arrow.png';

const TYPING_PHRASES = [
  'Assurance of Effortless Travel',
  'Luxury Trips with Comfort',
  'Your Journey Starts Here ...',
];

const Hero = () => {
  const containerRef = useRef(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(TYPING_PHRASES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect matching Garibook's exact behavior
  useEffect(() => {
    const fullText = TYPING_PHRASES[currentPhraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 60);
      } else {
        // Pause at complete phrase before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  // GSAP Staggered Entrance Animation for Hero section elements
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.gsap-hero-title',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }
      )
        .fromTo(
          '.gsap-hero-desc',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.gsap-hero-cta',
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.5)' },
          '-=0.5'
        )
        .fromTo(
          '.gsap-hero-widget',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-white pt-6 sm:pt-10 lg:pt-16 pb-14 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Typewriter Headline */}
          <div className="lg:col-span-6 gsap-hero-title min-h-[90px] sm:min-h-[120px] lg:min-h-[150px] flex items-center">
            <h1 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] text-[#121212] leading-[1.14] tracking-tight">
              <span>{displayedText}</span>
              <span className="text-[#0e52ff] font-light cursor-blink select-none ml-1">|</span>
            </h1>
          </div>

          {/* Right Column: Subtitle + Download CTA */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <p className="gsap-hero-desc text-base sm:text-lg lg:text-[22px] leading-relaxed sm:leading-[34px] font-medium text-[#9d9d9d]">
              Choose your city, pick your car and enjoy the journey with Garibook’s best drivers.
            </p>

            <div className="gsap-hero-cta mt-5 sm:mt-6">
              <a
                href="https://onelink.to/gbweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#fdd300] hover:bg-[#eec600] active:scale-[0.98] text-black font-semibold text-base sm:text-lg lg:text-[19px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-[15px] border-2 border-[#fdd300] shadow-sm transition-all duration-150 cursor-pointer"
              >
                <span>Download App</span>
                <img src={rightArrow} alt="" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Booking Widget Container */}
        <div className="mt-8 sm:mt-12 lg:mt-16 gsap-hero-widget">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
};

export default Hero;
