
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import TiersPage from './pages/TiersPage';
import BlogPage from './pages/BlogPage';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import AuthModal from './components/modals/AuthModal';
import SampleModal from './components/modals/SampleModal';
import CheckoutModal from './components/modals/CheckoutModal';
import { PricingTier } from './types';

type Page = 'home' | 'about' | 'portfolio' | 'tiers' | 'blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeModal, setActiveModal] = useState<'auth' | 'sample' | 'checkout' | null>(null);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const openCheckout = (tier: PricingTier) => {
    setSelectedTier(tier);
    setActiveModal('checkout');
  };

  const closeModals = () => {
    setActiveModal(null);
    setSelectedTier(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onViewSample={() => setActiveModal('sample')} />;
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'tiers':
        return <TiersPage onSelectTier={openCheckout} />;
      case 'blog':
        return <BlogPage />;
      default:
        return <Home onNavigate={setCurrentPage} onViewSample={() => setActiveModal('sample')} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-cream text-almostBlack selection:bg-gold selection:text-white">
      <Navbar 
        currentPage={currentPage}
        onNavigate={setCurrentPage} 
        onSignIn={() => setActiveModal('auth')} 
      />
      
      <main className="pt-20">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
      
      {currentPage !== 'tiers' && (
        <StickyCTA onClick={() => setCurrentPage('tiers')} />
      )}

      {activeModal === 'auth' && <AuthModal onClose={closeModals} />}
      {activeModal === 'sample' && <SampleModal onClose={closeModals} />}
      {activeModal === 'checkout' && selectedTier && (
        <CheckoutModal tier={selectedTier} onClose={closeModals} />
      )}
    </div>
  );
};

export default App;
