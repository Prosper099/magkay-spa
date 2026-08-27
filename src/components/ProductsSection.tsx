import React, { useState } from 'react';
import { ArrowLeft, Check, ShieldCheck, CheckCircle2, MessageCircle, Heart, Info, X, Phone, Tag, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SKINCARE_PRODUCTS, SPA_INFO } from '../data/spaData';
import { SkincareProduct } from '../types';
import { generateProductOrderUrl } from '../utils/whatsapp';
import { ImageWithLoading } from './ImageWithLoading';

interface ProductsSectionProps {
  isStandalonePage?: boolean;
  onNavigateHome?: () => void;
  onOpenWhatsAppModalWithMsg?: (msg: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  isStandalonePage = false,
  onNavigateHome,
  onOpenWhatsAppModalWithMsg,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<SkincareProduct | null>(null);
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'Body & Face Care', label: 'Body & Sets' },
    { id: 'Face Care', label: 'Face Creams' },
    { id: 'Cleansers', label: 'Clarifying Washes' },
    { id: 'Specialty Care', label: 'Knuckle Treatments' },
    { id: 'Body Oils', label: 'Glow Oils' },
  ];

  const filteredProducts = SKINCARE_PRODUCTS.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handleOrderWhatsApp = (product: SkincareProduct, qty: number = 1) => {
    setAddedAnimationId(product.id);
    setTimeout(() => setAddedAnimationId(null), 2000);

    const waUrl = generateProductOrderUrl(product, qty, SPA_INFO.phoneWhatsApp);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const openDetailsModal = (product: SkincareProduct) => {
    setActiveModalProduct(product);
    setOrderQuantity(1);
  };

  return (
    <section id="products-section" className="py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standalone Back Button */}
        {isStandalonePage && onNavigateHome && (
          <div className="mb-6">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-stone-400 hover:text-white px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Original Glow Formulas & <span className="text-[#DE1B76] italic font-normal">Botanical Care</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Formulated for African and tropical climates. Pure active botanicals, gentle brightening gluta lotions, and concentrated facial cleansers available directly from our Lagos center.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#DE1B76] text-white shadow-lg shadow-[#DE1B76]/25 scale-105'
                  : 'bg-[#14141A] text-stone-400 hover:text-white border border-stone-800 hover:border-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#14141A] rounded-2xl border border-stone-800/80 hover:border-[#DE1B76]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#DE1B76]/10 group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer" onClick={() => openDetailsModal(product)}>
                  <ImageWithLoading
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-transparent to-transparent opacity-60" />
                  
                  {/* Category & Size Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-black/70 backdrop-blur-md text-[#DE1B76] border border-[#DE1B76]/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                    <span className="bg-stone-900/80 backdrop-blur-md text-stone-300 border border-stone-700/60 text-[10px] font-medium px-2.5 py-1 rounded-md">
                      {product.size}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 
                    onClick={() => openDetailsModal(product)}
                    className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#DE1B76] transition-colors cursor-pointer line-clamp-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-800/60">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-[#DE1B76] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer & Actions */}
              <div className="p-5 pt-0 border-t border-stone-800/40 space-y-3">
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
                    <span className="text-lg font-bold text-white font-mono">
                      ₦{product.priceNaira.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openDetailsModal(product)}
                    className="text-xs font-semibold text-stone-300 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleOrderWhatsApp(product, 1)}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all duration-200 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>{addedAnimationId === product.id ? 'Opening WhatsApp...' : 'Order on WhatsApp'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#171720] via-[#1F1722] to-[#171720] rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-between text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DE1B76]/20 text-[#DE1B76] flex items-center justify-center shrink-0 border border-[#DE1B76]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">100% Authentic MagKay Guarantee</h4>
                <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
                  Pick up in-person at KM 5 LASU-Isheri Road or request delivery throughout Lagos State.
                </p>
              </div>
            </div>

            <a
              href={`tel:${SPA_INFO.phonePrimary}`}
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-colors border border-stone-700"
            >
              Call for Product Inquiries
            </a>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="bg-[#171720] border border-stone-700 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full bg-stone-800 hover:bg-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-900">
              <ImageWithLoading
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-black/80 text-[#DE1B76] text-xs font-bold px-2.5 py-1 rounded-md border border-[#DE1B76]/40 uppercase tracking-wider">
                  {activeModalProduct.category}
                </span>
              </div>
            </div>

            {/* Header */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {activeModalProduct.name}
              </h3>
              <p className="text-xs text-[#DE1B76] font-semibold mt-1">
                Size: {activeModalProduct.size} • Suitable for: {activeModalProduct.skinType}
              </p>
              <div className="text-xl font-bold text-white font-mono mt-2">
                ₦{activeModalProduct.priceNaira.toLocaleString()}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">Formula Details</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {activeModalProduct.description}
              </p>
            </div>

            {/* Key Ingredients */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">Key Ingredients</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProduct.keyIngredients.map((ing, i) => (
                  <span key={i} className="px-2.5 py-1 bg-stone-800/90 text-stone-300 text-[11px] rounded-lg border border-stone-700/60">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">Benefits & Results</h4>
              <div className="space-y-1.5">
                {activeModalProduct.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                    <Check className="w-3.5 h-3.5 text-[#DE1B76] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Order */}
            <div className="pt-4 border-t border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-300">Quantity</span>
                <div className="flex items-center gap-3 bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800">
                  <button
                    onClick={() => setOrderQuantity(Math.max(1, orderQuantity - 1))}
                    className="text-stone-400 hover:text-white font-bold text-sm px-1 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-white w-4 text-center">{orderQuantity}</span>
                  <button
                    onClick={() => setOrderQuantity(orderQuantity + 1)}
                    className="text-stone-400 hover:text-white font-bold text-sm px-1 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Total Amount</span>
                <span className="text-base font-bold text-white font-mono">
                  ₦{(activeModalProduct.priceNaira * orderQuantity).toLocaleString()}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleOrderWhatsApp(activeModalProduct, orderQuantity);
                  setActiveModalProduct(null);
                }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Confirm Order via WhatsApp (₦{(activeModalProduct.priceNaira * orderQuantity).toLocaleString()})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
