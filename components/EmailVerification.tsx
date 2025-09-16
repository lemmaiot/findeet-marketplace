import React, { useState, useEffect, useRef } from 'react';
import SuccessModal from './SuccessModal';

const EmailVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus the first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  // Resend OTP cooldown timer effect
  useEffect(() => {
    // FIX: Corrected the timer logic to avoid using Node.js specific types in a browser environment
    // and to ensure clearTimeout is always called correctly.
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [resendCooldown]);

  const handleResendOtp = () => {
    if (isResendDisabled) return;
    // Logic to resend OTP would go here
    console.log("Resending OTP...");
    setResendCooldown(60);
    setIsResendDisabled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      console.log('Verifying OTP:', otpCode);
      // Simulate successful verification
      setShowSuccessModal(true);
    } else {
      alert('Please enter the complete 6-digit OTP.');
    }
  };

  const handleProceed = () => {
    const fakeToken = `dummy_jwt_token_${Date.now()}`;
    localStorage.setItem('authToken', fakeToken);
    window.location.href = '/dashboard';
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-brand-gray font-sans">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">
            Email Verification
          </h1>
          <p className="mt-4 text-gray-600">
            Kindly enter OTP sent to the provided email address while creating account.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col items-start">
              <label className="text-gray-800 font-semibold mb-2">OTP:</label>
              <div className="flex justify-center gap-2 w-full" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    // FIX: The ref callback should not return a value. Adding braces to the arrow 
                    // function body prevents an implicit return of the assignment's result.
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-14 text-center text-2xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
                    required
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              Verify
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600">
            <span>Don't get the OTP ? </span>
            <button 
              onClick={handleResendOtp}
              disabled={isResendDisabled} 
              className="font-semibold text-brand-orange hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Resend OTP {isResendDisabled && `in ${resendCooldown}s`}
            </button>
          </div>
        </div>
      </div>
      <SuccessModal 
        isOpen={showSuccessModal} 
        onProceed={handleProceed}
      />
    </>
  );
};

export default EmailVerification;
