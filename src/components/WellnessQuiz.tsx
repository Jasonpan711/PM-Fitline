import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FITLINE_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { X, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

interface WellnessQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPlan: (products: Product[]) => void;
  onSelectProduct: (product: Product) => void;
}

export const WellnessQuiz: React.FC<WellnessQuizProps> = ({
  isOpen,
  onClose,
  onApplyPlan,
}) => {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('energy');
  const [selectedHabit, setSelectedHabit] = useState<string>('desk');
  const [selectedSleep, setSelectedSleep] = useState<string>('irregular');

  if (!isOpen) return null;

  const handleFinish = () => {
    // Determine tailored products based on selections
    const matchedProducts: Product[] = [];

    // Always include foundational Optimal set (PowerCocktail & Restorate)
    const pc = FITLINE_PRODUCTS.find((p) => p.id === 'powercocktail');
    const res = FITLINE_PRODUCTS.find((p) => p.id === 'restorate');
    if (pc) matchedProducts.push(pc);
    if (res) matchedProducts.push(res);

    if (selectedGoal === 'energy') {
      const act = FITLINE_PRODUCTS.find((p) => p.id === 'activize');
      if (act) matchedProducts.push(act);
    } else if (selectedGoal === 'beauty') {
      const bty = FITLINE_PRODUCTS.find((p) => p.id === 'beauty');
      if (bty) matchedProducts.push(bty);
    } else if (selectedGoal === 'sport') {
      const muno = FITLINE_PRODUCTS.find((p) => p.id === 'munogen');
      if (muno) matchedProducts.push(muno);
    }

    onApplyPlan(matchedProducts);
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-2xl bg-[#fdfcfb] rounded-2xl p-6 sm:p-10 border border-black/10 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-400 hover:text-[#2d3436] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Ribbon */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  step >= s ? 'bg-[#b5a089]' : 'bg-black/5'
                }`}
              />
            ))}
          </div>

          {/* Question Steps */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#b5a089] font-semibold">
                  Step 01 · 核心改善期望
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2d3436] font-light">
                  您当前最希望改善的身心状态是？
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'energy', label: '提升日常充氧精力 & 告别疲劳脑雾' },
                  { id: 'beauty', label: '水光胶原焕亮 & 改善暗沉与皮肤弹性' },
                  { id: 'sleep', label: '深度睡眠排酸 & 舒缓神经紧张' },
                  { id: 'sport', label: '运动体能恢复 & 强化肌肉微循环' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedGoal(opt.id)}
                    className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedGoal === opt.id
                        ? 'bg-white border-[#b5a089] text-[#2d3436] shadow-sm ring-1 ring-[#b5a089]'
                        : 'bg-white border-black/5 text-gray-600 hover:border-black/15'
                    }`}
                  >
                    <div className="font-medium">{opt.label}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-full bg-[#2d3436] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#b5a089] transition cursor-pointer"
                >
                  <span>下一步</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#b5a089] font-semibold">
                  Step 02 · 日常生活节奏
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2d3436] font-light">
                  您的主要工作与作息习惯偏向？
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'desk', label: '高强度脑力办公，长时间久坐看屏幕' },
                  { id: 'travel', label: '频繁出差倒时差，作息不规律' },
                  { id: 'active', label: '热爱健身或户外运动，体能消耗大' },
                  { id: 'stress', label: '节奏繁忙高压，情绪容易焦虑紧绷' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedHabit(opt.id)}
                    className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedHabit === opt.id
                        ? 'bg-white border-[#b5a089] text-[#2d3436] shadow-sm ring-1 ring-[#b5a089]'
                        : 'bg-white border-black/5 text-gray-600 hover:border-black/15'
                    }`}
                  >
                    <div className="font-medium">{opt.label}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-full bg-white border border-black/10 text-gray-600 text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#f5f2ed] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>返回</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-full bg-[#2d3436] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#b5a089] transition cursor-pointer"
                >
                  <span>下一步</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#b5a089] font-semibold">
                  Step 03 · 睡眠与代谢状态
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2d3436] font-light">
                  您入睡及清晨醒来的体验通常如何？
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'light', label: '浅眠多梦，夜间易醒且不易深睡' },
                  { id: 'heavy', label: '晨起身体沉重，需要很长时间清醒' },
                  { id: 'acid', label: '喜食酸性或油腻食物，消化负担重' },
                  { id: 'good', label: '睡眠尚可，但希望进一步提升细胞活力' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedSleep(opt.id)}
                    className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedSleep === opt.id
                        ? 'bg-white border-[#b5a089] text-[#2d3436] shadow-sm ring-1 ring-[#b5a089]'
                        : 'bg-white border-black/5 text-gray-600 hover:border-black/15'
                    }`}
                  >
                    <div className="font-medium">{opt.label}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-full bg-white border border-black/10 text-gray-600 text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#f5f2ed] transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>返回</span>
                </button>
                <button
                  onClick={handleFinish}
                  className="px-7 py-3 rounded-full bg-[#b5a089] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#a38e78] transition shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>生成并应用专属身心调养方案</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
