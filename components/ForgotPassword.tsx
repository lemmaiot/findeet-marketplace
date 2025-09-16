import React, { useState } from 'react';
import { MailIcon } from './IconComponents';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Password reset requested for:', email);
      // Here you would typically call an API to send the reset link
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        {submitted ? (
            <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-5 mx-auto">
                    <MailIcon className="w-12 h-12 text-brand-green" />
                </div>
                 <h1 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">
                    Check your email
                </h1>
                <p className="mt-4 text-gray-600">
                    We've sent a password reset link to <strong>{email}</strong> if an account exists with that address.
                </p>
                 <a
                    href="/login"
                    className="w-full inline-block text-center mt-8 bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
                >
                    Back to Sign in
                </a>
            </div>
        ) : (
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">
                    Forgot password?
                </h1>
                <p className="mt-4 text-gray-600">
                    Kindly enter your email address. We will send you an email with instructions on how to reset your password.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 text-left">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
                    >
                        Request reset link
                    </button>
                </form>

                <a href="/login" className="inline-block mt-6 font-semibold text-brand-orange hover:underline">
                    Back to Sign in
                </a>
            </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;