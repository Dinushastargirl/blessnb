
import React from 'react';
import { Camera, Palette, Send } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: "You Share the Memories",
    description: "Upload photos, videos, and your heartfelt message through our secure portal.",
    icon: <Camera className="w-8 h-8" />
  },
  {
    id: 2,
    title: "We Design Their Story",
    description: "Our studio team crafts a beautiful, mobile-optimized website tailored to their personality.",
    icon: <Palette className="w-8 h-8" />
  },
  {
    id: 3,
    title: "You Surprise Them",
    description: "Send them their personal link. Watch their reaction as their life story unfolds.",
    icon: <Send className="w-8 h-8" />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-24 px-6 md:px-12 bg-white/50 border-y border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-deepSea mb-4">How Your Gift Comes To Life</h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-cream border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-cream transition-all duration-500 shadow-lg">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-deepSea mb-3 italic">{step.title}</h3>
              <p className="text-almostBlack/70 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-gold/5 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-gray-500 font-mont uppercase tracking-widest text-center">
          <div className="flex flex-col items-center">
            <span className="text-gold font-bold text-xl mb-1">24-72h</span>
            <span>Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gold font-bold text-xl mb-1">100%</span>
            <span>Mobile Ready</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gold font-bold text-xl mb-1">0</span>
            <span>Tech Skills</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
