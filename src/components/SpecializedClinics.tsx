import React, { useState } from 'react';
import { Zap, Target, Flame, Shield, CheckCircle2, ArrowRight, Sparkles, Wrench } from 'lucide-react';
import { academy } from '../data/academy';

interface SpecializedClinicsProps {
  onOpenTrialModal: (preselectedProgram?: string) => void;
}

export const SpecializedClinics: React.FC<SpecializedClinicsProps> = ({ onOpenTrialModal }) => {
  const [selectedClinicId, setSelectedClinicId] = useState<string>(academy.specializedClinics[0].id);

  const getClinicIcon = (name: string) => {
    switch (name) {
      case 'Zap': return Zap;
      case 'Target': return Target;
      case 'Flame': return Flame;
      case 'Shield': return Shield;
      default: return Target;
    }
  };

  return (
    <section id="clinics" className="py-20 sm:py-28 relative bg-[#070c09] border-t border-b border-white/5 overflow-hidden">
      {/* Ambient stadium glow */}
      <div className="absolute top-1/2 right-1/4 w-[80vw] max-w-2xl h-80 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 font-athletic text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Performance Masterclasses • Specialized Position Labs</span>
          </div>

          <h2 className="athletic-title text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            ELITE POSITION-SPECIFIC MASTERCLASSES
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Beyond standard net practice, players refine high-leverage skills through dedicated position labs equipped with video analysis, stride hurdles, and reaction gear.
          </p>
        </div>

        {/* 4 Specialized Clinic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {academy.specializedClinics.map((clinic) => {
            const Icon = getClinicIcon(clinic.iconName);
            const isSelected = selectedClinicId === clinic.id;

            return (
              <div
                key={clinic.id}
                onMouseEnter={() => setSelectedClinicId(clinic.id)}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between group relative ${
                  isSelected
                    ? 'border-cricket-bright/60 bg-gradient-to-br from-[#0e1c14] to-[#07100b] shadow-xl shadow-emerald-950/40'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Format Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cricket-green/20 border border-cricket-green/30 flex items-center justify-center text-cricket-bright group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-athletic font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300">
                      {clinic.format}
                    </span>
                  </div>

                  <h3 className="athletic-title text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-cricket-bright transition-colors">
                    {clinic.title}
                  </h3>
                  <div className="font-athletic text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                    {clinic.subtitle} • {clinic.targetGroup}
                  </div>

                  {/* Benefit Callout */}
                  <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 text-xs sm:text-sm text-slate-200 mb-5 leading-relaxed font-sans">
                    <span className="font-bold text-emerald-300">Core Performance Impact: </span>
                    {clinic.benefit}
                  </div>

                  {/* Focus Drills List */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-[11px] font-athletic font-bold uppercase tracking-wider text-slate-400">
                      Curriculum & Execution Drills:
                    </h4>
                    <ul className="space-y-1.5 font-sans">
                      {clinic.focusDrills.map((drill, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cricket-bright shrink-0 mt-0.5" />
                          <span>{drill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Equipment / Tech Used */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5 font-sans">
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 mr-1">
                      <Wrench className="w-3 h-3 text-cricket-bright" /> Gear:
                    </span>
                    {clinic.equipmentUsed.map((equip, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/5 text-slate-300 border border-white/10">
                        {equip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-4">
                  <button
                    onClick={() => onOpenTrialModal(clinic.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-athletic font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-white/5 hover:bg-gradient-to-r hover:from-cricket-bright hover:to-emerald-400 hover:text-black border border-white/15 hover:border-transparent transition-all shadow-glow"
                  >
                    <span>Register for {clinic.title.split(' ')[0]} Masterclass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
