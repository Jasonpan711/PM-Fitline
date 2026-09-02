import React, { useState } from 'react';
import { Sparkles, Eye, Plus, Check, Star, Filter } from 'lucide-react';
import { FITLINE_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
  onToggleRegimen: (product: Product) => void;
  regimenItems: Product[];
  selectedCategoryFilter: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProduct,
  onToggleRegimen,
  regimenItems,
  selectedCategoryFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategoryFilter || 'all');

  const categories = [
    { id: 'all', label: '全部甄选系列' },
    { id: 'optimal', label: '黄金基础 Optimal' },
    { id: 'vitality', label: '细胞充氧 Vitality' },
    { id: 'restore', label: '深层修复 Restore' },
    { id: 'beauty', label: '容颜水光 Beauty' },
    { id: 'sport', label: '运动塑形 Sport' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? FITLINE_PRODUCTS
    : FITLINE_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#fdfcfb] relative overflow-hidden font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[#b5a089] text-[11px] uppercase tracking-[0.4em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
              <span>Iconic Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d3436] font-light tracking-tight">
              德国原装甄选 · <span className="italic text-[#b5a089] font-normal">细胞营养矩阵</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light max-w-xl">
              每一款产品皆搭载专利 NTC® 营养保送科技，精准抵达细胞深处，
              赋予身体充沛活力与源源不断的自愈力量。
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-gray-400 shrink-0 hidden sm:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? 'bg-[#2d3436] text-white shadow-sm'
                    : 'bg-[#f5f2ed] hover:bg-[#e8e2d8] text-gray-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Artistic Flair Aesthetics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const inRegimen = regimenItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-black/5 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Product Card Image Banner */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f2ed]">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#2d3436]/90 backdrop-blur-md text-[#b5a089] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-xs">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Action Buttons on Image */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2d3436] flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer"
                      title="查看产品科研详情"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium tracking-wide">
                    {product.usageTimingLabel}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-[#b5a089] font-semibold">
                        {product.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 text-[#b5a089] text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-[#2d3436]">{product.rating}</span>
                        <span className="text-gray-400 text-[10px]">({product.reviewCount})</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-lg sm:text-xl text-[#2d3436] font-normal leading-snug group-hover:text-[#b5a089] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-1 italic">
                      {product.germanName}
                    </p>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Card Bottom: Price & Add to Regimen */}
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">尊享定价</span>
                      <span className="font-serif text-base sm:text-lg font-medium text-[#2d3436]">
                        {product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onToggleRegimen(product)}
                      className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        inRegimen
                          ? 'bg-[#b5a089] text-white shadow-xs'
                          : 'bg-[#2d3436] hover:bg-[#b5a089] text-white shadow-sm'
                      }`}
                    >
                      {inRegimen ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>已加入</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#b5a089]" />
                          <span>加入日常</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
