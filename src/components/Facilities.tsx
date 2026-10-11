import React from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Eye } from 'lucide-react';
import { academy } from '../data/academy';

interface FacilitiesProps {
  onOpenImageLightbox: (src: string, title: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenImageLightbox }) => {
  return (
    <section id="facilities" className="py-20 sm:py-28 relative bg-[#0a0f0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            Super Kings Model • Verified Infrastructure
          </span>
          <h2 className="athletic-title text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            GROUND & PRACTICE INFRASTRUCTURE
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Directly verified facilities at Bowenpally designed to provide safe, intensive cricket practice across batting, bowling, and athletic fitness.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-12">
          {academy.facilities.map((facility, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={facility.id}
                className={`glass-panel rounded-2xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-7 lg:p-8 ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual Area */}
                <div className={`lg:col-span-6 relative group overflow-hidden rounded-xl w-full ${isReversed ? 'lg:col-start-7' : ''}`}>
                  <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden rounded-xl bg-black">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Source Tag & Expand Button */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-black/75 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-cricket-bright font-medium max-w-[80%] truncate">
                      <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cricket-bright shrink-0" />
                      <span className="truncate">{facility.sourceNote}</span>
                    </div>

                    <button
                      onClick={() => onOpenImageLightbox(facility.image, facility.name)}
                      className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 p-2 rounded-lg bg-black/75 hover:bg-black text-white hover:text-cricket-bright border border-white/20 transition-all opacity-90 hover:opacity-100"
                      title="Inspect Full Image"
                      aria-label="Inspect Full Image"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details Area */}
                <div className={`lg:col-span-6 space-y-3 sm:space-y-4 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cricket-bright">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Bowenpally Facility</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {facility.name}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                    {facility.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 p-2 sm:p-2.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cricket-bright shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Amenities Ribbon */}
        <div className="mt-12 sm:mt-16 glass-panel rounded-2xl p-5 sm:p-7 lg:p-8 border border-cricket-green/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cricket-bright mb-1">
                Verified Venue Amenities
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Player & Parent Convenience at Bowenpally
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Listing verified amenities ensuring comfortable practice sessions and parent observation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
              <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 text-center sm:text-left">
                🚗 Vehicle Parking Available
              </span>
              <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 text-center sm:text-left">
                🚰 Drinking Water Station
              </span>
              <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 text-center sm:text-left">
                🚻 Washrooms / Changing Facility
              </span>
              <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 text-center sm:text-left">
                🕒 Daily Open Access
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
