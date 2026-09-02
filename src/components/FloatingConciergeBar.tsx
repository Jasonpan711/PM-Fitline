import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface FloatingConciergeBarProps {
  onOpenRoutineBuilder: () => void;
  onOpenFavorites: () => void;
  favoritesCount: number;
}

export const FloatingConciergeBar: React.FC<FloatingConciergeBarProps> = ({
  onOpenRoutineBuilder,
  onOpenFavorites,
  favoritesCount
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 font-sans">
      {/* Floating Favorites Counter Badge */}
      <button
        onClick={onOpenFavorites}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/95 backdrop-blur-md border border-black/5 text-[#2d3436] shadow-lg hover:shadow-xl hover:border-[#b5a089] transition duration-300 cursor-pointer"
        aria-label="查看心仪营养组合"
      >
        <Heart className="w-4 h-4 text-[#b5a089] fill-[#b5a089]" />
        <span className="text-xs font-medium text-[#2d3436]">心仪方案</span>
        {favoritesCount > 0 && (
          <span className="w-5 h-5 rounded-full bg-[#b5a089] text-white text-[10px] flex items-center justify-center font-bold">
            {favoritesCount}
          </span>
        )}
      </button>

      {/* Routine Quick Creator */}
      <button
        onClick={onOpenRoutineBuilder}
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#2d3436] text-white shadow-lg hover:bg-[#b5a089] transition duration-300 cursor-pointer"
        aria-label="快速定制 24 小时排期"
      >
        <Sparkles className="w-4 h-4 text-[#b5a089]" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          定制养生方案
        </span>
      </button>
    </div>
  );
};
