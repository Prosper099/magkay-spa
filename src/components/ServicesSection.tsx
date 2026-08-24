import React, { useState } from 'react';
import { 
  Clock, CheckCircle, ArrowRight, MessageCircle, 
  Search, ArrowLeft, Eye, Flower2
} from 'lucide-react';
import { SPA_SERVICES, SPA_INFO } from '../data/spaData';
import { SpaService, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenDetailModal: (service: SpaService) => void;
  onNavigateHome?: () => void;
  isStandalonePage?: boolean;
  onOpenWhatsAppModalWithMsg?: (msg: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onOpenDetailModal,
  onNavigateHome,
  isStandalonePage = false,
  onOpenWhatsAppModalWithMsg
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'skincare', label: 'Skincare & Facials' },
    { id: 'massage', label: 'Spa & Massages' },
    { id: 'nails', label: 'Nails & Manicure' },
    { id: 'hair', label: 'Hair & Barbershop' },
    { id: 'home', label: 'VIP Home Service' },
  ];

  const filteredServices = SPA_SERVICES.filter(s => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppInquiry = (service: SpaService) => {
    const msg = `Hello MagKay Spa, I'm interested in booking *${service.name}* (₦${service.priceNaira.toLocaleString()}, ${service.durationMinutes} mins). Could you please confirm availability?`;
    if (onOpenWhatsAppModalWithMsg) {
      onOpenWhatsAppModalWithMsg(msg);
    } else {
      window.open(`https://wa.me/2348091537732?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="services" className="py-12 lg:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation if on dedicated page */}
        {isStandalonePage && (
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-stone-800">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer bg-[#17171F] px-4 py-2 rounded-xl border border-stone-700 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="text-xs text-stone-400 font-medium">
              <span>Home</span> <span className="mx-1.5">/</span> <strong className="text-white">Services & Pricing</strong>
            </div>
          </div>
        )}

        {/* Section Title */}
        <div className="max-w-3xl mb-10 space-y-2 text-left">
          <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
            Full Treatment Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Services & <span className="italic font-normal text-[#DE1B76]">Pricing Menu</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-400">
            All services are performed by certified aestheticians and stylists using sterilized tools and authentic botanical formulas.
          </p>
        </div>

        {/* Search and Category Filter Toolbar */}
        <div className="max-w-4xl mb-10 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatment (e.g. 24K Gold Facial, Swedish Massage, Knotless Braids, Pedicure)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14141A] border border-stone-800 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#DE1B76] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start overflow-x-auto pb-2 gap-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#DE1B76] text-white shadow-md shadow-[#DE1B76]/20'
                      : 'bg-[#14141A] text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#14141A] rounded-2xl border border-stone-800 max-w-md mx-auto">
            <p className="text-base text-stone-300 font-medium">No treatments matched "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs font-bold text-[#DE1B76] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#14141A] rounded-2xl overflow-hidden border border-stone-800 shadow-lg hover:shadow-xl hover:border-[#DE1B76]/40 transition-all flex flex-col justify-between"
              >
                {/* Card Image Banner */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-transparent to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-black/80 backdrop-blur-md text-stone-200 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {service.categoryLabel}
                      </span>
                    </div>

                    {/* Duration & Price Floating */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-stone-200 bg-black/70 px-2.5 py-1 rounded-lg border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-[#DE1B76]" />
                        {service.durationMinutes} mins
                      </span>
                      <span className="font-serif italic text-xl font-bold text-[#FF4B99] drop-shadow-sm">
                        ₦{service.priceNaira.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3 text-left">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs text-stone-400 font-medium italic mt-0.5">
                        "{service.tagline}"
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Benefits List */}
                    <div className="pt-1 space-y-1.5">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-400">
                          <CheckCircle className="w-3.5 h-3.5 text-[#DE1B76] shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 border-t border-stone-800/80 mt-2">
                  <div className="pt-3 flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectService(service.id)}
                        className="inline-flex items-center justify-center gap-1.5 bg-[#DE1B76] hover:bg-[#c41566] text-white py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleWhatsAppInquiry(service)}
                        className="inline-flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    <button
                      onClick={() => onOpenDetailModal(service)}
                      className="w-full text-center text-xs text-stone-400 hover:text-white py-1 font-medium inline-flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View details</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner for VIP Custom Group / Bridal Bookings */}
        <div className="mt-12 bg-[#17171F] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#DE1B76] font-bold">Specialty Inquiries & Weddings</span>
            <h3 className="text-xl sm:text-2xl font-serif">Bridal Showers & Custom Spa Days</h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Planning a group session, bridal glam package, or mobile hotel spa service in Lagos? We prepare tailored packages.
            </p>
          </div>
          <button
            onClick={() => handleWhatsAppInquiry(SPA_SERVICES[SPA_SERVICES.length - 1])}
            className="inline-flex items-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-lg cursor-pointer"
          >
            <span>Inquire Bridal / Group</span>
          </button>
        </div>

      </div>
    </section>
  );
};
