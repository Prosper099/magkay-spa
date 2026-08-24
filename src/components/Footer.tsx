import React from 'react';
import { 
  Phone, MapPin, Clock, Instagram, ShieldCheck, 
  ArrowUp 
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
      
      {/* Contact Hotline Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#14141A] rounded-3xl p-6 sm:p-8 border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs text-[#DE1B76] font-bold uppercase tracking-widest">
              Direct Contact & Booking Desk
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Ready to Book Your Session?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Reach our front desk along LASU-Isheri Road for quick appointments, inquiries, or VIP home service.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SPA_INFO.phonePrimary}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#DE1B76] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#DE1B76]" />
              <span>Call: {SPA_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Line 1 / 2</span>
            </button>

            <a
              href={SPA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/15 text-stone-200 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/10 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

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

            {/* Bottom Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenWhatsAppModal}
                className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                title="WhatsApp Lines (08091537732 / 08091537731)"
                aria-label="WhatsApp Lines"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </button>

              <a
                href={SPA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="Instagram @magkayspa01"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`tel:${SPA_INFO.phonePrimary}`}
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 flex items-center justify-center hover:bg-stone-800 transition-colors"
                title={`Call ${SPA_INFO.phonePrimary}`}
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-[#DE1B76]" />
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
                  <span className="font-bold text-white block">Phone Lines:</span>
                  <a href={`tel:${SPA_INFO.phonePrimary}`} className="hover:text-white block font-mono text-stone-300">
                    {SPA_INFO.phonePrimary} (Line 1)
                  </a>
                  <a href={`tel:${SPA_INFO.phoneSecondary}`} className="hover:text-white block font-mono text-stone-300">
                    {SPA_INFO.phoneSecondary} (Line 2)
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

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#DE1B76] hover:bg-[#c41566] rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-lg"
              >
                Schedule Appointment
              </button>
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
