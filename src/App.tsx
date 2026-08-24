import React, { useState, useEffect } from 'react';
import { Navbar, AppPage } from './components/Navbar';
import { HomeLandingHub } from './components/HomeLandingHub';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { ProductsSection } from './components/ProductsSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingSocialDock } from './components/FloatingSocialDock';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ViewSkeletonLoader } from './components/ViewSkeletonLoader';
import { WhatsAppLineModal } from './components/WhatsAppLineModal';
import { SpaService } from './types';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [isViewLoading, setIsViewLoading] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | null>(null);
  const [modalService, setModalService] = useState<SpaService | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [whatsAppCustomMessage, setWhatsAppCustomMessage] = useState<string | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'products', 'gallery', 'about', 'location', 'booking'].includes(hash)) {
        setIsViewLoading(true);
        setCurrentPage(hash as AppPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const timer = setTimeout(() => {
          setIsViewLoading(false);
        }, 180);
        return () => clearTimeout(timer);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: AppPage) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsViewLoading(true);
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Subtle skeleton rendering timeout for smooth perceived performance
    setTimeout(() => {
      setIsViewLoading(false);
    }, 180);
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForBooking(serviceId);
    }
    navigateTo('booking');
  };

  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId);
    navigateTo('booking');
  };

  const handleOpenServiceModal = (service: SpaService) => {
    setModalService(service);
  };

  const handleCloseServiceModal = () => {
    setModalService(null);
  };

  const openWhatsAppModal = (customMsg?: string) => {
    setWhatsAppCustomMessage(customMsg);
    setIsWhatsAppModalOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setWhatsAppCustomMessage(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0E] text-white relative selection:bg-[#DE1B76]/30 selection:text-[#FF4B99]">
      
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={handleOpenBooking} 
        onOpenWhatsAppModal={() => openWhatsAppModal()}
      />

      {/* Dynamic View Content with Skeleton Transition */}
      <main className="flex-grow">
        {isViewLoading ? (
          <ViewSkeletonLoader page={currentPage} />
        ) : (
          <>
            {/* 1. Dedicated Home Landing Hub */}
            {currentPage === 'home' && (
              <HomeLandingHub
                onNavigate={navigateTo}
                onOpenBooking={handleOpenBooking}
                onOpenWhatsAppModal={() => openWhatsAppModal()}
              />
            )}

            {/* 2. Standalone Services & Pricing Catalog Page */}
            {currentPage === 'services' && (
              <ServicesSection 
                isStandalonePage={true}
                onNavigateHome={() => navigateTo('home')}
                onSelectService={handleSelectServiceFromCatalog}
                onOpenDetailModal={handleOpenServiceModal}
                onOpenWhatsAppModalWithMsg={(msg) => openWhatsAppModal(msg)}
              />
            )}

            {/* 3. Standalone Skincare Boutique Page */}
            {currentPage === 'products' && (
              <ProductsSection 
                isStandalonePage={true}
                onNavigateHome={() => navigateTo('home')}
                onOpenWhatsAppModalWithMsg={(msg) => openWhatsAppModal(msg)}
              />
            )}

            {/* 4. Standalone Photo Gallery Page */}
            {currentPage === 'gallery' && (
              <div className="py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                  <button
                    onClick={() => navigateTo('home')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer bg-[#17171F] px-4 py-2 rounded-xl border border-stone-800 shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                  </button>
                </div>
                <GallerySection />
              </div>
            )}

            {/* 5. Standalone About & CAC Registration Page */}
            {currentPage === 'about' && (
              <div className="py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                  <button
                    onClick={() => navigateTo('home')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer bg-[#17171F] px-4 py-2 rounded-xl border border-stone-800 shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                  </button>
                </div>
                <AboutSection onOpenBooking={handleOpenBooking} />
                <TestimonialsSection />
              </div>
            )}

            {/* 6. Standalone Location, Directions & FAQ Page */}
            {currentPage === 'location' && (
              <div className="py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                  <button
                    onClick={() => navigateTo('home')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer bg-[#17171F] px-4 py-2 rounded-xl border border-stone-800 shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                  </button>
                </div>
                <LocationHoursSection onOpenWhatsAppModal={() => openWhatsAppModal()} />
                <FAQSection onOpenWhatsAppModal={() => openWhatsAppModal()} />
              </div>
            )}

            {/* 7. Standalone Online Appointment Booking Page */}
            {currentPage === 'booking' && (
              <div className="py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                  <button
                    onClick={() => navigateTo('home')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer bg-[#17171F] px-4 py-2 rounded-xl border border-stone-800 shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                  </button>
                </div>
                <BookingSection
                  initialServiceId={selectedServiceForBooking}
                  onClearInitialService={() => setSelectedServiceForBooking(null)}
                  onOpenWhatsAppModalWithMsg={(msg) => openWhatsAppModal(msg)}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking}
        onNavigate={navigateTo}
        onOpenWhatsAppModal={() => openWhatsAppModal()}
      />

      {/* Bottom Floating WhatsApp Quick Dock */}
      <FloatingSocialDock 
        onOpenBooking={handleOpenBooking}
        onOpenWhatsAppModal={() => openWhatsAppModal()}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={modalService}
        onClose={handleCloseServiceModal}
        onBookService={handleSelectServiceFromCatalog}
        onOpenWhatsAppModalWithMsg={(msg) => openWhatsAppModal(msg)}
      />

      {/* WhatsApp Line Selection Modal (Line 1 vs Line 2) */}
      <WhatsAppLineModal
        isOpen={isWhatsAppModalOpen}
        onClose={closeWhatsAppModal}
        customMessage={whatsAppCustomMessage}
      />

    </div>
  );
}
