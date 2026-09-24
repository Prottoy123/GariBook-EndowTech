import React from 'react';
import appWithLogo from '../../assets/garibook/app/app_with_logo.png';

const DownloadApp = () => {
  return (
    <section className="download-app-wrapper section-padding-ptb-70 bg-white py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner - Static with no scroll sliding animations */}
        <div className="section-content relative bg-[#0e52ff] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-18 min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] flex items-center">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl lg:max-w-[600px] flex flex-col justify-center items-start">
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] text-white leading-[1.16] tracking-tight">
              Download <br className="hidden sm:inline" /> Garibook Mobile App
            </h2>

            <p className="text-white/90 font-medium text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 max-w-xl leading-relaxed">
              Download our Customer, Smart Driver and Enterprise App
            </p>

            {/* Download App Golden Button */}
            <a
              href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-warning-btn no-commission-download-button mt-7 sm:mt-8 inline-flex items-center justify-between gap-4 bg-[#efc30c] hover:bg-[#deb300] active:scale-[0.98] text-[#121212] font-bold text-base sm:text-lg px-8 py-4 sm:py-4.5 rounded-xl shadow-md transition-all duration-300 w-full sm:w-[270px] group cursor-pointer"
            >
              <span className="btn-label">Download App</span>
              <svg
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current group-hover:translate-x-1.5 transition-transform duration-300"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>

          {/* Desktop Right App Showcase Mockup (Anchored to bottom right - Static) */}
          <div className="hidden lg:block absolute bottom-0 right-6 lg:right-12 xl:right-16 w-[400px] lg:w-[460px] xl:w-[500px] pointer-events-none">
            <img
              src={appWithLogo}
              alt="Garibook Customer, Driver and Enterprise App"
              className="w-full h-auto max-h-[380px] lg:max-h-[410px] xl:max-h-[430px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Mobile / Tablet Bottom Mockup */}
          <div className="lg:hidden mt-8 sm:mt-10 flex justify-center w-full">
            <img
              src={appWithLogo}
              alt="Garibook Customer, Driver and Enterprise App"
              className="w-full max-w-[300px] sm:max-w-[360px] max-h-[250px] sm:max-h-[290px] object-contain object-bottom drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
