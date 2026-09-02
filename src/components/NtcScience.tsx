import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Atom, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const NtcScience: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'MicroSolve® 脂溶微团水溶化',
      badge: '专利核心',
      desc: '将传统脂溶性营养素（如 Omega-3、Q10、维生素 E）转化为纳米级水溶微团，突破水脂不相溶的物理壁垒。',
      stat: '500%+',
      statLabel: '脂溶营养吸收率提升',
      points: ['滴水即溶，清澈透明', '不依赖胆汁分泌代谢', '对敏感胃肠极度友好'],
    },
    {
      title: '协同效应与阿育吠陀配伍',
      badge: '配方智慧',
      desc: '精准的营养素分子协同矩阵。多种维生素、微量矿物质与天然阿育吠陀植物草本按细胞代谢最优比例配比。',
      stat: '40+',
      statLabel: '全球核心发明专利',
      points: ['1+1 > 2 协同倍增效应', '天然植物多酚抗氧化网', '阻断代谢副产物积聚'],
    },
    {
      title: '精准靶向与细胞膜转运',
      badge: '瞬间吸收',
      desc: '在正确的时间，将正确的营养物质，直接输送到身体最需要的数万亿细胞深处，从源头激活线粒体能量工厂。',
      stat: '10 Min',
      statLabel: '微循环极速供氧体验',
      points: ['烟酸与微循环靶向因子', '瞬间穿透细胞膜屏障', '细胞 ATP 能量爆发'],
    },
  ];

  return (
    <section id="ntc-science" className="py-20 sm:py-28 bg-[#2d3436] text-white relative overflow-hidden font-sans border-t border-black/10">
      {/* Background Glowing Aura */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#b5a089]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#b5a089]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#b5a089] text-[11px] uppercase tracking-[0.4em] font-semibold mb-4">
            <Atom className="w-3.5 h-3.5 text-[#b5a089]" />
            <span>Patented Cell Nutrition Technology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight">
            NTC® 营养保送系统 · <span className="italic text-[#b5a089] font-normal">直达细胞深处</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            PM-International 30余年德意志尖端生命科学结晶。突破传统保健品“吸收慢、利用率低”的瓶颈，
            让高纯度营养素以惊人速度精准渗透细胞。
          </p>
        </div>

        {/* Dynamic Interactive Science Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Step Switcher Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'bg-white/10 border-[#b5a089] shadow-xl'
                      : 'bg-white/5 hover:bg-white/[0.08] border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif text-[#b5a089] tracking-widest uppercase">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Visualization Showcase */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-8"
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div>
                      <span className="text-[11px] text-[#b5a089] tracking-widest uppercase font-semibold">
                        科技解析
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mt-1">
                        {steps[activeStep].title}
                      </h3>
                    </div>

                    {/* Big Stat Pill */}
                    <div className="text-right">
                      <div className="font-serif text-3xl sm:text-4xl font-normal text-[#b5a089]">
                        {steps[activeStep].stat}
                      </div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-light">
                        {steps[activeStep].statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Core Content */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {steps[activeStep].desc}
                  </p>

                  {/* Key Evidence Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {steps[activeStep].points.map((pt, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-black/20 border border-white/10 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#b5a089] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-200 leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust Footer */}
                  <div className="p-4 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-[#b5a089]" />
                      <span>卢森堡科学技术研究院 (LIST) 联合研发认证</span>
                    </div>
                    <span className="text-xs text-[#b5a089] font-medium uppercase tracking-wider">Patent Protected</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
