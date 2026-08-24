import React from 'react';
import { Calendar, MapPin, CheckCircle2, ShieldCheck, ArrowRight, ShoppingBag, Flower2, Heart } from 'lucide-react';
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
    <section id="home" className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 lg:py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Brand Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 text-xs font-semibold leading-normal max-w-full">
              <MapPin className="w-3.5 h-3.5 text-[#DE1B76] shrink-0" />
              <span className="truncate sm:whitespace-normal">KM 5, Ipaye Bus Stop, LASU-Isheri Road, Lagos</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] sm:leading-[1.15]">
                Self-care isn’t a luxury, <br />
                <span className="italic text-[#DE1B76] font-normal">it’s a necessity.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-xl font-normal">
                MagKay Spa is a registered unisex beauty, salon, and wellness center in Lagos. From braiding and precision barbering to deep tissue massage and clinical skincare treatments.
              </p>
            </div>

            {/* Quick Service Gateways */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <button
                type="button"
                onClick={onNavigateToServices}
                className="p-3.5 sm:p-4 rounded-2xl bg-[#17171F] hover:bg-[#20202B] border border-stone-800 hover:border-[#DE1B76]/40 shadow-sm text-left transition-all group cursor-pointer"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76] flex items-center justify-between">
                  <span>SPA & MASSAGE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs text-stone-300 font-medium mt-1">Deep tissue, scrubs & facials</div>
              </button>

              <button
                type="button"
                onClick={onNavigateToServices}
                className="p-3.5 sm:p-4 rounded-2xl bg-[#17171F] hover:bg-[#20202B] border border-stone-800 hover:border-[#DE1B76]/40 shadow-sm text-left transition-all group cursor-pointer"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76] flex items-center justify-between">
                  <span>HAIR & BARBER</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs text-stone-300 font-medium mt-1">Braids, wigs, nails & cuts</div>
              </button>

              <button
                type="button"
                onClick={onNavigateToProducts}
                className="p-3.5 sm:p-4 rounded-2xl bg-[#17171F] hover:bg-[#20202B] border border-stone-800 hover:border-[#DE1B76]/40 shadow-sm text-left transition-all group cursor-pointer"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76] flex items-center justify-between">
                  <span>SKINCARE SHOP</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs text-stone-300 font-medium mt-1">Egyptian milks & glow oils</div>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-book-cta"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DE1B76]/20 transition-all cursor-pointer min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-3">
                <button
                  id="hero-view-services-btn"
                  onClick={onNavigateToServices}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#17171F] hover:bg-[#22222E] text-stone-100 px-4 sm:px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-stone-700 transition-all cursor-pointer shadow-xs min-h-[44px]"
                >
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>

                <button
                  id="hero-shop-products-btn"
                  onClick={onNavigateToProducts}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#17171F] hover:bg-[#22222E] text-stone-100 px-4 sm:px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-stone-700 transition-all cursor-pointer shadow-xs min-h-[44px]"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#DE1B76]" />
                  <span>Products</span>
                </button>
              </div>
            </div>

            {/* Authentic Trust Info */}
            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-6 sm:gap-y-2 text-xs text-stone-400">
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
                <span>VIP Home Service Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Storefront Image Presentation */}
          <div className="lg:col-span-5 mt-2 sm:mt-4 lg:mt-0">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#14141A]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={SPA_ASSETS.storefront}
                  alt="MagKay Spa & Salon official building at KM 5 LASU-Isheri Road Lagos"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/30 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono font-bold text-[#DE1B76] uppercase tracking-wider">
                    Storefront & Treatment Facility
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-100 mt-0.5">
                    KM 5, Ipaye Bus Stop, LASU-Isheri Road, Lagos
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact Strip */}
              <div className="p-3.5 sm:p-4 bg-[#101016] text-white flex items-center justify-between gap-3 text-xs border-t border-stone-800">
                <div className="space-y-0.5 min-w-0">
                  <div className="text-stone-400 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">Customer Support</div>
                  <div className="font-mono font-bold text-stone-200 text-xs sm:text-sm truncate">{SPA_INFO.phonePrimary}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${SPA_INFO.phonePrimary}`}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 font-semibold text-xs transition-colors min-h-[36px] flex items-center justify-center"
                    aria-label={`Call ${SPA_INFO.phonePrimary}`}
                  >
                    Call
                  </a>
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors flex items-center gap-1.5 min-h-[36px] cursor-pointer shadow-sm"
                    aria-label="Message on WhatsApp (Lines 1 & 2)"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
