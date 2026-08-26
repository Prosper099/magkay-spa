import React from 'react';
import { 
  ArrowRight, ShoppingBag, Calendar, Camera, 
  MapPin, Clock, Phone, MessageCircle, Flower2, Heart, ShieldCheck, Gem
} from 'lucide-react';
import { Hero } from './Hero';
import { SPA_INFO, getLagosOpeningStatus } from '../data/spaData';
import { AppPage } from './Navbar';

interface HomeLandingHubProps {
  onNavigate: (page: AppPage) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenWhatsAppModal: () => void;
}

export const HomeLandingHub: React.FC<HomeLandingHubProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenWhatsAppModal,
}) => {
  const openingStatus = getLagosOpeningStatus();

  return (
    <div>
      {/* 1. Main Hero Section */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onNavigateToServices={() => onNavigate('services')}
        onNavigateToProducts={() => onNavigate('products')}
        onOpenWhatsAppModal={onOpenWhatsAppModal}
      />

      {/* 2. Welcome & Department Hub (Clean 4-Card Portal) */}
      <section className="py-12 sm:py-16 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10 space-y-2 text-left">
            <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
              Explore MagKay Spa
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Where would you like <span className="italic font-normal text-[#DE1B76]">to start?</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-400">
              Access our complete price catalog, botanical skincare shop, verified photo album, or book your visit below.
            </p>
          </div>

          {/* 4 Clean Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Card 1: Services Catalog */}
            <div 
              onClick={() => onNavigate('services')}
              className="bg-[#14141A] hover:bg-[#1A1A22] rounded-2xl p-6 border border-stone-800 shadow-lg hover:shadow-2xl hover:shadow-[#DE1B76]/15 hover:border-[#DE1B76] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-[#DE1B76] flex items-center justify-center group-hover:bg-[#DE1B76] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-stone-800">
                  <Flower2 className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#DE1B76] transition-colors">
                    Treatments Menu
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Signature 24K gold facials, botanical skincare, knotless hair braids, precision haircuts & VIP home service.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B76] group-hover:text-white transition-colors">
                <span>View Full Menu & Prices</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>

            {/* Card 2: Skincare Boutique */}
            <div 
              onClick={() => onNavigate('products')}
              className="bg-[#14141A] hover:bg-[#1A1A22] rounded-2xl p-6 border border-stone-800 shadow-lg hover:shadow-2xl hover:shadow-[#DE1B76]/15 hover:border-[#DE1B76] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-[#DE1B76] flex items-center justify-center group-hover:bg-[#DE1B76] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-stone-800">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#DE1B76] transition-colors">
                    Skincare Boutique
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    MagKay Egyptian Luxe Body Milk, foaming cleansers, 24K body glow oils & corrective knuckle creams.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B76] group-hover:text-white transition-colors">
                <span>Shop Skincare Line</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>

            {/* Card 3: Photo Album */}
            <div 
              onClick={() => onNavigate('gallery')}
              className="bg-[#14141A] hover:bg-[#1A1A22] rounded-2xl p-6 border border-stone-800 shadow-lg hover:shadow-2xl hover:shadow-[#DE1B76]/15 hover:border-[#DE1B76] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-[#DE1B76] flex items-center justify-center group-hover:bg-[#DE1B76] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-stone-800">
                  <Camera className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#DE1B76] transition-colors">
                    Photo Album
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Browse real photos of our LASU-Isheri facility, treatment rooms, pedicure bays, and clients.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B76] group-hover:text-white transition-colors">
                <span>View Photo Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>

            {/* Card 4: Book Appointment */}
            <div 
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-br from-[#1E1218] to-[#13131A] text-white rounded-2xl p-6 border border-[#DE1B76]/40 shadow-lg hover:shadow-2xl hover:shadow-[#DE1B76]/30 hover:border-[#DE1B76] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#DE1B76]/20 text-[#DE1B76] flex items-center justify-center group-hover:bg-[#DE1B76] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-[#DE1B76]/30">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF4B99] transition-colors">
                    Book a Session
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Select your service, choose your preferred date and time slot, and get instant confirmation.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B76] group-hover:text-white transition-colors">
                <span>Start Booking</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Compact Location & Operating Status Overview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#14141A] rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-xs font-semibold text-stone-300 border border-stone-800">
                <span className={`w-2 h-2 rounded-full ${openingStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{openingStatus.statusText}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Visit Us at KM 5 LASU-Isheri Expressway
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                Located right beside Ipaye Bus Stop, easily accessible from LASU main campus, Igando, Ojo, and Alaba. Walk-ins are warmly welcome.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#DE1B76]" />
                  <span>Mon – Sat: 8:00 AM – 9:00 PM (Sun from 12 PM)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#DE1B76]" />
                  <span className="font-mono">Call: {SPA_INFO.phoneCallFormatted} | WA: {SPA_INFO.phoneWhatsAppFormatted}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onNavigate('location')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#DE1B76] active:scale-95 text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#DE1B76]/30 cursor-pointer shadow-xs min-h-[44px] border border-white/15 hover:border-transparent group"
              >
                <MapPin className="w-4 h-4 text-[#DE1B76] group-hover:text-white transition-colors" />
                <span>Full Directions & Schedule</span>
              </button>

              <button
                onClick={onOpenWhatsAppModal}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40 min-h-[44px] shadow-lg cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 fill-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span>Contact Desk (Call & WhatsApp)</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
