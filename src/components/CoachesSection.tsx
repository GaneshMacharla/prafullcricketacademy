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
    <section id="coaches" className="py-20 sm:py-28 relative bg-[#060b08] border-t border-white/5 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[85vw] max-w-3xl h-96 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            Elite Mentorship & Culture • Coaching Beyond Pedagogy
          </span>
          <h2 className="athletic-title text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-normal">
            MEET THE PCA COACHING PANEL
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Big-stage achievements in the HCA League reflect the daily discipline, tactical clarity, and grit instilled by our dedicated coaching team.
          </p>
        </div>

        {/* Head Coach Prafull Spotlight Banner (Coaching Beyond style Hero Mentor) */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-400/40 bg-gradient-to-br from-[#121f18] via-[#0b1611] to-[#060b08] shadow-2xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 blur-[90px] pointer-events-none rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-athletic text-xs font-bold uppercase tracking-wider">
                  ★ Head Coach & Managing Director
                </span>
                <span className="px-3 py-1 rounded-full bg-cricket-green/20 text-cricket-bright border border-cricket-green/30 font-athletic text-xs font-bold uppercase tracking-wider">
                  HCA League Tactical Director
                </span>
              </div>

              <h3 className="athletic-title text-2xl sm:text-4xl font-bold text-white tracking-normal">
                Coach Prafull
              </h3>
              <p className="font-athletic text-base sm:text-lg font-bold uppercase tracking-wider text-emerald-400">
                Architect of the PCA High-Performance Culture
              </p>

              <blockquote className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 italic text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
                "Our coaching standard is uncompromising: we teach young cricketers to read the match three balls ahead. Real match temperament isn't built in quiet nets; it is forged under pressure and tactical accountability."
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Directing daily player pathways, match simulation scenarios, and high-speed BOLA sessions to prepare athletes for official Hyderabad Cricket Association League competition.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-white/10 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-lg shadow-amber-500/30">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <div className="stat-number text-3xl text-white">20+ YRS</div>
                <div className="text-xs font-athletic font-bold uppercase tracking-wider text-slate-400 mt-1">
                  Cumulative Academy Pedigree
                </div>
              </div>
              <button
                onClick={onOpenTrialModal}
                className="w-full py-3 rounded-full font-athletic font-bold uppercase tracking-wider text-xs text-black bg-gradient-to-r from-cricket-bright to-emerald-400 shadow-glow hover:shadow-glow-lg transition-all"
              >
                Schedule Assessment with Coach Prafull
              </button>
            </div>
          </div>
        </div>

        {/* Specialists Grid: 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {academy.coaches.map((coach, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 bg-gradient-to-br from-[#101b15]/90 via-[#0c1611]/90 to-[#080d0a]/90 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getCoachIcon(coach.role)}
                  </div>
                  <span className="font-athletic text-xs font-bold uppercase tracking-wider text-cricket-bright bg-cricket-green/15 px-3 py-1 rounded-full border border-cricket-green/30">
                    {coach.badge}
                  </span>
                </div>

                <h3 className="athletic-title text-xl sm:text-2xl font-bold text-white tracking-normal group-hover:text-cricket-bright transition-colors">
                  {coach.name}
                </h3>
                <div className="font-athletic text-xs font-bold uppercase tracking-wider text-slate-400 mt-1 mb-3">
                  {coach.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {coach.contribution}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-sans">
                <span>Prafull Cricket Academy</span>
                <span className="font-athletic font-bold uppercase tracking-wider text-cricket-bright group-hover:translate-x-1 transition-transform">
                  PCA Panel →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-emerald-500/10 via-[#0a120e] to-emerald-500/5 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-athletic text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              Ready to Train Under Our Expert Coaching Panel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Join daily morning or evening batches at Bowenpally. Direct slot booking available on WhatsApp.
            </p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-athletic font-bold text-xs sm:text-sm uppercase tracking-wider text-black bg-gradient-to-r from-cricket-bright to-emerald-400 hover:from-emerald-300 hover:to-cricket-bright shadow-glow transition-all active:scale-95 shrink-0"
          >
            Connect with Coaching Desk
          </button>
        </div>

      </div>
    </section>
  );
};
