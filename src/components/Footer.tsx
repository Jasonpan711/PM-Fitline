import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="concierge-contact" className="bg-[#2d3436] text-gray-300 pt-16 pb-12 font-sans border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Lifestyle Subscription */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#b5a089] font-semibold">
              FitLine Wellness Club
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              订阅德国细胞健康美学月刊
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              获取身心灵平衡生活指南、微循环营养学前沿报告与 VIP 会员专享礼遇。
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 rounded-xl bg-white/10 border border-[#b5a089]/40 text-white flex items-center gap-3">
                <Check className="w-5 h-5 text-[#b5a089]" />
                <span className="text-xs sm:text-sm font-medium">感谢您的订阅！专属身心调养手册已发送至您的邮箱。</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入您的电子邮箱地址..."
                  className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#b5a089]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#b5a089] hover:bg-[#a38e78] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  即刻订阅
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Navigation Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              PM FitLine 核心理念
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><a href="#philosophy" className="hover:text-[#b5a089] transition-colors">健康源于健康的生活方式</a></li>
              <li><a href="#philosophy" className="hover:text-[#b5a089] transition-colors">身心灵的三重平衡</a></li>
              <li><a href="#ntc-science" className="hover:text-[#b5a089] transition-colors">NTC® 独家专利科技</a></li>
              <li><a href="#ntc-science" className="hover:text-[#b5a089] transition-colors">MicroSolve® 水溶微囊</a></li>
              <li><a href="#certifications" className="hover:text-[#b5a089] transition-colors">德国 GMP 制药级工坊</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              明星系列甄选
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><a href="#collections" className="hover:text-[#b5a089] transition-colors">Optimal-Set 黄金基础</a></li>
              <li><a href="#collections" className="hover:text-[#b5a089] transition-colors">PowerCocktail 晨间全效</a></li>
              <li><a href="#collections" className="hover:text-[#b5a089] transition-colors">Activize Oxyplus 氧气红饮</a></li>
              <li><a href="#collections" className="hover:text-[#b5a089] transition-colors">Restorate 晚间碱性深眠</a></li>
              <li><a href="#collections" className="hover:text-[#b5a089] transition-colors">Beauty 胶原多肽美颜饮</a></li>
              <li><a href="#collections" className="hover:text-[#b5a089] transition-colors">Munogen 一氧化氮微循环</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              品质保障与信赖
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><a href="#champions" className="hover:text-[#b5a089] transition-colors">科隆名单® (Cologne List®)</a></li>
              <li><a href="#certifications" className="hover:text-[#b5a089] transition-colors">TÜV SÜD ELAB 质检溯源</a></li>
              <li><a href="#champions" className="hover:text-[#b5a089] transition-colors">世界顶尖运动员严选见证</a></li>
              <li><a href="#certifications" className="hover:text-[#b5a089] transition-colors">清真 HALAL & 犹太洁食认证</a></li>
              <li><a href="#certifications" className="hover:text-[#b5a089] transition-colors">ISO 9001 国际质量管理体系</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              尊享咨询与服务
            </h4>
            <div className="space-y-2 text-xs text-gray-400 font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b5a089]" />
                <span>专属客服：400-880-993</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b5a089]" />
                <span>service@pm-fitline.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b5a089]" />
                <span>PM-International AG, Germany / Luxembourg</span>
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#b5a089]">
                  周一至周日 09:00 - 21:00 顾问在线
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-serif text-white font-medium tracking-wider">PM FitLine</span>
            <span>© 1993 - 2026 PM-International AG. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">使用条款</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">反兴奋剂声明</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">官方防伪溯源</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
