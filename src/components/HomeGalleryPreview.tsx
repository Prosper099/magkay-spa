import React from 'react';
import { Camera, ArrowRight, Instagram } from 'lucide-react';
import { GALLERY_ITEMS, SPA_INFO } from '../data/spaData';
import { ImageWithLoading } from './ImageWithLoading';

interface HomeGalleryPreviewProps {
  onNavigateToGallery: () => void;
}

export const HomeGalleryPreview: React.FC<HomeGalleryPreviewProps> = ({ onNavigateToGallery }) => {
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className="py-12 lg:py-16 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#B38B6D]">
              Facility & Atmosphere
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Inside <span className="italic font-normal">MagKay Spa Lagos</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Modern treatment suites, hygienic pedicure bays, private massage rooms, and full unisex styling chairs at KM 5 LASU-Isheri Road.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SPA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>{SPA_INFO.instagramHandle}</span>
            </a>

            <button
              onClick={onNavigateToGallery}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#DE1B76] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span>Full Photo Album</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-200 shadow-sm hover:shadow-md transition-all"
            >
              <ImageWithLoading
                src={item.image}
                alt={item.title}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-xs text-white space-y-0.5">
                <div className="text-xs font-bold line-clamp-1 text-stone-100">{item.title}</div>
                <div className="text-[10px] text-stone-300 line-clamp-1">{item.caption}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
