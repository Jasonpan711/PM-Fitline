import React from 'react';
import { X, Sparkles, Plus, Check, Star, ShieldCheck, Atom, Clock } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onToggleRegimen: (product: Product) => void;
  isInRegimen: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onToggleRegimen,
  isInRegimen,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm font-sans animate-fade-in">
      <div className="bg-[#fdfcfb] w-full max-w-4xl rounded-2xl border border-black/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-black/5 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#b5a089] font-semibold">
              {product.categoryLabel}
            </span>
            <span className="text-xs text-gray-400">· {product.usageTimingLabel}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#2d3436] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          {/* Top 2 Columns: Image & Headline */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-[#f5f2ed] border border-black/5 shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#2d3436]/90 backdrop-blur-md text-[#b5a089] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-xs">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[#b5a089] text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#2d3436]">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewCount} 条全球真实好评)</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#2d3436] font-normal">
                {product.name}
              </h2>
              <div className="text-xs sm:text-sm text-gray-400 italic">
                {product.germanName}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="p-4 rounded-xl bg-[#f5f2ed] border border-black/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">尊享官方指导价</span>
                  <span className="font-serif text-xl font-medium text-[#2d3436]">{product.price}</span>
                </div>

                <button
                  onClick={() => onToggleRegimen(product)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider flex items-center gap-2 transition-all cursor-pointer uppercase ${
                    isInRegimen
                      ? 'bg-[#b5a089] text-white shadow-xs'
                      : 'bg-[#2d3436] hover:bg-[#b5a089] text-white shadow-sm'
                  }`}
                >
                  {isInRegimen ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>已加入健康日常</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#b5a089]" />
                      <span>加入健康日常</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Core Benefits & Scientific Note */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs space-y-3">
              <h3 className="font-serif text-lg text-[#2d3436] font-normal flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b5a089]" />
                <span>核心健康收益 (Key Benefits)</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
                {product.mainBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5a089] shrink-0 mt-1.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#2d3436] text-white rounded-2xl p-6 border border-white/10 shadow-xs space-y-3">
              <h3 className="font-serif text-lg text-[#b5a089] font-normal flex items-center gap-2">
                <Atom className="w-4 h-4 text-[#b5a089]" />
                <span>NTC® 细胞吸收专研科技</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {product.scienceNote}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {product.ntcHighlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#b5a089]"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Ingredients & How to Use */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs space-y-3">
              <h3 className="font-serif text-lg text-[#2d3436] font-normal">
                精粹活性成分 (Ingredients)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
                {product.keyIngredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#b5a089] font-bold">·</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs space-y-3">
              <h3 className="font-serif text-lg text-[#2d3436] font-normal flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#b5a089]" />
                <span>生活冲调与饮用指引</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                {product.usageInstructions}
              </p>
              <div className="pt-2 text-xs text-gray-500 flex items-center gap-1.5 font-light">
                <span className="font-medium text-[#2d3436]">风味特点：</span>
                <span>{product.tasteProfile}</span>
              </div>
            </div>
          </div>

          {/* Certifications Ribbon */}
          <div className="p-4 rounded-xl bg-[#f5f2ed] border border-black/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#b5a089] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#b5a089]" />
              <span>官方权威认证标准：</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((c, i) => (
                <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white text-gray-600 border border-black/5">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
