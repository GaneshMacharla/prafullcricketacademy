import React from 'react';
import { Star, MapPin, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { academy } from '../data/academy';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal }) => {
  return (
    <footer className="bg-[#050806] border-t border-white/10 pt-16 pb-28 lg:pb-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Verification */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-red-500/50 flex items-center justify-center font-extrabold text-white text-base">
                PCA
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Prafull Cricket Academy
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Professional cricket coaching facility situated at Bowenpally, Secunderabad. Fostering cricket technique, athletic stamina, and match composure for young players.
            </p>

            {/* Google Trust Capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-1 text-cricket-bright">
                <Star className="w-3.5 h-3.5 fill-cricket-bright text-cricket-bright" />
                <span className="font-bold text-white">4.8 / 5.0</span>
              </div>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">83 Google Reviews</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Academy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-cricket-bright transition-colors">About PCA</a></li>
              <li><a href="#programs" className="hover:text-cricket-bright transition-colors">Coaching Programs</a></li>
              <li><a href="#facilities" className="hover:text-cricket-bright transition-colors">Ground & Nets</a></li>
              <li><a href="#gallery" className="hover:text-cricket-bright transition-colors">Photo Gallery</a></li>
              <li><a href="#location" className="hover:text-cricket-bright transition-colors">Maps & Directions</a></li>
              <li><button onClick={onOpenTrialModal} className="text-cricket-bright hover:underline font-semibold">Book Trial Session</button></li>
            </ul>
          </div>

          {/* Col 4: Training Disciplines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Curriculum Focus
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>Batting Technique Drills</li>
              <li>Bowling Biomechanics & Seam</li>
              <li>Fielding, Catching & Agility</li>
              <li>Cricket Physical Conditioning</li>
              <li>Net Match Simulations</li>
              <li>Junior Development Batches</li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Bowenpally Facility
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cricket-bright shrink-0 mt-0.5" />
                <span>186A, Plassy Lines, Bowenpally, Secunderabad, Telangana 500011</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cricket-bright shrink-0" />
                <a href={`tel:${academy.rawPhone}`} className="text-slate-200 hover:text-cricket-bright font-medium">
                  {academy.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp Inquiries
                </a>
              </div>

              <div className="pt-2 text-[11px] text-cricket-muted">
                Open Daily • 6:00 AM – 11:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Image Policy Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cricket-green" />
            <span>
              All photography on this site is authentically sourced from the PCA Prafull Cricket Academy Google Maps listing.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={academy.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cricket-bright hover:underline font-medium"
            >
              Google Maps Listing
            </a>
            <span>•</span>
            <span>© {new Date().getFullYear()} PCA Prafull Cricket Academy. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
