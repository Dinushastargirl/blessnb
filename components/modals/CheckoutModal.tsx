
import React, { useState } from 'react';
import { X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PricingTier } from '../../types';

interface CheckoutModalProps {
  tier: PricingTier;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ tier, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-deepSea/40 backdrop-blur-sm" onClick={onClose} />
        <div className="relative w-full max-w-lg bg-cream p-12 rounded-[2.5rem] shadow-2xl text-center animate-slide-up">
          <CheckCircle2 size={64} className="text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-deepSea mb-4 italic">The Journey Starts Here</h2>
          <p className="text-gray-600 font-light mb-8">
            Thank you for choosing BlessndB. We've sent a detailed memory guide to your email. Our designers are ready to tell your story.
          </p>
          <button onClick={onClose} className="w-full bg-deepSea text-cream py-4 rounded-2xl font-bold shadow-lg">
            Return to Studio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-deepSea/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-cream p-10 rounded-[2.5rem] shadow-2xl flex flex-col animate-slide-up">
        <button onClick={onClose} className="absolute top-6 right-6 text-deepSea hover:text-gold">
          <X size={24} />
        </button>

        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Step {step} of 3</span>
          <h2 className="text-3xl font-serif text-deepSea mt-2">Setting Up: {tier.name}</h2>
        </div>

        <div className="flex-grow">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-gray-500 font-light italic">First, let's name the person we're celebrating.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-deepSea/50">Their Full Name</label>
                  <input className="w-full p-4 rounded-xl border border-gold/10 bg-white" placeholder="Julian Smith" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-deepSea/50">Birthday Date</label>
                  <input type="date" className="w-full p-4 rounded-xl border border-gold/10 bg-white" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-gray-500 font-light italic">Choose the aesthetic mood for their timeline.</p>
              <div className="grid grid-cols-3 gap-4">
                {['Classic Noir', 'Golden Sun', 'Ethereal'].map(mood => (
                  <button key={mood} className="p-4 border-2 border-gold/10 rounded-2xl hover:border-gold/50 transition-all text-sm font-serif text-deepSea">
                    {mood}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-gray-500 font-light italic">Confirm your selection and proceed to memory upload.</p>
              <div className="bg-white/50 p-6 rounded-2xl border border-gold/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-deepSea">{tier.name}</span>
                  <span className="font-bold text-gold">{tier.price}</span>
                </div>
                <ul className="text-xs text-gray-500 space-y-1 italic">
                  <li>• Hosting included for 1 year</li>
                  <li>• Mobile optimized design</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={nextStep}
          className="mt-10 bg-deepSea text-cream py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 shadow-xl"
        >
          {step === 3 ? 'Secure My Story' : 'Continue'}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
