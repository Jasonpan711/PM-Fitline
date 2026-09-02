import React from 'react';
import { X, Sparkles, ShieldCheck } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-sans animate-fade-in">
      <div className="bg-[#2d3436] text-white w-full max-w-4xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#b5a089]" />
            <span className="font-serif text-base sm:text-lg font-light text-white">
              PM FitLine · 德意志生命科学纪录短片
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
            alt="PM FitLine Ambient Video"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#b5a089] text-[#2d3436] flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-xl font-bold ml-1">▶</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              健康源于健康的生活方式 · 身心灵的平衡
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed font-light">
              探索德国 PM-International 30 年微循环与细胞吸收科研。从阿尔卑斯山纯净植物多酚，到奥运冠军日常饮用仪式。
            </p>
          </div>
        </div>

        {/* Video Footer Info */}
        <div className="p-4 sm:p-6 bg-black/20 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b5a089]" />
            <span>德国 PM-International 官方正版授权影像记录</span>
          </div>
          <span className="text-[#b5a089] uppercase tracking-wider text-[11px]">Made in Germany · Premium Quality</span>
        </div>
      </div>
    </div>
  );
};
