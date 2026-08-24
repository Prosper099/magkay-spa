import React from 'react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SPA_SERVICES } from '../data/spaData';
import { SpaService } from '../types';

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
    <section className="py-12 lg:py-16 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#B38B6D]">
              Selected Treatments
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Signature Salon & <span className="italic font-normal">Spa Services</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Professional massages, clinical facials, hair styling, manicure-pedicure, and grooming performed by experienced therapists.
            </p>
          </div>

          {/* Navigation Button to Full Services Page */}
          <button
            id="view-all-services-header-btn"
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#B38B6D] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer shrink-0"
          >
            <span>View All 12+ Treatments</span>
            <ArrowRight className="w-4 h-4 text-stone-300" />
          </button>
        </div>

        {/* 3 Featured Service Cards (Clean & Uncluttered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/90 text-stone-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Price & Duration */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-stone-200 bg-black/50 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-[#B38B6D]" />
                      {service.durationMinutes} mins
                    </span>
                    <span className="font-serif italic text-xl font-bold text-white drop-shadow-sm">
                      ₦{service.priceNaira.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A1A] leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium italic mt-0.5">
                      "{service.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B38B6D] shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center justify-center gap-1 bg-[#1A1A1A] hover:bg-[#B38B6D] text-white py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenDetailModal(service)}
                    className="inline-flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-800 py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Navigation Banner to Services Page */}
        <div className="mt-8 bg-stone-100/90 rounded-2xl p-6 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#1A1A1A]">Explore our complete 12+ treatment menu</h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Swedish & Deep Tissue Massages, 24K Gold Facials, Knotless Braids, Frontal Wigs, Pedicure & Barbershop.
            </p>
          </div>
          <button
            id="view-all-services-cta-banner-btn"
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 bg-[#B38B6D] hover:bg-[#9c7557] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-transform hover:scale-105 cursor-pointer shrink-0"
          >
            <span>View Full Treatment Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
