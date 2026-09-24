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
    window.addEventListener('scroll', handleScroll);
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
    { name: 'About Us', href: '#about-us' },
    { name: 'Earn With Garibook', href: '#earn-with-garibook' },
    { name: 'Garibook Business', href: '#business' },
    { name: 'Garibook Club', href: '#club' },
    { name: 'Campaign', href: '#campaign' },
    { name: 'Blogs', href: '#blogs' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="inline-block focus:outline-none" aria-label="Garibook Home">
                <img
                  src={garibookLogo}
                  alt="Garibook"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-semibold text-[#121212] hover:text-[#0e52ff] px-3 py-2 rounded-md transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Selector (Desktop) */}
              <button
                type="button"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 bg-[#0e52ff] hover:bg-[#0038c4] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                title="Change language"
              >
                <Languages className="w-4 h-4" />
                <span>English</span>
              </button>

              {/* Login Button (Always Visible) */}
              <a
                href="#login"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 bg-[#0e52ff] hover:bg-[#0038c4] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors tracking-wide"
              >
                login
              </a>

              {/* Mobile / Tablet Menu Button (Hamburger) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-[#0e52ff] rounded-lg transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-[#0e52ff] text-white flex flex-col justify-between overflow-hidden animate-in fade-in duration-200"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between p-6 sm:p-8 relative z-10">
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/40 bg-white/10 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span>English</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Links Center */}
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-7 px-6 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl sm:text-2xl font-bold tracking-normal hover:text-yellow-300 transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Area with Decorative Logo Vector */}
          <div className="p-6 sm:p-8 flex justify-between items-end relative">
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
