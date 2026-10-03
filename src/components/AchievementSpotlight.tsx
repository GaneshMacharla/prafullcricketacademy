import React from 'react';
import { Flame, Target, Award, Quote, ShieldAlert, ArrowRight } from 'lucide-react';
import { academy } from '../data/academy';

interface AchievementSpotlightProps {
  onOpenTrialModal: () => void;
}

export const AchievementSpotlight: React.FC<AchievementSpotlightProps> = ({ onOpenTrialModal }) => {
  const ach = academy.recentAchievement;

  return (
    <section id="achievements" className="py-16 sm:py-24 relative bg-[#070c09] border-t border-b border-white/5 overflow-hidden">
      {/* Background glow and subtle stadium lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-cricket-green/10 blur-[70px] sm:blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>HCA League Match Spotlight • Big Stage Performance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Warrior Spirit on the 22 Yards
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg">
            Sick with fever & nausea, unstoppable on the pitch: Cheera Aryan delivers a match-winning 4-wicket masterclass in the official Hyderabad Cricket Association League.
          </p>
        </div>

        {/* Feature Spotlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cricket-green/30 relative overflow-hidden bg-gradient-to-br from-[#0c1611] via-[#09110d] to-[#060a08] shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Player Profile & Match Context */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-cricket-green/20 text-cricket-bright text-xs font-bold uppercase tracking-wider">
                    {ach.tournament}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 text-xs font-medium">
                    vs {ach.opponent}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight pt-1">
                  {ach.player.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                  {ach.player.style} • PCA Academy Prodigy
                </p>
              </div>

              {/* Match Figures Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-cricket-bright font-outfit">
                    9
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    Overs
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white font-outfit">
                    28
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    Runs
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cricket-green/20 border border-cricket-green/40 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-cricket-bright font-outfit">
                    4
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cricket-bright mt-0.5">
                    Wickets
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white font-outfit">
                    3.11
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    Economy
                  </div>
                </div>
              </div>

              {/* The "Mind Over Body" Resilience Story */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>The Anatomy of Pure Heart: Mind Over Body</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ach.story}
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="relative pl-4 border-l-2 border-cricket-green italic text-xs sm:text-sm text-slate-300 space-y-1">
                <Quote className="w-4 h-4 text-cricket-green mb-1" />
                <p>"{ach.quote}"</p>
                <div className="text-[11px] font-bold text-cricket-bright not-italic pt-1">
                  — Prafull Cricket Academy Coaching Philosophy
                </div>
              </div>

            </div>

            {/* Right: Key Dismissals & Top-Order Breakdown */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-cricket-bright" />
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    Dismantling the Senior Top Order
                  </span>
                </div>
                <span className="text-[11px] text-cricket-muted">
                  Official Scorecard
                </span>
              </div>

              <div className="space-y-3">
                {ach.wickets.map((w, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-cricket-green/20 text-cricket-bright font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      W{idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-white truncate">
                          {w.batsman}
                        </span>
                        <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 shrink-0">
                          {w.score} runs • {w.dismissal}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        {w.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Bar */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3 justify-between">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  Train with the coaches who mold state-level competitors.
                </div>
                <button
                  onClick={onOpenTrialModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-cricket-bright to-emerald-500 hover:from-emerald-400 hover:to-cricket-bright shadow-glow transition-all active:scale-95 shrink-0"
                >
                  <Award className="w-4 h-4" />
                  <span>Start Your Cricket Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
