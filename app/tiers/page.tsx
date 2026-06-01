'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import TiersPage from '../../views/TiersPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/modals/AuthModal';
import CheckoutModal from '../../components/modals/CheckoutModal';
import { PricingTier } from '../../types';
import { useRouter } from 'next/navigation';

export default function Tiers() {
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<'auth' | 'checkout' | null>(null);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const openCheckout = (tier: PricingTier) => {
    setSelectedTier(tier);
    setActiveModal('checkout');
  };

  const closeModals = () => {
    setActiveModal(null);
    setSelectedTier(null);
  };

  const handleNavigate = (page: string) => {
    switch (page) {
      case 'tiers':
        router.push('/tiers');
        break;
      case 'about':
        router.push('/about');
        break;
      case 'portfolio':
        router.push('/portfolio');
        break;
      case 'blog':
        router.push('/blog');
        break;
      case 'home':
        router.push('/');
        break;
      default:
        break;
    }
  };

  return (
    <div className="animate-fade-in min-h-screen">
      <Navbar 
        currentPage="tiers" 
        onNavigate={handleNavigate} 
        onSignIn={() => setActiveModal('auth')} 
      />
      
      <main className="pt-24">
        <TiersPage onSelectTier={openCheckout} />
      </main>

      <Footer onNavigate={handleNavigate} />

      {activeModal === 'auth' && <AuthModal onClose={closeModals} />}
      {activeModal === 'checkout' && selectedTier && (
        <CheckoutModal tier={selectedTier} onClose={closeModals} />
      )}
    </div>
  );
}
