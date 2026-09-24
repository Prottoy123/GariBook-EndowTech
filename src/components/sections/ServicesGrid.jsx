import React from 'react';
import { Car, Star, Plane, Briefcase } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    { title: 'Intercity Car Rental', icon: <Car size={40} className="text-[#0e52ff]" /> },
    { title: 'Ride share', icon: <Star size={40} className="text-[#0e52ff]" /> },
    { title: 'Airport Rental', icon: <Plane size={40} className="text-[#0e52ff]" /> },
    { title: 'Hourly Rental', icon: <Briefcase size={40} className="text-[#0e52ff]" /> }
  ];

  return (
    <section className="py-24 bg-[#f1f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#121212] mb-4">Every Ride One Platform</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer border border-transparent hover:border-[#0e52ff]"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#121212]">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
