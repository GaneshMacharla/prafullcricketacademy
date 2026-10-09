import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Star } from 'lucide-react';
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
          ? 'bg-[#080d0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
          : 'bg-gradient-to-b from-[#080d0a]/90 via-[#080d0a]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-cricket-green rounded-lg p-0.5 min-w-0 max-w-[calc(100%-52px)] sm:max-w-none">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-red-500/50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="font-extrabold text-white text-xs sm:text-base tracking-tighter">PCA</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cricket-bright rounded-full border-2 border-[#080d0a]"></span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-white text-xs sm:text-base lg:text-lg tracking-tight group-hover:text-cricket-bright transition-colors truncate">
                  Prafull Cricket Academy
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-cricket-green/20 text-cricket-bright border border-cricket-green/30 shrink-0">
                  <Star className="w-2.5 h-2.5 fill-cricket-bright text-cricket-bright" /> 4.8★
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-cricket-muted flex items-center gap-1 font-medium truncate">
                <MapPin className="w-3 h-3 text-cricket-green shrink-0" /> Bowenpally, Secunderabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-cricket-bright transition-colors relative py-1 focus:outline-none focus:text-cricket-bright after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cricket-bright hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Desktop / Large Screen) */}
          <div className="hidden xl:flex items-center gap-2 xl:gap-3">
            <a
              href={`tel:${academy.rawPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors focus:ring-2 focus:ring-cricket-green shrink-0"
              title="Call Academy Directly"
            >
              <Phone className="w-3.5 h-3.5 text-cricket-bright" />
              <span>{academy.phone}</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              className="inline-flex items-center gap-2 px-3.5 xl:px-4 py-2.5 rounded-lg font-semibold text-xs tracking-wide uppercase bg-gradient-to-r from-cricket-green to-emerald-500 hover:from-cricket-bright hover:to-cricket-green text-black shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cricket-bright shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Trial</span>
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenTrialModal}
              className="hidden sm:inline-flex px-2.5 py-1 text-xs font-semibold rounded-md bg-cricket-bright text-black"
            >
              Book Trial
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#0a100d]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cricket-bright"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${academy.rawPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 font-medium text-sm text-slate-200"
            >
              <Phone className="w-4 h-4 text-cricket-bright" />
              Call {academy.phone}
            </a>

            <a
              href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 rounded-lg font-bold text-sm bg-cricket-bright text-black shadow-glow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book a Trial Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
