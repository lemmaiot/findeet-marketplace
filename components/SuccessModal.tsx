import React from 'react';
import { SuccessCheckIcon } from './IconComponents';

interface SuccessModalProps {
  isOpen: boolean;
  onProceed: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onProceed }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      aria-labelledby="success-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm m-4 p-8 text-center flex flex-col items-center">
        <img src="https://neka.ng/findeet/logo.png" alt="Findeet" className="h-8 w-auto mb-6" />

        <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-5">
            <SuccessCheckIcon className="w-12 h-12 text-brand-green" />
        </div>
        
        <h2 id="success-modal-title" className="text-2xl font-bold text-brand-dark font-display mb-2">
          Email verified
        </h2>
        <p className="text-gray-600 mb-8">
          Your email has successfully been verified
        </p>
        <button
          onClick={onProceed}
          className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-sm font-display text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
        >
          Proceed to dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;