import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Droplets, Play, Activity } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenVideo: () => void;
  onExploreCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuiz,
  onOpenVideo,
  onExploreCollections,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#fdfcfb] font-sans">
      {/* Background Architectural Elements & Hairline Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle Vertical Hairline Grid Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/[0.04] hidden md:block" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-black/[0.02] hidden lg:block" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-black/[0.02] hidden lg:block" />

        {/* Delicate artistic warm aura */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-radial from-[#b5a089]/10 via-[#f5f2ed]/40 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-radial from-[#e8e2d8]/30 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Artistic Flair Typography & Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Artistic Category Pill with Hairline Rule */}
            <div className="inline-flex items-center gap-3 text-[#b5a089] text-[11px] sm:text-xs uppercase tracking-[0.4em] font-semibold">
              <span className="w-8 h-[1px] bg-[#b5a089] hidden sm:inline-block"></span>
              <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
              <span>PM FitLine® · 德意志细胞营养美学</span>
            </div>

            {/* Main Editorial Headline Required by User */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-[#2d3436] font-light leading-[1.08] tracking-tight">
              健康源于
              <span className="block mt-1 font-normal">
                健康的<span className="italic text-[#b5a089] ml-2">生活方式</span>
              </span>
            </h1>

            {/* Subtitle & Philosophy Quote with Artistic Left Border */}
            <div className="border-l-2 border-[#b5a089] pl-6 text-left max-w-xl mx-auto lg:mx-0">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#b5a089] font-normal tracking-wide mb-2">
                身心灵的平衡
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                汲取自然纯净生命灵感，以独家 NTC® 专利细胞保送科技，将天然全谱能量、离子态矿物质与微循环营养直送细胞深处，开启轻盈无负担的生命节律。
              </p>
            </div>

            {/* High-Fashion Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button
                onClick={onExploreCollections}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2d3436] hover:bg-[#b5a089] text-white text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>探索全系营养选集</span>
                <ArrowRight className="w-4 h-4 text-[#b5a089] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-[#f5f2ed] text-[#2d3436] border border-black/10 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
                <span>智能定制身心方案</span>
              </button>

              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2d3436] border-b border-black/20 hover:border-[#b5a089] hover:text-[#b5a089] pb-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current text-[#b5a089]" />
                <span>观看生命短片</span>
              </button>
            </div>

            {/* Trust Seals Minimalist Bar */}
            <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[11px] text-gray-500 tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b5a089]" />
                <span>德国 GMP 医药级生产</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#b5a089]" />
                <span>科隆名单® 零兴奋剂认证</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#b5a089]" />
                <span>NTC® 专利细胞级吸收</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Arched Canvas with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Vertical rotated text on side */}
            <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 vertical-rl rotate-180 text-[10px] tracking-[0.4em] text-gray-400 uppercase font-light pointer-events-none">
              Est. 1993 — PM International Germany
            </div>

            {/* Arched Portal Container from Artistic Flair theme */}
            <div className="w-full max-w-[420px] aspect-[4/5] bg-[#f5f2ed] rounded-t-full relative overflow-hidden border border-[#b5a089]/25 flex items-end justify-center shadow-xl group">
              {/* Concentric Architectural Rings */}
              <div className="absolute inset-4 rounded-t-full border border-[#b5a089]/20 pointer-events-none" />
              <div className="absolute inset-10 rounded-t-full border border-dashed border-[#b5a089]/30 pointer-events-none" />

              {/* Main Visual Image */}
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
                alt="FitLine Nutrition Ritual Sanctuary"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/75 via-transparent to-black/10" />

              {/* Floating Highlight Card 1: PowerCocktail */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 left-6 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 shadow-md max-w-[200px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#f5f2ed] flex items-center justify-center text-[#b5a089]">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-xs font-semibold text-[#2d3436] truncate">PowerCocktail</h4>
                    <p className="text-[10px] text-[#b5a089] uppercase tracking-wider font-medium">晨起 07:00 细胞唤醒</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Highlight Card 2: Restorate */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 right-6 p-3 rounded-2xl bg-[#2d3436]/90 backdrop-blur-md border border-white/20 shadow-md text-white max-w-[200px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#b5a089]">
                    <Droplets className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-xs font-semibold truncate">Restorate 深眠</h4>
                    <p className="text-[10px] text-[#b5a089] uppercase tracking-wider font-medium">睡前 21:30 矿物修护</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-18 left-6 right-6 text-white/90 text-xs font-serif italic text-center">
                “晨间唤醒，静夜深眠 · 德国 NTC 细胞专利”
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom 3-Phase Editorial Grid from Artistic Flair Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          {/* Phase 01 */}
          <div className="group p-4 rounded-xl border border-black/5 hover:border-[#b5a089]/40 bg-white/60 hover:bg-white transition-all cursor-pointer">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b5a089] font-semibold block mb-1">
              Phase 01
            </span>
            <h4 className="font-serif text-sm font-medium text-[#2d3436]">
              细胞能量 (Optimal-Set)
            </h4>
            <p className="text-[11px] text-gray-500 mt-1 font-light">晨起激活微循环与新陈代谢</p>
          </div>

          {/* Phase 02 */}
          <div className="group p-4 rounded-xl border border-black/5 hover:border-[#b5a089]/40 bg-white/60 hover:bg-white transition-all cursor-pointer">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b5a089] font-semibold block mb-1">
              Phase 02
            </span>
            <h4 className="font-serif text-sm font-medium text-[#2d3436]">
              修护再生 (Restorate)
            </h4>
            <p className="text-[11px] text-gray-500 mt-1 font-light">晚间碱性矿物质深度排酸</p>
          </div>

          {/* Phase 03 */}
          <div className="group p-4 rounded-xl border border-black/5 hover:border-[#b5a089]/40 bg-white/60 hover:bg-white transition-all cursor-pointer">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b5a089] font-semibold block mb-1">
              Phase 03
            </span>
            <h4 className="font-serif text-sm font-medium text-[#2d3436]">
              身心平衡 (Circadian)
            </h4>
            <p className="text-[11px] text-gray-500 mt-1 font-light">全天候 24 小时昼夜生物钟调律</p>
          </div>

          {/* Interactive Trigger CTA */}
          <div
            onClick={onOpenQuiz}
            className="p-4 rounded-xl bg-[#2d3436] hover:bg-[#b5a089] text-white transition-all flex items-center justify-between cursor-pointer group shadow-sm"
          >
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#b5a089] group-hover:text-white font-semibold block">
                Instant Quiz
              </span>
              <h4 className="font-serif text-sm font-medium text-white">
                定制身心专属配方
              </h4>
            </div>
            <ArrowRight className="w-4 h-4 text-[#b5a089] group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};
