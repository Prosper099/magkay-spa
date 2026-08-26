import React from 'react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SPA_SERVICES } from '../data/spaData';
import { SpaService } from '../types';
import { ImageWithLoading } from './ImageWithLoading';

interface HomeServicesPreviewProps {
  onNavigateToServices: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenDetailModal: (service: SpaService) => void;
}

export const HomeServicesPreview: React.FC<HomeServicesPreviewProps> = ({
  onNavigateToServices,
  onSelectService,
  onOpenDetailModal,
}) => {
  // Show 3 highlight services on the home view to keep the home page uncluttered
  const highlightServices = SPA_SERVICES.filter(s => s.isFeatured || s.isPopular).slice(0, 3);

  return (
    <section className="py-12 lg:py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
              Selected Treatments
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Signature Salon & <span className="italic font-normal text-[#DE1B76]">Spa Services</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-400">
              Clinical 24K gold facials, botanical skincare therapy, knotless hair braiding, executive barbering, and VIP home service.
            </p>
          </div>

          {/* Navigation Button to Full Services Page */}
          <button
            id="view-all-services-header-btn"
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 bg-[#1C1C24] hover:bg-[#DE1B76] active:scale-95 text-stone-200 hover:text-white border border-stone-700 hover:border-[#DE1B76] px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#DE1B76]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer shrink-0 group"
          >
            <span>View Full Services Menu</span>
            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#14141A] rounded-2xl overflow-hidden border border-stone-800 shadow-lg hover:shadow-2xl hover:shadow-[#DE1B76]/15 hover:border-[#DE1B76]/60 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <ImageWithLoading
                    src={service.image}
                    alt={service.name}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-black/30 to-transparent pointer-events-none" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-stone-200 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider group-hover:border-[#DE1B76]/50 transition-colors shadow-xs">
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Price & Duration */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-stone-200 bg-black/70 px-2.5 py-1 rounded-lg border border-white/10 group-hover:border-[#DE1B76]/40 transition-colors">
                      <Clock className="w-3.5 h-3.5 text-[#DE1B76]" />
                      {service.durationMinutes} mins
                    </span>
                    <span className="font-serif italic text-xl font-bold text-[#FF4B99] drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                      ₦{service.priceNaira.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3 text-left">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#DE1B76] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-medium italic mt-0.5">
                      "{service.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-400 group-hover:text-stone-300 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DE1B76] shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-stone-800/80 mt-2">
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center justify-center gap-1 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DE1B76]/30 cursor-pointer group/btn"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenDetailModal(service)}
                    className="inline-flex items-center justify-center bg-[#1C1C24] hover:bg-[#252532] active:scale-95 text-stone-300 hover:text-white border border-stone-700/80 hover:border-stone-600 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Navigation Banner to Services Page */}
        <div className="mt-8 bg-[#14141A] rounded-2xl p-6 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl text-left">
          <div>
            <h4 className="text-base font-bold text-white">Explore our full beauty & grooming menu</h4>
            <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
              24K Gold Facials, Ultrasonic Deep Cleansing, Knotless Hair Braids, Executive Barbering & VIP Home Services.
            </p>
          </div>
          <button
            id="view-all-services-cta-banner-btn"
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-[#DE1B76]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer shrink-0 group"
          >
            <span>View Full Treatment Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
