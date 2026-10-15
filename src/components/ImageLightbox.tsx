import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { academy } from '../data/academy';

export interface ImageLightboxProps {
  isOpen: boolean;
  src: string;
  title: string;
  caption?: string;
  type?: 'image' | 'video';
  badge?: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  src,
  title,
  caption,
  type,
  badge,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount
}) => {
  const isVideo = type === 'video' || src.endsWith('.mp4');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/92 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Lightbox Content Container */}
      <div className="relative max-w-5xl w-full bg-[#0a0f0d] border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto max-h-[96vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-[#080d0a]">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
            <span className="p-1 sm:p-1.5 rounded-lg bg-cricket-green/20 text-cricket-bright shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">{title}</h4>
                {badge && (
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-cricket-bright/20 text-cricket-bright border border-cricket-bright/30">
                    {badge}
                  </span>
                )}
                {isVideo && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 shrink-0">
                    <Play className="w-2.5 h-2.5 fill-amber-300" /> Video
                  </span>
                )}
              </div>
              <div className="text-[10px] sm:text-[11px] text-cricket-muted truncate">
                {currentIndex !== undefined && totalCount !== undefined ? (
                  <span>Media {currentIndex + 1} of {totalCount} • Official PCA Academy Media</span>
                ) : (
                  <span>Official PCA Academy Grounds & Tournament Media</span>
                )}
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
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Display Area with Prev/Next Overlay Buttons */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 max-h-[75vh] min-h-[300px] overflow-hidden">
          {isVideo ? (
            <video
              key={src}
              src={src}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-lg object-contain bg-black"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={src}
              src={src}
              alt={title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg animate-fadeIn"
            />
          )}

          {/* Previous Slide Button */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-cricket-bright text-white hover:text-black border border-white/20 hover:border-cricket-bright transition-all shadow-xl z-20 group"
              aria-label="Previous Media"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
          )}

          {/* Next Slide Button */}
          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-cricket-bright text-white hover:text-black border border-white/20 hover:border-cricket-bright transition-all shadow-xl z-20 group"
              aria-label="Next Media"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </div>

        {/* Bottom Details & Caption */}
        <div className="px-4 sm:px-6 py-3 bg-[#080d0a] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div className="text-center sm:text-left">
            {caption ? (
              <p className="text-slate-200 text-xs sm:text-sm font-sans line-clamp-2">{caption}</p>
            ) : (
              <span>PCA Prafull Cricket Academy • 186A Plassy Lines, Bowenpally</span>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px] sm:text-xs">
            <span className="text-slate-500 hidden sm:inline">Use Arrow Keys ← → to navigate</span>
            <span className="text-cricket-bright font-medium">Original High Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
};
