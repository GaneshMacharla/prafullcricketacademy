import React, { useState } from 'react';
import { Users, ShieldCheck, ChevronRight, CheckCircle, ArrowRight, Trophy, Zap, Calendar } from 'lucide-react';
import { academy } from '../data/academy';

interface PlayerPathwayProps {
  onOpenTrialModal: (preselectedProgram?: string) => void;
}

export const PlayerPathway: React.FC<PlayerPathwayProps> = ({ onOpenTrialModal }) => {
  const [activeStageId, setActiveStageId] = useState<string>(academy.playerPathways[0].id);

  const activeStage = academy.playerPathways.find(p => p.id === activeStageId) || academy.playerPathways[0];

  return (
    <section id="pathway" className="py-20 sm:py-28 relative bg-[#080d0a] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] max-w-sm h-72 sm:h-96 bg-cricket-green/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-[60vw] max-w-xs h-72 sm:h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Super Kings Academy style) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Age-Graded Progression Matrix • Super Kings Academy Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Player Development Pathway
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg">
            Every child’s cricket journey is unique. We provide a transparent 4-stage roadmap with age-appropriate balls, equipment, and match opportunities.
          </p>

          {/* Pathway Stage Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-8 sm:mt-10 w-full max-w-5xl">
            {academy.playerPathways.map((pathway, index) => {
              const isSelected = activeStageId === pathway.id;
              return (
                <button
                  key={pathway.id}
                  onClick={() => setActiveStageId(pathway.id)}
                  className={`p-3.5 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#132319] to-[#0c1611] border-cricket-bright shadow-lg shadow-emerald-950/60 scale-[1.02]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-cricket-green/30 text-cricket-bright' : 'bg-white/5 text-slate-400'
                      }`}>
                        Stage 0{index + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {pathway.ageBracket}
                      </span>
                    </div>

                    <div className={`text-sm sm:text-base font-bold leading-snug ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {pathway.stageName}
                    </div>
                  </div>

                  <div className={`mt-3 text-[11px] font-semibold flex items-center gap-1 ${
                    isSelected ? 'text-cricket-bright' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    <span>View Curriculum</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pathway Deep-Dive Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 bg-gradient-to-br from-[#0c1611] via-[#09110d] to-[#060a08] shadow-2xl relative">
          
          {/* Top Bar of Active Stage */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                  {activeStage.levelBadge}
                </span>
                <span className="px-3 py-1 rounded-md bg-white/10 text-slate-200 text-xs font-semibold">
                  {activeStage.ageBracket}
                </span>
              </div>
              <h3 id="active-stage-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeStage.stageName}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {activeStage.summary}
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300">
                <Users className="w-3.5 h-3.5 text-cricket-bright" />
                <span>{activeStage.coachRatio}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cricket-bright" />
                <span>{activeStage.trainingFrequency}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span className="max-w-[200px] truncate">{activeStage.matchExposure}</span>
              </div>
            </div>
          </div>

          {/* Curriculum & Verified Outcomes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            
            {/* Left: 5-Point Core Curriculum */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cricket-bright" />
                <span>Core Training Curriculum & Focus Areas</span>
              </h4>

              <div className="space-y-2.5">
                {activeStage.curriculum.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cricket-green/30 transition-colors flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-md bg-cricket-green/20 text-cricket-bright font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stage Outcomes & Trial Callout */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Target Development Outcomes */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-4">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Pathway Outcomes</span>
                </h4>

                <div className="space-y-3">
                  {activeStage.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pathway Trial CTA Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#122218] to-[#0a140e] border border-cricket-green/40 space-y-4 text-center">
                <h5 className="text-sm sm:text-base font-bold text-white">
                  Want your child evaluated for {activeStage.stageName}?
                </h5>
                <p className="text-xs text-slate-300">
                  Book a free baseline assessment with our head coaching staff to confirm their ideal batch tier.
                </p>
                <button
                  onClick={() => onOpenTrialModal(activeStage.stageName)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-cricket-bright to-emerald-400 hover:from-emerald-400 hover:to-cricket-bright shadow-glow transition-all"
                >
                  <span>Book Free {activeStage.stageName} Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
