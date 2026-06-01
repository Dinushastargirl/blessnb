
import React from 'react';
import Pricing from '../components/Pricing';
import { PricingTier } from '../types';

interface TiersPageProps {
  onSelectTier: (tier: PricingTier) => void;
}

const TiersPage: React.FC<TiersPageProps> = ({ onSelectTier }) => {
  return (
    <div className="animate-fade-in bg-cream pb-24">
      <section className="pt-16 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-deepSea mb-6">Story Tiers</h1>
        <p className="text-xl text-almostBlack/60 font-light max-w-2xl mx-auto">
          Every life is a masterpiece. Choose the canvas that best suits their journey.
        </p>
      </section>
      
      <Pricing onSelectTier={onSelectTier} />

      <section className="max-w-4xl mx-auto px-6 py-12 bg-white/30 rounded-[3rem] border border-gold/10 mt-12">
        <h2 className="text-3xl font-serif text-deepSea mb-8 text-center italic">Included in Every Tier</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4 text-gray-600 font-light">
            <li>• Mobile-Optimized Smooth Scrolling</li>
            <li>• Encrypted Memory Storage</li>
            <li>• Ad-Free Experience (Forever)</li>
          </ul>
          <ul className="space-y-4 text-gray-600 font-light">
            <li>• 1-Year Premium Hosting (Renewable)</li>
            <li>• Personalized "Gifter" Signature</li>
            <li>• Priority Support via Studio Concierge</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TiersPage;
