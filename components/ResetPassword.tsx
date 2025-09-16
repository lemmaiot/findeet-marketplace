import React, { useState, useEffect } from 'react';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (password.length > 0 && confirmPassword.length > 0) {
      if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        setIsFormValid(false);
      } else if (password !== confirmPassword) {
        setError('Passwords do not match.');
        setIsFormValid(false);
      } else {
        setError('');
        setIsFormValid(true);
      }
    } else {
        setError('');
        setIsFormValid(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Password successfully reset.');
      // Here you would typically call an API to update the password
      alert('Your password has been reset successfully!');
      window.location.href = '/login';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">
          Reset password
        </h1>
        <p className="mt-4 text-gray-600">
          Choose new password and continue to enjoy Premium services.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 text-left">
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-gray-800 font-semibold mb-2">New password</label>
            <input
              type="password"
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-800 font-semibold mb-2">Confirm new password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:bg-orange-300 disabled:cursor-not-allowed"
          >
            Reset password
          </button>
        </form>
        
        <a href="/login" className="inline-block mt-6 font-semibold text-brand-orange hover:underline">
            Back to Sign in
        </a>
      </div>
    </div>
  );
};

export default ResetPassword;