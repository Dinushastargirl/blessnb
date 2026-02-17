
import React from 'react';

type Page = 'home' | 'portfolio' | 'about' | 'tiers' | 'blog';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-cream pt-20 pb-24 px-6 md:px-12 border-t border-gold/10 mt-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-deepSea cursor-pointer" onClick={() => onNavigate('home')}>BlessndB</h2>
          <p className="text-almostBlack/60 font-light leading-relaxed max-w-sm">
            We are a digital keepsake studio dedicated to preserving the moments that matter most. 
            Transforming birthdays into timeless digital art.
          </p>
          <div className="pt-4 font-script text-2xl text-gold">With love, BlessndB</div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-deepSea">Explore</h4>
          <ul className="space-y-2 text-sm text-almostBlack/70 font-light text-left">
            <li><button onClick={() => onNavigate('home')} className="hover:text-gold transition-colors">How it works</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-gold transition-colors">About Us</button></li>
            <li><button onClick={() => onNavigate('portfolio')} className="hover:text-gold transition-colors">Portfolio</button></li>
            <li><button onClick={() => onNavigate('tiers')} className="hover:text-gold transition-colors">Pricing Tiers</button></li>
            <li><button onClick={() => onNavigate('blog')} className="hover:text-gold transition-colors">Journal</button></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-deepSea">Support</h4>
          <ul className="space-y-2 text-sm text-almostBlack/70 font-light">
            <li><a href="#" className="hover:text-gold transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terms of service</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-mont uppercase tracking-widest border-t border-gold/5 pt-8">
        <p>© 2024 BlessndB. All memories reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">Pinterest</a>
          <a href="#" className="hover:text-gold">TikTok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
