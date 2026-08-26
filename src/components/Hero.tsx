import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight, ShoppingBag, Flower2, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO, SPA_ASSETS } from '../data/spaData';
import { ImageWithLoading } from './ImageWithLoading';

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
    <section id="home" className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 lg:py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Main Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] sm:leading-[1.15]">
            Self-care isn’t a luxury, <br />
            <span className="italic text-[#DE1B76] font-normal">it’s a necessity.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed font-normal">
            MagKay Spa is a registered unisex beauty, salon, and wellness center in Lagos. From 24K gold therapy and knotless braiding to precision barbering and clinical skincare.
          </p>
        </div>

        {/* Prominent Full-Width Cover Photo Banner */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#14141A]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] max-h-[460px]">
            <img
              src={SPA_ASSETS.storefront}
              alt="MagKay Spa & Salon official building at KM 5 LASU-Isheri Road Lagos"
              className="w-full h-full object-cover object-center"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
              <div>
                <div className="text-[11px] font-mono font-bold text-[#DE1B76] uppercase tracking-wider">
                  Storefront & Treatment Facility
                </div>
                <div className="text-xs sm:text-base font-semibold text-stone-100 mt-0.5">
                  KM 5, Ipaye Bus Stop, LASU-Isheri Road, Lagos
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                <a
                  href={`tel:${SPA_INFO.phoneCall}`}
                  className="px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/15 hover:bg-[#DE1B76] text-white font-semibold text-xs transition-colors backdrop-blur-xs flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  aria-label={`Call ${SPA_INFO.phoneCallFormatted}`}
                >
                  Call Desk
                </a>
                <button
                  onClick={onOpenWhatsAppModal}
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  aria-label="Message on WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Gateways & CTAs */}
        <div className="space-y-6 text-left">
          
          {/* Quick Service Gateways */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <button
              type="button"
              onClick={onNavigateToServices}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#17171F] hover:bg-[#20202B] active:scale-95 border border-stone-800 hover:border-[#DE1B76] shadow-sm hover:shadow-lg hover:shadow-[#DE1B76]/10 text-left transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 group cursor-pointer"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76] flex items-center justify-between">
                <span>FACIALS & SKINCARE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="text-xs text-stone-300 font-medium mt-1">24K gold & hydra facials</div>
            </button>

            <button
              type="button"
              onClick={onNavigateToServices}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#17171F] hover:bg-[#20202B] active:scale-95 border border-stone-800 hover:border-[#DE1B76] shadow-sm hover:shadow-lg hover:shadow-[#DE1B76]/10 text-left transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 group cursor-pointer"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76] flex items-center justify-between">
                <span>HAIR & BARBER</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="text-xs text-stone-300 font-medium mt-1">Braids, fades & styling</div>
            </button>

            <button
              type="button"
              onClick={onNavigateToProducts}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#17171F] hover:bg-[#20202B] active:scale-95 border border-stone-800 hover:border-[#DE1B76] shadow-sm hover:shadow-lg hover:shadow-[#DE1B76]/10 text-left transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 group cursor-pointer"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76] flex items-center justify-between">
                <span>SKINCARE SHOP</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="text-xs text-stone-300 font-medium mt-1">Egyptian milks & glow oils</div>
            </button>
          </div>

          {/* Primary Action Buttons & Trust Strip */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
            
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
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#DE1B76]" />
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

            {/* Authentic Trust Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CAC Registered ({SPA_INFO.registrationNumber})</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
                <span>Certified Therapists & Stylists</span>
              </div>
              <div className="flex items-center gap-2">
                <Flower2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
                <span>VIP Home Service</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
