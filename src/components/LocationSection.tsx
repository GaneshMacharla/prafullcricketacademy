import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ExternalLink } from 'lucide-react';
import { academy } from '../data/academy';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 relative bg-[#080d0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            Location & Ground Access • Secunderabad
          </span>
          <h2 className="athletic-title text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-normal">
            FIND PRAFULL CRICKET ACADEMY
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Conveniently situated at Plassy Lines, Bowenpally with easy access from Secunderabad, Cantonment, and Hyderabad.
          </p>
        </div>

        {/* Location Box & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Quick Contact Details */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold text-cricket-bright uppercase tracking-wider">
                  Academy Address
                </span>
                <div className="mt-2 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cricket-green/20 text-cricket-bright shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      PCA – Prafull Cricket Academy
                    </h3>
                    <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                      {academy.address.full}
                    </p>
                    <div className="mt-2 text-xs font-mono text-cricket-muted bg-white/5 px-2.5 py-1 rounded inline-block border border-white/10">
                      Plus Code: <span className="text-cricket-bright">{academy.plusCode}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-cricket-bright uppercase tracking-wider">
                  Facility Hours
                </span>
                <div className="mt-2 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cricket-green/20 text-cricket-bright shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Daily Training Operations</div>
                    <div className="text-xs text-slate-300 mt-0.5">{academy.openHours}</div>
                    <div className="text-[11px] text-cricket-muted mt-1">
                      Morning batch: 6:00 AM – 9:00 AM • Evening batch: 4:00 PM – 7:30 PM
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-cricket-bright uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cricket-green/20 text-cricket-bright shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={`tel:${academy.rawPhone}`}
                      className="text-base font-bold text-white hover:text-cricket-bright transition-colors"
                    >
                      {academy.phone}
                    </a>
                    <div className="text-xs text-cricket-muted">Call or WhatsApp for slot availability</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col gap-2.5 sm:gap-3">
              <a
                href={academy.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-cricket-bright text-black hover:bg-emerald-400 shadow-glow transition-all"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href={`tel:${academy.rawPhone}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cricket-bright shrink-0" />
                  <span>Call Academy</span>
                </a>

                <a
                  href={`https://wa.me/918712310862?text=${encodeURIComponent(academy.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual with Direct Google Maps Link */}
          <div className="lg:col-span-7 glass-panel rounded-2xl overflow-hidden border border-white/10 relative min-h-[320px] sm:min-h-[380px] flex flex-col">
            <div className="relative flex-1 w-full bg-slate-900 overflow-hidden min-h-[280px]">
              <iframe
                title="PCA Prafull Cricket Academy Location Map"
                src="https://maps.google.com/maps?q=186A%2C%20Plassy%20Lines%2C%20Bowenpally%2C%20Secunderabad%2C%20Telangana%20500011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[280px] sm:min-h-[380px] border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2] opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Overlay Direct Link Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <a
                  href={academy.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-black/85 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-slate-100 border border-white/20 hover:border-cricket-bright transition-all shadow-lg"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cricket-bright shrink-0" />
                </a>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-[#0a0f0d] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] sm:text-xs text-cricket-muted gap-1">
              <span>Coordinates: 17.4740° N, 78.4730° E</span>
              <span className="text-cricket-bright">Verified Bowenpally Ground Location</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
