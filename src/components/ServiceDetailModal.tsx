import React from 'react';
import { X, Clock, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SpaService } from '../types';
import { ImageWithLoading } from './ImageWithLoading';

interface ServiceDetailModalProps {
  service: SpaService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
  onOpenWhatsAppModalWithMsg?: (msg: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
  onOpenWhatsAppModalWithMsg
}) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const msg = `Hello MagKay Spa, I'm interested in *${service.name}* (₦${service.priceNaira.toLocaleString()}, ${service.durationMinutes} mins). Could you please confirm available slots?`;
    if (onOpenWhatsAppModalWithMsg) {
      onOpenWhatsAppModalWithMsg(msg);
    } else {
      window.open(`https://wa.me/2348091537732?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#14141A] rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-stone-800 flex flex-col max-h-[90vh]">
        
        {/* Modal Header Banner Image */}
        <div className="relative aspect-[16/9] bg-stone-900 shrink-0">
          <ImageWithLoading
            src={service.image}
            alt={service.name}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-black/40 to-transparent pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between text-left">
            <div>
              <span className="bg-black/70 backdrop-blur-md text-stone-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 shadow-xs">
                {service.categoryLabel}
              </span>
              <h3 className="text-xl font-serif italic text-white mt-2">
                {service.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="font-serif italic text-2xl font-bold text-[#FF4B99] drop-shadow">
                ₦{service.priceNaira.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-300 text-left">
          
          <div className="flex items-center gap-3 text-xs font-semibold text-stone-300 bg-[#1C1C24] p-3 rounded-2xl border border-stone-800 shadow-xs">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#DE1B76]" />
              Duration: <strong className="text-white">{service.durationMinutes} mins</strong>
            </span>
            <span>•</span>
            <span>Unisex Care</span>
            <span>•</span>
            <span className="text-[#FF4B99] font-bold">Sterilized Kit</span>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-white text-sm">Treatment Overview</h4>
            <p className="leading-relaxed text-stone-400">
              {service.description}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">Key Benefits & Protocols</h4>
            <div className="space-y-1.5">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#DE1B76] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-stone-900 rounded-2xl border border-stone-800 text-xs text-stone-400">
            <div className="font-bold text-white mb-0.5">Location Options</div>
            <span>Available both In-Spa at KM 5 LASU-Isheri Road and via VIP Home Service across Lagos.</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-5 bg-[#101016] border-t border-stone-800 flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#DE1B76] hover:bg-[#c41566] active:scale-95 text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DE1B76]/30 shadow-lg cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            <span>Select & Book Service</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30 cursor-pointer whitespace-nowrap shadow-md group"
          >
            <WhatsAppIcon className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <span>WhatsApp Inquiry</span>
          </button>
        </div>

      </div>
    </div>
  );
};
