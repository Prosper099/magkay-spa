import React, { useState } from 'react';
import { ShoppingBag, Check, ShieldCheck, Heart, ArrowLeft, Search, Flower2, Gem } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SKINCARE_PRODUCTS, SPA_INFO } from '../data/spaData';
import { SkincareProduct } from '../types';

interface ProductsSectionProps {
  onNavigateHome?: () => void;
  isStandalonePage?: boolean;
  onOpenWhatsAppModalWithMsg?: (msg: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onNavigateHome,
  isStandalonePage = false,
  onOpenWhatsAppModalWithMsg
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'egyptian-body-milk': 1,
    'snow-white-cream': 1,
    'glow-face-cleanser': 1,
    'knuckle-clearing-cream': 1,
    'botanical-glow-oil': 1,
  });

  const categories = ['all', 'Body Care', 'Face Care', 'Cleansers', 'Specialty Care', 'Body Oils'];

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const next = Math.max(1, Math.min(10, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const filteredProducts = SKINCARE_PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyIngredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOrderProduct = (product: SkincareProduct) => {
    const qty = quantities[product.id] || 1;
    const total = product.priceNaira * qty;
    const msg = `🛍️ *MAGKAY SKINCARE ORDER* 🛍️\n\nHello MagKay Spa, I would like to order:\n- *Product:* ${product.name}\n- *Size:* ${product.size}\n- *Quantity:* ${qty}\n- *Estimated Total:* ₦${total.toLocaleString()}\n\nPlease confirm product availability and pickup/delivery options.`;
    
    if (onOpenWhatsAppModalWithMsg) {
      onOpenWhatsAppModalWithMsg(msg);
    } else {
      window.open(`https://wa.me/2348091537732?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="products" className="py-12 lg:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation if on dedicated page */}
        {isStandalonePage && (
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-stone-800">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer bg-[#17171F] px-4 py-2 rounded-xl border border-stone-700 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="text-xs text-stone-400 font-medium">
              <span>Home</span> <span className="mx-1.5">/</span> <strong className="text-white">Skincare Boutique</strong>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2 text-left">
          <div className="text-xs uppercase font-bold tracking-widest text-[#DE1B76]">
            MagKay Skincare Line
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Botanical Skincare <span className="italic font-normal text-[#DE1B76]">& Glow Care</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-400">
            Formulated to hydrate, restore radiance, and clarify hyperpigmentation safely without hydroquinone or harmful bleaching agents.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="max-w-4xl mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products (e.g. Egyptian Milk, Glutathione, Niacinamide, Knuckle cream)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14141A] border border-stone-800 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#DE1B76] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center justify-start overflow-x-auto pb-2 gap-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#DE1B76] text-white shadow-md shadow-[#DE1B76]/20'
                      : 'bg-[#14141A] text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  <span>{cat === 'all' ? 'All Formulas' : cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#14141A] rounded-2xl border border-stone-800 max-w-md mx-auto">
            <p className="text-base text-stone-300 font-medium">No products matched "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs font-bold text-[#DE1B76] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const qty = quantities[product.id] || 1;
              return (
                <div
                  key={product.id}
                  className="bg-[#14141A] rounded-2xl overflow-hidden border border-stone-800 shadow-lg hover:shadow-2xl hover:border-[#DE1B76]/40 transition-all flex flex-col justify-between"
                >
                  {/* Top Image + Badges */}
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-transparent to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-black/80 backdrop-blur-md text-stone-200 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {product.category}
                        </span>
                        <span className="bg-[#DE1B76]/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold font-mono">
                          {product.size}
                        </span>
                      </div>

                      {/* In Stock & Price overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="flex items-center gap-1.5 text-xs text-stone-300 bg-black/70 px-2.5 py-1 rounded-lg border border-white/10">
                          <Check className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>In Stock</span>
                        </div>
                        <div className="font-serif italic text-2xl font-bold text-[#FF4B99] drop-shadow-sm">
                          ₦{product.priceNaira.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-xs text-stone-400 font-medium italic mt-0.5">
                          "{product.tagline}"
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Active Ingredients */}
                      <div className="space-y-1.5 pt-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B76]">
                          Key Actives & Botanical Extracts:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {product.keyIngredients.map((ing, i) => (
                            <span
                              key={i}
                              className="text-[11px] bg-stone-900 text-stone-300 px-2.5 py-1 rounded-md border border-stone-800"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Usage Guide */}
                      <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-xs text-stone-400">
                        <span className="font-semibold text-stone-200">How to use: </span>
                        {product.usageInstructions || 'Apply gently to cleansed skin as directed by your MagKay aesthetician.'}
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Order Button */}
                  <div className="p-6 pt-0 border-t border-stone-800/80 mt-2">
                    <div className="pt-4 space-y-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-stone-400">Quantity:</span>
                        <div className="flex items-center border border-stone-700 bg-stone-900 rounded-lg overflow-hidden">
                          <button
                            onClick={() => handleQtyChange(product.id, -1)}
                            className="px-2.5 py-1 text-stone-300 hover:bg-stone-800 font-bold transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-mono font-bold text-white text-xs">
                            {qty}
                          </span>
                          <button
                            onClick={() => handleQtyChange(product.id, 1)}
                            className="px-2.5 py-1 text-stone-300 hover:bg-stone-800 font-bold transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* WhatsApp Direct Order Button */}
                      <button
                        onClick={() => handleOrderProduct(product)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#25D366]/20 transition-all cursor-pointer whitespace-nowrap"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                        <span>Order on WhatsApp (₦{(product.priceNaira * qty).toLocaleString()})</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Quality & Safety Assurance Card */}
        <div className="mt-12 bg-[#17171F] rounded-3xl p-6 sm:p-8 border border-stone-800 text-white text-left grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Safe & Tested Ingredients</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Zero harmful mercury, steroids, or hydroquinone. Formulated with skin-loving botanical extracts and certified vitamins.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DE1B76]/20 text-[#DE1B76] flex items-center justify-center shrink-0 border border-[#DE1B76]/30">
              <Flower2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Nationwide Delivery & Pickup</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Pick up at our LASU-Isheri store or order express dispatch to any state in Nigeria via trustworthy logistics partners.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Personalized Skincare Consultation</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Unsure which routine fits your skin? Chat with our licensed aesthetician for custom recommendations before purchasing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
