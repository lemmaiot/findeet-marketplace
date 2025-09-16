import React, { useState, useEffect } from 'react';
import { GoogleIcon, StarIconFilled } from './IconComponents';
import UserSignUpForm from './UserSignUpForm';
import VendorSignUpForm from './VendorSignUpForm';

const SignUp: React.FC = () => {
  const [signupType, setSignupType] = useState<'user' | 'vendor'>('user');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      window.location.href = '/dashboard';
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type === 'vendor') {
      setSignupType('vendor');
    } else {
      setSignupType('user');
    }
  }, []);

  const handleTypeChange = (type: 'user' | 'vendor') => {
    setSignupType(type);
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Pane */}
      <div className="hidden md:flex w-2/5 bg-brand-orange text-white p-8 lg:p-12 flex-col justify-between">
        <div>
          <a href="/">
            <img src="https://neka.ng/findeet/footer_logo.png" alt="Findeet" className="h-8 w-auto" />
          </a>
          <div className="mt-16">
            <h1 className="text-4xl lg:text-5xl font-bold font-display leading-tight">Discover and connect</h1>
            <p className="mt-4 text-lg text-white/90">
              Looking for quality goods or reliable services? You'll find them here. Join a community where buyers and service seekers connect with trusted sellers and providers in the city of Ilorin.
            </p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
          <p className="text-base italic">"Shopping on Findeet has saved me so much time. I can get my groceries and essentials without stressing about the market, and every vendor I've used has been reliable."</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img src="https://i.pravatar.cc/150?img=68" alt="Fortune Emeka" className="w-12 h-12 rounded-full object-cover border-2 border-white/50" />
              <div className="ml-3">
                <p className="font-bold font-display">Fortune Emeka</p>
                <p className="text-sm text-white/80">User</p>
              </div>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIconFilled key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-6 md:py-8 md:px-12 bg-white overflow-y-auto">
        <div className="max-w-md w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display text-center">
            Create an account
          </h2>
          <p className="mt-2 text-gray-600 text-center">Sign up to get started!</p>
          
          <div className="mt-6 bg-gray-100 rounded-full p-1 flex w-full max-w-sm mx-auto border-2 border-gray-200">
            <button
              onClick={() => handleTypeChange('user')}
              className={`w-1/2 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 ${
                signupType === 'user'
                  ? 'bg-white shadow text-brand-orange'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              As a User
            </button>
            <button
              onClick={() => handleTypeChange('vendor')}
              className={`w-1/2 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 ${
                signupType === 'vendor'
                  ? 'bg-white shadow text-brand-orange'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              As a Vendor
            </button>
          </div>

          {signupType === 'user' ? <UserSignUpForm /> : <VendorSignUpForm />}
          
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
            <GoogleIcon className="w-6 h-6" />
            <span className="font-semibold">Sign up with Google</span>
          </button>
          
          <p className="text-center text-gray-600 mt-6">
            Already have an account? <a href="/login" className="text-brand-orange font-semibold hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;