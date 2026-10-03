import React from 'react';
import { Award, Zap, Target, Shield, Users, Trophy } from 'lucide-react';
import { academy } from '../data/academy';

interface CoachesSectionProps {
  onOpenTrialModal: () => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onOpenTrialModal }) => {
  const getCoachIcon = (role: string) => {
    if (role.includes('Founder')) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (role.includes('Head Coach')) return <Award className="w-5 h-5 text-cricket-bright" />;
    if (role.includes('Fast Bowling')) return <Zap className="w-5 h-5 text-yellow-400" />;
    if (role.includes('Senior Coach')) return <Target className="w-5 h-5 text-emerald-400" />;
    if (role.includes('Fielding')) return <Shield className="w-5 h-5 text-blue-400" />;
    return <Users className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="coaches" className="py-16 sm:py-24 relative bg-[#090e0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cricket-bright bg-cricket-green/10 border border-cricket-green/20 px-3 py-1 rounded-md mb-3">
            Elite Mentorship & Culture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet the PCA Coaching Panel
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg">
            Big-stage achievements in the HCA League reflect the daily discipline, tactical clarity, and grit instilled by our dedicated coaching team.
          </p>
        </div>

        {/* Coaches Grid: 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {academy.coaches.map((coach, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cricket-green/40 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 bg-gradient-to-br from-[#101b15]/80 via-[#0c1611]/90 to-[#080d0a]/90 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getCoachIcon(coach.role)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cricket-bright bg-cricket-green/15 px-2.5 py-1 rounded-full border border-cricket-green/30">
                    {coach.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-cricket-bright transition-colors">
                  {coach.name}
                </h3>
                <div className="text-xs font-semibold text-slate-400 mt-0.5 mb-3">
                  {coach.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {coach.contribution}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs text-cricket-muted">
                <span>Prafull Cricket Academy</span>
                <span className="text-cricket-bright font-semibold group-hover:translate-x-1 transition-transform">
                  PCA Panel →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-cricket-green/30 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-cricket-green/10 via-[#0a120e] to-cricket-green/5">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to Train Under Our Expert Coaching Panel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Join daily morning or evening batches at Bowenpally. Direct slot booking available on WhatsApp.
            </p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-cricket-bright to-emerald-500 hover:from-emerald-400 hover:to-cricket-bright shadow-glow transition-all active:scale-95 shrink-0"
          >
            Connect with Coaching Desk
          </button>
        </div>

      </div>
    </section>
  );
};
