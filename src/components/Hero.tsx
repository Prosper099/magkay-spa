import React from 'react';
import { Calendar, CheckCircle2, Flower2, ShoppingBag } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO, SPA_ASSETS } from '../data/spaData';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToServices: () => void;
  onNavigateToProducts: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking,
  onNavigateToServices,
  onNavigateToProducts,
  onOpenWhatsAppModal,
}) => {
  return (
    <section id="home" className="relative pt-4 sm:pt-8 pb-10 sm:pb-16 lg:py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
        
        {/* Main Headline & Refined Writeup */}
        <div className="space-y-2.5 sm:space-y-4 max-w-3xl text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-snug sm:leading-[1.15] tracking-tight">
            Self-care isn’t a luxury, <br className="hidden sm:inline" />
            <span className="italic text-[#DE1B76] font-normal">it’s a necessity.</span>
          </h1>

          <p className="text-[13px] sm:text-base md:text-lg text-stone-300/90 leading-relaxed font-normal max-w-2xl">
            MagKay Spa is your premier unisex salon and wellness center in Lagos — offering 24K gold therapy, knotless braiding, precision barbering, deep tissue massages, and botanical skincare.
          </p>
        </div>

        {/* Prominent Full-Width Cover Photo Banner */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#14141A]">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] md:aspect-[2.4/1] max-h-[460px]">
            <img
              src={SPA_ASSETS.storefront}
              alt="MagKay Spa & Salon official building at KM 5 LASU-Isheri Road Lagos"
              className="w-full h-full object-cover object-center"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/35 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
              <div className="space-y-0.5">
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#DE1B76] uppercase tracking-wider">
                  Storefront & Treatment Facility
                </div>
                <div className="text-xs sm:text-base font-semibold text-stone-100 line-clamp-1 sm:line-clamp-none">
                  KM 5, Ipaye Bus Stop, LASU-Isheri Road, Lagos
                </div>
              </div>

              <div className="flex items-center gap-2 pt-0.5 sm:pt-0 shrink-0">
                <a
                  href={`tel:${SPA_INFO.phoneCall}`}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white/15 hover:bg-[#DE1B76] text-white font-semibold text-[11px] sm:text-xs transition-colors backdrop-blur-xs flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 min-h-[36px]"
                  aria-label={`Call ${SPA_INFO.phoneCallFormatted}`}
                >
                  Call Desk
                </a>
                <button
                  onClick={onOpenWhatsAppModal}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] sm:text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 active:scale-95 min-h-[36px]"
                  aria-label="Message on WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action CTAs & Trust Strip */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-1">
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <button
              id="hero-book-cta"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DE1B76]/25 hover:shadow-xl hover:shadow-[#DE1B76]/45 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer min-h-[44px] group"
            >
              <Calendar className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Book Appointment</span>
            </button>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-3">
              <button
                id="hero-view-services-btn"
                onClick={onNavigateToServices}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#17171F] hover:bg-[#22222E] active:scale-95 text-stone-100 hover:text-white px-4 sm:px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-stone-700 hover:border-[#DE1B76]/60 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-pointer shadow-xs min-h-[44px] group"
              >
                <Flower2 className="w-3.5 h-3.5 text-[#DE1B76] transition-transform duration-300 group-hover:scale-110" />
                <span>Services</span>
              </button>

              <button
                id="hero-shop-products-btn"
                onClick={onNavigateToProducts}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#17171F] hover:bg-[#22222E] active:scale-95 text-stone-100 hover:text-white px-4 sm:px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-stone-700 hover:border-[#DE1B76]/60 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-pointer shadow-xs min-h-[44px] group"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#DE1B76] transition-transform duration-300 group-hover:scale-110" />
                <span>Products</span>
              </button>
            </div>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-5 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
              <span>Certified Therapists & Stylists</span>
            </div>
            <div className="flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
              <span>VIP Home Service Available</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

