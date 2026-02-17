
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Gallery from '../components/Gallery';
import IdeaGenerator from '../components/IdeaGenerator';

type Page = 'home' | 'about' | 'portfolio' | 'tiers' | 'blog';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onViewSample: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onViewSample }) => {
  return (
    <div className="animate-fade-in">
      <Hero 
        onCreateStory={() => onNavigate('tiers')} 
        onViewSample={onViewSample}
      />
      
      {/* Intro Mission Section */}
      <section className="py-32 px-6 md:px-12 text-center bg-white/30">
        <div className="max-w-3xl mx-auto space-y-10">
          <span className="text-gold font-script text-3xl">The Mission</span>
          <h2 className="text-4xl md:text-6xl font-serif text-deepSea leading-[1.1]">
            We exist to make digital memories <br/><span className="italic">as tangible as a touch.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Forget fading paper and cluttered drawers. We curate your most precious moments into a timeless digital sanctuary, optimized for the devices they'll actually use—the ones in their hand.
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="text-sm font-bold tracking-widest uppercase text-gold hover:text-deepSea transition-colors"
          >
            Learn Our Why —
          </button>
        </div>
      </section>

      <HowItWorks />
      <Gallery />
      <IdeaGenerator />
      
      {/* Final Close */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="p-16 rounded-[4rem] border-2 border-gold/10 bg-cream shadow-2xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-deepSea leading-tight">
            Ready to give them a gift <br />
            <span className="italic">they can't lose?</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-lg mx-auto italic">
            "The reaction we got was more emotional than any present we've ever bought." — Sarah J.
          </p>
          <button 
            onClick={() => onNavigate('tiers')}
            className="bg-deepSea text-cream px-12 py-5 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
          >
            Gift Their Story Today →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
