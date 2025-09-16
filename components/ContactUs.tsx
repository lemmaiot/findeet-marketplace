import React, { useState } from 'react';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from './IconComponents';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would handle form submission here (e.g., send to an API)
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
      setErrors({ name: '', email: '', message: '' }); // Clear errors
    }
  };

  return (
    <div className="relative bg-white pt-32 pb-20 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-x-16 gap-y-12 items-center">

          {/* Left Column: Information */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-2xl font-bold text-brand-dark font-display tracking-wider uppercase">
              Information
            </h2>

            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center">
                <LocationMarkerIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider font-display">Our Address</h3>
                <p className="text-base text-gray-600 mt-1">
                  Plot 18B, Adebayo Balogun<br />
                  Street, Lekki Phase 1, Lekki,<br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center">
                <PhoneIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider font-display">Call Us</h3>
                <p className="text-base text-gray-600 mt-1">
                  +234 812 345 6789<br />
                  +234 812 345 6789
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center">
                <MailIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider font-display">Email Us</h3>
                <p className="text-base text-gray-600 mt-1">
                  Myemailforfindeet@gmail.com<br />
                  Myemailforfindeet@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 bg-white p-10 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-dark font-display tracking-wider uppercase">
              Get in Touch
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Please do not hesitate to contact us, we want to hear from you
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-brand-dark placeholder-gray-700 focus:ring-brand-orange focus:border-brand-orange transition-colors`}
                  placeholder="Enter your email"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-brand-dark placeholder-gray-700 focus:ring-brand-orange focus:border-brand-orange transition-colors`}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />
                {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md text-brand-dark placeholder-gray-700 focus:ring-brand-orange focus:border-brand-orange transition-colors`}
                  placeholder="Write your message"
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                />
                {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-brand-orange text-white py-3 px-8 rounded-lg font-semibold uppercase text-sm tracking-wider hover:bg-opacity-90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
                >
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Ring - Hidden on mobile, shown on large screens */}
      <div 
        className="hidden lg:block absolute -bottom-80 -left-80 w-[600px] h-[600px] rounded-full border-[60px] border-brand-orange"
        aria-hidden="true"
      ></div>

    </div>
  );
};

export default ContactUs;