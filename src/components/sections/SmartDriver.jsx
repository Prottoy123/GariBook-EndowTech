import React from 'react';
import noCommissionScreen from '../../assets/garibook/no_commission_app_screen.png';
import rightArrow from '../../assets/garibook/right-arrow.png';

const SmartDriver = () => {
  return (
    <section className="no-commission-wrapper section-padding-ptb-70 overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with AOS Fade-Up */}
        <div
          className="section-header max-w-4xl mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#121212] leading-tight tracking-tight">
            Be a Smart Driver
          </h2>
        </div>

        {/* Golden-Yellow Promo Container matching authentic Garibook styles */}
        <div
          className="section-content bg-[#efc30c] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[500px] sm:min-h-[560px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:pl-24 lg:pr-8 flex flex-col justify-center items-start">
              <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] text-[#0e52ff] leading-[1.12] tracking-tight">
                0% Commission <br />
                100% Freedom
              </h2>

              {/* Download Driver App Button */}
              <a
                href="https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="no-commission-download-button mt-7 sm:mt-9 inline-flex items-center justify-between gap-4 bg-[#0e52ff] hover:bg-[#0038c4] active:scale-[0.98] text-white font-semibold text-base sm:text-lg px-8 py-4 sm:py-4.5 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300 w-full sm:w-[330px] group cursor-pointer"
              >
                <span>Download Driver App</span>
                <img
                  src={rightArrow}
                  alt=""
                  className="w-5 h-5 brightness-0 invert group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Right App Screen Mockup Column */}
            <div className="lg:col-span-6 flex justify-center items-end pt-8 sm:pt-10 lg:pt-14 px-4 overflow-hidden">
              <div
                className="no-commission-image text-center w-full flex justify-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <img
                  src={noCommissionScreen}
                  alt="Garibook Smart Driver App Interface"
                  className="w-auto max-h-[480px] sm:max-h-[560px] lg:max-h-[640px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDriver;
