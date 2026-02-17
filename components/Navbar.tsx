
'use client';

import React from 'react';

type Page = 'home' | 'about' | 'portfolio' | 'tiers' | 'blog';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onSignIn: () => void;
}

export default function Navbar({ currentPage, onNavigate, onSignIn }: NavbarProps) {
  const links: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Story Tiers', id: 'tiers' },
    { label: 'Journal', id: 'blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl py-5 px-6 md:px-12 flex justify-between items-center border-b border-gold/10">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
        <span className="text-2xl font-serif font-bold text-deepSea tracking-tight transition-transform group-hover:scale-105">BlessndB</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-[11px] font-bold text-almostBlack/70 tracking-[0.2em] uppercase">
        {links.map((link) => (
          <button 
            key={link.id}
            onClick={() => onNavigate(link.id)} 
            className={`transition-all hover:text-gold relative pb-1 ${
              currentPage === link.id ? 'text-deepSea' : ''
            }`}
          >
            {link.label}
            {currentPage === link.id && (
              <span className="absolute bottom-0 left-0 w-full h-px bg-gold" />
            )}
          </button>
        ))}
      </div>

      <button 
        onClick={onSignIn}
        className="text-xs font-bold tracking-widest uppercase border-b-2 border-deepSea/10 text-deepSea hover:border-gold transition-all py-1"
      >
        Studio Login
      </button>
    </nav>
  );
}
