import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, SPA_INFO } from '../data/spaData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2 text-left">
          <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
            Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Experiences from <span className="italic font-normal text-[#DE1B76]">Our Clients</span>
          </h2>
          <p className="text-base text-stone-400">
            Real feedback from residents, students, and professionals across Ojo, LASU campus, Igando, and Lagos State.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-[#14141A] hover:bg-[#181822] p-6 rounded-3xl border border-stone-800 hover:border-[#DE1B76]/50 shadow-xl hover:shadow-2xl hover:shadow-[#DE1B76]/15 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
            >
              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#DE1B76]">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#DE1B76] group-hover:scale-110 transition-transform duration-300" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic group-hover:text-white transition-colors">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-3 border-t border-stone-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white group-hover:text-[#DE1B76] transition-colors">{testi.name}</span>
                  {testi.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="text-xs text-stone-400">{testi.role}</div>
                <div className="text-[11px] text-[#FF4B99] font-semibold">{testi.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary Bar */}
        <div className="mt-10 p-6 rounded-3xl bg-[#14141A] hover:bg-[#181822] border border-stone-800 hover:border-[#DE1B76]/40 text-white flex flex-col sm:flex-row items-center justify-around gap-6 text-center shadow-xl transition-all duration-300">
          <div className="hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-serif text-[#DE1B76]">{SPA_INFO.rating} / 5.0</div>
            <div className="text-xs text-stone-400 mt-0.5">Average Client Rating</div>
          </div>
          <div className="h-8 w-px bg-stone-800 hidden sm:block" />
          <div className="hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-serif text-[#DE1B76]">{SPA_INFO.reviewCount}</div>
            <div className="text-xs text-stone-400 mt-0.5">Sessions Completed in Lagos</div>
          </div>
          <div className="h-8 w-px bg-stone-800 hidden sm:block" />
          <div className="hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-serif text-[#DE1B76]">100%</div>
            <div className="text-xs text-stone-400 mt-0.5">Autoclave Sanitized Protocols</div>
          </div>
        </div>

      </div>
    </section>
  );
};
