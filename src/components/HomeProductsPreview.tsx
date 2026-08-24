import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SKINCARE_PRODUCTS, SPA_INFO } from '../data/spaData';
import { generateProductOrderUrl } from '../utils/whatsapp';

interface HomeProductsPreviewProps {
  onNavigateToProducts: () => void;
}

export const HomeProductsPreview: React.FC<HomeProductsPreviewProps> = ({
  onNavigateToProducts,
}) => {
  // Show top 3 products on home view
  const previewProducts = SKINCARE_PRODUCTS.slice(0, 3);

  return (
    <section className="py-12 lg:py-16 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#B38B6D]">
              Skincare Boutique
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              MagKay <span className="italic font-normal">Botanical Formulations</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Gentle body milks, restorative night creams, and illuminating face oils formulated for tropical climates.
            </p>
          </div>

          {/* Navigation Button to Full Products Page */}
          <button
            id="view-all-products-header-btn"
            onClick={onNavigateToProducts}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#B38B6D] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer shrink-0"
          >
            <span>Explore Skincare Shop</span>
            <ArrowRight className="w-4 h-4 text-stone-300" />
          </button>
        </div>

        {/* 3 Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProducts.map((product) => {
            const orderUrl = generateProductOrderUrl(product, 1, SPA_INFO.phonePrimary);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/90 text-stone-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                        {product.category}
                      </span>
                      <span className="bg-stone-900/80 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono">
                        {product.size}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="font-serif italic text-xl font-bold text-white drop-shadow-sm">
                        ₦{product.priceNaira.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="text-base font-bold text-[#1A1A1A] leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium italic mt-0.5">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.keyIngredients.slice(0, 3).map((ing, i) => (
                        <span key={i} className="bg-stone-100 px-2.5 py-0.5 rounded text-[10px] font-medium text-stone-700">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <div className="pt-3">
                    <a
                      href={orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Banner to Products Page */}
        <div className="mt-8 bg-stone-100/90 rounded-2xl p-6 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#1A1A1A]">Looking for personalized skincare regimens?</h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Browse our full catalog with Egyptian milks, knuckle repair creams, and gentle cleansers.
            </p>
          </div>
          <button
            id="view-all-products-cta-banner-btn"
            onClick={onNavigateToProducts}
            className="inline-flex items-center gap-2 bg-[#B38B6D] hover:bg-[#9c7557] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-transform hover:scale-105 cursor-pointer shrink-0"
          >
            <span>Browse Full Skincare Boutique</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
