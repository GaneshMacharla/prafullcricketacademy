import React, { useEffect } from 'react';
import { X, Calendar, Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { academy } from '../data/academy';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dynamicWhatsAppMessage = preselectedProgram
    ? `Hi Coach Prafull, I am interested in booking a trial session for the ${preselectedProgram} at PCA - Prafull Cricket Academy, Bowenpally. Please share available batch slots and timings.`
    : academy.whatsappMessage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0e1713] border border-cricket-green/40 rounded-2xl p-5 sm:p-7 shadow-2xl z-10 my-auto overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cricket-bright/10 blur-[60px] pointer-events-none rounded-full"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus:outline-none shrink-0"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cricket-green/15 text-cricket-bright text-[11px] sm:text-xs font-semibold mb-2">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Direct Trial Booking</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Schedule Your Cricket Trial
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Connect directly with Coach Prafull. No forms needed—instant response via WhatsApp or Phone Call.
          </p>
        </div>

        {/* Action Options */}
        <div className="space-y-3.5">
          
          {/* WhatsApp Action */}
          <a
            href={`https://wa.me/918712310862?text=${encodeURIComponent(dynamicWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold shadow-lg shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5 active:scale-95 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black/15 text-black">
                <MessageCircle className="w-5 h-5 fill-black" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">Chat on WhatsApp</div>
                <div className="text-xs text-black/80 font-medium">+91 87123 10862 • Instant Reply</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Phone Call Action */}
          <a
            href={`tel:${academy.rawPhone}`}
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all transform hover:-translate-y-0.5 active:scale-95 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cricket-green/20 text-cricket-bright">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">Call the Academy Directly</div>
                <div className="text-xs text-slate-300">087123 10862 • Speak with Coach</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-cricket-bright group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

        {/* Information Callouts */}
        <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
            <span>Open Daily: 6:00 AM – 11:00 PM (Morning & Evening batches)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
            <span className="truncate">186A, Plassy Lines, Bowenpally, Secunderabad</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>Free trial assessment with no upfront commitment</span>
          </div>
        </div>

      </div>
    </div>
  );
};
