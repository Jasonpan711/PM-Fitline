import React from 'react';
import { ShieldCheck, Award, CheckCircle, Sparkles } from 'lucide-react';

export const QualityCertifications: React.FC = () => {
  const certs = [
    {
      title: '德国制药级 GMP 标准',
      subtitle: 'GMP Pharma Grade',
      desc: '严格遵循欧盟与德国最高级别药品生产规范，全封闭无菌洁净生产车间，保证每批次极高纯度与均一性。',
      badge: '最高安全等级',
      icon: ShieldCheck,
    },
    {
      title: '德国科隆名单® (Cologne List®)',
      subtitle: 'Anti-Doping Tested',
      desc: '定期在国际顶尖反兴奋剂实验室进行全项违禁物筛查，全球职业运动员与奥运代表团指定放心营养补充品。',
      badge: '100% 纯净零违禁',
      icon: Award,
    },
    {
      title: 'TÜV SÜD ELAB 独立质检溯源',
      subtitle: 'TÜV SÜD Certified',
      desc: '包装附带独立 QR 溯源防伪码，由南德意志集团 (TÜV SÜD) 独立实验室定期抽检，成分透明公开可查。',
      badge: '扫码独立溯源',
      icon: CheckCircle,
    },
    {
      title: '瑞士维生素研究所 (SVI) 认证',
      subtitle: 'Swiss Vitamin Institute',
      desc: '位于洛桑的权威机构定期检测，确保活性维生素与微量元素的真实活性与标签含量完全一致。',
      badge: '活性精准保证',
      icon: Sparkles,
    },
  ];

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-[#fdfcfb] relative overflow-hidden font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#b5a089] text-[11px] uppercase tracking-[0.4em] font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b5a089]" />
            <span>German Quality & Safety Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d3436] font-light tracking-tight">
            德意志严谨质造 · <span className="italic text-[#b5a089] font-normal">无可妥协的安全标准</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
            从原料甄选、NTC® 专利配方到成品灌装，FitLine 建立起覆盖全产业链的多重国际严苛认证体系，
            只为呈献最纯净的细胞能量之源。
          </p>
        </div>

        {/* 4 Quality Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f5f2ed] text-[#b5a089] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#b5a089]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#f5f2ed] text-[#b5a089] border border-black/5">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#2d3436] mb-1">
                    {c.title}
                  </h3>
                  <div className="text-xs text-gray-400 font-medium mb-3">
                    {c.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#b5a089]">
                  <span className="font-serif">国际官方检测</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#b5a089]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
