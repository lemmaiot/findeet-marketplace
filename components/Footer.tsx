import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-3">
            <img src="https://neka.ng/findeet/footer_logo.png" alt="Findeet" className="h-8 w-auto" />
            <p className="mt-4 text-gray-400 text-base">
              Your City, Simplified. Findeet unites goods, services, and housing in one platform.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold tracking-wide font-display text-lg">Learn More</h3>
              <ul className="mt-4 space-y-2 text-base">
                <li><a href="/about" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Blogs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Our Team</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wide font-display text-lg">Account</h3>
              <ul className="mt-4 space-y-2 text-base">
                <li><a href="/dashboard" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">My Account</a></li>
                <li><a href="/login" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Login/Signup</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Carts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Wishlist</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wide font-display text-lg">Categories</h3>
              <ul className="mt-4 space-y-2 text-base">
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Restaurants</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Artisans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Hotels</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Gadgets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wide font-display text-lg">Quick Link</h3>
              <ul className="mt-4 space-y-2 text-base">
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">FAQ</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter Sign Up Section */}
        <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-[#3A3A3A] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-6">
                <h3 className="text-2xl font-bold text-white font-display text-center md:text-left shrink-0">
                  Newsletter Sign Up
                </h3>
                <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex items-center bg-white p-1 rounded-xl shadow-inner">
                    <input
                      type="email"
                      name="email"
                      id="newsletter-email"
                      placeholder="Enter your email here..."
                      className="w-full px-4 py-2 bg-transparent border-none text-brand-dark focus:outline-none focus:ring-0"
                      required
                      aria-label="Email for newsletter"
                    />
                    <button
                      type="submit"
                      className="bg-brand-orange text-white font-semibold px-5 py-2 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-orange flex-shrink-0"
                    >
                      Submit
                    </button>
                  </div>
                </form>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-base text-gray-500">
          <p>&copy; {new Date().getFullYear()} Findeet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;