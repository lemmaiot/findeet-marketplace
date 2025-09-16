import React, { useState, useEffect, useRef } from 'react';
import { navLinks, categories } from '../constants';
import { SearchIcon, UserIcon, ChevronDownIcon } from './IconComponents';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
  onSearch: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onLogout, onSearch }) => {
  const currentPath = window.location.pathname;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const debounceTimer = setTimeout(() => {
      const filteredSuggestions = categories
        .filter(category =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(category => category.name);
      setSuggestions(filteredSuggestions);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);
  
  useEffect(() => {
    // Click outside handler to close the search bar
    const handleClickOutside = (event: MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setIsSearchOpen(false);
            setSuggestions([]);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()){
      onSearch(searchQuery);
    }
    setSuggestions([]);
    setIsSearchOpen(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
    setIsSearchOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="https://neka.ng/findeet/logo.png" alt="Findeet" className="h-8 w-auto" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navLinks.map((link) => {
              if (link.name === 'Categories') {
                return (
                  <div key={link.name} className="relative group">
                    <a
                      href={link.href}
                      className="flex items-center text-base font-medium transition-colors text-brand-dark hover:text-brand-orange font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange rounded-md p-1"
                      onClick={(e) => e.preventDefault()} // Prevent navigation for dropdown trigger
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
                    </a>
                    {/* Added group-focus-within for keyboard accessibility */}
                    <div className="absolute hidden group-hover:block group-focus-within:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-[60] border border-gray-100">
                      {categories.map((category) => (
                        <a
                          key={category.name}
                          href="#" // Placeholder link for categories
                          className="block px-4 py-2 text-base text-brand-dark hover:bg-brand-gray hover:text-brand-orange focus:outline-none focus:bg-brand-gray focus:text-brand-orange"
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
                  className={`flex items-center text-base font-medium transition-colors font-display p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange ${
                    currentPath === link.href
                      ? 'text-brand-orange'
                      : 'text-brand-dark hover:text-brand-orange'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Icons & Button */}
          <div className="flex items-center justify-end space-x-6">
            {isSearchOpen ? (
              <div ref={searchContainerRef}>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 pl-4 pr-10 rounded-full border-2 bg-white border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 w-48"
                    autoFocus
                    autoComplete="off"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-orange">
                      <SearchIcon className="w-5 h-5" />
                  </button>
                  {suggestions.length > 0 && (
                    <ul className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <li key={index}>
                           <button
                              type="button"
                              className="w-full text-left px-4 py-2 text-brand-dark hover:bg-brand-gray transition-colors"
                              onMouseDown={(e) => e.preventDefault()} // Prevents input blur on click
                              onClick={() => handleSuggestionClick(suggestion)}
                           >
                              {suggestion}
                           </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </form>
              </div>
            ) : (
               <button onClick={() => setIsSearchOpen(true)} className="text-brand-dark hover:text-brand-orange transition-colors p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange" aria-label="Open search">
                <SearchIcon className="h-6 w-6" />
              </button>
            )}
            
            {isAuthenticated ? (
              <>
                <a href="/dashboard" className="text-brand-dark hover:text-brand-orange transition-colors p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange" aria-label="View your dashboard">
                  <UserIcon className="h-6 w-6" />
                </a>
                <button onClick={onLogout} className="px-6 py-2.5 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-opacity-90 transition-colors hidden sm:block font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="text-brand-dark hover:text-brand-orange transition-colors p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange" aria-label="Log in">
                  <UserIcon className="h-6 w-6" />
                </a>
                <a href="/signup" className="px-6 py-2.5 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-opacity-90 transition-colors hidden sm:block font-display focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
                  Get started
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;