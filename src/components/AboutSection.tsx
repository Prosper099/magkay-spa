import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Users, Flower2 } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { MagkayLogo } from './MagkayLogo';

interface AboutSectionProps {
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-20 border-b border-stone-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: About Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
              Our Story & Standards
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
              A Dedicated Beauty & Wellness Sanctuary <br />
              <span className="italic font-normal text-[#DE1B76]">in Lagos State</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Founded in 2021, <strong className="text-white">MagKay Spa</strong> was established along the LASU-Isheri corridor to provide genuine, high-quality salon, spa, and skincare services in a hygienic, tranquil atmosphere.
            </p>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Located at KM 5 (beside Ipaye Bus Stop), we provide Swedish and deep tissue body massage, clinical facials, frontal wig installations, knotless braiding, manicures, pedicures, and modern grooming. We operate as a registered Nigerian business enterprise: <strong className="text-white">BN-3380634</strong>.
            </p>

            {/* 3 Core Departments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#14141A] hover:bg-[#1A1A22] border border-stone-800 hover:border-[#DE1B76]/50 shadow-md hover:shadow-xl hover:shadow-[#DE1B76]/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 space-y-1.5 cursor-default">
                <h4 className="font-bold text-sm text-white">Spa & Massages</h4>
                <p className="text-xs text-stone-400">Swedish massages, body scrubs, and aromatherapy.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#14141A] hover:bg-[#1A1A22] border border-stone-800 hover:border-[#DE1B76]/50 shadow-md hover:shadow-xl hover:shadow-[#DE1B76]/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 space-y-1.5 cursor-default">
                <h4 className="font-bold text-sm text-white">Hair & Barbershop</h4>
                <p className="text-xs text-stone-400">Braiding, wig installations, nail art, and grooming.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#14141A] hover:bg-[#1A1A22] border border-stone-800 hover:border-[#DE1B76]/50 shadow-md hover:shadow-xl hover:shadow-[#DE1B76]/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 space-y-1.5 cursor-default">
                <h4 className="font-bold text-sm text-white">Clinical Skincare</h4>
                <p className="text-xs text-stone-400">24K gold facials, hyperpigmentation care, and glow oils.</p>
              </div>
            </div>

            {/* Practical Checklist */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
                <span><strong className="text-white">CAC Registered Enterprise:</strong> Verified under Nigerian law ({SPA_INFO.registrationNumber})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
                <span><strong className="text-white">Strict Instrument Sanitation:</strong> Full sterilization for all nail, hair, and skincare tools</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DE1B76] shrink-0" />
                <span><strong className="text-white">VIP Home Services:</strong> Mobile massage therapists and stylists available across Lagos</span>
              </div>
            </div>
          </div>

          {/* Right: Registration & Identity Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#14141A] text-white p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-2xl space-y-6">
              
              {/* Official Brand Header */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-stone-800">
                <MagkayLogo variant="icon" size="lg" />
                <div>
                  <h3 className="text-xl font-serif text-white">MagKay <span className="text-[#DE1B76] italic">Spa</span></h3>
                  <p className="text-xs text-stone-400">Unisex Salon & Wellness Sanctuary</p>
                  <div className="text-[11px] font-mono text-[#FF4B99] font-bold mt-1">CAC: {SPA_INFO.registrationNumber}</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#DE1B76] border border-white/10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white">Business Verification</h3>
                    <p className="text-xs text-stone-400">Federal Republic of Nigeria</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full border border-emerald-700/60">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Business Name:</span>
                  <span className="font-bold text-white">{SPA_INFO.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">CAC Registration:</span>
                  <span className="font-mono font-bold text-[#FF4B99]">{SPA_INFO.registrationNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800/80">
                  <span className="text-stone-400">Year Established:</span>
                  <span className="font-bold text-white">{SPA_INFO.foundedYear}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-400">Physical Address:</span>
                  <span className="font-semibold text-right text-stone-200">KM 5, Ipaye Bus Stop, LASU-Isheri Rd</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-stone-800 text-xs text-stone-300 leading-relaxed italic">
                "Our commitment is delivering attentive, individualized care in a welcoming and spotless environment."
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking ? onOpenBooking() : window.location.assign('#booking')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#DE1B76]/30 shadow-lg cursor-pointer"
                >
                  <span>Book a Session</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
