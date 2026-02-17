
import React from 'react';
import { Music, Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          {/* Mobile Mockup */}
          <div className="relative w-[320px] h-[640px] bg-almostBlack rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-almostBlack rounded-b-2xl z-20" />
            <div className="w-full h-full bg-[#FDFCF0] rounded-[2.2rem] overflow-hidden relative flex flex-col p-6 font-serif">
              {/* Fake Content */}
              <div className="mt-8 flex justify-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop" 
                  alt="Emotional Memory" 
                  className="w-48 h-64 object-cover rounded-lg shadow-md grayscale-[0.2]" 
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold">
                  <Calendar size={14} />
                  <span className="text-[10px] tracking-widest uppercase">October 14, 2012</span>
                </div>
                <h4 className="text-deepSea text-xl">The day we first laughed until we cried.</h4>
                <p className="font-sans text-xs leading-relaxed text-gray-600">
                  I remember the crisp autumn air and how your laugh echoed through the park. It was the moment I knew you were family.
                </p>
                <div className="pt-4 font-script text-xl text-gold">
                  With love, Sarah
                </div>
              </div>
              
              {/* Floating Music UI */}
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-deepSea rounded-full flex items-center justify-center text-cream shadow-lg animate-pulse">
                <Music size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <span className="text-gold uppercase tracking-[0.3em] font-semibold text-xs">The Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif text-deepSea leading-tight">
            Designed for the way they’ll actually experience it — <span className="italic">on their phone.</span>
          </h2>
          <p className="text-lg text-almostBlack/70 font-light leading-relaxed">
            Every BlessndB story is handcrafted to feel intimate and personal. 
            We use soft fade-in animations, gold timeline markers, and handwritten captions 
            to create a digital journey that feels as warm as a physical letter.
          </p>
          <ul className="space-y-4 font-mont text-sm text-deepSea font-medium">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              Scrolling Memory Timeline
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              Handwritten Digital Captions
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              Integrated Background Soundscapes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
