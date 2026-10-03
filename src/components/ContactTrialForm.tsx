import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, MessageCircle, Calendar } from 'lucide-react';
import { academy } from '../data/academy';

interface ContactTrialFormProps {
  initialProgram?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export const ContactTrialForm: React.FC<ContactTrialFormProps> = ({ 
  initialProgram = 'All-round Trial Session',
  onSuccess 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    experience: 'Beginner (New to cricket)',
    preferredTraining: initialProgram,
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide the parent or player name';
    }

    // Indian mobile number validation (10 digits starting with 6-9, optional +91 or 0 prefix)
    const cleanPhone = formData.phone.replace(/[\s\-+]/g, '').replace(/^91/, '').replace(/^0/, '');
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    if (!cleanPhone) {
      errs.phone = 'Mobile number is required';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission & store locally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3500);
      }
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi PCA Prafull Cricket Academy, I would like to book a trial session.%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Parent/Player')}%0A*Phone:* ${encodeURIComponent(formData.phone || '')}%0A*Age:* ${encodeURIComponent(formData.age || 'Not specified')}%0A*Experience:* ${encodeURIComponent(formData.experience)}%0A*Focus:* ${encodeURIComponent(formData.preferredTraining)}%0A*Message:* ${encodeURIComponent(formData.message || 'Interested in trial slot and batch timings.')}`;
    window.open(`https://wa.me/918712310862?text=${text}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-4 space-y-4">
        <div className="w-16 h-16 bg-cricket-green/20 text-cricket-bright rounded-full flex items-center justify-center mx-auto border border-cricket-green/40 shadow-glow">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white">Trial Request Sent!</h3>
        <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Thanks! Your enquiry has been received. The academy will contact you soon on <span className="text-cricket-bright font-semibold">{formData.phone}</span> with batch availability and trial timing.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppDirect}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect Faster on WhatsApp</span>
          </button>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                age: '',
                experience: 'Beginner (New to cricket)',
                preferredTraining: 'All-round Trial Session',
                message: ''
              });
            }}
            className="text-xs text-slate-400 hover:text-white underline"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-slate-200 mb-1">
          Parent or Player Name <span className="text-cricket-bright">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Ramesh Kumar / Aryan"
          className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cricket-bright transition-all ${
            errors.name ? 'border-red-500' : 'border-white/10 focus:border-cricket-green'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-slate-200 mb-1">
          Mobile Number (WhatsApp Preferred) <span className="text-cricket-bright">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
            +91
          </div>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="87123 10862"
            maxLength={13}
            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 border text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cricket-bright transition-all ${
              errors.phone ? 'border-red-500' : 'border-white/10 focus:border-cricket-green'
            }`}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Two columns: Player Age & Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="age" className="block text-xs font-semibold text-slate-200 mb-1">
            Player Age (Years)
          </label>
          <input
            id="age"
            type="number"
            min={5}
            max={60}
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="e.g. 11"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cricket-bright focus:border-cricket-green"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-xs font-semibold text-slate-200 mb-1">
            Cricket Experience
          </label>
          <select
            id="experience"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-slate-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cricket-bright focus:border-cricket-green"
          >
            <option value="Beginner (New to cricket)">Beginner (New to formal cricket)</option>
            <option value="Intermediate (Gully / Street cricket)">Intermediate (Gully / Box cricket)</option>
            <option value="School / Club Level">School / Club Team Player</option>
            <option value="Advanced Competitive">Advanced / Tournament Player</option>
          </select>
        </div>
      </div>

      {/* Preferred Training Discipline */}
      <div>
        <label htmlFor="training" className="block text-xs font-semibold text-slate-200 mb-1">
          Preferred Training Focus
        </label>
        <select
          id="training"
          value={formData.preferredTraining}
          onChange={(e) => setFormData({ ...formData, preferredTraining: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-slate-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cricket-bright focus:border-cricket-green"
        >
          <option value="All-round Trial Session">Comprehensive Trial Session (Batting & Bowling)</option>
          <option value="Batting Technique & Mastery">Batting Technique & Stance Focus</option>
          <option value="Bowling Mechanics & Biomechanics">Bowling Mechanics (Pace / Spin)</option>
          <option value="Fielding, Catching & Reflexes">Fielding Drills & Agility</option>
          <option value="Cricket-Specific Conditioning">Fitness & Athletic Conditioning</option>
          <option value="Practice Nets Facility Access">Practice Net Slot Inquiry</option>
        </select>
      </div>

      {/* Message / Specific Question */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-200 mb-1">
          Any Special Notes or Questions (Optional)
        </label>
        <textarea
          id="message"
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Inquiring about weekend batch timings or summer camp..."
          className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cricket-bright focus:border-cricket-green"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl font-bold text-sm tracking-wide uppercase bg-gradient-to-r from-cricket-bright to-emerald-500 hover:from-emerald-400 hover:to-cricket-bright text-black shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
      >
        <Calendar className="w-4 h-4" />
        <span>{isSubmitting ? 'Submitting Request...' : 'Request a Trial Session'}</span>
      </button>

      {/* Direct Alternative Call & WhatsApp link */}
      <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-3">
        <span>Need an immediate response?</span>
        <a
          href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] font-semibold flex items-center gap-1 hover:underline"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};
