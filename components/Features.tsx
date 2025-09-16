
import React from 'react';
import { features } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark font-display">Why Choose Findeet?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">We're simplifying city life with a platform built for you.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center p-6">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-brand-orange text-white mb-5">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark font-display">{feature.name}</h3>
              <p className="mt-2 text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;