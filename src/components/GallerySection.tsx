import React, { useState } from 'react';
import { Instagram, Eye, X, Flower2 } from 'lucide-react';
import { GALLERY_ITEMS, SPA_INFO } from '../data/spaData';
import { GalleryItem } from '../types';
import { ImageWithLoading } from './ImageWithLoading';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white">
            Real Results, <span className="not-italic font-bold font-sans text-[#DE1B76]">Real Glow</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-400">
            Explore our latest hair styling, encapsulated nail art, facial glow results, and luxury spa suites at KM 5 LASU-Isheri Road.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {[
            { id: 'all', label: 'All Highlights' },
            { id: 'skincare', label: 'Facials & Skincare' },
            { id: 'hair', label: 'Hair & Braids' },
            { id: 'nails', label: 'Nail Art & Glam' },
            { id: 'spa', label: 'Spa Suites' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                selectedCategory === tab.id
                  ? 'bg-[#DE1B76] text-white shadow-md shadow-[#DE1B76]/30 scale-105'
                  : 'bg-[#14141A] text-stone-400 hover:bg-stone-800 hover:text-white border border-stone-800 hover:border-stone-700 hover:scale-105'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#DE1B76]/20 bg-stone-900 aspect-[4/3] cursor-pointer transition-all duration-300 border border-stone-800 hover:border-[#DE1B76]/60 hover:scale-[1.03] hover:-translate-y-1"
            >
              <ImageWithLoading
                src={item.image}
                alt={item.title}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-112 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Instagram Floating Badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-stone-200 flex items-center gap-1.5 border border-white/10 group-hover:border-[#DE1B76]/40 shadow-xs transition-colors">
                <Instagram className="w-3 h-3 text-[#DE1B76]" />
                <span>{item.instagramTag || SPA_INFO.instagramHandle}</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 text-left">
                <div className="text-[11px] uppercase tracking-wider text-[#DE1B76] font-bold">
                  {item.category}
                </div>
                <h4 className="text-lg font-serif italic text-white leading-snug group-hover:text-pink-100 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] text-[#FF4B99] font-semibold group-hover:translate-x-1 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view snapshot</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow on Instagram Banner */}
        <div className="mt-12 text-center">
          <a
            href={SPA_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#14141A] hover:bg-[#DE1B76] active:scale-95 text-white border border-stone-800 hover:border-transparent text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:shadow-[#DE1B76]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group"
          >
            <Instagram className="w-4 h-4 text-[#DE1B76] group-hover:text-white transition-colors group-hover:scale-110" />
            <span>Follow @magkayspa01 for Daily Transformations</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#14141A] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Close image snapshot"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] bg-black">
              <ImageWithLoading
                src={activeItem.image}
                alt={activeItem.title}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-2 text-left text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DE1B76]">
                  {activeItem.category}
                </span>
                <span className="text-xs font-medium text-stone-400">
                  {activeItem.instagramTag || SPA_INFO.instagramHandle}
                </span>
              </div>
              <h3 className="text-xl font-serif text-white">{activeItem.title}</h3>
              <p className="text-sm text-stone-300 leading-relaxed">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
