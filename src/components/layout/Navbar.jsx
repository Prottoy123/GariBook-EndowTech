import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import garibookLogo from '../../assets/garibook/gaibook-logo.svg';
import logoVector from '../../assets/garibook/logo-vector.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About Us', href: 'https://garibook.com/about-us' },
    { name: 'Earn With Garibook', href: 'https://garibook.com/earn-with-garibook' },
    { name: 'Garibook Business', href: 'https://garibook.com/business' },
    { name: 'Garibook Club', href: 'https://garibook.com/club' },
    { name: 'Campaign', href: 'https://garibook.com/campaign' },
    { name: 'Blogs', href: 'https://garibook.com/blogs' },
  ];

  return (
    <>
      <header
        className={`theme-navbar-wrapper w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 relative ${
          isScrolled
            ? 'shadow-md border-b border-gray-100 bg-white pt-2.5 pb-3 sm:pt-3 sm:pb-3.5'
            : 'border-b border-transparent pt-4 pb-4 sm:pt-5 sm:pb-5 lg:pt-6 lg:pb-6'
        }`}
      >
        {/* Floating Language Switcher directly above the Login Button with distinct vertical spacing */}
        <div className="hidden lg:block absolute top-3 sm:top-4 right-4 sm:right-6 md:right-8 lg:right-10 xl:right-14 z-20">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0e52ff] hover:bg-[#0038c4] active:scale-95 text-white text-xs xl:text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
            title="Change language"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>English</span>
          </button>
        </div>

        {/* Main Header Row: increased top clearance leaving generous space between English and login */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex items-center justify-between pt-7 sm:pt-8 lg:pt-10">
          {/* Brand Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="inline-block focus:outline-none" aria-label="Garibook Home">
              <img
                src={garibookLogo}
                alt="Garibook"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation block: Starts from the horizontal middle of the page and extends to the right */}
          <div className="hidden lg:flex items-center justify-end flex-grow ml-auto gap-5 xl:gap-8">
            <nav className="flex items-center gap-4 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-theme-link relative font-['Montserrat'] font-medium text-[15px] xl:text-[17px] text-[#121212] hover:text-[#0e52ff] tracking-tight py-1 transition-colors duration-200 group cursor-pointer whitespace-nowrap"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Curved 2.5px center-expanding blue underline pill on hover */}
                  <span className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-[#0e52ff] rounded-full transition-all duration-400 ease-out group-hover:w-full pointer-events-none" />
                </a>
              ))}
            </nav>

            {/* Login Button directly beneath the English button */}
            <a
              href="https://garibook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 xl:px-7 py-2 bg-[#0e52ff] hover:bg-[#0038c4] active:scale-95 text-white text-sm xl:text-[16px] font-semibold rounded-lg shadow-sm transition-all duration-200 lowercase tracking-tight cursor-pointer whitespace-nowrap"
            >
              login
            </a>
          </div>

          {/* Mobile & Tablet Header Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href="https://garibook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#0e52ff] hover:bg-[#0038c4] active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-all lowercase"
            >
              login
            </a>

            {/* Mobile / Tablet Menu Button (Hamburger) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-gray-800 hover:text-[#0e52ff] focus:outline-none focus:ring-2 focus:ring-[#0e52ff] rounded-lg transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-[#0e52ff] text-white flex flex-col justify-between overflow-hidden animate-in fade-in duration-300"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between p-5 sm:p-7 relative z-10 border-b border-white/10">
            {/* Logo in overlay */}
            <div className="flex items-center">
              <img
                src={garibookLogo}
                alt="Garibook"
                className="h-9 w-auto brightness-0 invert"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/40 bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>English</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>

          {/* Nav Links Center */}
          <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-6 px-6 py-8 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative font-['Montserrat'] text-xl sm:text-2xl font-medium tracking-normal text-white hover:text-yellow-300 transition-colors text-center py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Bottom Area with Decorative Logo Vector */}
          <div className="p-5 sm:p-7 flex justify-between items-end relative border-t border-white/10">
            <div className="text-xs text-white/70">
              © {new Date().getFullYear()} Garibook.com
            </div>
            <img
              src={logoVector}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 w-44 sm:w-60 pointer-events-none opacity-20"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
