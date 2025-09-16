import React, { useState, useRef, useEffect, useCallback } from 'react';
import { testimonials } from '../constants';
import { StarIconFilled, ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

// Sub-component for star rating
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center mb-6">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIconFilled
          key={i}
          className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};


const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleDotClick = (index: number) => {
        setActiveIndex(index); // Instantly update the active dot for better UX
        const item = itemRefs.current[index];
        if (item) {
            item.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };
    
    // Intersection Observer to update active index on scroll
    const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          setActiveIndex(index);
        }
      });
    }, []);

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, testimonials.length);
        const observer = new IntersectionObserver(handleIntersect, {
            root: scrollerRef.current,
            threshold: 0.6, // Fire when 60% of the item is visible
        });

        const currentItemRefs = itemRefs.current;
        currentItemRefs.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            currentItemRefs.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, [handleIntersect]);

    const scrollPrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        if (newIndex !== activeIndex) {
            handleDotClick(newIndex);
        }
    };

    const scrollNext = () => {
        const newIndex = Math.min(activeIndex + 1, testimonials.length - 1);
        if (newIndex !== activeIndex) {
            handleDotClick(newIndex);
        }
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Faint Background Logo */}
            <div 
              className="absolute inset-0 flex items-center justify-center opacity-5 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <img src="https://neka.ng/findeet/logo.png" alt="" className="w-1/2 md:w-1/3 lg:w-1/4 max-w-lg filter grayscale" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark font-display">
                        What our users are saying
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        The feedback is clear, Findeet makes shopping seamless and helps vendors reach more people, transforming the way Ilorin connects.
                    </p>
                </div>

                <div className="relative">
                    <div 
                        ref={scrollerRef} 
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style>{`
                            .testimonial-scroller::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {testimonials.map((testimonial, index) => (
                            // FIX: The ref callback should not return a value. Adding braces to the arrow 
                            // function body prevents an implicit return of the assignment's result.
                            <div
                                key={index}
                                ref={el => { itemRefs.current[index] = el; }}
                                data-index={index}
                                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center px-4"
                            >
                                <div className="text-center p-8 h-full">
                                    <StarRating rating={testimonial.rating} />
                                    <p className="text-lg text-gray-800 leading-relaxed mb-8 min-h-[140px]">
                                        {testimonial.quote}
                                    </p>
                                    <div className="inline-flex items-center justify-center">
                                        <img 
                                            className="w-16 h-16 rounded-full object-cover" 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name} 
                                        />
                                        <div className="ml-4 text-left">
                                            <p className="font-bold text-brand-dark font-display text-xl">{testimonial.name}</p>
                                            <p className="text-base text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - visible on md screens and up */}
                    <button
                        onClick={scrollPrev}
                        disabled={activeIndex === 0}
                        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 z-20 w-12 h-12 items-center justify-center bg-white/80 rounded-full shadow-md border border-gray-200 hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={activeIndex === testimonials.length - 1}
                        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20 w-12 h-12 items-center justify-center bg-white/80 rounded-full shadow-md border border-gray-200 hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Next testimonial"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>


                {/* Pagination Dots */}
                <div className="flex justify-center mt-12 space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange ${
                                activeIndex === index ? 'bg-brand-orange scale-125' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                            aria-current={activeIndex === index ? 'true' : 'false'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;