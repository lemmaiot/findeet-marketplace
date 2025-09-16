import React from 'react';

const Card: React.FC<{
  title: string;
  description: string;
  link: string;
}> = ({ title, description, link }) => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-2xl p-8 lg:p-10 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-brand-orange/50">
      <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
        <h3 className="text-3xl font-bold text-brand-dark font-display mb-4">{title}</h3>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          {description}
        </p>
        <a 
          href={link} 
          className="inline-flex items-center bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-transform duration-300 group-hover:scale-105 shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
        >
          Proceed <span className="ml-2 font-sans transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
        </a>
      </div>
      <div className="absolute -right-8 sm:-right-4 md:-right-8 lg:-right-16 bottom-0 w-2/3 sm:w-1/2 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105">
        <img
          src="https://neka.ng/findeet/aisha.png"
          alt="A woman in a red headscarf smiling while using her smartphone"
          className="w-full h-auto object-contain"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};


const JoinUs: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-dark font-display leading-tight">
            Be a part of something bigger
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community that's changing how Ilorin shops and does business. Whether you're buying or selling, Findeet is the place to grow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card 
            title="As a user"
            description="Shop from trust-worthy vendors and producers from all around the city and beyond. No stress in Finding your quality goods and services."
            link="/signup?type=user"
          />
          <Card 
            title="As a vendor"
            description="Reach larger audience, grow your business and showcase your services to ready made clients. Business growth at your fingertip."
            link="/signup?type=vendor"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;