
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-cover bg-center rounded-2xl p-10 md:p-16" style={{ backgroundImage: "url('https://picsum.photos/1200/400?random=2')" }}>
          <div className="bg-black/50 rounded-xl p-8 backdrop-blur-sm inline-block">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-display">Post What You Need, We'll Find It</h2>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">Need something urgently or hard to find? Post your request and let our network of vendors and service providers help you out.</p>
            <a href="#" className="mt-8 inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
              Post a Request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;