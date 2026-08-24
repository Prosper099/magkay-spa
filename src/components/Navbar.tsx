import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO } from '../data/spaData';
import { MagkayLogo } from './MagkayLogo';

export type AppPage = 'home' | 'services' | 'products' | 'gallery' | 'about' | 'location' | 'booking';

interface NavbarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenBooking,
  onOpenWhatsAppModal 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks: { name: string; page: AppPage; badge?: string }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Services & Menu', page: 'services', badge: '12+' },
    { name: 'Skincare Shop', page: 'products', badge: 'Shop' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'About & CAC', page: 'about' },
    { name: 'Location & Hours', page: 'location' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navbar */}
      <nav className={`w-full backdrop-blur-xl transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0E0E12]/95 shadow-xl border-b border-stone-800/90' 
          : 'bg-[#0E0E12]/90 border-b border-stone-800/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo Component */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <MagkayLogo variant="full" size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.name}
                    onClick={() => onNavigate(link.page)}
                    className={`text-xs uppercase font-bold tracking-wider py-2 px-3.5 rounded-full transition-all cursor-pointer relative flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#DE1B76] text-white shadow-md shadow-[#DE1B76]/20'
                        : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                        isActive ? 'bg-black/30 text-white' : 'bg-[#DE1B76]/20 text-[#FF4B99]'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenWhatsAppModal}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Desk</span>
              </button>

              <button
                id="header-book-btn"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#DE1B76] text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
              >
                <Calendar className="w-3.5 h-3.5 text-[#DE1B76] group-hover:text-white" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#121217]/98 backdrop-blur-2xl border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate(link.page);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer text-left ${
                      isActive ? 'bg-[#DE1B76] text-white shadow-md' : 'text-stone-200 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                          isActive ? 'bg-black/30 text-white' : 'bg-[#DE1B76]/20 text-[#FF4B99]'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-500" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-800 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] text-white py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment Now</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${SPA_INFO.phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-white/10 border border-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DE1B76]" />
                  <span>Call Desk</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenWhatsAppModal();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp (1 & 2)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
