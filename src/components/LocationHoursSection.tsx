import React, { useState } from 'react';
import { 
  MapPin, Clock, Phone, Navigation, Compass, Car 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO, OPERATING_HOURS, ROUTE_DIRECTIONS, getLagosOpeningStatus } from '../data/spaData';

interface LocationHoursSectionProps {
  onOpenWhatsAppModal?: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ onOpenWhatsAppModal }) => {
  const openingStatus = getLagosOpeningStatus();
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);

  return (
    <section id="location" className="py-16 lg:py-20 border-b border-stone-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2 text-left">
          <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
            Visit Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Location & <span className="italic font-normal text-[#DE1B76]">Opening Hours</span>
          </h2>
          <p className="text-base text-stone-400">
            Located along the LASU-Isheri Expressway at Ipaye Bus Stop, easily accessible from Ojo, Igando, LASU main campus, and Alaba.
          </p>
        </div>

        {/* Grid: Hours & Route on Left, Map & Quick Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Operating Schedule & Transit Guide */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Schedule Card */}
            <div className="bg-[#14141A] rounded-3xl p-6 sm:p-7 border border-stone-800 shadow-xl space-y-5 text-left">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#DE1B76]" />
                  <h3 className="font-bold text-base text-white">Opening Schedule</h3>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full text-xs font-semibold text-stone-200 border border-stone-800">
                  <span className={`w-2 h-2 rounded-full ${openingStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{openingStatus.statusText}</span>
                </div>
              </div>

              {/* Schedule Days */}
              <div className="space-y-2">
                {OPERATING_HOURS.map((sched) => {
                  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
                  const isToday = sched.day.toLowerCase() === todayName.toLowerCase();

                  return (
                    <div
                      key={sched.day}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm ${
                        isToday
                          ? 'bg-[#DE1B76] text-white font-semibold shadow-md shadow-[#DE1B76]/20'
                          : 'bg-[#1C1C24] text-stone-300 hover:bg-[#23232D]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{sched.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold bg-black/40 text-white px-2 py-0.5 rounded">
                            Today
                          </span>
                        )}
                      </div>

                      <span className={isToday ? 'text-white font-mono' : 'font-mono text-stone-400'}>
                        {sched.openTime} – {sched.closeTime}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 bg-black/40 rounded-xl border border-stone-800 text-xs text-stone-400">
                <strong className="text-white">Note:</strong> Walk-ins are always welcome. To guarantee a zero-wait session, booking 1–2 hours in advance is recommended.
              </div>
            </div>

            {/* Transit & Landmark Route Directions */}
            <div className="bg-[#14141A] rounded-3xl p-6 sm:p-7 border border-stone-800 shadow-xl space-y-4 text-left">
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#DE1B76]" />
                <h3 className="font-bold text-base text-white">How to Get Here</h3>
              </div>

              <div className="space-y-2.5">
                {ROUTE_DIRECTIONS.map((route, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveRouteIndex(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      activeRouteIndex === idx
                        ? 'border-[#DE1B76] bg-[#DE1B76]/10'
                        : 'border-stone-800 hover:border-stone-700 bg-[#1C1C24]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white mb-1">
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-[#DE1B76]" />
                        <span>{route.from}</span>
                      </div>
                      <span className="text-xs font-semibold text-stone-300 bg-black/50 px-2 py-0.5 rounded border border-stone-800">
                        {route.estimatedTime}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed pt-0.5">
                      {route.instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Map Embed & Contact Box */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Embedded Google Map Box */}
            <div className="bg-[#14141A] rounded-3xl overflow-hidden border border-stone-800 shadow-xl">
              <div className="p-4 bg-[#101016] text-white flex items-center justify-between border-b border-stone-800">
                <div>
                  <div className="text-[11px] text-[#DE1B76] font-bold uppercase tracking-wider">Address</div>
                  <div className="text-xs sm:text-sm font-semibold">KM 5, Ipaye Bus Stop, LASU-Isheri Road, Lagos</div>
                </div>
                <a
                  href={SPA_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#DE1B76] hover:bg-[#c41566] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="aspect-[16/11] w-full bg-stone-900">
                <iframe
                  title="MagKay Spa Location LASU-Isheri Road"
                  src="https://maps.google.com/maps?q=KM+5+Ipaye+Bus+Stop+LASU-Isheri+Road+Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 bg-[#101016] border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-stone-400">
                  <MapPin className="w-4 h-4 text-[#DE1B76]" />
                  <span>Beside Ipaye Bus Stop, LASU-Isheri Corridor</span>
                </div>
                <a
                  href={`tel:${SPA_INFO.phonePrimary}`}
                  className="font-bold text-[#FF4B99] hover:underline"
                >
                  Call {SPA_INFO.phonePrimary}
                </a>
              </div>
            </div>

            {/* Quick Contact & WhatsApp Box */}
            <div className="bg-[#14141A] text-white p-6 sm:p-7 rounded-3xl border border-stone-800 shadow-xl space-y-4">
              <h4 className="font-serif text-lg text-white">
                Front Desk & <span className="text-[#DE1B76]">Booking Inquiries</span>
              </h4>
              <p className="text-xs text-stone-300">
                Call or message our front desk team directly for appointment bookings, VIP home service requests, or product orders:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${SPA_INFO.phonePrimary}`}
                  className="p-3 bg-[#1C1C24] hover:bg-[#252530] rounded-2xl border border-stone-800 transition-colors flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-400 font-semibold uppercase">Line 1 (Primary)</div>
                    <div className="text-xs font-bold text-white font-mono">{SPA_INFO.phonePrimary}</div>
                  </div>
                </a>

                <a
                  href={`tel:${SPA_INFO.phoneSecondary}`}
                  className="p-3 bg-[#1C1C24] hover:bg-[#252530] rounded-2xl border border-stone-800 transition-colors flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-[#DE1B76] shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-400 font-semibold uppercase">Line 2 (Support)</div>
                    <div className="text-xs font-bold text-white font-mono">{SPA_INFO.phoneSecondary}</div>
                  </div>
                </a>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Choose WhatsApp Line 1 or Line 2</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
