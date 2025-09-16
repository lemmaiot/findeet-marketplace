import React, { useState, useEffect } from 'react';
import { GoogleIcon, StarIconFilled } from './IconComponents';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // If user is already authenticated, redirect to dashboard
      window.location.href = '/dashboard';
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Logging in with:', { email, password });
    const fakeToken = `dummy_jwt_token_${Date.now()}`;
    localStorage.setItem('authToken', fakeToken);
    window.location.href = '/dashboard';
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
      <div className="w-full md:w-3/5 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">
            Welcome <span role="img" aria-label="waving hand">👋</span>
          </h2>
          <p className="mt-3 text-gray-600">Sign in to your account using</p>
          
          <button className="w-full flex items-center justify-center gap-3 py-3 mt-6 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange">
            <GoogleIcon className="w-6 h-6" />
            <span className="font-semibold">Login with Google</span>
          </button>
          
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Username/ Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your username or email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-800 font-semibold mb-1">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange" />
                    <label htmlFor="remember" className="ml-2 text-gray-600">Remember for 30 days</label>
                </div>
                <a href="/forgot-password" className="font-semibold text-brand-orange hover:underline">Forgot password</a>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-8">
            Don't have an account? <a href="/signup" className="text-brand-orange font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;