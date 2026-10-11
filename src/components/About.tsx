import React from 'react';
import { Target, Award, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { academy } from '../data/academy';

interface AboutProps {
  onOpenTrialModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenTrialModal }) => {
  const pillars = [
    {
      icon: Target,
      title: "Structured Training Framework",
      desc: "Progressive practice sessions planned around fundamental technique, match readiness, and age-appropriate drills."
    },
    {
      icon: Users,
      title: "Individual Player Attention",
      desc: "Hands-on coaching in batting stance, bowling biomechanics, and fielding technique with constructive guidance."
    },
    {
      icon: ShieldCheck,
      title: "Discipline & Athletic Fitness",
      desc: "Instilling sporting values, punctual routines, mental stamina, and fitness habits that benefit young cricketers on and off the pitch."
    },
    {
      icon: Award,
      title: "Practical Net & Match Practice",
      desc: "Simulated match situations, target bowling grids, and net sessions to build composure during competitive game scenarios."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-[#0a0f0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            About PCA Prafull Cricket Academy
          </span>
          <h2 className="athletic-title text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            WHERE PASSION MEETS DISCIPLINE
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Dedicated cricket training located at Plassy Lines, Bowenpally, Secunderabad. We focus on building rock-solid foundations, match confidence, and sporting discipline for young players.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Authentic Academy Visual Card */}
          <div className="lg:col-span-5 relative group w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-cricket-card shadow-2xl">
              <img
                src="/images/academy/pca-gmaps-04.jpg"
                alt="PCA Prafull Cricket Academy coach instructing young player on bowling release mechanics"
                className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-h-[520px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d0a] via-transparent to-transparent"></div>
              
              {/* Image Attribution & Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-[#080d0a]/90 backdrop-blur-md border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between text-xs text-cricket-bright font-semibold mb-1 gap-1">
                  <span>Authentic Coaching Session</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">Google Maps Verified Photo</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-200">
                  Direct hands-on posture & high-arm release alignment with training hurdles at Bowenpally ground.
                </p>
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cricket-green to-emerald-600 opacity-20 blur-xl group-hover:opacity-35 transition-opacity -z-10"></div>
          </div>

          {/* Pillars & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Coaching Designed for Technical Mastery & Confidence
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether a child is picking up a cricket bat for the very first time or an intermediate player looking to refine bowling run-up and shot timing, PCA provides a supportive, high-energy environment right here in Bowenpally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-white/10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cricket-green/15 text-cricket-bright flex items-center justify-center mb-2.5 sm:mb-3">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm bg-cricket-bright text-black hover:bg-emerald-400 shadow-glow transition-all"
              >
                <span>Book a Trial Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={academy.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center sm:text-left text-xs sm:text-sm font-semibold text-slate-300 hover:text-cricket-bright transition-colors py-2"
              >
                View Academy on Google Maps →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
