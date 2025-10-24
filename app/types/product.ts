export interface Product {
  id: string;
  name: string;
  aroma: string;
  price: number;
  image: string;
  badge?: 'bestseller' | 'new' | 'limited';
  slug: string;
}