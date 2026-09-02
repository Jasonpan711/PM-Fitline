import React from 'react';
import { X, Trash2, Sparkles, Check, Clock } from 'lucide-react';
import { Product } from '../types';

interface RegimenDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  regimenItems: Product[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onSelectProduct: (product: Product) => void;
}

export const RegimenDrawer: React.FC<RegimenDrawerProps> = ({
  isOpen,
  onClose,
  regimenItems,
  onRemoveItem,
  onClearAll,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs font-sans animate-fade-in">
      <div className="bg-[#fdfcfb] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-black/5 overflow-hidden">
        {/* Drawer Header */}
        <div className="p-6 border-b border-black/5 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#f5f2ed] text-[#b5a089] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-normal text-[#2d3436]">
                我的每日健康日程
              </h3>
              <p className="text-xs text-gray-400">
                已添加 {regimenItems.length} 款定制细胞能量营养
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#2d3436] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Items List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {regimenItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#f5f2ed] flex items-center justify-center mx-auto text-gray-400">
                <Clock className="w-8 h-8 opacity-40" />
              </div>
              <h4 className="font-serif text-base font-normal text-[#2d3436]">
                暂未添加任何每日健康组合
              </h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto font-light">
                请在产品甄选区或通过 3 步身心测评，添加适合您身体节律的营养方案。
              </p>
            </div>
          ) : (
            regimenItems.map((product) => (
              <div
                key={product.id}
                className="p-4 rounded-xl bg-white border border-black/5 shadow-xs flex items-center justify-between gap-3 group hover:border-[#b5a089] transition-colors"
              >
                <div
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover shadow-xs"
                  />
                  <div>
                    <span className="text-[10px] text-[#b5a089] font-medium uppercase tracking-wider block">
                      {product.usageTimingLabel}
                    </span>
                    <h4 className="font-serif text-xs font-normal text-[#2d3436] group-hover:text-[#b5a089] transition-colors">
                      {product.name}
                    </h4>
                    <span className="font-serif text-xs text-gray-700 font-medium block mt-0.5">
                      {product.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(product.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                  title="移除"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {regimenItems.length > 0 && (
          <div className="p-6 border-t border-black/5 bg-white space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>德国原装进口 · 顺丰冷链包邮</span>
              <button
                onClick={onClearAll}
                className="text-xs text-gray-400 hover:text-red-600 transition-colors underline cursor-pointer"
              >
                清空列表
              </button>
            </div>

            <button
              onClick={() => {
                alert('已为您生成专属健康日常饮用计划指南！专属顾问将为您提供 1 对 1 细胞营养饮用指导。');
                onClose();
              }}
              className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#2d3436] hover:bg-[#b5a089] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Check className="w-4 h-4 text-[#b5a089]" />
              <span>生成我的 24H 专属健康饮用时刻表</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
