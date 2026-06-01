
import React from 'react';
import { Heart, Sparkles, Anchor, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in pb-24">
      {/* Hero */}
      <section className="py-24 px-6 md:px-12 bg-cream text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-script text-3xl text-gold">The Story Behind the Story</span>
          <h1 className="text-5xl md:text-7xl font-serif text-deepSea leading-tight">
            We believe memories should <br /><span className="italic underline decoration-gold/30">outlive the moment.</span>
          </h1>
        </div>
      </section>

      {/* Why We Started */}
      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1516726817505-f5ed17dc401a?q=80&w=2070&auto=format&fit=crop" 
            className="rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            alt="Studio Scene"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-deepSea rounded-[2rem] p-8 flex flex-col justify-end text-cream hidden md:flex">
            <span className="text-gold font-script text-2xl mb-2">Our Mission</span>
            <p className="text-xs font-light leading-relaxed">To end digital clutter and replace it with timeless legacy.</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-gold">
            <Anchor className="w-6 h-6" />
            <h2 className="text-2xl font-serif text-deepSea italic">Why We Started</h2>
          </div>
          <p className="text-lg text-almostBlack/70 font-light leading-relaxed">
            BlessndB began on a quiet Tuesday afternoon, watching a beautiful birthday card being tucked away into a bottom drawer, likely never to be relived again. We realized that our most precious memories—the ones that make us cry with laughter or swell with pride—deserve more than paper. 
          </p>
          <p className="text-lg text-almostBlack/70 font-light leading-relaxed">
            We saw a gap between the fleeting nature of social media and the dust-gathering nature of physical keepsakes. We wanted to build a bridge: a digital sanctuary for love.
          </p>
        </div>
      </section>

      {/* What We Spread */}
      <section className="bg-deepSea py-32 px-6 text-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center"><Globe className="text-gold w-12 h-12" /></div>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">What we want to spread is <br/><span className="italic text-gold">Intentional Digitalism.</span></h2>
          <p className="text-xl text-cream/70 font-light leading-relaxed max-w-2xl mx-auto">
            We want to change the way the world gifts. In an age of mindless consumption, we are spreading the gift of <strong>legacy</strong>. Every milestone deserves a dedicated, timeless corner of the internet that can be relived anywhere, anytime, across generations.
          </p>
          <div className="pt-8 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <Heart className="mx-auto text-gold w-6 h-6" />
              <h4 className="font-serif text-xl">Love</h4>
              <p className="text-xs text-cream/50 uppercase tracking-widest font-bold">Unfiltered & Pure</p>
            </div>
            <div className="space-y-3">
              <Sparkles className="mx-auto text-gold w-6 h-6" />
              <h4 className="font-serif text-xl">Magic</h4>
              <p className="text-xs text-cream/50 uppercase tracking-widest font-bold">In every animation</p>
            </div>
            <div className="space-y-3">
              <Anchor className="mx-auto text-gold w-6 h-6" />
              <h4 className="font-serif text-xl">Permanence</h4>
              <p className="text-xs text-cream/50 uppercase tracking-widest font-bold">Hosted with Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-24 text-center">
        <p className="text-gold font-script text-4xl mb-6">With love from our studio,</p>
        <div className="flex justify-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover border-2 border-gold" alt="Founder 1" />
           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover border-2 border-gold" alt="Founder 2" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
