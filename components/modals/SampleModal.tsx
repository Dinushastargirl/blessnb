
import React from 'react';
import { X, PlayCircle } from 'lucide-react';

interface SampleModalProps {
  onClose: () => void;
}

const SampleModal: React.FC<SampleModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-deepSea/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-6xl aspect-video bg-cream rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-slide-up">
        <button onClick={onClose} className="absolute top-6 right-6 z-20 text-cream md:text-deepSea hover:text-gold transition-colors">
          <X size={32} />
        </button>

        <div className="w-full md:w-1/3 bg-deepSea p-8 md:p-12 flex flex-col justify-center text-cream">
          <span className="font-script text-2xl text-gold mb-4">Live Preview</span>
          <h2 className="text-4xl font-serif mb-6 leading-tight">A Milestone for Julian</h2>
          <p className="text-cream/70 font-light leading-relaxed mb-8 italic">
            "We wanted something he could keep forever. Seeing the timeline of his childhood unfold in such an elegant way was more powerful than any physical card."
          </p>
          <div className="space-y-2 text-xs uppercase tracking-widest font-bold text-gold">
            <p>Tier: The Storyline</p>
            <p>Theme: Vintage Cinema</p>
          </div>
        </div>

        <div className="flex-1 relative bg-black/10 flex items-center justify-center p-8">
           <div className="relative w-[280px] h-[560px] bg-almostBlack rounded-[3rem] p-2 shadow-2xl ring-4 ring-gold/20">
              <div className="w-full h-full bg-cream rounded-[2.5rem] overflow-y-auto scrollbar-hide flex flex-col items-center">
                 <div className="p-8 text-center pt-16">
                    <h1 className="font-serif text-3xl text-deepSea italic">Happy 30th, Julian</h1>
                    <div className="w-12 h-px bg-gold mx-auto my-6" />
                    <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1964&auto=format&fit=crop" className="w-full h-48 object-cover rounded-xl grayscale mb-6" />
                    <p className="font-sans text-[10px] text-gray-500 leading-relaxed uppercase tracking-[0.2em]">The Journey Begins</p>
                 </div>
                 <div className="space-y-24 px-8 pb-20">
                    <div className="text-center">
                       <span className="text-[10px] text-gold font-bold">1994</span>
                       <p className="text-xs text-deepSea mt-2">The year it all started.</p>
                    </div>
                    <div className="text-center">
                       <span className="text-[10px] text-gold font-bold">2002</span>
                       <p className="text-xs text-deepSea mt-2">First championship win.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
              <PlayCircle size={64} className="text-gold bg-deepSea rounded-full" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default SampleModal;
