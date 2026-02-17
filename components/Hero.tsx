
'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onCreateStory: () => void;
  onViewSample: () => void;
}

export default function Hero({ onCreateStory, onViewSample }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cream">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-[0.04] grayscale"
          alt="Ambient Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10 animate-slide-up">
        <div className="flex items-center justify-center gap-3 text-gold mb-4">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Digital Keepsake Studio</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-deepSea leading-[0.9] tracking-tight">
          Stop Gifting Clutter. <br />
          <span className="italic font-light">Start Gifting <br className="md:hidden"/> Their Story.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-almostBlack/70 max-w-2xl mx-auto font-light italic">
          A living timeline of memories, milestones, and love—beautifully wrapped in their own dedicated corner of the internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <button 
            onClick={onCreateStory}
            className="w-full sm:w-auto bg-deepSea text-cream px-12 py-6 rounded-full text-lg font-bold hover:bg-opacity-95 transition-all transform hover:scale-105 shadow-xl"
          >
            Create Their Story →
          </button>
          <button 
            onClick={onViewSample}
            className="w-full sm:w-auto border border-gold/40 text-deepSea px-12 py-6 rounded-full text-lg font-medium hover:bg-gold/5 transition-all"
          >
            View Sample Story
          </button>
        </div>
      </div>
    </section>
  );
}
