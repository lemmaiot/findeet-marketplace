import React from 'react';
import { categories } from '../constants';

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => {
  return (
    // Card has a fixed width and margin, and won't shrink
    <a href="#" className="group block text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange w-64 flex-shrink-0 mx-4">
      {/* Icon container is larger */}
      <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${category.color} ${category.textColor} group-hover:scale-110`}>
        {/* Icon is larger and animates on hover */}
        <category.icon className="w-12 h-12 transition-transform duration-300 group-hover:rotate-[10deg]" />
      </div>
      <h3 className="mt-4 font-bold text-xl text-brand-dark font-display">{category.name}</h3>
      <p className="mt-1 text-base text-gray-700">{category.description}</p>
    </a>
  );
};

const Categories: React.FC = () => {
  // Duplicate categories for the infinite loop effect
  const extendedCategories = [...categories, ...categories];
  
  // Each card is w-64 (256px) + mx-4 (32px) = 288px wide.
  const cardWidth = 288;
  const scrollDistance = cardWidth * categories.length;
  // Adjust duration for a pleasant speed (6 seconds per card)
  const animationDuration = categories.length * 6; 

  const scrollStyles = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${scrollDistance}px); }
    }
    .scroller {
      animation: scroll ${animationDuration}s linear infinite;
    }
    .scroller:hover {
      animation-play-state: paused;
    }
    /* Adds a faded edge effect to the scrolling container for a seamless look */
    .mask-edges {
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
  `;

  return (
    <section className="py-20 bg-white">
      <style>{scrollStyles}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark font-display">Everything You Need, All in One Place</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">From daily essentials to professional services, find it all on Findeet.</p>
        </div>
      </div>
      
      {/* The overflow-hidden container with a mask for faded edges */}
      <div className="relative w-full max-w-full overflow-hidden mask-edges">
        <div className="flex scroller">
          {extendedCategories.map((category, index) => (
            <CategoryCard key={`${category.name}-${index}`} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
