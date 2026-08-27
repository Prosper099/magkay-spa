import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, Calendar, ChevronRight, Home, Flower2, ShoppingBag, Image, Award, MapPin, MessageCircle, Clock, ShieldCheck, Wifi } from 'lucide-react';
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

interface NavItem {
  name: string;
  subtitle: string;
  page: AppPage;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenBooking,
  onOpenWhatsAppModal 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    {
      name: 'Home',
      subtitle: 'Main hub, hero highlights & quick access',
      page: 'home',
      icon: Home,
    },
    {
      name: 'Services & Treatment Menu',
      subtitle: 'Facials, massages, hair styling, nails & waxing',
      page: 'services',
      icon: Flower2,
      badge: '12+ Services',
      badgeColor: 'bg-[#DE1B76] text-white',
    },
    {
      name: 'Skincare Boutique',
      subtitle: 'MagKay glowing oils, toners & herbal body washes',
      page: 'products',
      icon: ShoppingBag,
      badge: 'Shop',
      badgeColor: 'bg-emerald-600 text-white',
    },
    {
      name: 'Photo Gallery',
      subtitle: 'Verified studio photos, client transformations & store',
      page: 'gallery',
      icon: Image,
    },
    {
      name: 'About & CAC Registration',
      subtitle: 'Company story, management, hygiene & RC details',
      page: 'about',
      icon: Award,
      badge: 'Verified RC',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      name: 'Location, Directions & Hours',
      subtitle: 'KM 5 LASU-Isheri Road, map guides & schedule',
      page: 'location',
      icon: MapPin,
    },
    {
      name: 'Book Online Appointment',
      subtitle: 'Select therapist, preferred slot & VIP suite',
      page: 'booking',
      icon: Calendar,
      badge: 'Instant',
      badgeColor: 'bg-[#DE1B76] text-white',
    },
  ];

  const handleSelectPage = (page: AppPage) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Main Clean Navbar */}
        <nav 
          aria-label="Main Navigation"
          className={`w-full backdrop-blur-xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#0B0B0E]/95 shadow-xl border-b border-stone-800/90' 
              : 'bg-[#0B0B0E]/90 border-b border-stone-800/60'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
              {/* Brand Logo */}
              <button 
                id="brand-home-logo-btn"
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DE1B76] rounded-xl p-1 -ml-1 transition-transform hover:scale-[1.01] shrink min-w-0"
                aria-label="MagKay Spa - Go to Home"
              >
                <MagkayLogo variant="full" size="md" />
              </button>

              {/* Top Right Header Controls */}
              <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
                {/* Fast Action: Book Appointment Button with Hover Animation */}
                <button
                  id="top-book-btn"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#DE1B76] to-[#c41566] hover:from-[#c41566] hover:to-[#a91256] active:scale-95 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#DE1B76]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DE1B76] group shrink-0"
                  aria-label="Book an Appointment"
                >
                  <Calendar className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:scale-110" />
                  <span>Book</span>
                </button>

                {/* The 3-Line Navigation Menu Button with Dynamic Line Hover Animation */}
                <button
                  id="three-line-nav-button"
                  ref={menuButtonRef}
                  onClick={() => setIsMenuOpen(true)}
                  aria-expanded={isMenuOpen}
                  aria-controls="navigation-drawer"
                  aria-label="Open Website Navigation Menu"
                  className="group relative inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#181820] hover:bg-[#232330] active:scale-95 text-white border border-stone-700/80 hover:border-[#DE1B76] shadow-lg hover:shadow-xl hover:shadow-[#DE1B76]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DE1B76] shrink-0"
                >
                  {/* Three Lines Visual Indicator with Responsive Hover Animation */}
                  <div className="flex flex-col justify-center gap-1 w-4 sm:w-5 h-4">
                    <span className="w-full h-0.5 bg-white rounded-full transition-all duration-300 group-hover:bg-[#FF4B99] group-hover:w-full"></span>
                    <span className="w-3/4 h-0.5 bg-[#FF4B99] rounded-full transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
                    <span className="w-full h-0.5 bg-white rounded-full transition-all duration-300 group-hover:bg-[#FF4B99] group-hover:w-full"></span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-stone-200 group-hover:text-white transition-colors duration-200">
                    Menu
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Accessible Full Navigation Drawer Overlay */}
      {isMenuOpen && (
        <div 
          id="navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Website Navigation Menu"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div 
            ref={drawerRef}
            className="relative w-full max-w-md bg-[#0F0F14] border-l border-stone-800 shadow-2xl h-full flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300"
          >
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-[#14141B]">
              <div className="flex items-center gap-3">
                <MagkayLogo variant="icon" size="sm" />
                <div>
                  <div className="flex items-center gap-1 leading-tight">
                    <span className="text-base font-bold tracking-wider text-white">MAGKAY</span>
                    <span className="text-base font-bold font-serif italic text-[#DE1B76]">SPA</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400">
                    Navigation & Accessibility Menu
                  </p>
                </div>
              </div>

              {/* Close Button with Spin/Scale Hover Animation */}
              <button
                id="close-navigation-menu-btn"
                onClick={() => setIsMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#DE1B76] text-stone-300 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-90 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Bar in Drawer */}
            <div className="px-5 py-3 bg-[#181822] border-b border-stone-800/80 grid grid-cols-2 gap-2.5 text-xs">
              <a
                href={SPA_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/30 active:scale-95 border border-[#25D366]/30 hover:border-[#25D366] text-emerald-300 hover:text-emerald-200 font-semibold cursor-pointer transition-all duration-200 hover:scale-[1.02] text-left group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span className="truncate">WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${SPA_INFO.phoneCall}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 border border-stone-700 hover:border-stone-500 text-stone-200 hover:text-white font-semibold transition-all duration-200 hover:scale-[1.02] text-left group"
              >
                <Phone className="w-3.5 h-3.5 text-[#DE1B76] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                <span className="truncate">Direct Call</span>
              </a>
            </div>

            {/* Navigation Links Scrollable List with Smooth Hover Lift & Slide */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 divide-y divide-stone-800/40">
              <div className="pb-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2 px-3">
                  Website Pages & Sections
                </p>
                
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = currentPage === item.page;
                    const IconComponent = item.icon;

                    return (
                      <button
                        key={item.page}
                        onClick={() => handleSelectPage(item.page)}
                        className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer text-left group ${
                          isActive 
                            ? 'bg-[#DE1B76] text-white shadow-xl shadow-[#DE1B76]/30 scale-[1.01]' 
                            : 'bg-[#15151E] hover:bg-[#1E1E2B] active:scale-[0.98] text-stone-200 border border-stone-800/80 hover:border-[#DE1B76]/40 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`p-2.5 rounded-xl shrink-0 transition-all duration-300 ${
                            isActive 
                              ? 'bg-white/20 text-white shadow-sm' 
                              : 'bg-stone-800 text-pink-400 group-hover:bg-[#DE1B76] group-hover:text-white group-hover:scale-110 group-hover:rotate-3'
                          }`}>
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm sm:text-base tracking-wide truncate group-hover:text-white transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 transition-all duration-200 ${
                                  isActive ? 'bg-black/40 text-white' : item.badgeColor || 'bg-white/10 text-stone-300 group-hover:scale-105'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className={`text-xs truncate mt-0.5 transition-colors ${isActive ? 'text-white/80' : 'text-stone-400 group-hover:text-stone-300'}`}>
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <ChevronRight className={`w-5 h-5 shrink-0 ml-2 transition-all duration-300 group-hover:translate-x-1 ${
                          isActive ? 'text-white' : 'text-stone-500 group-hover:text-[#DE1B76]'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location & Facility Information */}
              <div className="pt-4 space-y-3 px-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">
                  Spa Address & Amenities
                </p>

                <div className="rounded-xl bg-[#15151E] p-3.5 border border-stone-800/80 space-y-2 text-xs text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#DE1B76] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">MagKay Spa & Salon</p>
                      <p className="text-stone-400 mt-0.5">{SPA_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1.5 border-t border-stone-800 text-stone-400">
                    <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>Mon - Sat: 8:00 AM – 9:00 PM | Sun: 12:00 PM – 8:00 PM</span>
                  </div>

                  <div className="flex items-center gap-3 pt-1.5 border-t border-stone-800 text-[11px] font-medium text-emerald-400">
                    <span className="flex items-center gap-1">
                      <Wifi className="w-3.5 h-3.5" /> Free High-Speed WiFi
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% Constant Power
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA with Hover Glow & Lift */}
            <div className="p-4 sm:p-5 bg-[#14141B] border-t border-stone-800 space-y-2">
              <button
                id="drawer-book-appointment-btn"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#DE1B76]/30 hover:shadow-xl hover:shadow-[#DE1B76]/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Book Instant Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

