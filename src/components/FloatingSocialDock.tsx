import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO } from '../data/spaData';

interface FloatingSocialDockProps {
  onOpenWhatsAppModal?: () => void;
}

export const FloatingSocialDock: React.FC<FloatingSocialDockProps> = ({ onOpenWhatsAppModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Quick contact links"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3"
    >
      {/* Optional Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#181820]/90 backdrop-blur-md text-stone-300 hover:text-white border border-stone-700/80 shadow-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Icon Button with Line Selector Trigger */}
      <button
        onClick={onOpenWhatsAppModal}
        className="group relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-white cursor-pointer"
        aria-label="Chat on WhatsApp (Choose Line 1 or Line 2)"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-sm" />
        
        {/* Status dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-black rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
        </span>

        {/* Tooltip */}
        <span className="hidden sm:block absolute right-18 bg-[#121216] text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-stone-700/80 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-xl">
          Chat on WhatsApp (Line 1 & 2)
        </span>
      </button>
    </aside>
  );
};
