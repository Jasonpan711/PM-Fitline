import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/rituals';
import { Sparkles, ShieldCheck, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export const AthletesShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex] || TESTIMONIALS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="champions" className="py-24 sm:py-32 bg-[#fdfcfb] relative overflow-hidden font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#b5a089] text-[11px] uppercase tracking-[0.4em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
            <span>World Champions & Elite Athletes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d3436] font-light tracking-tight leading-tight">
            全球世界冠军的共同信赖 · <span className="italic text-[#b5a089] font-normal">纯净与卓越性能</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
            包括德国滑雪协会 (DSV)、奥地利体育协会等全球数十个顶尖国家队及数百位奥运奖牌得主长期选用。
          </p>
        </div>

        {/* Athlete Editorial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-black/5 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12"
            >
              {/* Photo */}
              <div className="md:col-span-5 relative min-h-[300px] md:min-h-full">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#b5a089] font-semibold">
                      {current.country}
                    </div>
                    <div className="font-serif text-lg font-normal">
                      {current.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text & Testimonial */}
              <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#b5a089] font-mono uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#b5a089]" />
                    <span>{current.role}</span>
                  </div>

                  <blockquote className="font-serif italic text-base sm:text-lg text-[#2d3436] font-light leading-relaxed">
                    “{current.quote}”
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="text-xs text-gray-500 font-light">
                    <span>常备能量配方：</span>
                    <span className="font-medium text-[#b5a089] ml-1">{current.favoriteProduct}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#b5a089] font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>科隆名单® 零兴奋剂认证</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-black/5 text-[#2d3436] hover:bg-[#f5f2ed] transition shadow-xs cursor-pointer"
              aria-label="上一个故事"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-gray-400 font-mono">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-black/5 text-[#2d3436] hover:bg-[#f5f2ed] transition shadow-xs cursor-pointer"
              aria-label="下一个故事"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
