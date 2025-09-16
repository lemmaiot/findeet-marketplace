
import React from 'react';
import { TailorIcon, ShoppingCartIcon, StarIcon, GearIcon } from './IconComponents';
import jideImg from './images/jide.png';
import fatimaImg from './images/fatima.png';
import aishaImg from './images/aisha.png';
import emekaImg from './images/emeka.png';

const personaCards = [
  {
    name: 'Jide',
    description: 'Jide is a skilled plumber in Ilorin. What he needs is visibility, where people can easily find and book his services',
    altText: 'Jide, a skilled plumber in overalls, holds a pipe wrench and smiles.',
    imageUrl: jideImg,
    Icon: GearIcon,
    colorClass: 'bg-brand-yellow',
    desktopClasses: "absolute top-8 left-[-40px] w-[300px] h-[400px] transform rotate-6",
    mobileClasses: "transform rotate-2",
  },
  {
    name: 'Fatima',
    description: 'This is Fatima, she runs a small fashion boutique. She dreams of connecting with more customers.',
    altText: 'Fatima, a smiling fashion designer, works on a sewing machine in her boutique.',
    imageUrl: fatimaImg,
    Icon: TailorIcon,
    colorClass: 'bg-brand-purple',
    desktopClasses: "absolute top-16 left-[300px] w-[300px] h-[400px] transform rotate-3",
    mobileClasses: "transform -rotate-2",
  },
  {
    name: 'Aisha',
    description: 'Aisha is tired of long trips to the market. She wants a simple way to shop for items online, all from the comfort of her home.',
    altText: 'Aisha, wearing a hijab, smiles as she looks at her smartphone for online shopping.',
    imageUrl: aishaImg,
    Icon: ShoppingCartIcon,
    colorClass: 'bg-brand-green',
    desktopClasses: "absolute top-8 right-[-40px] w-[300px] h-[400px] transform -rotate-6",
    mobileClasses: "transform rotate-1",
  },
  {
    name: 'Emeka',
    description: 'Emeka just moved to Ilorin. Settling into a new apartment means finding reliable places for furniture and household items.',
    altText: 'Emeka, a young man, smiles confidently in a new city.',
    imageUrl: emekaImg,
    Icon: StarIcon,
    colorClass: 'bg-brand-teal',
    desktopClasses: "absolute -top-2 right-[300px] w-[300px] h-[400px] transform -rotate-2",
    mobileClasses: "transform -rotate-1",
  },
];


const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight font-display leading-tight">
            Find, Connect, <br/> Trade without stress
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
            Ilorin's trusted marketplace, where businesses meet people, and buyers find dependable goods and services. One platform. Unlimited opportunities.
          </p>
          <div className="mt-10">
            <a href="/signup" className="inline-block bg-brand-orange text-white px-10 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg font-display text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
              Get started
            </a>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
           {/* Mobile & Tablet view: Grid */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {personaCards.map((card) => (
              <div key={card.name} className={`${card.mobileClasses} group`}>
                <div className={`relative rounded-2xl shadow-lg overflow-hidden h-[340px] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl`}>
                  <img src={card.imageUrl} alt={card.altText} className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125" />
                  <div className={`absolute inset-0 ${card.colorClass} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10 p-5 h-full flex flex-col justify-end text-white">
                      <card.Icon className="absolute top-5 right-5 w-10 h-10 text-white/80" />
                      <p className="text-base font-medium">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view: Absolute positioning */}
          <div className="hidden lg:block relative h-[450px] max-w-7xl mx-auto">
             {/* Decorative Arrows */}
             <div className="absolute inset-0 z-0" aria-hidden="true">
                {/* Yellow Arrow: Jide to Aisha (Goods/Services) */}
                <svg width="100%" height="100%" viewBox="0 0 1200 450" className="absolute inset-0">
                    <defs>
                        <marker id="arrowhead-yellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFCB47"></path>
                        </marker>
                    </defs>
                    <path d="M 280 180 C 400 50, 800 50, 920 180" stroke="#FFCB47" strokeWidth="5" fill="none" markerEnd="url(#arrowhead-yellow)"/>
                </svg>
                {/* Green Arrow: Aisha to Jide (Money/Rewards) */}
                <svg width="100%" height="100%" viewBox="0 0 1200 450" className="absolute inset-0">
                    <defs>
                        <marker id="arrowhead-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6ABD7A"></path>
                        </marker>
                    </defs>
                    <path d="M 920 320 C 800 450, 400 450, 280 320" stroke="#6ABD7A" strokeWidth="5" fill="none" markerStart="url(#arrowhead-green)"/>
                </svg>
             </div>
            
             {personaCards.map(card => (
               <div key={card.name} className={`${card.desktopClasses} group transition-all duration-300 ease-in-out hover:scale-105 hover:z-10`}>
                <div className={`relative rounded-2xl shadow-2xl overflow-hidden h-full group-hover:shadow-2xl`}>
                    <img src={card.imageUrl} alt={card.altText} className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125" />
                    <div className={`absolute inset-0 ${card.colorClass} mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="relative z-10 p-5 h-full flex flex-col justify-end text-white">
                        <card.Icon className="absolute top-5 right-5 w-10 h-10 text-white/80" />
                        <p className="text-base font-semibold">{card.description}</p>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;