import React, { useState } from 'react';
import { Target, Brain, Flame, Shield, CheckCircle2, ArrowRight, Sparkles, Quote } from 'lucide-react';
import { academy } from '../data/academy';

interface MethodologySectionProps {
  onOpenTrialModal: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenTrialModal }) => {
  const [activePillarId, setActivePillarId] = useState<string>(academy.methodology[0].id);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return Target;
      case 'Brain': return Brain;
      case 'Flame': return Flame;
      case 'Shield': return Shield;
      default: return Target;
    }
  };

  const activePillar = academy.methodology.find(p => p.id === activePillarId) || academy.methodology[0];
  const ActiveIcon = getPillarIcon(activePillar.iconName);

  return (
    <section id="methodology" className="py-20 sm:py-28 relative bg-[#060a08] border-t border-white/5 overflow-hidden">
      {/* Stadium Floodlight Ambiance Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-72 sm:h-96 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-[60vw] max-w-xs h-72 sm:h-80 bg-amber-500/5 blur-[90px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Coaching Beyond inspired) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-cricket-bright font-athletic text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cricket-bright" />
            <span>The High-Performance Framework • Coaching Beyond Pedagogy</span>
          </div>

          <h2 className="athletic-title text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            THE 4-PILLAR PCA DEVELOPMENT SYSTEM
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Elite cricketers are not made by random net practice. Our structured curriculum unites technical biomechanics, tactical chess, sports science conditioning, and warrior temperament.
          </p>

          {/* Interactive Pillar Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-8 sm:mt-10 w-full max-w-4xl">
            {academy.methodology.map((pillar) => {
              const Icon = getPillarIcon(pillar.iconName);
              const isSelected = activePillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-b from-emerald-950/90 to-[#0a1510] border-cricket-bright shadow-lg shadow-emerald-950/60 scale-[1.02]'
                      : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[11px] font-athletic font-extrabold uppercase tracking-widest ${
                      isSelected ? 'text-cricket-bright' : 'text-slate-500'
                    }`}>
                      PILLAR {pillar.pillarNumber}
                    </span>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      isSelected ? 'text-cricket-bright' : 'text-slate-400 group-hover:text-white'
                    }`} />
                  </div>
                  <div className={`font-athletic text-sm sm:text-base font-black uppercase tracking-wide leading-tight ${
                    isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {pillar.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Detailed Spotlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 bg-gradient-to-br from-[#0c1813] via-[#08110d] to-[#040806] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Pillar Breakdown & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-cricket-bright border border-emerald-500/20 font-athletic text-xs font-bold uppercase tracking-wider mb-3">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>Pillar {activePillar.pillarNumber} Overview</span>
                </div>
                <h3 className="athletic-title text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {activePillar.title}
                </h3>
                <p className="font-athletic text-sm sm:text-base font-bold uppercase tracking-wider text-emerald-400 mt-1">
                  {activePillar.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed font-sans">
                  {activePillar.description}
                </p>
              </div>

              {/* Coach Philosophy Quote */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative shadow-inner">
                <Quote className="w-8 h-8 text-emerald-500/20 absolute top-3 right-4" />
                <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed pr-6 font-sans">
                  "{activePillar.quote}"
                </p>
                <div className="mt-3 text-xs font-athletic font-bold uppercase tracking-wider text-cricket-bright">
                  — {activePillar.coach} • PCA Coaching Panel
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenTrialModal}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-athletic font-black text-xs sm:text-sm uppercase tracking-wider text-black bg-gradient-to-r from-cricket-bright via-emerald-400 to-green-500 hover:from-emerald-300 hover:to-cricket-bright shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Experience This in a Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Key Practices & Specialized Drills */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Core Principles */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Core Technical Mandates</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {activePillar.keyPractices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature Training Drills */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-black/60 border border-emerald-500/20 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>PCA Signature Drills</span>
                </h4>
                <div className="space-y-2">
                  {activePillar.drills.map((drill, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs sm:text-sm text-slate-200 font-medium flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{drill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
