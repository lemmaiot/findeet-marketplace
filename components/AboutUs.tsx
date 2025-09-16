
import React from 'react';
import { teamMembers } from '../constants';
import CTA from './CTA';
import {
    StorefrontIcon,
    UserGroupIcon,
    DollarCircleIcon,
    MoneyBagIcon
} from './IconComponents';
import jideImg from './images/jide.png';
import aishaImg from './images/aisha.png';
import aboutMissionImg from './images/about-mission.jpg';
import aboutVisionImg from './images/about-vision.jpg';
import aboutGoalsImg from './images/about-goals.jpg';

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


const AboutUs: React.FC = () => {

    const whyChooseFindeetData = [
      {
        number: 1,
        title: 'Trusted Vendors',
        description: 'Every vendor on Findeet is verified, so you can shop and book services with confidence without stress in the city of Ilorin.',
      },
      {
        number: 2,
        title: 'Local Connections',
        description: 'Findeet is built for Ilorin, making it easier to support local businesses and discover services near you.',
      },
      {
        number: 3,
        title: 'Growth for All',
        description: "Whether you're buying or selling, Findeet gives you the tools to save time, reach more people, and grow.",
      },
    ];
    
    const statsData = [
      { icon: StorefrontIcon, value: '1200+', label: 'Active Shoppers' },
      { icon: UserGroupIcon, value: '600+', label: 'Trusted Vendors' },
      { icon: DollarCircleIcon, value: '3500+', label: 'Successful Deals' },
      { icon: MoneyBagIcon, value: '90%', label: 'Happy Users' },
    ];

    return (
        <>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Decorative elements container */}
                        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                            <svg width="100%" height="100%" viewBox="0 0 1440 768" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 hidden lg:block">
                                <defs>
                                    {/* Arrowhead for yellow arrow pointing to Aisha */}
                                    <marker id="arrowhead-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFCB47" />
                                    </marker>
                                    {/* Arrowhead for green arrow pointing to Jide */}
                                    <marker id="arrowhead-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6ABD7A" />
                                    </marker>
                                    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                                        <feOffset dx="2" dy="4" result="offsetblur"/>
                                        <feComponentTransfer>
                                            <feFuncA type="linear" slope="0.5"/>
                                        </feComponentTransfer>
                                        <feMerge> 
                                            <feMergeNode/>
                                            <feMergeNode in="SourceGraphic"/> 
                                        </feMerge>
                                    </filter>
                                </defs>
                                
                                <image href={jideImg} x="1100" y="470" height="180" width="180" clipPath="circle(50%)" filter="url(#drop-shadow)" />
                                <image href={aishaImg} x="160" y="180" height="180" width="180" clipPath="circle(50%)" filter="url(#drop-shadow)" />
                                
                                {/* Yellow Arrow: Flow of goods/services FROM Jide (bottom-right) TO Aisha (top-left) */}
                                <path 
                                    d="M 1200 550 C 1400 200, 400 150, 350 270" 
                                    stroke="#FFCB47" 
                                    strokeWidth="5" 
                                    fill="none" 
                                    markerEnd="url(#arrowhead-yellow)"
                                />

                                {/* Green Arrow: Flow of money from Aisha (top-left) to Jide (bottom-right) */}
                                <path 
                                    d="M 250 350 C 50 700, 1000 700, 1150 600" 
                                    stroke="#6ABD7A" 
                                    strokeWidth="5" 
                                    fill="none" 
                                    markerEnd="url(#arrowhead-green)"
                                />
                            </svg>
                        </div>
                        
                        {/* Centered Text Content */}
                        <div className="relative max-w-2xl mx-auto text-center z-10">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight font-display leading-tight">
                                Connecting User to Products and Services
                            </h1>
                            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                                Findeet is Ilorin's trusted online marketplace, connecting people with businesses and services they can rely on. We make buying and selling simple, convenient, and secure. Our goal is to bring the community closer through one seamless platform.
                            </p>
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
                                    src={aboutMissionImg}
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
                            <div>
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
                             <div>
                                <img 
                                    src={aboutVisionImg}
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
                             <div className="order-last md:order-first">
                                <img 
                                    src={aboutGoalsImg}
                                    alt="A neon sign with 'BUY' and 'SELL' representing the core of the marketplace." 
                                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="order-first md:order-last">
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
                <section className="py-20 bg-brand-dark">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white font-display">
                            Why Choose Findeet?
                        </h2>
                        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                            The smarter way to shop, sell, and connect in Ilorin.
                        </p>
                        <div className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                            {whyChooseFindeetData.map((item) => (
                                <div key={item.number}>
                                    <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-white text-brand-dark rounded-full font-bold text-xl">
                                        {item.number}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
                                    <p className="mt-2 text-lg text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Our Impact in Numbers Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                            {statsData.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
                                        <div className="w-16 h-16 flex items-center justify-center bg-brand-dark rounded-full">
                                            <stat.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-4xl font-extrabold text-brand-dark font-display">{stat.value}</p>
                                    <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/*
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
                */}
            </div>
            <CTA />
        </>
    );
};

export default AboutUs;