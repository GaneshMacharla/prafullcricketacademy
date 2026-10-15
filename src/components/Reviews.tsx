import React from 'react';
import { Star, ExternalLink, CheckCircle, Quote } from 'lucide-react';
import { academy } from '../data/academy';

export const Reviews: React.FC = () => {
  // Verified real review excerpts from the Google Maps listing
  const verifiedReviews = [
    {
      author: "rama krish",
      rating: 5,
      date: "Verified Google Review",
      quote: "Good coaching center hard working environment",
      highlights: "Coaching & Environment"
    },
    {
      author: "madhuri alenuri",
      rating: 5,
      date: "Verified Google Review",
      quote: "Really good coaching. Prafull is doing great work",
      highlights: "Coach Dedication"
    },
    {
      author: "Dhruv M",
      rating: 5,
      date: "Verified Google Review",
      quote: "The place is filled with greenery .",
      highlights: "Academy Grounds"
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#0a0f0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="athletic-badge text-xs sm:text-sm tracking-wider text-cricket-bright bg-cricket-green/10 border border-cricket-green/30 px-4 py-1.5 rounded-full mb-3">
            Parent & Player Trust • 4.8★ Google Standing
          </span>
          <h2 className="athletic-title text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-normal">
            VERIFIED GOOGLE REVIEWS & PRAISE
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Genuine ratings and public feedback directly from our Google Maps listing in Bowenpally, Secunderabad.
          </p>

          {/* Rating Summary Scorecard */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-5 rounded-3xl glass-panel border border-amber-400/30 shadow-glow">
            <div className="flex items-center gap-3">
              <span className="stat-number text-4xl sm:text-6xl text-amber-400">4.8</span>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-300 font-sans font-semibold mt-1">
                  Based on 83 Google Reviews
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10"></div>

            <a
              href={academy.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-cricket-bright px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {verifiedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-cricket-bright">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cricket-bright text-cricket-bright" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/15 group-hover:text-cricket-bright/30 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cricket-green" />
                  </div>
                  <div className="text-xs text-cricket-muted">{rev.date}</div>
                </div>
                <span className="text-[11px] font-semibold text-cricket-bright bg-cricket-green/10 border border-cricket-green/20 px-2 py-0.5 rounded">
                  {rev.highlights}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
