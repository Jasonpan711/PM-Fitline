import React, { useState } from 'react';
import { Sparkles, Compass, Clock, Activity, ArrowRight } from 'lucide-react';

interface QuickFinderProps {
  onQuickFind: (goal: string) => void;
  onOpenFullQuiz: () => void;
}

export const QuickFinder: React.FC<QuickFinderProps> = ({
  onQuickFind,
  onOpenFullQuiz,
}) => {
  const [selectedGoal, setSelectedGoal] = useState('energy');
  const [selectedTime, setSelectedTime] = useState('morning');
  const [selectedLifestyle, setSelectedLifestyle] = useState('active');

  const handleSearch = () => {
    onQuickFind(selectedGoal);
  };

  return (
    <div className="relative -mt-8 sm:-mt-12 z-30 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl border border-black/5 shadow-xl p-4 sm:p-6 md:p-8 font-sans">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-black/5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f5f2ed] text-[#b5a089] flex items-center justify-center">
              <Compass className="w-4 h-4 text-[#b5a089]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-normal text-[#2d3436]">
                身心状态快速检索 · <span className="font-light italic text-[#b5a089]">Quick Wellness Match</span>
              </h3>
              <p className="text-xs text-gray-400 font-light">
                快速匹配您此时所需的德国细胞活力与微循环配方
              </p>
            </div>
          </div>

          <button
            onClick={onOpenFullQuiz}
            className="text-xs text-[#b5a089] hover:text-[#2d3436] font-medium uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
            <span>进入 3 步深度身心测评 →</span>
          </button>
        </div>

        {/* 3 Selectors + Search Button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Goal Selector */}
          <div className="p-3.5 rounded-xl bg-[#fdfcfb] border border-black/5 hover:border-[#b5a089]/40 transition-colors">
            <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wider mb-1">
              <Activity className="w-3.5 h-3.5 text-[#b5a089]" />
              <span>期望身心诉求</span>
            </div>
            <select
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-serif font-medium text-[#2d3436] focus:outline-none cursor-pointer"
            >
              <option value="energy">充沛精力 · 细胞供氧 (Vitality)</option>
              <option value="sleep">深度睡眠 · 碱性排酸 (Restore)</option>
              <option value="immunity">晨间全效 · 免疫屏障 (Optimal)</option>
              <option value="beauty">逆龄水光 · 紧致多肽 (Beauty)</option>
            </select>
          </div>

          {/* Time of Day */}
          <div className="p-3.5 rounded-xl bg-[#fdfcfb] border border-black/5 hover:border-[#b5a089]/40 transition-colors">
            <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5 text-[#b5a089]" />
              <span>计划饮用时段</span>
            </div>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-serif font-medium text-[#2d3436] focus:outline-none cursor-pointer"
            >
              <option value="morning">晨起空腹 07:00 (唤醒活力)</option>
              <option value="afternoon">午后清透 14:00 (驱散脑雾)</option>
              <option value="evening">晚间睡前 21:30 (深层自愈)</option>
              <option value="anytime">全天随行 (随餐补充)</option>
            </select>
          </div>

          {/* Lifestyle */}
          <div className="p-3.5 rounded-xl bg-[#fdfcfb] border border-black/5 hover:border-[#b5a089]/40 transition-colors">
            <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#b5a089]" />
              <span>生活节奏类型</span>
            </div>
            <select
              value={selectedLifestyle}
              onChange={(e) => setSelectedLifestyle(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-serif font-medium text-[#2d3436] focus:outline-none cursor-pointer"
            >
              <option value="active">高负荷脑力 / 经常差旅</option>
              <option value="sport">运动健身 / 追求形体紧致</option>
              <option value="recovery">长期熬夜 / 容易疲倦沉重</option>
              <option value="antiage">追求容颜光泽与身心轻盈</option>
            </select>
          </div>

          {/* Action Button */}
          <button
            onClick={handleSearch}
            className="w-full h-full min-h-[50px] px-6 rounded-xl bg-[#2d3436] hover:bg-[#b5a089] text-white font-semibold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer"
          >
            <span>匹配甄选方案</span>
            <ArrowRight className="w-4 h-4 text-[#b5a089] group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
