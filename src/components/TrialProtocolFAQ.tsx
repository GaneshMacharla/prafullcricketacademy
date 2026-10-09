import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Calendar, Phone, MessageCircle, CheckCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { academy } from '../data/academy';

interface TrialProtocolFAQProps {
  onOpenTrialModal: () => void;
}

export const TrialProtocolFAQ: React.FC<TrialProtocolFAQProps> = ({ onOpenTrialModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(academy.faqs[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Trial & Enrollment', 'Training & Batches', 'Equipment & Safety', 'Match Exposure'];

  const filteredFaqs = selectedCategory === 'All'
    ? academy.faqs
    : academy.faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  return (
    <section id="trial-protocol" className="py-20 sm:py-28 relative bg-[#060a08] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[85vw] max-w-4xl h-80 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Day-1 Trial Assessment Protocol */}
        <div className="mb-20 sm:mb-28">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Day-1 Player Assessment • Zero Risk Trial</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What Happens on Your Free Trial Day
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg">
              We don't believe in generic sales pitches. Come experience real coaching, test your skills in the nets, and receive a coach evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {academy.trialSteps.map((step) => (
              <div
                key={step.step}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-white/[0.03] to-black/50 flex flex-col justify-between relative group hover:border-cricket-green/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-cricket-green/20 border border-cricket-green/30 text-cricket-bright font-extrabold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-slate-300 border border-white/10">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cricket-bright transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-emerald-500/20 text-xs text-emerald-300 font-semibold flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trial Booking Bar */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-[#0a1510] to-black/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg font-bold text-white">
                Ready to take the pitch for your assessment?
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                Equipment is provided. Sessions available daily between 6:00 AM – 11:00 AM & 4:30 PM – 7:00 PM.
              </div>
            </div>

            <button
              onClick={onOpenTrialModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-cricket-bright to-emerald-400 hover:from-emerald-400 hover:to-cricket-bright shadow-glow transition-all shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Trial Assessment</span>
            </button>
          </div>
        </div>

        {/* Section 2: Parent & Player FAQs */}
        <div id="faqs" className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-cricket-bright" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything Parents Want to Know
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Clear, transparent answers on equipment, batch flexibility, coach qualifications, and match exposure.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-cricket-bright text-black font-bold shadow-glow'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-gradient-to-br from-[#0c1611] to-[#07100b] border-cricket-green/50 shadow-lg shadow-emerald-950/30'
                      : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cricket-bright shrink-0"></span>
                      <span className="text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cricket-bright' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified PCA Academy Policy • Bowenpally</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need More Assistance Box */}
          <div className="mt-8 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-sm font-bold text-white">Have a specific question not listed here?</div>
              <div className="text-xs text-slate-400">Speak directly with Head Coach Prafull or our coaching coordinators.</div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${academy.rawPhone}`}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-cricket-bright" />
                <span>Call Coach</span>
              </a>
              <a
                href={`https://wa.me/${academy.rawPhone.replace('+', '')}?text=${encodeURIComponent(academy.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#25D366] hover:bg-[#20ba5a] flex items-center gap-1.5 transition-all shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
