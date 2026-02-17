
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import IdeaGenerator from '@/components/IdeaGenerator';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import AuthModal from '@/components/modals/AuthModal';
import SampleModal from '@/components/modals/SampleModal';
import CheckoutModal from '@/components/modals/CheckoutModal';
import { PricingTier } from '@/types';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'auth' | 'sample' | 'checkout' | null>(null);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const openCheckout = (tier: PricingTier) => {
    setSelectedTier(tier);
    setActiveModal('checkout');
  };

  const closeModals = () => {
    setActiveModal(null);
    setSelectedTier(null);
  };

  const handleNavigate = (page: string) => {
    if (page === 'tiers') {
      const el = document.getElementById('pricing-link-dummy');
      window.location.href = '/tiers';
    } else if (page === 'about') {
      window.location.href = '/about';
    } else if (page === 'portfolio') {
      window.location.href = '/portfolio';
    } else if (page === 'blog') {
      window.location.href = '/blog';
    }
  };

  return (
    <div className="animate-fade-in min-h-screen">
      <Navbar 
        currentPage="home" 
        onNavigate={handleNavigate} 
        onSignIn={() => setActiveModal('auth')} 
      />
      
      <main>
        <Hero 
          onCreateStory={() => window.location.href = '/tiers'} 
          onViewSample={() => setActiveModal('sample')}
        />
        
        <section className="py-32 px-6 md:px-12 text-center bg-white/30">
          <div className="max-w-3xl mx-auto space-y-10">
            <span className="text-gold font-script text-3xl">The Mission</span>
            <h2 className="text-4xl md:text-6xl font-serif text-deepSea leading-[1.1]">
              We exist to make digital memories <br/><span className="italic">as tangible as a touch.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Forget fading paper and cluttered drawers. We curate your most precious moments into a timeless digital sanctuary.
            </p>
            <button 
              onClick={() => window.location.href = '/about'}
              className="text-sm font-bold tracking-widest uppercase text-gold hover:text-deepSea transition-colors"
            >
              Learn Our Why —
            </button>
          </div>
        </section>

        <HowItWorks />
        <Gallery />
        <IdeaGenerator />
        
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
          <div className="p-16 rounded-[4rem] border-2 border-gold/10 bg-cream shadow-2xl space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif text-deepSea leading-tight">
              Ready to give them a gift <br />
              <span className="italic">they can't lose?</span>
            </h2>
            <button 
              onClick={() => window.location.href = '/tiers'}
              className="bg-deepSea text-cream px-12 py-5 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
            >
              Gift Their Story Today →
            </button>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleNavigate} />
      <StickyCTA onClick={() => window.location.href = '/tiers'} />

      {activeModal === 'auth' && <AuthModal onClose={closeModals} />}
      {activeModal === 'sample' && <SampleModal onClose={closeModals} />}
      {activeModal === 'checkout' && selectedTier && (
        <CheckoutModal tier={selectedTier} onClose={closeModals} />
      )}
    </div>
  );
}
