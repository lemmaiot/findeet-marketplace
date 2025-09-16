import React, { useState } from 'react';
import { businessCategories } from '../constants';
import { ChevronDownIcon, QuestionMarkCircleIcon } from './IconComponents';

const VendorSignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    businessType: 'Individual',
    businessCategory: '',
    registrationNumber: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Vendor form submitted:', formData);
    // In a real application, this would likely go to the next step of registration
    // which might include user credentials, then proceed to verification.
    window.location.href = '/verify-email';
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="businessType" className="block text-gray-800 font-semibold mb-1 text-sm">Business Type:</label>
        <div className="relative">
          <select
            id="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-brand-dark border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
          >
            <option>Individual</option>
            <option>Company</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="businessCategory" className="block text-gray-800 font-semibold mb-1 text-sm">Business Category:</label>
        <div className="relative">
          <select
            id="businessCategory"
            value={formData.businessCategory}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white text-brand-dark border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
          >
            <option value="" disabled>Select your business category</option>
            {businessCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center space-x-2 mb-1">
            <label htmlFor="registrationNumber" className="block text-gray-800 font-semibold text-sm">Business Registration Number:</label>
            <div className="relative group">
                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400 cursor-help" />
                <div className="absolute bottom-full mb-2 w-64 bg-brand-dark text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-10">
                    Optional. If your business is registered, enter your CAC registration number here.
                    <svg className="absolute text-brand-dark h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                </div>
            </div>
        </div>
        <input
          type="text"
          id="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="Enter Your business registration number"
          className="w-full px-4 py-3 bg-white text-brand-dark border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
        />
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-1">
            <label htmlFor="address" className="block text-gray-800 font-semibold text-sm">Address:</label>
            <div className="relative group">
                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400 cursor-help" />
                <div className="absolute bottom-full mb-2 w-64 bg-brand-dark text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 left-1/2 z-10">
                    Provide the physical location of your business or the primary area you serve.
                    <svg className="absolute text-brand-dark h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                </div>
            </div>
        </div>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Enter your business address"
          className="w-full px-4 py-3 bg-white text-brand-dark border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
      >
        Continue
      </button>
    </form>
  );
};

export default VendorSignUpForm;