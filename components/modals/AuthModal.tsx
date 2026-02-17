
import React from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-deepSea/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-cream p-10 rounded-[2.5rem] shadow-2xl animate-slide-up">
        <button onClick={onClose} className="absolute top-6 right-6 text-deepSea hover:text-gold transition-colors">
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-deepSea mb-2">Welcome Back</h2>
          <p className="text-gray-500 font-light text-sm">Continue crafting their timeless story.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold ml-2">Email Address</label>
            <input 
              type="email" 
              placeholder="hello@memories.com"
              className="w-full bg-white border border-gold/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/30 outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold ml-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-white border border-gold/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/30 outline-none transition-all"
            />
          </div>
          
          <button className="w-full bg-deepSea text-cream py-4 rounded-2xl font-bold mt-4 shadow-lg hover:bg-opacity-90 transition-all">
            Enter Studio
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 font-light">
            Don't have a studio yet? <button className="text-gold font-semibold underline underline-offset-4">Create One</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
