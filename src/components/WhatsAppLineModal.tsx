import React from 'react';
import { Phone, X, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
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
  title = "Chat with MagKay Spa",
  subtitle = "Select a verified WhatsApp line to start your conversation with our front desk:"
}) => {
  if (!isOpen) return null;

  const defaultMsg = customMessage || "Hello MagKay Spa, I would like to make an inquiry / book a wellness appointment.";
  const encodedMsg = encodeURIComponent(defaultMsg);

  const line1Url = `https://wa.me/2348091537732?text=${encodedMsg}`;
  const line2Url = `https://wa.me/2348135923223?text=${encodedMsg}`;

  const handleSelectLine = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#14141A] border border-stone-700/70 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#DE1B76]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-stone-700/50"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with authentic WhatsApp branding */}
        <div className="space-y-3 pr-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold tracking-wide">
            <WhatsAppIcon className="w-4 h-4" />
            <span>Official WhatsApp Desk</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping ml-0.5" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
            {title}
          </h3>
          
          <p className="text-sm text-stone-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* WhatsApp Line Selection Cards */}
        <div className="space-y-3.5 text-left">
          
          {/* LINE 1 CARD */}
          <button
            onClick={() => handleSelectLine(line1Url)}
            className="w-full text-left p-4 sm:p-5 rounded-2xl bg-[#1A1A24] hover:bg-[#222230] border border-stone-700/80 hover:border-[#25D366] transition-all group cursor-pointer flex items-center justify-between gap-4 shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/20 group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] whitespace-nowrap">
                    Line 1 (Primary Desk)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 whitespace-nowrap">
                    Instant Reply
                  </span>
                </div>

                <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wide">
                  {SPA_INFO.phonePrimary}
                </div>

                <div className="text-xs text-stone-400 truncate">
                  Appointments, in-spa sessions & general booking
                </div>
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-stone-800/80 group-hover:bg-[#25D366] text-stone-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          {/* LINE 2 CARD */}
          <button
            onClick={() => handleSelectLine(line2Url)}
            className="w-full text-left p-4 sm:p-5 rounded-2xl bg-[#1A1A24] hover:bg-[#222230] border border-stone-700/80 hover:border-[#DE1B76] transition-all group cursor-pointer flex items-center justify-between gap-4 shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#DE1B76] to-[#FF4B99] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#DE1B76]/20 group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-7 h-7" />
              </div>

              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF4B99] whitespace-nowrap">
                    Line 2 (Consultations & Support)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DE1B76]/20 text-pink-300 font-semibold border border-[#DE1B76]/30 whitespace-nowrap">
                    Skincare Desk
                  </span>
                </div>

                <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wide">
                  {SPA_INFO.phoneSecondary}
                </div>

                <div className="text-xs text-stone-400 truncate">
                  Skincare inquiries, VIP home service & consultations
                </div>
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl bg-stone-800/80 group-hover:bg-[#DE1B76] text-stone-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

        </div>

        {/* Message Preview */}
        {customMessage && (
          <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-left space-y-1">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block">
              Pre-filled Message:
            </span>
            <p className="text-xs text-stone-300 italic line-clamp-2">
              "{customMessage}"
            </p>
          </div>
        )}

        {/* Spacious, Legible Phone Call Section (Fixed all wrapping bugs) */}
        <div className="pt-4 border-t border-stone-800 space-y-2.5 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
            <Phone className="w-3.5 h-3.5 text-[#DE1B76]" />
            <span>Prefer a direct voice call?</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a 
              href={`tel:${SPA_INFO.phonePrimary}`} 
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-semibold border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Call Line 1 ({SPA_INFO.phonePrimary})</span>
            </a>

            <a 
              href={`tel:${SPA_INFO.phoneSecondary}`} 
              className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-semibold border border-stone-700/60 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4B99]" />
              <span>Call Line 2 ({SPA_INFO.phoneSecondary})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
