import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Maximize2, 
  ShieldCheck, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Film, 
  Volume2, 
  VolumeX, 
  Trophy, 
  Sparkles,
  Users,
  Compass
} from 'lucide-react';
import { academy, GalleryItem } from '../data/academy';

interface GalleryProps {
  onOpenImageLightbox: (
    src: string, 
    title: string, 
    options?: { caption?: string; type?: 'image' | 'video'; badge?: string; index?: number }
  ) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenImageLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [videoMuted, setVideoMuted] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(true);
  
  const sectionRef = useRef<HTMLElement>(null);
  const thumbnailListRef = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const categories = [
    { label: 'All Media', value: 'All', count: academy.gallery.length },
    { label: 'Match Videos', value: 'Videos', count: academy.gallery.filter(i => i.type === 'video').length, icon: Film },
    { label: 'Trophies & Cups', value: 'Trophies', count: academy.gallery.filter(i => i.category === 'Trophies').length, icon: Trophy },
    { label: 'Squad & Team', value: 'Squad', count: academy.gallery.filter(i => i.category === 'Squad').length, icon: Users },
    { label: 'Coaching & Mentors', value: 'Coaching', count: academy.gallery.filter(i => i.category === 'Coaching').length, icon: Compass },
    { label: 'Celebrations', value: 'Celebration', count: academy.gallery.filter(i => i.category === 'Celebration').length, icon: Sparkles },
  ];

  const filteredItems = selectedCategory === 'All'
    ? academy.gallery
    : selectedCategory === 'Videos'
      ? academy.gallery.filter(item => item.type === 'video')
      : academy.gallery.filter(item => item.category === selectedCategory);

  // Keep index within bounds when category filter changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [selectedCategory]);

  const activeItem: GalleryItem | undefined = filteredItems[currentSlideIndex] || filteredItems[0];

