import React from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { academy } from '../data/academy';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#0a0f0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            Direct Contact & Instant Trial Enrollment
          </span>
          <h2 className="athletic-title text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            CONNECT DIRECTLY WITH PCA
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            No long registration forms required. Connect directly with our coaching desk via WhatsApp or Phone Call for instant batch timings, fee details, and trial slot confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct WhatsApp & Mobile Contact Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#25D366]/40 relative overflow-hidden bg-gradient-to-br from-[#0e1d16] via-[#0b1611] to-[#080d0a] shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#25D366]/10 blur-[60px] pointer-events-none rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-bold uppercase tracking-wider">
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp Instant Desk</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Fastest Response
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Chat Directly on WhatsApp
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  Message us directly to book a trial session, inquire about morning/evening batches, fee structures, or age eligibility. Send a text or voice note anytime.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-black bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5 active:scale-95 shrink-0"
                  >
                    <MessageCircle className="w-5 h-5 fill-black" />
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 text-xs font-mono text-slate-300">
                    <span className="text-slate-400">Number:</span>
                    <span className="font-bold text-white">+91 87123 10862</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Mobile Call Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cricket-green/30 relative overflow-hidden bg-gradient-to-br from-[#121e18] via-[#0d1612] to-[#080d0a] shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cricket-bright/10 blur-[60px] pointer-events-none rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cricket-green/20 border border-cricket-green/40 text-cricket-bright text-xs font-bold uppercase tracking-wider">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>Mobile Phone Call</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Direct Coach Line
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Call the Academy Desk
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  Speak directly with Coach Prafull and our training staff. Discuss player background, experience level, and get your questions answered immediately.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`tel:${academy.rawPhone}`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-cricket-bright to-emerald-500 hover:from-emerald-400 hover:to-cricket-bright shadow-glow transition-all transform hover:-translate-y-0.5 active:scale-95 shrink-0"
                  >
                    <Phone className="w-5 h-5 fill-black" />
                    <span>Call 087123 10862</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 text-xs font-mono text-slate-300">
                    <span className="text-slate-400">Mobile:</span>
                    <span className="font-bold text-white">087123 10862</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Location Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="glass-panel rounded-xl p-4 border border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-cricket-bright shrink-0" />
                <div>
                  <span className="font-bold text-white block">Daily Operating Hours</span>
                  <span>Open Daily • 6:00 AM – 11:00 PM</span>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-4 border border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cricket-bright shrink-0" />
                <div>
                  <span className="font-bold text-white block">Academy Venue</span>
                  <span className="truncate block">Plassy Lines, Bowenpally</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: What to Expect & Trial Guidance */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
                  <span>Free Trial Session Highlights</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  What to Expect in a Trial Session
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Join a live training session at our Bowenpally ground to experience the coaching environment before joining:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cricket-green/20 text-cricket-bright shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Batting & Bowling Skill Assessment</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Our coaches evaluate stance, grip, run-up, and hand-eye coordination.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cricket-green/20 text-cricket-bright shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Live Practice Net Experience</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Face live bowling in dedicated practice nets on turf/matting wickets.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cricket-green/20 text-cricket-bright shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Personalized Batch Recommendation</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Tailored guidance for parents on beginner vs advanced training batches.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cricket-green/20 text-cricket-bright shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">No Upfront Commitment</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Attend the trial, meet the coaches, and inspect facilities before enrolling.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Banner inside Box */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <a
                  href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[#25D366] font-bold uppercase tracking-wider">Tap to Book Trial</div>
                      <div className="text-sm font-bold text-white truncate group-hover:text-[#25D366] transition-colors">
                        Send WhatsApp Message
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#25D366] shrink-0 ml-2">Chat Now →</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
