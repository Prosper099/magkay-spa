import React from 'react';
import { Phone, X, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SPA_INFO } from '../data/spaData';

interface WhatsAppLineModalProps {
  isOpen: boolean;
  onClose: () => void;
  customMessage?: string;
  title?: string;
  subtitle?: string;
}

export const WhatsAppLineModal: React.FC<WhatsAppLineModalProps> = ({
  isOpen,
  onClose,
  customMessage,
  title = "Contact & Booking Desk",
  subtitle = "Reach MagKay Spa & Salon directly via our verified official channels:"
}) => {
  if (!isOpen) return null;

  const defaultMsg = customMessage || "Hello MagKay Spa, I would like to make an inquiry / book a wellness appointment.";
  const encodedMsg = encodeURIComponent(defaultMsg);

  const whatsappUrl = `https://wa.me/${SPA_INFO.phoneWhatsApp.replace(/^0/, '234')}?text=${encodedMsg}`;
  const callUrl = `tel:${SPA_INFO.phoneCall}`;

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#14141A] border border-stone-700/80 text-white rounded-3xl p-5 sm:p-7 max-w-lg w-full shadow-2xl space-y-5 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#DE1B76]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-stone-800/90 hover:bg-[#DE1B76] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-90 cursor-pointer border border-stone-700/60"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8 text-left">
          <h3 className="text-xl sm:text-2xl font-serif text-white leading-tight font-bold">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Action Channels List */}
        <div className="space-y-3 text-left">
          
          {/* OFFICIAL WHATSAPP CHAT */}
          <button
            onClick={handleOpenWhatsApp}
            className="w-full text-left p-4 sm:p-4.5 rounded-2xl bg-[#181F1A] hover:bg-[#1D2820] border border-[#25D366]/60 hover:border-[#25D366] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 group cursor-pointer flex items-center justify-between gap-3 shadow-lg shadow-[#25D366]/10 active:scale-[0.98]"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              
              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">
                    WhatsApp Chat
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-200 font-semibold border border-white/10">
                    Instant Messaging
                  </span>
                </div>

                <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wide">
                  {SPA_INFO.phoneWhatsAppFormatted}
                </div>

                <div className="text-xs text-stone-300 truncate">
                  Treatment bookings, skincare orders & instant chat
                </div>
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* DIRECT PHONE CALL */}
          <a
            href={callUrl}
            className="w-full text-left p-4 sm:p-4.5 rounded-2xl bg-[#1A1A24] hover:bg-[#222232] border border-[#DE1B76]/50 hover:border-[#DE1B76] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 group cursor-pointer flex items-center justify-between gap-3 shadow-md active:scale-[0.98]"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#DE1B76] to-[#FF4B99] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#DE1B76]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>

              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF4B99]">
                    Direct Phone Call
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DE1B76]/20 text-pink-300 font-semibold border border-[#DE1B76]/30">
                    Front Desk Voice Line
                  </span>
                </div>

                <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wide">
                  {SPA_INFO.phoneCallFormatted}
                </div>

                <div className="text-xs text-stone-300 truncate">
                  Speak directly with front desk receptionist & therapist
                </div>
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-stone-800 group-hover:bg-[#DE1B76] text-stone-300 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Message Preview */}
        {customMessage && (
          <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-left space-y-1">
            <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
              Pre-filled Message:
            </span>
            <p className="text-xs text-stone-300 italic line-clamp-2">
              "{customMessage}"
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
          <span className="text-stone-300">KM 5, Ipaye Bus Stop, LASU-Isheri Road, Lagos</span>
        </div>

      </div>
    </div>
  );
};
