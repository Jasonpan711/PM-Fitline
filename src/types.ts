export interface Product {
  id: string;
  name: string;
  germanName: string;
  category: 'optimal' | 'vitality' | 'restore' | 'beauty' | 'sport';
  categoryLabel: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  usageTiming: 'morning' | 'noon' | 'afternoon' | 'evening' | 'anytime';
  usageTimingLabel: string;
  description: string;
  mainBenefits: string[];
  keyIngredients: string[];
  scienceNote: string;
  ntcHighlights: string[];
  usageInstructions: string;
  tasteProfile: string;
  certifications: string[];
}

export interface WellnessRoutineItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  steps: string[];
  recommendedProducts: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  avatar: string;
  quote: string;
  favoriteProduct: string;
}

