
import React from 'react';
import { PricingTier } from '../types';
import { Check } from 'lucide-react';

const tiers: PricingTier[] = [
  {
    id: 'micro',
    name: 'The Micro-Memory',
    price: '$29',
    description: 'A beautifully designed single-page Digital Card.',
    features: [
      '5 Curated Photos',
      '1 Personal Letter',
      'Elegant Single-Page Layout',
      '24-Hour Express Delivery',
      'Hosted for 1 Full Year'
    ],
    idealFor: 'Simple, meaningful surprises.'
  },
  {
    id: 'storyline',
    name: 'The Storyline',
    price: '$59',
    description: 'A scrolling timeline that unfolds like a memory book.',
    features: [
      'Up to 20 Photos',
      '2 Video Embeds',
      '“Letter from the Gifter”',
      'Custom Background Song',
      'Interactive Scrolling Animations',
      'Hosted for 1 Full Year'
    ],
    idealFor: 'Best friends, partners, & siblings.',
    isPopular: true
  },
  {
    id: 'eternal',
    name: 'The Eternal',
    price: '$99',
    description: 'A complete digital legacy for milestone moments.',
    features: [
      'Unlimited Photos & Videos',
      'Interactive Guestbook for Friends',
      'Custom .com Domain Included',
      'Full Digital Portfolio Design',
      'Priority Design Support',
      'Hosted for 1 Full Year'
    ],
    idealFor: 'Milestone birthdays & legends.',
    isPremium: true
  }
];

interface PricingProps {
  onSelectTier: (tier: PricingTier) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-deepSea mb-6">Choose Their Story</h2>
          <p className="text-almostBlack/60 font-light max-w-xl mx-auto">
            Select the tier that best matches the depth of your shared history.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                tier.isPopular ? 'bg-cream ring-2 ring-gold/40 shadow-2xl z-10' : 'bg-white/80 border border-gold/10'
              } ${tier.isPremium ? 'border-2 border-gold/30 shadow-lg' : ''}`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-cream text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-2 rounded-full shadow-md">
                  Most Loved
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-deepSea mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-almostBlack">{tier.price}</span>
                  <span className="text-sm text-gray-500 font-light">/ story</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-8 font-light italic leading-relaxed">
                {tier.description}
              </p>

              <div className="flex-grow space-y-5 mb-10">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-almostBlack/80 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gold/5 text-center">
                <p className="text-[10px] text-gold uppercase tracking-widest font-bold mb-4">Perfect for: {tier.idealFor}</p>
                <button 
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-4 rounded-xl font-medium transition-all ${
                  tier.isPopular ? 'bg-deepSea text-cream' : 'bg-cream border border-deepSea/20 text-deepSea hover:bg-deepSea hover:text-cream'
                }`}>
                  Select This Tier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
