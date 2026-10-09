import React from 'react';
import { Clock, Calendar, Flame, Target, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { academy } from '../data/academy';

interface ScheduleSectionProps {
  onOpenTrialModal: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenTrialModal }) => {
  const getPhaseIcon = (name: string) => {
    switch (name) {
      case 'Flame': return Flame;
      case 'Target': return Target;
      case 'Zap': return Zap;
      case 'Shield': return Shield;
      default: return Target;
    }
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 relative bg-[#080d0a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[85vw] max-w-4xl h-80 bg-cricket-green/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cricket-green/10 border border-cricket-green/20 text-cricket-bright text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Batch Timings & Daily Architecture • Super Kings Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Structured Batches & Daily Training Flow
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg">
            Every session at PCA runs on a disciplined timetable designed to maximize ball touches, net repetitions, and recovery.
          </p>
        </div>

        {/* 4 Batch Schedule Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {academy.batchSchedules.map((batch) => (
            <div
              key={batch.id}
              className="glass-panel rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-cricket-green/40 bg-gradient-to-b from-white/[0.03] to-black/40 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-cricket-green/20 text-cricket-bright border border-cricket-green/30">
                    {batch.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {batch.capacity}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cricket-bright transition-colors">
                  {batch.name}
                </h3>

                <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
                    <span>{batch.days}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{batch.timings}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  {batch.idealFor}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-2 rounded-lg text-xs font-bold text-white bg-white/5 hover:bg-cricket-bright hover:text-black transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Select This Batch</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Phase Daily Training Session Anatomy */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cricket-green/30 bg-gradient-to-br from-[#0c1611] via-[#08100c] to-[#040806] shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              The 2-Hour Training Blueprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Inside a PCA Daily Coaching Session
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Every training day follows a calibrated 4-phase sequence to build explosive performance without physical burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {academy.dailySessionRoutine.map((phase) => {
              const Icon = getPhaseIcon(phase.iconName);
              return (
                <div
                  key={phase.phase}
                  className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-cricket-green/20 text-cricket-bright font-extrabold text-xs flex items-center justify-center">
                        {phase.phase}
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {phase.duration}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-cricket-bright shrink-0" />
                      <span>{phase.title}</span>
                    </h4>

                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      {phase.activities.map((act, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-cricket-bright shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Academy Standards Assurance */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-lg sm:text-xl font-extrabold text-white">1 : 8</div>
              <div className="text-[11px] text-slate-400">Coach-to-Student Ratio</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-lg sm:text-xl font-extrabold text-white">Turf & Net</div>
              <div className="text-[11px] text-slate-400">Enclosed Safety Lanes</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-lg sm:text-xl font-extrabold text-white">Video Analysis</div>
              <div className="text-[11px] text-slate-400">Slow-Motion Feedback</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-lg sm:text-xl font-extrabold text-white">Flexible Batches</div>
              <div className="text-[11px] text-slate-400">Exam-Friendly Balancing</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
