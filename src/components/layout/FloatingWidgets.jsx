import React, { useState, useEffect } from 'react';

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-widgets-wrapper pointer-events-none">
      {/* Scroll-to-Top Floating Button (Directly above Chat Button) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to Top"
        className={`scroll-to-top fixed right-4 sm:right-6 bottom-[82px] sm:bottom-[92px] z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0e52ff] hover:bg-[#0038c4] active:scale-95 text-white flex items-center justify-center shadow-lg transition-all duration-300 pointer-events-auto cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
      >
        <svg
          viewBox="0 0 448 512"
          className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-200"
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>

      {/* Live Chat Floating Button (Bottom Right Corner) */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label={isChatOpen ? 'Close Chat' : 'Open Live Chat'}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0e52ff] hover:bg-[#0038c4] active:scale-95 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 transition-all duration-300 cursor-pointer relative group"
        >
          {/* Subtle Ping Wave on load */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white ring-2 ring-green-400/40" />

          {isChatOpen ? (
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
              <circle cx="8" cy="10" r="1.5" />
              <circle cx="12" cy="10" r="1.5" />
              <circle cx="16" cy="10" r="1.5" />
            </svg>
          )}
        </button>

        {/* Interactive Chat Popup Window */}
        {isChatOpen && (
          <div className="absolute right-0 bottom-16 sm:bottom-18 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-[#0e52ff] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    G
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-base leading-tight">
                      Garibook Support
                    </h4>
                    <span className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Online • Typically replies in 2m
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Body & Quick Connect Options */}
            <div className="p-4 bg-gray-50/50 space-y-3">
              <p className="text-xs text-gray-500 font-medium text-center">
                Need immediate help with car rental or ridesharing?
              </p>

              {/* WhatsApp Quick Action */}
              <a
                href="https://wa.me/8809678112233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.073.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 leading-tight">
                      Chat on WhatsApp
                    </h5>
                    <span className="text-xs text-gray-500 font-medium">+88 09 678 11 22 33</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 group-hover:translate-x-0.5 transition-transform">
                  Chat &rarr;
                </span>
              </a>

              {/* Call Hotline Action */}
              <a
                href="tel:09678112233"
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-[#0e52ff] hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0e52ff] flex items-center justify-center font-bold">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 leading-tight">
                      Call 24/7 Hotline
                    </h5>
                    <span className="text-xs text-gray-500 font-medium">Instant agent support</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#0e52ff] group-hover:translate-x-0.5 transition-transform">
                  Call &rarr;
                </span>
              </a>
            </div>

            {/* Footer note */}
            <div className="p-3 bg-white border-t border-gray-100 text-center">
              <span className="text-[11px] text-gray-400 font-medium">
                Garibook Customer Care • 24/7 Support
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingWidgets;
