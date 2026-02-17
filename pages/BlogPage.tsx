
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: "The Art of Digital Storytelling",
    excerpt: "Exploring how digital spaces can evoke more emotion than physical ones through motion and music.",
    date: "June 12, 2024",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba124?q=80&w=800"
  },
  {
    title: "Why Paper Cards are Fading",
    excerpt: "The shift toward digital legacy and intentional gift-giving in the modern age.",
    date: "June 05, 2024",
    category: "Trend",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800"
  },
  {
    title: "The Emotional Power of Music",
    excerpt: "How we select the perfect background soundscape for every Story Tier.",
    date: "May 28, 2024",
    category: "Process",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800"
  },
  {
    title: "Legacy: A Gift for Generations",
    excerpt: "Why digital gifts are the most sustainable and permanent way to say I love you.",
    date: "May 15, 2024",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="animate-fade-in pb-32">
      <header className="py-24 px-6 md:px-12 bg-white/40 border-b border-gold/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">The Studio Journal</span>
            <h1 className="text-5xl md:text-7xl font-serif text-deepSea leading-tight">Thoughts on <br/><span className="italic">Gifting & Legacy.</span></h1>
          </div>
          <p className="text-almostBlack/50 font-light italic max-w-xs text-lg">
            "A story well told is a life well lived."
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-x-12 gap-y-24">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] mb-8 shadow-xl relative">
              <img 
                src={post.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={post.title} 
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-cream/90 backdrop-blur rounded-full text-[10px] font-bold tracking-widest text-deepSea uppercase">
                {post.category}
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-gold font-bold uppercase tracking-widest">{post.date}</span>
                <ArrowUpRight size={20} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h2 className="text-3xl font-serif text-deepSea leading-tight group-hover:text-gold transition-colors">{post.title}</h2>
              <p className="text-gray-500 font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="pt-2">
                <button className="text-xs font-bold tracking-widest uppercase border-b border-gold/20 pb-1 group-hover:border-gold transition-all">Read Story</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Footer */}
      <section className="mt-32 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-deepSea text-cream p-16 rounded-[3rem] shadow-2xl space-y-8">
          <h3 className="text-3xl font-serif italic">Never miss a story.</h3>
          <p className="text-cream/60 font-light max-w-md mx-auto">Subscribe to our journal for monthly reflections on digital art, memory, and the philosophy of gifting.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Address"
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all"
            />
            <button className="bg-gold text-almostBlack px-10 py-4 rounded-2xl font-bold hover:bg-[#EBCB61] transition-all">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
