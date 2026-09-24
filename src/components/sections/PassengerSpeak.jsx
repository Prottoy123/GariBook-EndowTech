import React, { useState } from 'react';
import passenger1 from '../../assets/garibook/testimonials/passenger_1.jpg';
import passenger2 from '../../assets/garibook/testimonials/passenger_2.jpg';
import passenger3 from '../../assets/garibook/testimonials/passenger_3.jpg';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Atif Haider',
    occupation: 'Banker',
    videoId: 'JsBwaJ_VIcA',
    image: passenger1,
    delay: 200,
  },
  {
    id: 2,
    name: 'Mohammad Habibur Rahman',
    occupation: 'Banker',
    videoId: 'CsxeEof1T3M',
    image: passenger2,
    delay: 350,
  },
  {
    id: 3,
    name: 'Sadia Afrin',
    occupation: 'Service Holder',
    videoId: '8ma9XEGhi5s',
    image: passenger3,
    delay: 500,
  },
];

const PassengerSpeak = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(TESTIMONIALS_DATA.length - 1, prev + 1));
  };

  return (
    <section className="passenger-speak-wrapper bg-[#f1f6ff] py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Slider Navigation Arrows - Static, no scroll sliding */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="section-header max-w-3xl">
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#121212] leading-tight tracking-tight mb-4">
              Our Passengers Speak For Us
            </h2>
            <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed font-medium">
              Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.
            </p>
          </div>

          {/* Slider Prev / Next Controls with Authentic Arrow SVGs */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Testimonial"
              className="custom-slider-arrow w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-gray-200 bg-white hover:bg-[#121212] text-[#121212] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
            >
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === TESTIMONIALS_DATA.length - 1}
              aria-label="Next Testimonial"
              className="custom-slider-arrow w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-gray-200 bg-white hover:bg-[#121212] text-[#121212] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
            >
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3 Video Testimonial Cards - Static, no scroll movement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="passenger-box bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-500 ease-out cursor-pointer group"
              onClick={() => setActiveVideoId(item.videoId)}
            >
              {/* Video Thumbnail & Play Badge */}
              <div className="youtube-view-wrap youtube-thumb-wrapper relative overflow-hidden rounded-2xl h-[260px] sm:h-[285px] lg:h-[310px] w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="youtube-thumb-img w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

                {/* YouTube Play Icon */}
                <div className="youtube-play-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-[72px] sm:h-[72px] bg-red-600/90 group-hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-600/40 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Passenger Info Details */}
              <div className="p-content-box pt-5 pb-2 px-2 text-start">
                <h4 className="p-name font-['Montserrat'] font-bold text-xl sm:text-[22px] text-[#121212] mb-1">
                  {item.name}
                </h4>
                <p className="p-position text-sm sm:text-base font-semibold text-[#0e52ff]">
                  {item.occupation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Embedded YouTube Iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PassengerSpeak;
