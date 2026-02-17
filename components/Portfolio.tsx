
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Starlit Memories",
    url: "https://starlit-kitten-160d92.netlify.app/",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=800",
    theme: "Celestial"
  },
  {
    title: "Euphonious Grace",
    url: "https://euphonious-praline-f00fe8.netlify.app/",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
    theme: "Orchestral"
  },
  {
    title: "Quiet Reflections",
    url: "https://quiet-chaja-7581d6.netlify.app/",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    theme: "Minimalist"
  },
  {
    title: "Cosmic Odyssey",
    url: "https://cosmic-lamington-0afa4b.netlify.app/",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    theme: "Futuristic"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] font-semibold text-xs mb-4 block">The Signature Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-deepSea leading-tight">
              A Glimpse into Our <span className="italic">Digital Keepsake Gallery.</span>
            </h2>
          </div>
          <p className="text-almostBlack/60 font-light max-w-sm italic">
            Each story is a unique collaboration. Explore our latest commissioned works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-almostBlack shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:shadow-gold/10"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="h-full w-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-almostBlack/90 via-transparent to-transparent">
                <div className="mb-4 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{project.theme}</span>
                  <h3 className="text-2xl font-serif text-cream mt-1">{project.title}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span>Visit Story</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              <div className="absolute inset-0 border border-gold/0 transition-colors duration-500 group-hover:border-gold/30 rounded-[2.5rem] pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
