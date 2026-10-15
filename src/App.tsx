import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlayerPathway } from './components/PlayerPathway';
import { MethodologySection } from './components/MethodologySection';
import { AchievementSpotlight } from './components/AchievementSpotlight';
import { About } from './components/About';
import { CoachesSection } from './components/CoachesSection';
import { SpecializedClinics } from './components/SpecializedClinics';
import { Programs } from './components/Programs';
import { ScheduleSection } from './components/ScheduleSection';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { TrialProtocolFAQ } from './components/TrialProtocolFAQ';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileBar } from './components/StickyMobileBar';
import { TrialModal } from './components/TrialModal';
import { ImageLightbox } from './components/ImageLightbox';
import { academy, GalleryItem } from './data/academy';

export const App: React.FC = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>();
  
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    caption?: string;
    type?: 'image' | 'video';
    badge?: string;
    index?: number;
  }>({
    isOpen: false,
    src: '',
    title: ''
  });

  const handleOpenTrialModal = (programName?: string) => {
    setPreselectedProgram(programName);
    setIsTrialModalOpen(true);
  };

  const handleOpenLightbox = (
    src: string,
    title: string,
    options?: { caption?: string; type?: 'image' | 'video'; badge?: string; index?: number }
  ) => {
    const foundIndex = options?.index ?? (academy.gallery ? academy.gallery.findIndex((g: GalleryItem) => g.image === src || g.videoSrc === src) : -1);
    setLightboxState({
      isOpen: true,
      src,
      title,
      caption: options?.caption,
      type: options?.type ?? (src.endsWith('.mp4') ? 'video' : 'image'),
      badge: options?.badge,
      index: foundIndex !== -1 ? foundIndex : undefined
    });
  };

  const handleNextLightbox = () => {
    if (lightboxState.index !== undefined && academy.gallery && academy.gallery.length > 0) {
      const nextIdx = (lightboxState.index + 1) % academy.gallery.length;
      const nextItem = academy.gallery[nextIdx];
      setLightboxState({
        isOpen: true,
        src: nextItem.videoSrc || nextItem.image,
        title: nextItem.title,
        caption: nextItem.caption,
        type: nextItem.type,
        badge: nextItem.badge,
        index: nextIdx
      });
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxState.index !== undefined && academy.gallery && academy.gallery.length > 0) {
      const prevIdx = (lightboxState.index - 1 + academy.gallery.length) % academy.gallery.length;
      const prevItem = academy.gallery[prevIdx];
      setLightboxState({
        isOpen: true,
        src: prevItem.videoSrc || prevItem.image,
        title: prevItem.title,
        caption: prevItem.caption,
        type: prevItem.type,
        badge: prevItem.badge,
        index: prevIdx
      });
    }
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#080d0a] text-slate-100 flex flex-col selection:bg-cricket-green selection:text-black overflow-x-hidden w-full max-w-full relative">
      {/* Navigation Bar */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenTrialModal={() => handleOpenTrialModal()} />
        <PlayerPathway onOpenTrialModal={(prog) => handleOpenTrialModal(prog)} />
        <MethodologySection onOpenTrialModal={() => handleOpenTrialModal()} />
        <AchievementSpotlight 
          onOpenTrialModal={() => handleOpenTrialModal()} 
          onOpenImageLightbox={handleOpenLightbox}
        />
        <CoachesSection onOpenTrialModal={() => handleOpenTrialModal()} />
        <SpecializedClinics onOpenTrialModal={(clinic) => handleOpenTrialModal(clinic)} />
        <Programs onOpenTrialModal={(prog) => handleOpenTrialModal(prog)} />
        <ScheduleSection onOpenTrialModal={() => handleOpenTrialModal()} />
        <Facilities onOpenImageLightbox={handleOpenLightbox} />
        <Gallery onOpenImageLightbox={handleOpenLightbox} />
        <TrialProtocolFAQ onOpenTrialModal={() => handleOpenTrialModal()} />
        <Reviews />
        <About onOpenTrialModal={() => handleOpenTrialModal()} />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Floating CTAs & Mobile Bar */}
      <FloatingWhatsApp />
      <StickyMobileBar onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Interactive Modals */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        preselectedProgram={preselectedProgram}
      />

      <ImageLightbox
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        title={lightboxState.title}
        caption={lightboxState.caption}
        type={lightboxState.type}
        badge={lightboxState.badge}
        onClose={handleCloseLightbox}
        onNext={lightboxState.index !== undefined ? handleNextLightbox : undefined}
        onPrev={lightboxState.index !== undefined ? handlePrevLightbox : undefined}
        currentIndex={lightboxState.index}
        totalCount={academy.gallery?.length}
      />
    </div>
  );
};

export default App;
