import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from './IconComponents';

const UserSignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
  });
  
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const hasErrors = Object.values(errors).some(error => error !== '');
    const hasEmptyFields = Object.values(formData).some(value => value === '');
    setIsFormValid(!hasErrors && !hasEmptyFields);
  }, [errors, formData]);

  const validateField = (name: keyof typeof formData, value: string): string => {
    let error = '';
    switch (name) {
      case 'firstName':
        if (!value) error = 'First name is required.';
        else if (value.length < 2) error = 'First name must be at least 2 characters.';
        break;
      case 'lastName':
        if (!value) error = 'Last name is required.';
        else if (value.length < 2) error = 'Last name must be at least 2 characters.';
        break;
      case 'username':
        if (!value) error = 'Username is required.';
        else if (value.length < 3) error = 'Username must be at least 3 characters.';
        else if (!/^[a-zA-Z0-9_]+$/.test(value)) error = 'Username can only contain letters, numbers, and underscores.';
        break;
      case 'email':
        if (!value) error = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email address is invalid.';
        break;
      case 'password':
        if (!value) error = 'Password is required.';
        else if (value.length < 8) error = 'Password must be at least 8 characters long.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target as { id: keyof typeof formData; value: string };
    setFormData(prevState => ({ ...prevState, [id]: value }));
    const error = validateField(id, value);
    setErrors(prevErrors => ({ ...prevErrors, [id]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target as { id: keyof typeof formData; value: string };
    setTouched(prevTouched => ({ ...prevTouched, [id]: true }));
    const error = validateField(id, value);
    setErrors(prevErrors => ({ ...prevErrors, [id]: error }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
        console.log('Signing up with:', formData);
        // On successful sign-up, redirect to email verification page
        window.location.href = '/verify-email';
    } else {
        // Mark all fields as touched to show errors on attempt to submit
        setTouched({
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            password: true,
        });
        console.log('Form has validation errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* First Name */}
        <div>
            <label htmlFor="firstName" className="block text-gray-800 font-semibold mb-1 text-sm">First name:</label>
            <div className="relative">
            <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your first name" className={`w-full px-4 py-3 pr-10 bg-white text-brand-dark border rounded-lg transition-colors ${touched.firstName && errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-brand-orange focus:border-brand-orange'}`} aria-invalid={!!errors.firstName} aria-describedby="firstName-error" />
            {touched.firstName && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {errors.firstName ? <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> : <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                </div>
            )}
            </div>
            {touched.firstName && errors.firstName && <p id="firstName-error" className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
            <label htmlFor="lastName" className="block text-gray-800 font-semibold mb-1 text-sm">Last name:</label>
            <div className="relative">
            <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your last name" className={`w-full px-4 py-3 pr-10 bg-white text-brand-dark border rounded-lg transition-colors ${touched.lastName && errors.lastName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-brand-orange focus:border-brand-orange'}`} aria-invalid={!!errors.lastName} aria-describedby="lastName-error" />
            {touched.lastName && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {errors.lastName ? <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> : <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                </div>
            )}
            </div>
            {touched.lastName && errors.lastName && <p id="lastName-error" className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
        </div>

        {/* Username */}
        <div>
            <label htmlFor="username" className="block text-gray-800 font-semibold mb-1 text-sm">Username:</label>
            <div className="relative">
            <input type="text" id="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} placeholder="Enter username" className={`w-full px-4 py-3 pr-10 bg-white text-brand-dark border rounded-lg transition-colors ${touched.username && errors.username ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-brand-orange focus:border-brand-orange'}`} aria-invalid={!!errors.username} aria-describedby="username-error" />
                {touched.username && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {errors.username ? <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> : <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                </div>
            )}
            </div>
            {touched.username && errors.username && <p id="username-error" className="text-red-600 text-sm mt-1">{errors.username}</p>}
        </div>

        {/* Email */}
        <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-1 text-sm">Email:</label>
            <div className="relative">
            <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your email address" className={`w-full px-4 py-3 pr-10 bg-white text-brand-dark border rounded-lg transition-colors ${touched.email && errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-brand-orange focus:border-brand-orange'}`} aria-invalid={!!errors.email} aria-describedby="email-error" />
                {touched.email && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {errors.email ? <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> : <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                </div>
            )}
            </div>
            {touched.email && errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
            <label htmlFor="password" className="block text-gray-800 font-semibold mb-1 text-sm">Password (min of 8 characters):</label>
            <div className="relative">
            <input type="password" id="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your password" className={`w-full px-4 py-3 pr-10 bg-white text-brand-dark border rounded-lg transition-colors ${touched.password && errors.password ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-brand-orange focus:border-brand-orange'}`} aria-invalid={!!errors.password} aria-describedby="password-error" />
            {touched.password && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {errors.password ? <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> : <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                </div>
            )}
            </div>
            {touched.password && errors.password && <p id="password-error" className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>
        
        <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:bg-orange-300 disabled:cursor-not-allowed"
        >
            Create an account
        </button>
    </form>
  );
};

export default UserSignUpForm;
