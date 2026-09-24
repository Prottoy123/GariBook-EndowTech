import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About Us / Links */}
          <div>
            <div className="text-2xl font-black text-primary mb-6 flex items-center gap-2">
              <div className="bg-primary text-white p-1 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5V12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              GARIBOOK
            </div>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garibook Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garibook Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campaign</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Intercity Car Rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hourly Rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ride Share</a></li>
            </ul>
          </div>

          {/* Column 3: Become Our Partner */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Become Our Partner</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Earn With Garibook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Driver Sign Up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Dashboard</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contacts</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>Level 3, House 12, Road 14, Block G, Niketan, Gulshan-1, Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>support@garibook.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <p>© 2026 Garibook.com. All rights reserved.</p>
          <p>Trade License: TRAD/DNCC/013806/2024</p>
          <div className="bg-white/10 px-4 py-2 rounded text-white text-xs border border-white/20">
             [ SSLCOMMERZ Placeholder ]
          </div>
          <p>A Product By <span className="text-white font-bold">NRB Solution Ltd.</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
