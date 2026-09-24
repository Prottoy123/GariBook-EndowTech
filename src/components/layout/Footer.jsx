import React from 'react';
import nrbLogo from '../../assets/garibook/footer/nrb_logo.svg';
import link3Logo from '../../assets/garibook/footer/link3_logo.png';
import garibookWhiteLogo from '../../assets/garibook/footer/garibook_white_logo.svg';
import sslGateways from '../../assets/garibook/footer/ssl_gateways.png';

const Footer = () => {
  return (
    <footer className="footer-wrapper bg-black text-white english-font-wrapper overflow-hidden relative pt-16 sm:pt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Navigation Grid */}
        <div className="footer-main-wrap pb-14 sm:pb-16 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Col 1: Garibook */}
            <div className="lg:col-span-2">
              <h6 className="footer-widget-title font-['Montserrat'] font-bold text-lg sm:text-xl text-white mb-5 lowercase">
                garibook
              </h6>
              <ul className="footer-widget-list space-y-3 p-0 m-0">
                <li>
                  <a
                    href="https://garibook.com/about-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/passenger-speak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Customer Reviews
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Career
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/newsrooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Newsroom
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://map.garibook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Garibook Map
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: Services */}
            <div className="lg:col-span-3">
              <h6 className="footer-widget-title font-['Montserrat'] font-bold text-lg sm:text-xl text-white mb-5">
                Services
              </h6>
              <ul className="footer-widget-list space-y-3 p-0 m-0">
                <li>
                  <a
                    href="https://garibook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Intercity Rental
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Airport Pick and Drop
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Hourly Rental
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/vehicle-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Vehicle Management System (VMS)
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Become Our Partner */}
            <div className="lg:col-span-4">
              <h6 className="footer-widget-title font-['Montserrat'] font-bold text-lg sm:text-xl text-white mb-5">
                Become Our Partner
              </h6>
              <ul className="footer-widget-list space-y-3 p-0 m-0">
                <li>
                  <a
                    href="https://garibook.com/earn-with-garibook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Become a Smart Driver
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Become a member of Garibook Club
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://garibook.com/business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#efc30c] text-sm sm:text-base transition-colors duration-300 relative inline-block group"
                  >
                    Garibook Business for Corporate Travel
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contacts */}
            <div className="lg:col-span-3">
              <h6 className="footer-widget-title font-['Montserrat'] font-bold text-lg sm:text-xl text-white mb-5">
                Contacts
              </h6>
              <ul className="footer-widget-list space-y-3 p-0 m-0 text-white/80 text-sm sm:text-base leading-relaxed">
                <li>
                  <a
                    href="mailto:support@garibook.com"
                    className="hover:text-[#efc30c] transition-colors duration-300 relative inline-block group"
                  >
                    support@garibook.com
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li className="text-white/75">
                  Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212
                </li>
                <li>
                  <a
                    href="tel:09678112233"
                    className="hover:text-[#efc30c] transition-colors duration-300 font-semibold relative inline-block group"
                  >
                    +88 09 678 11 22 33
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#efc30c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mid Content: Download App on Left & Partners on Right */}
        <div className="footer-v-mid-content py-12 sm:py-14 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
            {/* Left: Download App */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="footer-title-one font-['Montserrat'] font-bold text-2xl sm:text-3xl lg:text-[34px] text-white leading-tight">
                Download Our <br />
                Garibook Mobile App
              </h2>

              <a
                href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-primary-btn mt-6 inline-flex items-center justify-between gap-4 bg-[#0e52ff] hover:bg-[#0038c4] active:scale-[0.98] text-white font-bold text-base px-7 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span className="btn-label">Download App</span>
                <svg
                  viewBox="0 0 448 512"
                  className="w-4 h-4 fill-current group-hover:translate-x-1.5 transition-transform duration-300"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </a>
            </div>

            {/* Right: Partner Organizations (A Product By & Powered By) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                {/* A Product By */}
                <div className="company-card">
                  <h3 className="footer-title-one font-['Montserrat'] font-bold text-xl sm:text-2xl text-white mb-3">
                    A Product By
                  </h3>
                  <div className="flex items-center gap-4 mt-2 sm:mt-4">
                    <img
                      src={nrbLogo}
                      alt="NRB Solution Ltd."
                      className="w-[85px] sm:w-[95px] h-auto object-contain"
                    />
                    <div>
                      <h5 className="font-['Montserrat'] font-bold text-base sm:text-lg text-white">
                        NRB Solution Ltd.
                      </h5>
                      <a
                        href="https://nrb-solutions.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#efc30c] hover:text-[#ffd62e] font-bold text-sm sm:text-base inline-flex items-center gap-2 mt-1 group"
                      >
                        <span className="btn-label">Visit Website</span>
                        <svg
                          viewBox="0 0 448 512"
                          className="w-3.5 h-3.5 fill-current group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Powered By */}
                <div className="company-card">
                  <h3 className="footer-title-one font-['Montserrat'] font-bold text-xl sm:text-2xl text-white mb-3">
                    Powered By
                  </h3>
                  <div className="flex items-center gap-4 mt-2 sm:mt-4">
                    <img
                      src={link3Logo}
                      alt="Link 3 Technologies"
                      className="w-[65px] sm:w-[70px] h-auto object-contain"
                    />
                    <div>
                      <h5 className="font-['Montserrat'] font-bold text-base sm:text-lg text-white">
                        Link 3 Technologies
                      </h5>
                      <a
                        href="https://link3.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#efc30c] hover:text-[#ffd62e] font-bold text-sm sm:text-base inline-flex items-center gap-2 mt-1 group"
                      >
                        <span className="btn-label">Visit Website</span>
                        <svg
                          viewBox="0 0 448 512"
                          className="w-3.5 h-3.5 fill-current group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo, Terms, License, Copyright */}
        <div className="footer-v-bottom-content py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            {/* Left: Brand Logo & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <a href="/" className="inline-block">
                <img
                  src={garibookWhiteLogo}
                  alt="Garibook"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </a>
              <div className="flex items-center gap-5 sm:gap-6 text-sm text-white/70">
                <a
                  href="https://garibook.com/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#efc30c] transition-colors duration-300"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  href="https://garibook.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#efc30c] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Right: Trade License & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/60">
              <span>
                Trade license number: <br className="hidden sm:inline" />
                <strong className="text-white/80 font-medium">TRAD/DNCC/013806/2024</strong>
              </span>
              <p className="m-0 text-white/80 font-medium">
                &copy; {new Date().getFullYear()} Garibook.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SSL Commerz & Payment Methods Full Width Banner */}
      <div className="w-full bg-[#111111] py-4 border-t border-white/5">
        <div className="scroll-container max-w-[1440px] mx-auto px-4 overflow-x-auto overflow-y-hidden">
          <img
            src={sslGateways}
            alt="SSL Commerz Payment Methods"
            className="w-full min-w-[900px] h-auto object-contain select-none"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
