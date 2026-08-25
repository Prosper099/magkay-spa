import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO } from '../data/spaData';

interface FloatingSocialDockProps {
  onOpenBooking?: () => void;
  onOpenWhatsAppModal?: () => void;
}

export const FloatingSocialDock: React.FC<FloatingSocialDockProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct WhatsApp chat link for the official WhatsApp line (0809 153 7732)
  const directWhatsAppUrl = `${SPA_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hello MagKay Spa! 🌸 I would like to inquire about booking an appointment / consultation.'
  )}`;

  return (
    <aside 
      aria-label="Quick contact and social links"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3"
    >
      {/* 1. Scroll to top button with smooth hover animation */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#181820]/90 hover:bg-[#252532] text-stone-300 hover:text-white border border-stone-700/80 hover:border-stone-500 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer group"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* 2. Direct Call Desk Button (Line 1: 0813 592 3223) with hover animation */}
      <a
        href={`tel:${SPA_INFO.phoneCall}`}
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181822] hover:bg-[#DE1B76] text-stone-300 hover:text-white flex items-center justify-center shadow-xl hover:shadow-[#DE1B76]/30 border border-stone-700/80 hover:border-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer"
        aria-label={`Call MagKay Front Desk: ${SPA_INFO.phoneCallFormatted}`}
        title={`Call: ${SPA_INFO.phoneCallFormatted}`}
      >
        <Phone className="w-5 h-5 text-[#DE1B76] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
        
        {/* Tooltip */}
        <span className="hidden sm:block absolute right-14 bg-[#121216] text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-stone-700/80 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl">
          Call: {SPA_INFO.phoneCallFormatted}
        </span>
      </a>

      {/* 3. Direct Instagram Profile Button with hover animation */}
      <a
        href={SPA_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xl hover:shadow-pink-500/35 border-2 border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer"
        aria-label="Visit MagKay Spa on Instagram @magkayspa01"
        title="Instagram @magkayspa01"
      >
        <Instagram className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />

        {/* Tooltip */}
        <span className="hidden sm:block absolute right-14 bg-[#121216] text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-stone-700/80 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl">
          Instagram: {SPA_INFO.instagramHandle}
        </span>
      </a>

      {/* 4. Official Direct WhatsApp Floating Button (Line 2: 0809 153 7732 ONLY) with hover animation */}
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-115 hover:-translate-y-1 active:scale-95 border-2 border-white cursor-pointer"
        aria-label={`Chat directly on WhatsApp: ${SPA_INFO.phoneWhatsAppFormatted}`}
        title={`Chat on WhatsApp (${SPA_INFO.phoneWhatsAppFormatted})`}
      >
        <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        
        {/* Live Active Status Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-black rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
        </span>

        {/* Tooltip (Strictly only the WhatsApp line 0809 153 7732) */}
        <span className="hidden sm:block absolute right-18 bg-[#121216] text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-stone-700/80 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl">
          <span className="text-[#25D366] font-bold">WhatsApp Desk:</span> {SPA_INFO.phoneWhatsAppFormatted}
        </span>
      </a>
    </aside>
  );
};