  // Pause slideshow auto-play when the gallery section is not visible on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-play timer for slideshow (advances every 5.5 seconds only when section is visible in viewport)
  useEffect(() => {
    if (!isAutoPlaying || !isInView || isHovered || isVideoPlaying || filteredItems.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % filteredItems.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isInView, isHovered, isVideoPlaying, filteredItems.length]);

  // Keep active thumbnail centered in filmstrip strictly inside the container (never scrolls the window/page)
  useEffect(() => {
    const container = thumbnailListRef.current;
    if (!container) return;

    const activeThumb = container.children[currentSlideIndex] as HTMLElement | undefined;
    if (!activeThumb) return;

    const containerRect = container.getBoundingClientRect();
    const thumbRect = activeThumb.getBoundingClientRect();

    // Calculate relative offset within the horizontal filmstrip
    const relativeThumbLeft = thumbRect.left - containerRect.left + container.scrollLeft;
    const targetScrollLeft = relativeThumbLeft - (container.clientWidth / 2) + (thumbRect.width / 2);

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth'
    });
  }, [currentSlideIndex]);

  const handleNextSlide = () => {
    setCurrentSlideIndex(prev => (prev + 1) % filteredItems.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleTriggerLightbox = (item: GalleryItem) => {
    const originalIndex = academy.gallery.findIndex(g => g.id === item.id);
    onOpenImageLightbox(
      item.videoSrc || item.image,
      item.title,
      {
        caption: item.caption,
        type: item.type,
        badge: item.badge,
        index: originalIndex !== -1 ? originalIndex : undefined
      }
    );
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 sm:py-28 relative bg-[#070b08] border-t border-white/5 overflow-hidden">
      {/* Background athletic glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cricket-green/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cricket-green/15 border border-cricket-green/30 text-cricket-bright font-athletic text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-cricket-bright animate-spin-slow" />
            <span>Official Academy Media Hub • Modern Photos & Videos</span>
          </div>

          <h2 className="athletic-title text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-normal">
            LIFE & GLORY AT PRAFULL CRICKET ACADEMY
          </h2>

          <p className="mt-3 max-w-3xl text-slate-300 font-sans text-sm sm:text-base md:text-lg">
            Explore authentic high-resolution photos and live celebration videos directly from PCA tournament triumphs, training nets, open turf outfields, and award podiums.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-athletic text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-cricket-bright text-black shadow-glow font-bold scale-102'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {Icon ? <Icon className="w-3.5 h-3.5 shrink-0" /> : <Filter className="w-3.5 h-3.5 shrink-0" />}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-black text-white' : 'bg-white/10 text-slate-400'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE FEATURE SLIDESHOW / CAROUSEL                 */}
        {/* ======================================================== */}
        {activeItem && (
          <div 
            className="mb-14 relative group rounded-3xl overflow-hidden border border-emerald-500/30 bg-[#0a120e] shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Stage Media Container (Fixed 16:9 on desktop, responsive on mobile) */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] w-full bg-black flex items-center justify-center overflow-hidden">
              
              {activeItem.type === 'video' ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <video
                    ref={videoPlayerRef}
                    key={activeItem.videoSrc}
                    src={activeItem.videoSrc}
                    poster={activeItem.image}
                    controls
                    playsInline
                    muted={videoMuted}
                    autoPlay
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    onEnded={() => setIsVideoPlaying(false)}
                    className="w-full h-full object-contain max-h-[640px]"
                  >
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Audio Mute/Unmute Quick Toggle */}
                  <button
                    onClick={() => {
                      const next = !videoMuted;
                      setVideoMuted(next);
                      if (videoPlayerRef.current) videoPlayerRef.current.muted = next;
                    }}
                    className="absolute top-4 right-16 p-2 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 transition-all z-20"
                    title={videoMuted ? "Unmute Sound" : "Mute Sound"}
                    aria-label="Toggle Sound"
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cricket-bright" />}
                  </button>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-black/60">
                  <img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt={activeItem.alt}
                    className="w-full h-full object-contain sm:object-cover sm:object-center transition-all duration-700 animate-fadeIn"
                  />
                  {/* High-contrast athletic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b08] via-transparent to-black/30 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#070b08]/80 via-transparent to-[#070b08]/80 pointer-events-none"></div>
                </div>
              )}

              {/* Navigation Arrows: Left & Right */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-cricket-bright text-white hover:text-black border border-white/20 hover:border-cricket-bright transition-all shadow-xl z-20 opacity-90 group-hover:opacity-100"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-cricket-bright text-white hover:text-black border border-white/20 hover:border-cricket-bright transition-all shadow-xl z-20 opacity-90 group-hover:opacity-100"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Top Controls Bar */}
              <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between z-20 pointer-events-none">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-athletic uppercase tracking-wider bg-cricket-bright text-black shadow-md flex items-center gap-1.5">
                    {activeItem.type === 'video' ? <Film className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                    <span>{activeItem.category}</span>
                  </span>

                  {activeItem.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-athletic uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                      {activeItem.badge}
                    </span>
                  )}

                  {activeItem.duration && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-white border border-white/20 backdrop-blur-md">
                      ▶ {activeItem.duration}
                    </span>
                  )}
                </div>

                {/* Lightbox / Fullscreen Button */}
                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={() => handleTriggerLightbox(activeItem)}
                    className="p-2 sm:p-2.5 rounded-xl bg-black/70 hover:bg-cricket-bright text-white hover:text-black border border-white/20 hover:border-cricket-bright transition-all backdrop-blur-md shadow-lg"
                    title="Open Fullscreen Lightbox"
                    aria-label="Open Fullscreen Lightbox"
                  >
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Bottom Caption Overlay in Viewer */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-7 bg-gradient-to-t from-[#060a08] via-[#060a08]/90 to-transparent pointer-events-auto z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div className="max-w-3xl space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-athletic font-bold uppercase tracking-wider text-cricket-bright">
                        Slide {currentSlideIndex + 1} of {filteredItems.length}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-slate-300 font-sans">
                        {activeItem.sourceNote}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-normal line-clamp-1">
                      {activeItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl font-sans">
                      {activeItem.caption}
                    </p>
                  </div>

                  {/* Playback Controls & Lightbox CTA */}
                  <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-athletic font-bold uppercase tracking-wider transition-all border ${
                        isAutoPlaying
                          ? 'bg-cricket-green/20 text-cricket-bright border-cricket-green/40'
                          : 'bg-white/10 text-slate-300 border-white/10'
                      }`}
                      title={isAutoPlaying ? "Pause Automatic Slideshow" : "Start Automatic Slideshow"}
                    >
                      {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isAutoPlaying ? 'Auto-Playing' : 'Paused'}</span>
                    </button>

                    <button
                      onClick={() => handleTriggerLightbox(activeItem)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-athletic font-bold uppercase tracking-wider bg-cricket-bright text-black hover:bg-emerald-300 transition-colors shadow-glow"
                    >
                      <span>Full View</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Filmstrip Thumbnail Navigator */}
            <div className="bg-[#050906] px-4 py-3 border-t border-white/10">
              <div 
                ref={thumbnailListRef}
                className="relative flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredItems.map((item, idx) => {
                  const isActive = idx === currentSlideIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`relative flex-shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border transition-all duration-300 ${
                        isActive
                          ? 'ring-2 ring-cricket-bright border-cricket-bright scale-105 z-10 shadow-glow'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                      title={item.title}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center shadow">
                            <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
                          </div>
                        </div>
                      )}
                      <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded text-[9px] font-mono font-bold bg-black/80 text-white">
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* COMPREHENSIVE RESPONSIVE MEDIA GRID                     */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <h3 className="athletic-title text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>All {selectedCategory} Media Collection</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-cricket-bright font-mono">
                  {filteredItems.length} items
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Click any picture or video below to inspect in high-resolution or play full-screen.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-cricket-bright"></span>
              <span>21 Modern Photos</span>
              <span className="text-slate-600">•</span>
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
              <span>7 Real Videos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((item: GalleryItem, index: number) => {
              const isVideo = item.type === 'video';
              const isCurrentlyActiveInSlideshow = index === currentSlideIndex;

              return (
                <div
                  key={item.id}
                  className={`glass-panel rounded-2xl overflow-hidden border transition-all duration-300 group cursor-pointer flex flex-col ${
                    isCurrentlyActiveInSlideshow
                      ? 'border-cricket-bright ring-1 ring-cricket-bright shadow-glow'
                      : 'border-white/10 hover:border-white/25 hover:shadow-xl'
                  }`}
                  onClick={() => {
                    setCurrentSlideIndex(index);
                    handleTriggerLightbox(item);
                  }}
                >
                  {/* Media Visual Area */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d0a] via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                    {/* Top Category / Type Tag */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 max-w-[85%]">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-athletic uppercase tracking-wider shadow-sm flex items-center gap-1 ${
                        isVideo ? 'bg-amber-400 text-black' : 'bg-cricket-bright text-black'
                      }`}>
                        {isVideo ? <Film className="w-2.5 h-2.5" /> : <ShieldCheck className="w-2.5 h-2.5" />}
                        <span>{item.category}</span>
                      </span>

                      {item.duration && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 text-white backdrop-blur-sm">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Play or Zoom Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {isVideo ? (
                        <div className="w-12 h-12 rounded-full bg-amber-400/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-black ml-0.5" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm group-hover:scale-110">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Slide Selector Indicator */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlideIndex(index);
                      }}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/75 hover:bg-cricket-bright text-white hover:text-black border border-white/10 transition-colors text-[10px] font-athletic font-bold uppercase tracking-wider"
                      title="Load in Slideshow Viewer"
                    >
                      #{index + 1}
                    </button>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-[#080d0a]/90 border-t border-white/5">
                    <div>
                      {item.badge && (
                        <div className="text-[10px] font-athletic font-bold uppercase tracking-wider text-cricket-bright mb-1">
                          {item.badge}
                        </div>
                      )}
                      <h4 className="text-sm font-bold text-white group-hover:text-cricket-bright transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-white/10">
                      <span className="truncate max-w-[65%] text-[10px] text-slate-400">{item.sourceNote}</span>
                      <span className="text-cricket-bright font-semibold group-hover:underline text-[11px] shrink-0">
                        {isVideo ? 'Play Video ▶' : 'View Full →'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal & Authenticity Verification Bar */}
        <div className="mt-14 glass-panel rounded-2xl p-6 border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-[#0a120e] to-black flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cricket-bright/20 text-cricket-bright shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                100% Authentic Ground & Tournament Media
              </div>
              <p className="text-slate-400 text-xs mt-0.5">
                All 28 photos and videos feature genuine PCA Prafull Cricket Academy students, Head Coach Prafull, and the official Dussehra Cup Platinum trophy.
              </p>
            </div>
          </div>

          <a
            href={academy.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-athletic font-bold uppercase tracking-wider text-xs text-black bg-cricket-bright hover:bg-emerald-300 transition-colors shadow-glow shrink-0"
          >
            <span>Google Maps Verified</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
