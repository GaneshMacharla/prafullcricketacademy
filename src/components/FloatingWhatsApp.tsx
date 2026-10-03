import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { academy } from '../data/academy';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden lg:flex fixed bottom-8 right-6 z-40 items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0e1713] border border-[#25D366]/40 text-slate-100 text-xs px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md animate-bounce-subtle">
          <span>Chat with coaching desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black flex items-center justify-center shadow-lg hover:shadow-glow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat directly on WhatsApp"
        title="Chat with PCA on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black text-black" />
      </a>
    </div>
  );
};
