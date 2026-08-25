import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FAQS, SPA_INFO } from '../data/spaData';

interface FAQSectionProps {
  onOpenWhatsAppModal?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsAppModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 lg:py-20 border-b border-stone-800/80 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 space-y-2 text-left">
          <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Frequently Asked <span className="italic font-normal text-[#DE1B76]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-400">
            Answers regarding our services, booking process, VIP home visits, and location along LASU-Isheri Road.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#14141A] rounded-2xl border transition-all duration-300 overflow-hidden shadow-md ${
                  isOpen ? 'border-[#DE1B76]/50 shadow-lg shadow-[#DE1B76]/10' : 'border-stone-800 hover:border-stone-700 hover:bg-[#181822]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#DE1B76] transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#DE1B76]' : 'group-hover:text-[#DE1B76]'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800 text-left animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom inquiry strip */}
        <div className="mt-8 p-6 rounded-3xl bg-[#14141A] hover:bg-[#181822] border border-stone-800 hover:border-[#DE1B76]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#DE1B76] flex items-center justify-center shrink-0 border border-stone-800">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Have a specific question or bridal booking?</div>
              <div className="text-xs text-stone-400">Our front desk team is available directly on WhatsApp.</div>
            </div>
          </div>

          <button
            onClick={onOpenWhatsAppModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shrink-0 cursor-pointer group"
          >
            <WhatsAppIcon className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <span>WhatsApp Desk</span>
          </button>
        </div>

      </div>
    </section>
  );
};
