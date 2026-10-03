import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { academy } from '../data/academy';

interface StickyMobileBarProps {
  onOpenTrialModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenTrialModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#080d0a]/95 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-1.5">
        {/* Call CTA */}
        <a
          href={`tel:${academy.rawPhone}`}
          className="flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 active:scale-95 transition-all min-h-[46px]"
          aria-label="Call Academy Directly"
        >
          <Phone className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-wider truncate max-w-full">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 active:scale-95 transition-all min-h-[46px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-wider truncate max-w-full">WhatsApp</span>
        </a>

        {/* Book Trial CTA */}
        <button
          onClick={onOpenTrialModal}
          className="flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl bg-gradient-to-r from-cricket-bright to-emerald-500 text-black font-extrabold shadow-glow active:scale-95 transition-all min-h-[46px]"
          aria-label="Book a Trial Session"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[10px] uppercase tracking-wider truncate max-w-full">Book Trial</span>
        </button>
      </div>
    </div>
  );
};
