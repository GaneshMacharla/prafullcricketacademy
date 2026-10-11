import React, { useState } from 'react';
import { ExternalLink, Maximize2, ShieldCheck, Filter, Info } from 'lucide-react';
import { academy, GalleryItem } from '../data/academy';

interface GalleryProps {
  onOpenImageLightbox: (src: string, title: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenImageLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Nets', 'Ground', 'Coaching', 'Squad'];

  const filteredItems = selectedCategory === 'All'
    ? academy.gallery
    : academy.gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-[#080d0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            Real Action • Authentic Photo Gallery
          </span>
          <h2 className="athletic-title text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            LIFE AT PRAFULL CRICKET ACADEMY
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Genuinely sourced from the official Google Maps listing for PCA – Prafull Cricket Academy. Real students, match conditions, and dedicated nets.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-athletic text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-cricket-bright text-black shadow-glow font-black'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Gallery Grid with device-tailored column spanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {filteredItems.map((item: GalleryItem) => {
            // Intelligent column spans per device breakpoint
            let colSpanClasses = 'lg:col-span-6 md:col-span-1';
            if (item.aspect === 'panorama') {
              colSpanClasses = 'lg:col-span-12 md:col-span-2';
            } else if (item.aspect === 'portrait') {
              colSpanClasses = 'lg:col-span-5 md:col-span-1';
            } else if (item.aspect === 'landscape') {
              colSpanClasses = 'lg:col-span-7 md:col-span-1';
            }

            return (
              <div
                key={item.id}
                className={`${colSpanClasses} glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 group cursor-pointer w-full`}
                onClick={() => onOpenImageLightbox(item.image, item.title)}
              >
                <div className="relative overflow-hidden bg-black/50">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-contain max-h-[340px] sm:max-h-[440px] lg:max-h-[500px] mx-auto group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 sm:gap-2 max-w-[80%]">
                    <span className="px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-cricket-bright text-black shadow-sm shrink-0">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium bg-black/75 text-slate-300 border border-white/10 flex items-center gap-1 backdrop-blur-sm truncate">
                      <ShieldCheck className="w-3 h-3 text-cricket-green shrink-0" /> Verified
                    </span>
                  </div>

                  {/* Zoom Action Icon */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-lg bg-black/60 text-white group-hover:bg-cricket-bright group-hover:text-black transition-colors backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Bottom Caption & Source Note */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-cricket-bright transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mt-2 sm:mt-2.5 pt-2 border-t border-white/10">
                      <span className="truncate max-w-[70%]">{item.sourceNote}</span>
                      <span className="flex items-center gap-1 text-cricket-bright hover:underline shrink-0">
                        Tap to zoom
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal & Replacement Info Card */}
        <div className="mt-12 glass-panel rounded-xl p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-cricket-bright shrink-0" />
            <span>
              All {academy.gallery.length} photos shown are authentic media directly from the PCA Prafull Cricket Academy Google Maps listing.
            </span>
          </div>
          <a
            href={academy.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cricket-bright font-semibold hover:underline shrink-0"
          >
            <span>View More on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
