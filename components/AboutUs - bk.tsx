import React from 'react';
import { teamMembers } from '../constants';
import CTA from './CTA';

const TeamMemberCard: React.FC<typeof teamMembers[0]> = ({ name, role, avatar }) => (
    <div className="text-center group">
        <div className="relative inline-block">
            <img 
                src={avatar} 
                alt={`Portrait of ${name}`} 
                className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-brand-orange ring-opacity-0 transition-all duration-300 group-hover:ring-opacity-50"></div>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-brand-dark font-display">{name}</h3>
        <p className="text-lg text-gray-600">{role}</p>
    </div>
);

// Helper component for mission points to keep the main component clean
const MissionPoint: React.FC<{ number: number; text: string }> = ({ number, text }) => (
    <li className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-dark text-white rounded-full font-bold text-lg">
            {number}
        </div>
        <p className="text-lg text-gray-700 mt-1">{text}</p>
    </li>
);

const whyChooseFindeetFeatures = [
  {
    number: 1,
    title: 'Trusted Vendors',
    description: 'Every vendor on Findeet is verified, so you can shop and book services with confidence without stress in the city of Ilorin.'
  },
  {
    number: 2,
    title: 'Local Connections',
    description: 'Findeet is built for Ilorin, making it easier to support local businesses and discover services near you.'
  },
  {
    number: 3,
    title: 'Growth for All',
    description: 'Whether you’re buying or selling, Findeet gives you the tools to save time, reach more people, and grow.'
  }
];


const AboutUs: React.FC = () => {
    return (
        <>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-brand-gray/50 py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight font-display leading-tight">
                                About Findeet
                            </h1>
                            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                                Findeet is Ilorin's trusted online marketplace, connecting people with businesses and services they can rely on. We make buying and selling simple, convenient, and secure. Our goal is to bring the community closer through one seamless platform.
                            </p>
                             <div className="mt-10">
                                <a href="/signup" className="inline-block bg-brand-orange text-white px-10 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg font-display text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
                                    Join Our Community
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark font-display">Our Story</h2>
                            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                                The daily frustration of navigating the city of Ilorin highlighted the need for a simple, trusted platform. That challenge inspired the creation of Findeet, designed to connect people with products and services in one place. What began as a personal struggle has grown into a solution to make everyday living more seamless for others.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-20 bg-brand-gray">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <img 
                                    src="https://neka.ng/findeet/about-mission.jpg" 
                                    alt="A happy shop owner handing a shopping bag to a customer" 
                                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark font-display mb-6">Our Mission:</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Findeet is Ilorin's trusted online marketplace that simplifies buying and selling by connecting people with trusted vendors and services in Ilorin.
                                </p>
                                <ul className="space-y-6">
                                    <MissionPoint number={1} text="To simplify how Ilorin shops, sells, and connects." />
                                    <MissionPoint number={2} text="To build trust between buyers and vendors through one seamless platform." />
                                    <MissionPoint number={3} text="To make everyday transactions faster, safer, and more convenient." />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Vision Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="order-last md:order-first">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark font-display mb-6">Our Vision:</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Findeet is Ilorin's trusted online marketplace that simplifies buying and selling by connecting people with trusted vendors and services in Ilorin.
                                </p>
                                <ul className="space-y-6">
                                    <MissionPoint number={1} text="To be Ilorin's leading online marketplace for goods and services." />
                                    <MissionPoint number={2} text="To redefine local commerce with trust and innovation." />
                                    <MissionPoint number={3} text="To redefine local commerce with trust and innovation." />
                                </ul>
                            </div>
                             <div className="order-first md:order-last">
                                <img 
                                    src="https://neka.ng/findeet/about-vision.jpg" 
                                    alt="A 'Market' sign on a brick building, representing local commerce." 
                                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Goals Section */}
                <section className="py-20 bg-brand-gray">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                             <div>
                                <img 
                                    src="https://neka.ng/findeet/about-goals.jpg" 
                                    alt="A neon sign with 'BUY' and 'SELL' representing the core of the marketplace." 
                                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark font-display mb-6">Our Goals:</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Our goal is to bring the community in Ilorin closer through one seamless platform where all needs and services are provided.
                                </p>
                                <ul className="space-y-6">
                                    <MissionPoint number={1} text="To give vendors visibility and buyers reliable choices." />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* Why Choose Findeet Section */}
                <section className="py-20 bg-brand-dark text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-display">
                            Why Choose Findeet?
                        </h2>
                        <p className="mt-4 text-xl text-gray-300">
                            The smarter way to shop, sell, and connect in Ilorin.
                        </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                        {whyChooseFindeetFeatures.map((feature) => (
                            <div key={feature.number} className="text-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-white text-brand-dark rounded-full font-bold text-xl mx-auto mb-6">
                                {feature.number}
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-4">{feature.title}</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
                
                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark font-display">
                                Meet The Team
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                                The passionate minds behind Findeet, dedicated to bringing our vision to life.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                           {teamMembers.map(member => (
                               <TeamMemberCard key={member.name} {...member} />
                           ))}
                        </div>
                    </div>
                </section>
            </div>
            <CTA />
        </>
    );
};

export default AboutUs;