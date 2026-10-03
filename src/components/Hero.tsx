import React from 'react';
import { Calendar, Phone, Star, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { academy } from '../data/academy';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Background Image with Cinematic Dark Athletic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/academy/pca-gmaps-02.jpg"
          alt="Prafull Cricket Academy students training on ground in Bowenpally"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.1]"
        />
        {/* Layered gradients for text contrast and athletic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d0a] via-[#080d0a]/75 to-[#080d0a]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d0a] via-[#080d0a]/70 to-[#080d0a]/50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-2xl h-64 sm:h-96 bg-cricket-green/10 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col items-center text-center w-full">
        
        {/* Verified Google Maps Trust Badge */}
        <a
          href={academy.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-black/60 border border-cricket-green/40 backdrop-blur-md mb-5 sm:mb-8 hover:border-cricket-bright transition-all group max-w-full"
        >
          <div className="flex items-center gap-1 text-cricket-bright shrink-0">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-cricket-bright text-cricket-bright" />
            <span className="font-extrabold text-xs sm:text-sm text-white">4.8</span>
          </div>
          <span className="text-slate-400 text-xs">|</span>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-200 group-hover:text-cricket-bright transition-colors truncate">
            Rated on Google ({academy.reviewCount} Reviews)
          </span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cricket-bright group-hover:translate-x-0.5 transition-transform shrink-0" />
        </a>

        {/* Main Brand Title & Headings */}
        <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-4">
          <div className="inline-block">
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-cricket-bright bg-cricket-green/10 border border-cricket-green/20 px-2.5 sm:px-3 py-1 rounded-md">
              PCA • Prafull Cricket Academy
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.08] break-words">
            Build Your Game. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cricket-bright via-emerald-400 to-green-300">
              Build Your Future.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-xl text-slate-300 font-normal leading-relaxed pt-1 sm:pt-2 px-1 sm:px-0">
            Professional cricket coaching for young players who want to learn, improve, and compete. Structured batting, bowling, fielding, and fitness drills at Bowenpally, Secunderabad.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base text-black bg-gradient-to-r from-cricket-bright to-emerald-500 hover:from-emerald-400 hover:to-cricket-bright shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cricket-bright"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Book a Trial Session</span>
          </button>

          <a
            href={`tel:${academy.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-xs sm:text-base text-slate-100 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md hover:border-cricket-green/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cricket-bright shrink-0" />
            <span>Call the Academy</span>
          </a>
        </div>

        {/* Key Verified Badges Grid: 1 column on ultra-compact, 2 on xs & tablet, 4 on lg+ */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4 w-full max-w-5xl">
          <div className="glass-panel rounded-xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="p-1.5 sm:p-2 rounded-lg bg-cricket-green/20 text-cricket-bright shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-cricket-bright" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white truncate">4.8 ★ Google</div>
              <div className="text-[10px] sm:text-xs text-cricket-muted truncate">83 Verified Reviews</div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="p-1.5 sm:p-2 rounded-lg bg-cricket-green/20 text-cricket-bright shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white truncate">Bowenpally</div>
              <div className="text-[10px] sm:text-xs text-cricket-muted truncate">Secunderabad</div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="p-1.5 sm:p-2 rounded-lg bg-cricket-green/20 text-cricket-bright shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white truncate">Dedicated Nets</div>
              <div className="text-[10px] sm:text-xs text-cricket-muted truncate">Turf Pitch Lanes</div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="p-1.5 sm:p-2 rounded-lg bg-cricket-green/20 text-cricket-bright shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-white truncate">Daily Batches</div>
              <div className="text-[10px] sm:text-xs text-cricket-muted truncate">Morning & Evening</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
