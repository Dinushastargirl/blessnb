
import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <div className="animate-fade-in bg-cream">
      <section className="pt-16 pb-8 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-deepSea mb-6">Keepsake Gallery</h1>
        <p className="text-xl text-almostBlack/60 font-light max-w-2xl mx-auto italic">
          A selection of our most cherished digital transformations.
        </p>
      </section>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
