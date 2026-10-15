import React from 'react';
import { Calendar, Phone, Star, ArrowRight, ShieldCheck, Zap, Trophy, Flame } from 'lucide-react';
import { academy } from '../data/academy';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Image with High-Contrast Sports Stadium Treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/gallery/pca-champions-team-trophies-wide.jpg"
          alt="Prafull Cricket Academy champions squad and coaching staff"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.12]"
        />
        {/* Layered athletic gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b08]/90 via-[#060b08]/75 to-[#060b08]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b08]/95 via-[#060b08]/60 to-[#060b08]/90"></div>
        {/* Floodlight beams */}
        <div className="absolute top-0 left-1/4 w-[60vw] max-w-xl h-96 bg-emerald-500/15 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-1/4 w-[50vw] max-w-lg h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full"></div>
      </div>

      {/* Main Hero Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full my-auto">
        
        {/* League Prestige & Verified Rating Pill (Super Kings style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-athletic text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>Dussehra Cup Platinum Champions</span>
          </span>

          <a 
            href="#gallery"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-athletic text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/25 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-cricket-bright animate-ping"></span>
            <span>28+ Real Academy Photos & Match Videos</span>
          </a>

          <a
            href={academy.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md hover:border-cricket-bright transition-all group"
          >
            <div className="flex items-center gap-1 text-cricket-bright">
              <Star className="w-3.5 h-3.5 fill-cricket-bright text-cricket-bright" />
              <span className="font-athletic font-bold text-xs text-white">4.8 / 5.0</span>
            </div>
            <span className="text-slate-400 text-xs">|</span>
            <span className="text-[11px] font-medium text-slate-300 group-hover:text-cricket-bright transition-colors font-sans">
              Google Verified ({academy.reviewCount} Reviews)
            </span>
            <ArrowRight className="w-3 h-3 text-cricket-bright group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Main Athletic Headline (Super Kings Academy + Coaching Beyond Impact) */}
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="inline-block">
            <span className="athletic-badge text-xs sm:text-sm tracking-widest text-cricket-bright bg-cricket-green/10 border border-cricket-green/25 px-3.5 py-1 rounded-full">
              BOWENPALLY, SECUNDERABAD • HIGH-PERFORMANCE SANCTUARY
            </span>
          </div>

          <h1 className="athletic-title text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.02] tracking-normal">
            BUILD YOUR GAME. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cricket-bright via-emerald-300 to-amber-300">
              DOMINATE THE 22 YARDS.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-sans font-normal leading-relaxed pt-2 px-2">
            The elite training destination for young cricketers aiming for league representation and state excellence. Biomechanical net drills, 140+ km/h bowling machines, and high-intensity match play under floodlights.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-athletic font-bold text-sm sm:text-base uppercase tracking-wider text-black bg-gradient-to-r from-cricket-bright via-emerald-400 to-green-500 hover:from-emerald-300 hover:to-cricket-bright shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Book Free Assessment Trial</span>
          </button>

          <a
            href={`tel:${academy.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-athletic font-bold text-sm sm:text-base uppercase tracking-wider text-slate-100 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md hover:border-cricket-bright transition-all"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cricket-bright shrink-0" />
            <span>Call Coach Prafull: {academy.phone}</span>
          </a>
        </div>

        {/* Quick Navigation Anchor Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-athletic font-bold uppercase tracking-wider">
          <a href="#pathway" className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5 hover:text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>01 Player Pathway</span>
          </a>
          <a href="#methodology" className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5 hover:text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>02 4-Pillar System</span>
          </a>
          <a href="#achievements" className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5 hover:text-red-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
            <span>03 HCA Match Center</span>
          </a>
          <a href="#coaches" className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5 hover:text-cricket-bright">
            <span className="w-1.5 h-1.5 rounded-full bg-cricket-bright"></span>
            <span>04 Coaching Panel</span>
          </a>
          <a href="#schedule" className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5 hover:text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>05 Daily Batches</span>
          </a>
        </div>

        {/* Broadcast Scoreboard KPI Dashboard (Super Kings / Coaching Beyond HUD) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl">
          <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-amber-400/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-athletic font-bold uppercase tracking-wider text-slate-400">Google Standing</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="stat-number text-3xl sm:text-4xl text-white group-hover:text-amber-300 transition-colors">
              4.8 <span className="text-base sm:text-lg font-bold text-amber-400">★</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-1">
              83+ Verified Local Reviews
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-emerald-400/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-athletic font-bold uppercase tracking-wider text-slate-400">Pitch Infrastructure</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="stat-number text-3xl sm:text-4xl text-white group-hover:text-cricket-bright transition-colors">
              8+ <span className="text-base sm:text-lg font-bold text-emerald-400">NETS</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-1">
              Turf, Cement & Astro Lanes
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-cricket-bright/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-athletic font-bold uppercase tracking-wider text-slate-400">League Success</span>
              <Trophy className="w-4 h-4 text-cricket-bright" />
            </div>
            <div className="stat-number text-3xl sm:text-4xl text-white group-hover:text-cricket-bright transition-colors">
              15+ <span className="text-base sm:text-lg font-bold text-cricket-bright">CAPS</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-1">
              HCA League & State Selections
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-cyan-400/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-athletic font-bold uppercase tracking-wider text-slate-400">Operating Clock</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="stat-number text-3xl sm:text-4xl text-white group-hover:text-cyan-300 transition-colors">
              6 AM - 11 PM
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-1">
              Match-Grade Floodlit Sessions
            </div>
          </div>
        </div>

      </div>

      {/* Broadcast Live Ticker Strip (Super Kings Academy style) */}
      <div className="relative z-10 w-full mt-10 bg-black/80 border-y border-white/10 backdrop-blur-md py-2.5 overflow-hidden">
        <div className="animate-ticker flex items-center gap-8 text-xs font-athletic font-bold uppercase tracking-wider text-slate-300">
          <span className="flex items-center gap-2 text-cricket-bright shrink-0">
            <Flame className="w-3.5 h-3.5 fill-cricket-bright" /> 2026 CRICKET ADMISSIONS OPEN
          </span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-white">MORNING (6:00 AM) & EVENING (4:30 PM) BATCHES</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-amber-300">OFFICIAL HCA DIVISION LEAGUE MATCH SIMULATIONS</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-white">8+ HIGH-SPEC PRACTICE NETS WITH FLOODLIGHTS</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-cyan-300">140+ KM/H BOLA BOWLING MACHINE REPS</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-white">1:8 COACH-TO-PLAYER DRILL RATIO</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-cricket-bright">4.8★ GOOGLE RATED (83+ VERIFIED REVIEWS)</span>
          <span className="text-slate-500">•</span>
          
          {/* Repeated for continuous marquee scroll */}
          <span className="flex items-center gap-2 text-cricket-bright shrink-0">
            <Flame className="w-3.5 h-3.5 fill-cricket-bright" /> 2026 CRICKET ADMISSIONS OPEN
          </span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-white">MORNING (6:00 AM) & EVENING (4:30 PM) BATCHES</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-amber-300">OFFICIAL HCA DIVISION LEAGUE MATCH SIMULATIONS</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-white">8+ HIGH-SPEC PRACTICE NETS WITH FLOODLIGHTS</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-cyan-300">140+ KM/H BOLA BOWLING MACHINE REPS</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-white">1:8 COACH-TO-PLAYER DRILL RATIO</span>
          <span className="text-slate-500">•</span>
          <span className="shrink-0 text-cricket-bright">4.8★ GOOGLE RATED (83+ VERIFIED REVIEWS)</span>
        </div>
      </div>
    </section>
  );
};
