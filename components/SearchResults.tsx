import React, { useState, useEffect } from 'react';
import { categories } from '../constants';

const SearchResults: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof categories>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('q') || '';
    setSearchTerm(query);

    // Simulate an API call to fetch search results
    setLoading(true);
    setTimeout(() => {
      if (query) {
        const filteredResults = categories.filter(category =>
          category.name.toLowerCase().includes(query.toLowerCase()) ||
          category.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
      } else {
        setResults([]);
      }
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-brand-gray min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-brand-dark mb-2 font-display">
            Search Results for "{searchTerm}"
          </h1>
          <p className="text-gray-600 mb-8 text-lg" aria-live="polite">
            {loading ? 'Searching...' : `Found ${results.length} matching categories.`}
          </p>
          
          {loading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((item) => (
                    <div key={item.name} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.color} ${item.textColor}`}>
                         <item.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-xl text-brand-dark font-display">{item.name}</h3>
                      <p className="text-base text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center bg-white p-12 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold text-brand-dark font-display">No Results Found</h3>
                    <p className="text-gray-700 mt-2 text-lg">
                        We couldn't find any categories matching your search. Try a different keyword.
                    </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;