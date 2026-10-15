import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin, Star } from 'lucide-react';
import { academy } from '../data/academy';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Pathways', href: '#pathway' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Masterclasses', href: '#clinics' },
    { label: 'Batches', href: '#schedule' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Trial Protocol', href: '#trial-protocol' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 sm:py-3' 
          : 'py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-black/75 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2.5'
            : 'bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-3'
        }`}>
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-lg shrink-0">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-amber-700 border border-amber-400/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                <span className="font-athletic font-bold text-white text-xs sm:text-base tracking-tight">PCA</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cricket-bright rounded-full border-2 border-black animate-pulse"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-athletic font-bold text-white text-sm sm:text-lg lg:text-xl tracking-wide uppercase group-hover:text-cricket-bright transition-colors truncate">
                    Prafull Cricket Academy
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] font-athletic font-bold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
                    <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" /> 4.8★
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-1 font-medium truncate font-sans">
                  <MapPin className="w-3 h-3 text-cricket-bright shrink-0" /> Bowenpally, Secunderabad
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Coaching Beyond style) */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-athletic text-[14px] font-bold tracking-wider uppercase text-slate-300 hover:text-cricket-bright transition-colors relative py-1 focus:outline-none focus:text-cricket-bright after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cricket-bright hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTAs (Desktop) */}
            <div className="hidden xl:flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${academy.rawPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors focus:ring-2 focus:ring-cricket-green shrink-0 font-sans"
                title="Call Head Coach Prafull"
              >
                <Phone className="w-3.5 h-3.5 text-cricket-bright" />
                <span>{academy.phone}</span>
              </a>

              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-athletic font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-cricket-bright via-emerald-400 to-green-500 hover:from-emerald-300 hover:to-cricket-bright text-black shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cricket-bright shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Assessment</span>
              </button>
            </div>

            {/* Mobile & Tablet Toggle */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <button
                onClick={onOpenTrialModal}
                className="px-3 py-1.5 text-[11px] font-athletic font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-cricket-bright to-emerald-400 text-black shadow-glow"
              >
                Book Trial
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-full bg-white/10 border border-white/15 text-slate-200 hover:text-white focus:outline-none shrink-0"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer (High-End Sports Menu) */}
      {isMobileMenuOpen && (
        <div className="xl:hidden max-w-7xl mx-auto px-3 sm:px-6 mt-2">
          <div className="bg-[#090f0c]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-athletic font-bold uppercase tracking-wider text-slate-200 bg-white/[0.03] hover:bg-white/10 hover:text-cricket-bright transition-colors border border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${academy.rawPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/5 border border-white/15 font-sans font-semibold text-xs text-slate-200"
              >
                <Phone className="w-4 h-4 text-cricket-bright" />
                Direct Hotline: {academy.phone}
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 rounded-full font-athletic font-bold uppercase tracking-wider text-xs text-black bg-gradient-to-r from-cricket-bright to-emerald-400 shadow-glow"
              >
                Schedule Free Assessment Trial →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
