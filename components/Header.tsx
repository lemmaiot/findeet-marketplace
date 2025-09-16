
import React from 'react';
import { navLinks, categories } from '../constants';
import { SearchIcon, UserIcon, ChevronDownIcon } from './IconComponents';
import logo from './images/logo.png';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const currentPath = window.location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Findeet" className="h-8 w-auto" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navLinks.map((link) => {
              if (link.name === 'Categories') {
                return (
                  <div key={link.name} className="relative group">
                    <a
                      href={link.href}
                      className="flex items-center text-base font-medium transition-colors text-brand-dark hover:text-brand-orange"
                      onClick={(e) => e.preventDefault()} // Prevent navigation for dropdown trigger
                    >
                      {link.name}
                      <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
                    </a>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-[60] border border-gray-100">
                      {categories.map((category) => (
                        <a
                          key={category.name}
                          href="#" // Placeholder link for categories
                          className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-gray hover:text-brand-orange"
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center text-base font-medium transition-colors ${
                    currentPath === link.href
                      ? 'text-brand-orange'
                      : 'text-brand-dark hover:text-brand-orange'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Icons & Button */}
          <div className="flex items-center justify-end space-x-6">
            <button className="text-brand-dark hover:text-brand-orange transition-colors">
              <SearchIcon className="h-6 w-6" />
            </button>
            
            {isAuthenticated ? (
              <>
                <a href="/dashboard" className="text-brand-dark hover:text-brand-orange transition-colors">
                  <UserIcon className="h-6 w-6" />
                </a>
                <button onClick={onLogout} className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-orange rounded-lg hover:bg-opacity-90 transition-colors hidden sm:block">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="text-brand-dark hover:text-brand-orange transition-colors">
                  <UserIcon className="h-6 w-6" />
                </a>
                <a href="/signup" className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-orange rounded-lg hover:bg-opacity-90 transition-colors hidden sm:block">
                  Get started
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
