import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WELLNESS_ROUTINES } from '../data/rituals';
import { FITLINE_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Sparkles, Sun, Droplets, Moon, Check, Plus } from 'lucide-react';

interface CircadianRitualProps {
  onToggleRegimen: (product: Product) => void;
  regimenItems: Product[];
  onSelectProduct: (product: Product) => void;
}

export const CircadianRitual: React.FC<CircadianRitualProps> = ({
  onToggleRegimen,
  regimenItems,
  onSelectProduct,
}) => {
  const [activeTab, setActiveTab] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const currentRoutine = WELLNESS_ROUTINES.find((r) => r.id === activeTab) || WELLNESS_ROUTINES[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'morning':
        return <Sun className="w-4 h-4 text-[#b5a089]" />;
      case 'afternoon':
        return <Droplets className="w-4 h-4 text-[#b5a089]" />;
      case 'evening':
        return <Moon className="w-4 h-4 text-[#b5a089]" />;
      default:
        return <Sun className="w-4 h-4 text-[#b5a089]" />;
    }
  };

  const getRecommendedProducts = (productIds: string[]) => {
    return FITLINE_PRODUCTS.filter((p) => productIds.includes(p.id));
  };

  return (
    <section id="rituals" className="py-24 sm:py-32 bg-[#fdfcfb] relative overflow-hidden font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#b5a089] text-[11px] uppercase tracking-[0.4em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
            <span>Circadian Biological Rhythm</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d3436] font-light tracking-tight leading-tight">
            24 小时昼夜节律 · <span className="italic text-[#b5a089] font-normal">细胞生物钟的诗意滋养</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
            顺应大自然的日升月落与人体脏腑代谢周期，在恰当的时间注入特异性营养，达致身心灵的恒定自愈。
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#f5f2ed] border border-black/5 shadow-inner">
            {WELLNESS_ROUTINES.map((routine) => {
              const isActive = activeTab === routine.id;
              return (
                <button
                  key={routine.id}
                  onClick={() => setActiveTab(routine.id as 'morning' | 'afternoon' | 'evening')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#2d3436] text-white shadow-sm'
                      : 'text-gray-500 hover:text-[#2d3436]'
                  }`}
                >
                  {getTabIcon(routine.id)}
                  <span>{routine.id === 'morning' ? '07:00 晨光筑基' : routine.id === 'afternoon' ? '14:00 午后清透' : '21:30 静夜排酸'}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Routine Content Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoutine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-black/5 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Narrative */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-[#f5f2ed] text-[#b5a089] border border-black/5">
                    {currentRoutine.time}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    {currentRoutine.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#2d3436] font-light">
                  {currentRoutine.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {currentRoutine.description}
                </p>

                {/* Steps */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#b5a089] block">
                    律动冲调与调养指引
                  </span>
                  {currentRoutine.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 font-light">
                      <div className="w-5 h-5 rounded-full bg-[#f5f2ed] border border-black/5 flex items-center justify-center text-[10px] font-bold text-[#b5a089] flex-shrink-0 mt-0.5">
                        {sIdx + 1}
                      </div>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 text-xs text-gray-400 italic font-serif">
                “遵循自然的起伏与呼吸，给身体最好的德式敬畏。”
              </div>
            </div>

            {/* Right Recommended Product Cards */}
            <div className="lg:col-span-5 bg-[#faf8f5] p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-black/5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#b5a089] font-semibold block mb-4">
                  推荐搭配营养配方 (Recommended Formulations)
                </span>

                <div className="space-y-4">
                  {getRecommendedProducts(currentRoutine.recommendedProducts).map((product) => {
                    const isInRegimen = regimenItems.some((item) => item.id === product.id);

                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl p-4 border border-black/5 hover:border-[#b5a089]/40 transition shadow-xs flex items-center justify-between gap-4"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />

                        <div className="flex-1 min-w-0">
                          <h4
                            onClick={() => onSelectProduct(product)}
                            className="font-serif text-sm font-normal text-[#2d3436] hover:text-[#b5a089] truncate cursor-pointer"
                          >
                            {product.name}
                          </h4>
                          <span className="text-[11px] text-[#b5a089] block mt-0.5 font-medium">
                            {product.price}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onToggleRegimen(product)}
                            className={`p-2 rounded-full transition cursor-pointer ${
                              isInRegimen
                                ? 'bg-[#b5a089] text-white'
                                : 'bg-[#f5f2ed] text-[#2d3436] hover:bg-[#e8e2d8] border border-black/5'
                            }`}
                            title={isInRegimen ? '已加入方案' : '加入每日方案'}
                          >
                            {isInRegimen ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
