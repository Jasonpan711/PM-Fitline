import React from 'react';
import { Sparkles, Sun, Moon, HeartHandshake } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      phase: '01',
      title: '身之清透 · 细胞供能',
      subtitle: 'Cellular Energy',
      desc: '源于德国尖端生化制药级科研，通过 NTC® 专利水溶靶向输送，为全身 60 万亿细胞提供全谱纯净营养素，告别沉重与疲惫。',
      icon: Sun,
      bgImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    },
    {
      phase: '02',
      title: '心之澄澈 · 专注与从容',
      subtitle: 'Focus & Serenity',
      desc: '充沛微循环供氧让思维远离脑雾，阿育吠陀古老草本与现代神经营养素协同，在高速运转的都市生活中守护内心的笃定与敏锐。',
      icon: HeartHandshake,
      bgImg: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    },
    {
      phase: '03',
      title: '灵之归真 · 昼夜平衡自愈',
      subtitle: 'Natural Harmony',
      desc: '尊重身体自有的昼夜生物钟韵律。白昼能量如晨曦绽放，入夜深度慢波安眠排酸，回归最本真的身心自愈智慧。',
      icon: Moon,
      bgImg: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#fdfcfb] relative overflow-hidden font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artistic Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#b5a089] text-[11px] uppercase tracking-[0.4em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
            <span>The Harmony of Body, Mind & Spirit</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d3436] font-light tracking-tight leading-tight">
            健康源于健康的生活方式 · <span className="italic text-[#b5a089] font-normal">身心灵的平衡</span>
          </h2>

          <p className="mt-5 text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            PM FitLine 将德意志严谨生命科技融入每日一杯的晨光与晚安饮品，
            唤醒细胞内生自愈力，重构高品质的生命律动。
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-black/5 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Image Header with Arched/Delicate Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pillar.bgImg}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#2d3436] shadow-sm">
                    <Icon className="w-4 h-4 text-[#b5a089]" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#b5a089] block">
                      Phase {pillar.phase} · {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative description */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>

                  <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs text-[#b5a089] font-medium tracking-wider uppercase">
                    <span>德国生命科研矩阵</span>
                    <span className="group-hover:translate-x-1 transition-transform">探索专研方案 →</span>
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
