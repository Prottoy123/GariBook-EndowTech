import React from 'react';

const PromoSections = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32">
        
        {/* Section 1: Business & VMS */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-black text-[#121212] mb-6 leading-tight">
              Modern Car Rentals for Business
            </h2>
            <p className="text-xl text-gray-500 mb-8 font-medium">
              Elevate your corporate travel with Garibook Business. Experience streamlined VMS (Vehicle Management System) designed for efficiency and comfort.
            </p>
            <button className="bg-[#0e52ff] hover:bg-[#0038c4] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Learn More About VMS
            </button>
          </div>
          <div className="flex-1 w-full flex justify-end">
            <div className="w-full max-w-lg aspect-square bg-[#f5f6f8] rounded-[2rem] border-4 border-gray-100 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <span className="text-gray-400 font-bold text-xl">Image / Graphic Placeholder</span>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#fdd300] rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Section 2: Garibook Club */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 w-full flex justify-start">
            <div className="w-full max-w-lg aspect-square bg-[#f5f6f8] rounded-[2rem] border-4 border-gray-100 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <span className="text-gray-400 font-bold text-xl">Image / Graphic Placeholder</span>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0e52ff] rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-black text-[#121212] mb-6 leading-tight">
              Turn Your Car into Earnings with Garibook Club
            </h2>
            <p className="text-xl text-gray-500 mb-8 font-medium">
              Join the elite club of partners. Register your vehicle, connect with premium clients, and maximize your revenue with 0% hassle.
            </p>
            <button className="bg-[#121212] hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Join Garibook Club
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoSections;
