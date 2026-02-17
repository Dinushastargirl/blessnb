
import React from 'react';

interface StickyCTAProps {
  onClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-3rem)]">
      <button 
        onClick={onClick}
        className="w-full bg-deepSea text-cream py-5 rounded-full shadow-2xl font-bold tracking-widest uppercase text-xs animate-slide-up flex items-center justify-center gap-2"
      >
        Start Their Story
        <span className="text-gold">→</span>
      </button>
    </div>
  );
};

export default StickyCTA;
