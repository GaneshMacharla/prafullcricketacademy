import React, { useState } from 'react';
import { Target, Zap, Shield, Flame, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';
import { academy, Program } from '../data/academy';

interface ProgramsProps {
  onOpenTrialModal: (preselectedProgram?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenTrialModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Target': return Target;
      case 'Zap': return Zap;
      case 'Shield': return Shield;
      case 'Flame': return Flame;
      default: return Target;
    }
  };

  const filteredPrograms = activeTab === 'all' 
    ? academy.programs 
    : academy.programs.filter(p => p.id === activeTab);

  return (
    <section id="programs" className="py-20 sm:py-28 relative bg-[#080d0a] overflow-hidden">
      {/* Floodlight glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl h-64 sm:h-96 bg-cricket-green/5 blur-[90px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cricket-bright bg-cricket-green/10 border border-cricket-green/20 px-3 py-1 rounded-md mb-3">
            Training Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized Cricket Coaching Programs
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-base sm:text-lg">
            Structured skill development modules designed to elevate your technical precision, physical readiness, and in-game tactical maturity.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-cricket-bright text-black shadow-glow'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All Programs ({academy.programs.length})
            </button>
            {academy.programs.map(prog => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === prog.id
                    ? 'bg-cricket-bright text-black shadow-glow'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {prog.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {filteredPrograms.map((prog: Program) => {
            const Icon = getIcon(prog.iconName);
            return (
              <div
                key={prog.id}
                className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between border border-white/10 group relative"
              >
                <div>
                  {/* Top Bar with Icon & Age Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cricket-green/20 border border-cricket-green/40 flex items-center justify-center text-cricket-bright group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 rounded-full">
                      <Users className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
                      <span>{prog.ageGroups}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cricket-bright transition-colors">
                    {prog.name}
                  </h3>
                  <div className="text-xs font-semibold text-cricket-bright mb-3">
                    {prog.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Focus Areas List */}
                  <div className="mb-5 space-y-2 bg-black/30 p-3.5 sm:p-4 rounded-xl border border-white/5">
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Training Focus:
                    </div>
                    {prog.focusAreas.map((focus, i) => (
                      <div key={i} className="flex items-start sm:items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cricket-bright shrink-0 mt-0.5 sm:mt-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta & Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cricket-green shrink-0" />
                    <span>{prog.schedule}</span>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(prog.name)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-cricket-green/20 hover:bg-cricket-bright text-cricket-bright hover:text-black border border-cricket-green/40 hover:border-transparent transition-all"
                  >
                    <span>Request Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">
            ℹ️ Training batches are grouped by age and skill proficiency. Trial session evaluations help coaches recommend the optimal batch.
          </p>
        </div>

      </div>
    </section>
  );
};
