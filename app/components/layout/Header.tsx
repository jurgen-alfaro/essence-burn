'use client';

import React, { useState } from 'react';
import PhotoCarousel from '@/app/components/ui/PhotoCarousel';
import QuoteSection from '../home/QuoteSection';
import { Product } from '@/app/types/product';
import BestSellers from '@/app/components/home/BestSellers';
import RitualsSection from '../home/RitualsSection';
import FAQSection from '../home/FAQSection';

// Mock data para desarrollo
const slides = [
  {
    image: '/eb00.webp',
    subtitle: 'Nueva Colección',
    title: 'Velas Aromáticas de Lujo',
    ctaText: 'Explorar colección',
    ctaLink: '/productos/velas',
  },
  {
    image: '/eb01.webp',
    subtitle: 'Cuidado Natural',
    title: 'Skin Care Esencial',
    ctaText: 'Descubre tu Ritual',
    ctaLink: '/productos/skincare',
  },
  {
    image: '/eb02.webp',
    title: 'Sumérgete en la experiencia Escence Burn',
    subtitle: 'Bienestar Interior',
    ctaText: 'Comenzar Tu Ritual',
    ctaLink: '/colecciones',
  },
];
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Vela Aromática Lavanda Serenidad',
    aroma: 'Lavanda & Vainilla',
    price: 24.99,
    image: '/ebbs00.webp',
    badge: 'bestseller',
    slug: 'vela-lavanda-serenidad',
  },
  {
    id: '2',
    name: 'Esencia Floral Primavera',
    aroma: 'Rosas & Jazmín',
    price: 29.99,
    image: '/ebbs01.webp',
    badge: 'new',
    slug: 'esencia-floral-primavera',
  },
  {
    id: '3',
    name: 'Ritual Nocturno Zen',
    aroma: 'Sándalo & Bergamota',
    price: 34.99,
    image: '/ebbs02.webp',
    badge: 'limited',
    slug: 'ritual-nocturno-zen',
  },
  {
    id: '4',
    name: 'Vela Cítrica Energía',
    aroma: 'Naranja & Limón',
    price: 22.99,
    image: '/ebbs03.webp',
    slug: 'vela-citrica-energia',
  },
  {
    id: '5',
    name: 'Skin Care Aceite Esencial',
    aroma: 'Eucalipto & Menta',
    price: 39.99,
    image: '/ebbs04.webp',
    badge: 'bestseller',
    slug: 'aceite-esencial-eucalipto',
  },
];

const Hero = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handler para agregar al carrito
  const handleAddToCart = (product: Product) => {
    // Aquí puedes:
    // 1. Llamar a tu API/backend
    // 2. Actualizar el estado global (Context, Redux, Zustand)
    // 3. Mostrar una notificación toast
    // 4. Animar el icono del carrito

    console.log('Agregando al carrito:', product);

    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Si ya existe, podrías incrementar cantidad
        return prev;
      }
      return [...prev, product];
    });

    // Ejemplo de notificación (puedes usar react-hot-toast, sonner, etc)
    alert(`✓ ${product.name} agregado al carrito`);
  };

  // Handler para ver producto
  const handleViewProduct = (product: Product) => {
    // Navegar a la página del producto
    console.log('Ver producto:', product);

    // Opción 1: Next.js Router
    // router.push(`/productos/${product.slug}`);

    // Opción 2: Link directo
    window.location.href = `/productos/${product.slug}`;
  };

  return (
    <>
      <PhotoCarousel
        slides={slides}
        autoplayDelay={5000} // Opcional: autoplay cada 5 segundos
        className="mx-auto w-full"
      />

      <QuoteSection variant="default" showDecorations={true} />
      <div id="bestsellers">
        <BestSellers
          products={mockProducts}
          onAddToCart={handleAddToCart}
          onView={handleViewProduct}
          title="Más Vendidos"
          subtitle="Descubre los favoritos de nuestra comunidad"
          autoplayDelay={5000}
          isLoading={isLoading}
        />
      </div>
      <RitualsSection />
      <div id="faq">
        <FAQSection maxItems={3} showViewAllButton={true} showContactCTA={true} />
      </div>
    </>
  );
};

export default Hero;
