import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { academy } from '../data/academy';

interface ImageLightboxProps {
  isOpen: boolean;
  src: string;
  title: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  src,
  title,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Lightbox Content */}
      <div className="relative max-w-5xl w-full bg-[#0a0f0d] border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto max-h-[96vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-[#080d0a]">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
            <span className="p-1 sm:p-1.5 rounded-lg bg-cricket-green/20 text-cricket-bright shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-white truncate">{title}</h4>
              <div className="text-[10px] sm:text-[11px] text-cricket-muted truncate">
                Official Google Maps Listing Verified Photograph
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={academy.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-cricket-bright hover:underline px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <span>View On Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 max-h-[75vh] overflow-hidden">
          <img
            src={src}
            alt={title}
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Bottom Details */}
        <div className="px-6 py-3 bg-[#080d0a] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>PCA Prafull Cricket Academy • 186A Plassy Lines, Bowenpally</span>
          <span className="text-cricket-bright">Aspect Ratio & Original Resolution Preserved</span>
        </div>
      </div>
    </div>
  );
};
