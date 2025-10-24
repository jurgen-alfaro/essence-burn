export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'productos' | 'envios' | 'pagos' | 'general' | 'devoluciones';
}

export interface FAQCategory {
  key: 'productos' | 'envios' | 'pagos' | 'general' | 'devoluciones';
  label: string;
}

export interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  showContactCTA?: boolean;
  className?: string;
  maxItems?: number;
  showViewAllButton?: boolean;
  filterByCategory?: 'productos' | 'envios' | 'pagos' | 'general' | 'devoluciones'; // Nueva prop
  showCategoryFilter?: boolean; // Nueva prop
  allowedCategories?: Array<'productos' | 'envios' | 'pagos' | 'general' | 'devoluciones'>; // Nueva prop
}
