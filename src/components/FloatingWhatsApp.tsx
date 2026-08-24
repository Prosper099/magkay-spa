import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles, Send, MapPin } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';
import { generateGeneralChatUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Quick Action Popover Card */}
      {isOpen && (
        <div className="mb-3 bg-white/80 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white/80 max-w-xs w-72 space-y-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-stone-200/60 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-stone-900">MagKay Spa WhatsApp Desk</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online • Quick Reply
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1 text-xs cursor-pointer"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            Hello! 🌸 How can we pamper you today? Chat with our Lagos booking desk:
          </p>

          <div className="space-y-2">
            <a
              href={SPA_INFO.whatsappUrlPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs font-bold text-emerald-900 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Line 1: {SPA_INFO.phonePrimary}</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-800 px-2 py-0.5 rounded-full">Primary</span>
            </a>

            <a
              href={SPA_INFO.whatsappUrlSecondary}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-stone-200 text-xs font-bold text-stone-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-stone-600" />
                <span>Line 2: {SPA_INFO.phoneSecondary}</span>
              </div>
              <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full">Support</span>
            </a>
          </div>

          <div className="pt-2 border-t border-stone-200/60">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#B38B6D] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B38B6D]" />
              <span>Full Booking Form</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/80 backdrop-blur-md"
        aria-label="Open WhatsApp Chat Desk"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          </span>
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-wide hidden sm:inline">
          Book on WhatsApp
        </span>
      </button>

    </div>
  );
};
