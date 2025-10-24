export interface Ritual {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: 'moon' | 'sun' | 'heart' | 'sparkles';
  products?: string[];
  ctaText: string;
  ctaLink: string;
  time: string;
  price?: number;
  duration?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}