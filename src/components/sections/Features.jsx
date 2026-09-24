import React from 'react';
import { Car, UserCheck, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Choose the Car',
      desc: 'Pick what suits your comfort and group size.',
      icon: <Car size={40} className="text-white" />
    },
    {
      title: 'Choose the Driver',
      desc: 'Select based on ratings and reviews.',
      icon: <UserCheck size={40} className="text-white" />
    },
    {
      title: 'Choose the Fare',
      desc: 'Select the bid that fits your budget best.',
      icon: <CreditCard size={40} className="text-white" />
    }
  ];

  return (
    <section className="py-24 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Freedom in Every Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#1a1a1a] border border-[#333333] hover:border-[#0e52ff] transition-colors">
              <div className="w-20 h-20 bg-[#212121] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
