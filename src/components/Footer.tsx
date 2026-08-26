import React from 'react';
import { 
  Phone, MapPin, Clock, Instagram, ShieldCheck, 
  ArrowUp, ExternalLink 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO } from '../data/spaData';
import { AppPage } from './Navbar';
import { MagkayLogo } from './MagkayLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate?: (page: AppPage) => void;
  onOpenWhatsAppModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate, onOpenWhatsAppModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: AppPage) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#0B0B0E] text-[#FAF7F2] pt-16 pb-12 border-t border-stone-800">
      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & CAC Badge */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <MagkayLogo variant="full" size="md" />

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Self-care isn't a luxury — it's a necessity. MagKay Spa provides professional hair styling, massages, nails, barbershop, and clinical skincare along LASU-Isheri Expressway, Lagos.
            </p>

            {/* Registration Marker */}
            <div className="p-3.5 rounded-2xl bg-[#14141A] border border-stone-800 text-xs text-stone-300 space-y-1">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-[#DE1B76]" />
                <span>Registered Business Enterprise</span>
              </div>
              <div className="text-stone-400 font-mono">
                CAC Reg: <strong className="text-white">{SPA_INFO.registrationNumber}</strong> (Nigeria)
              </div>
            </div>

            {/* Bottom Social Icons with Hover Animations */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SPA_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-115 hover:-translate-y-1 cursor-pointer group"
                title={`Chat directly on WhatsApp: ${SPA_INFO.phoneWhatsAppFormatted}`}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
              </a>

              <a
                href={SPA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-115 hover:-translate-y-1 group"
                title="Instagram @magkayspa01"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
              </a>

              <a
                href={`tel:${SPA_INFO.phoneCall}`}
                className="w-10 h-10 rounded-xl bg-stone-900 hover:bg-[#DE1B76] border border-stone-800 hover:border-[#DE1B76] active:scale-95 text-stone-200 hover:text-white flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#DE1B76]/30 transition-all duration-300 hover:scale-115 hover:-translate-y-1 group"
                title={`Call Front Desk: ${SPA_INFO.phoneCallFormatted}`}
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4 text-[#DE1B76] group-hover:text-white transition-all duration-300 group-hover:scale-115 group-hover:-rotate-12" />
              </a>
            </div>
          </div>

          {/* Col 2: Official Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm uppercase font-bold tracking-wider text-[#DE1B76]">
              Contact & Location
            </h4>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DE1B76] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Address:</span>
                  <span>{SPA_INFO.address}</span>
                  <span className="block text-[11px] text-stone-400 mt-0.5">{SPA_INFO.landmark}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#DE1B76] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Official Contacts:</span>
                  <a href={`tel:${SPA_INFO.phoneCall}`} className="hover:text-[#FF4B99] block font-mono text-stone-300 transition-colors">
                    {SPA_INFO.phoneCallFormatted} (Direct Voice Call)
                  </a>
                  <a href={SPA_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] block font-mono text-stone-300 transition-colors">
                    {SPA_INFO.phoneWhatsAppFormatted} (WhatsApp Desk)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#DE1B76] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Instagram:</span>
                  <a 
                    href={SPA_INFO.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-white"
                  >
                    {SPA_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm uppercase font-bold tracking-wider text-[#DE1B76]">
              Opening Hours
            </h4>

            <div className="space-y-1.5 text-xs text-stone-300 font-mono">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Mon – Wed:</span>
                <span className="font-semibold text-white">8:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800 text-stone-200">
                <span>Thursday:</span>
                <span className="font-semibold">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Fri – Sat:</span>
                <span className="font-semibold text-white">8:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 text-stone-200">
                <span>Sunday:</span>
                <span className="font-semibold">12:00 PM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#DE1B76] hover:bg-[#c41566] rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-lg"
              >
                Schedule Appointment
              </button>
              <a
                href={SPA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-[#171722] hover:bg-[#20202E] border border-stone-700 hover:border-[#DE1B76] rounded-xl text-[11px] font-semibold text-stone-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Book on Setmore</span>
                <ExternalLink className="w-3 h-3 text-[#DE1B76]" />
              </a>
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-sm uppercase font-bold tracking-wider text-[#DE1B76]">
              Pages
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Treatments Menu (12+)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Skincare Boutique
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Photo Album
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About & Registration
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('location')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Directions & Hours
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} MagKay Spa (BN-3380634). All rights reserved. KM 5 LASU-Isheri Road, Lagos.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
