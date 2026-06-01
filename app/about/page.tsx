'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import AboutPage from '../../views/AboutPage';
import Footer from '../../components/Footer';
import AuthModal from '../../components/modals/AuthModal';
import { useRouter } from 'next/navigation';

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<'auth' | null>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
        currentPage="about" 
        onNavigate={handleNavigate} 
        onSignIn={() => setActiveModal('auth')} 
      />
      
      <main className="pt-24">
        <AboutPage />
      </main>

      <Footer onNavigate={handleNavigate} />

      {activeModal === 'auth' && <AuthModal onClose={() => setActiveModal(null)} />}
    </div>
  );
}
