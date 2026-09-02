import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFinder } from './components/QuickFinder';
import { Philosophy } from './components/Philosophy';
import { ProductShowcase } from './components/ProductShowcase';
import { NtcScience } from './components/NtcScience';
import { CircadianRitual } from './components/CircadianRitual';
import { AthletesShowcase } from './components/AthletesShowcase';
import { QualityCertifications } from './components/QualityCertifications';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { WellnessQuiz } from './components/WellnessQuiz';
import { RegimenDrawer } from './components/RegimenDrawer';
import { VideoModal } from './components/VideoModal';
import { FITLINE_PRODUCTS } from './data/products';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [regimenItems, setRegimenItems] = useState<Product[]>([
    FITLINE_PRODUCTS[0], // PowerCocktail
    FITLINE_PRODUCTS[1], // Activize
    FITLINE_PRODUCTS[2], // Restorate
  ]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isRegimenOpen, setIsRegimenOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const handleToggleRegimen = (product: Product) => {
    if (regimenItems.some((item) => item.id === product.id)) {
      setRegimenItems(regimenItems.filter((item) => item.id !== product.id));
    } else {
      setRegimenItems([...regimenItems, product]);
    }
  };

  const handleRemoveRegimenItem = (id: string) => {
    setRegimenItems(regimenItems.filter((item) => item.id !== id));
  };

  const handleClearRegimen = () => {
    setRegimenItems([]);
  };

  const handleApplyQuizPlan = (products: Product[]) => {
    const combined = [...regimenItems];
    products.forEach((p) => {
      if (!combined.some((item) => item.id === p.id)) {
        combined.push(p);
      }
    });
    setRegimenItems(combined);
    setIsRegimenOpen(true);
  };

  const handleQuickFind = (goal: string) => {
    if (goal === 'energy') {
      setCategoryFilter('vitality');
    } else if (goal === 'sleep') {
      setCategoryFilter('restore');
    } else if (goal === 'beauty') {
      setCategoryFilter('beauty');
    } else if (goal === 'immunity') {
      setCategoryFilter('optimal');
    } else {
      setCategoryFilter('all');
    }

    const collectionsElem = document.getElementById('collections');
    if (collectionsElem) {
      collectionsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans antialiased overflow-x-hidden selection:bg-[#E2AF64]/30 selection:text-[#8D582A]">
      {/* Constance Hotels Inspired Top & Main Navigation */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenRegimen={() => setIsRegimenOpen(true)}
        regimenItems={regimenItems}
        onSelectCategory={(cat) => setCategoryFilter(cat)}
      />

      {/* Main Flow */}
      <main>
        {/* Hero Section with Main and Subtitle requested */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenVideo={() => setIsVideoOpen(true)}
          onExploreCollections={() => {
            const collectionsElem = document.getElementById('collections');
            if (collectionsElem) {
              collectionsElem.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Floating Quick Routine Tailored Finder */}
        <QuickFinder
          onQuickFind={handleQuickFind}
          onOpenFullQuiz={() => setIsQuizOpen(true)}
        />

        {/* Brand Philosophy: 身心灵的三重平衡 */}
        <Philosophy />

        {/* Curated Product Collections */}
        <ProductShowcase
          onSelectProduct={(p) => setSelectedProduct(p)}
          onToggleRegimen={handleToggleRegimen}
          regimenItems={regimenItems}
          selectedCategoryFilter={categoryFilter}
        />

        {/* The NTC® Cellular Science & Innovation */}
        <NtcScience />

        {/* The 24-Hour Circadian Routine */}
        <CircadianRitual
          onToggleRegimen={handleToggleRegimen}
          regimenItems={regimenItems}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* World Champions & Global Community Testimonials */}
        <AthletesShowcase />

        {/* German Quality & Safety Standards */}
        <QualityCertifications />
      </main>

      {/* Luxury Multi-Column Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleRegimen={handleToggleRegimen}
        isInRegimen={selectedProduct ? regimenItems.some((i) => i.id === selectedProduct.id) : false}
      />

      {/* 3-Step Wellness Concierge Quiz */}
      <WellnessQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onApplyPlan={handleApplyQuizPlan}
        onSelectProduct={(p) => {
          setIsQuizOpen(false);
          setSelectedProduct(p);
        }}
      />

      {/* Personalized Daily Regimen Drawer */}
      <RegimenDrawer
        isOpen={isRegimenOpen}
        onClose={() => setIsRegimenOpen(false)}
        regimenItems={regimenItems}
        onRemoveItem={handleRemoveRegimenItem}
        onClearAll={handleClearRegimen}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Brand Ambient Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
