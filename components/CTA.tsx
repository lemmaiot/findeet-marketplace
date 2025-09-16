import React from 'react';
import { AppleIcon, GooglePlayIcon } from './IconComponents';

const CTA: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-brand-dark rounded-2xl text-center p-10 md:p-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-display">Get Started with Findeet Today</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">Download the app and start exploring everything your city has to offer. Your next great find is just a tap away.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="font-display bg-gray-200 text-brand-dark px-5 py-3 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-300 transition-colors w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
              <AppleIcon className="w-8 h-8" />
              <span className="text-left">
                <span className="text-sm block leading-tight">Download on the</span>
                <span className="text-xl font-bold block leading-tight">App Store</span>
              </span>
            </a>
            <a href="#" className="font-display bg-gray-200 text-brand-dark px-5 py-3 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-300 transition-colors w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
              <GooglePlayIcon className="w-7 h-7" />
              <span className="text-left">
                <span className="text-sm block leading-tight">GET IT ON</span>
                <span className="text-xl font-bold block leading-tight">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;