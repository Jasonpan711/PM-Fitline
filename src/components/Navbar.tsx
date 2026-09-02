import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X, Globe, ShieldCheck, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenRegimen: () => void;
  regimenItems: Product[];
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuiz,
  onOpenRegimen,
  regimenItems,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState('中文 (CN)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '品牌哲学', href: '#philosophy' },
    { label: '明星选集', href: '#collections' },
    { label: 'NTC® 细胞科技', href: '#ntc-science' },
    { label: '24H 律动', href: '#rituals' },
    { label: '冠军严选', href: '#champions' },
    { label: '品质认证', href: '#certifications' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans">
        {/* Top Minimal Line */}
        <div className={`hidden lg:block bg-[#2d3436] text-[#e8e2d8] text-[11px] py-2 px-8 border-b border-black/10 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 py-0 overflow-hidden border-none' : 'opacity-100'}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6 tracking-wider">
              <span className="flex items-center gap-1.5 text-[#b5a089] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b5a089]" />
                PM-International 官方授权旗舰体验 · 德国原装进口 (Made in Germany)
              </span>
              <span className="text-white/20">|</span>
              <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5a089] inline-block animate-pulse"></span>
                科隆名单 (Cologne List®) 运动员洁净认证
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  id="lang-selector-btn"
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-[#b5a089]" />
                  <span>{currentLang}</span>
                  <ChevronDown className="w-3 h-3 text-white/40" />
                </button>
                {langDropdown && (
                  <div className="absolute right-0 mt-2 w-36 bg-[#2d3436] border border-white/10 rounded-lg shadow-2xl py-1 z-50">
                    {['中文 (CN)', 'English (EN)', 'Deutsch (DE)', 'Français (FR)'].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setCurrentLang(l);
                          setLangDropdown(false);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs text-[#e8e2d8] hover:bg-white/10 hover:text-[#b5a089] transition-colors"
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-white/20">|</span>
              <a
                href="#concierge-contact"
                className="hover:text-[#b5a089] transition-colors flex items-center gap-1.5 text-white/80 cursor-pointer"
              >
                <PhoneCall className="w-3 h-3 text-[#b5a089]" />
                <span>专属身心健康顾问 400-880-993</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          className={`w-full transition-all duration-500 ${
            isScrolled
              ? 'bg-[#fdfcfb]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-black/5'
              : 'bg-gradient-to-b from-[#fdfcfb]/95 via-[#fdfcfb]/80 to-transparent backdrop-blur-[2px] py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo - Artistic Flair typography */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-9 h-9 rounded-full bg-[#2d3436] flex items-center justify-center text-[#b5a089] font-serif font-medium text-base shadow-sm group-hover:bg-[#b5a089] group-hover:text-white transition-all duration-300">
                PM
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.25em] text-[#2d3436] group-hover:text-[#b5a089] transition-colors">
                  FITLINE
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#b5a089] font-medium">
                  Cell Nutrition · Germany
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-[#2d3436]/80 hover:text-[#b5a089] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b5a089] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Action CTAs */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Quiz / Personalized Plan Button */}
              <button
                id="header-quiz-btn"
                onClick={onOpenQuiz}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest text-white bg-[#2d3436] hover:bg-[#b5a089] transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#b5a089] group-hover:text-white" />
                <span>定制专属方案</span>
              </button>

              {/* My Daily Routine / Regimen Bag */}
              <button
                id="header-regimen-bag-btn"
                onClick={onOpenRegimen}
                className="relative p-2.5 rounded-full bg-[#f5f2ed] hover:bg-[#e8e2d8] border border-black/5 text-[#2d3436] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                title="我的健康日常配方"
              >
                <ShoppingBag className="w-4 h-4 text-[#2d3436]" />
                {regimenItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#b5a089] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {regimenItems.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#2d3436] hover:bg-[#f5f2ed] transition-colors"
                aria-label="打开导航菜单"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#fdfcfb] border-b border-black/5 shadow-2xl p-6 md:hidden font-sans"
          >
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-black/5 flex items-center justify-between">
                <span className="text-xs text-[#2d3436]/60 uppercase tracking-widest">PM FitLine 官方体验</span>
                <span className="text-xs text-[#b5a089] font-medium">{currentLang}</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-[#2d3436] hover:text-[#b5a089] py-2 border-b border-black/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#b5a089] font-serif">→</span>
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuiz();
                  }}
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#2d3436] hover:bg-[#b5a089] flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#b5a089]" />
                  <span>智能定制您的身心平衡方案</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
