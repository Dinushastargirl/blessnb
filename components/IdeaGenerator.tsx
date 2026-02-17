
import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { generateGiftStoryTheme } from '../geminiService';

const IdeaGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState<{ themeTitle: string; pitch: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await generateGiftStoryTheme(input);
      setSuggestion(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-deepSea text-cream">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <Sparkles className="text-gold mb-6 w-10 h-10" />
        <h2 className="text-3xl md:text-5xl font-serif mb-6">Not sure where to start?</h2>
        <p className="text-cream/70 mb-10 font-light max-w-xl mx-auto">
          Tell us a few things they love, and our AI Studio will suggest a custom theme for their digital story.
        </p>

        <div className="w-full max-w-lg space-y-4">
          <input 
            type="text" 
            placeholder="e.g. coffee, vintage cameras, long hikes, poetry..."
            className="w-full bg-cream/10 border border-cream/20 rounded-2xl px-6 py-4 text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleGenerate}
            disabled={loading || !input}
            className="w-full bg-gold text-almostBlack px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#EBCB61] transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Generate Theme Idea'}
          </button>
        </div>

        {suggestion && (
          <div className="mt-12 p-8 bg-cream/5 border border-gold/20 rounded-3xl animate-fade-in w-full">
            <h3 className="text-gold font-serif text-2xl mb-4 italic">“{suggestion.themeTitle}”</h3>
            <p className="text-lg text-cream/90 font-light leading-relaxed italic">
              {suggestion.pitch}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default IdeaGenerator;
