'use client';

import React, { useCallback, useEffect, useState, memo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import ProductCard from '@/app/components/products/ProductCard';
import { Product } from '@/app/types/product';

interface BestSellersProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onView?: (product: Product) => void;
  title?: string;
  subtitle?: string;
  autoplayDelay?: number;
  isLoading?: boolean;
}

const BestSellers = memo(
  ({
    products,
    onAddToCart,
    onView,
    title = 'Más Vendidos',
    subtitle = 'Descubre nuestros productos favoritos',
    autoplayDelay = 5000,
    isLoading = false,
  }: BestSellersProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: 'start',
      skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const scrollPrev = useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
      (index: number) => {
        emblaApi?.scrollTo(index);
      },
      [emblaApi]
    );

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;

      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);

      return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      };
    }, [emblaApi, onSelect]);

    // Autoplay with pause on hover
    useEffect(() => {
      if (!emblaApi || !autoplayDelay || isHovered) return;

      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayDelay);

      return () => clearInterval(autoplay);
    }, [emblaApi, autoplayDelay, isHovered]);

    // Keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') scrollPrev();
        if (e.key === 'ArrowRight') scrollNext();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [scrollPrev, scrollNext]);

    // Loading State
    if (isLoading) {
      return (
        <section className="from-essence-cream bg-gradient-to-b to-white px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 h-8 w-48 animate-pulse rounded bg-gray-200" />
              <div className="mx-auto h-4 w-72 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="aspect-square bg-gray-200" />
                  <div className="p-6">
                    <div className="mb-2 h-6 rounded bg-gray-200" />
                    <div className="mb-4 h-4 w-2/3 rounded bg-gray-200" />
                    <div className="mb-4 h-8 w-1/2 rounded bg-gray-200" />
                    <div className="h-12 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    // Empty State
    if (!products || products.length === 0) {
      return (
        <section
          className="from-essence-cream bg-gradient-to-b to-white px-4 py-16"
          aria-label="Productos más vendidos"
        >
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="font-fredoka text-essence-mauve mb-4 text-3xl font-light tracking-wide sm:text-4xl">
              {title}
            </h2>
            <p className="text-essence-mauve/70 mx-auto mb-12 max-w-2xl font-light">
              No hay productos disponibles en este momento.
            </p>
            <div className="bg-essence-rose/20 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
              <ShoppingCart className="text-essence-mauve/40 h-12 w-12" />
            </div>
          </div>
        </section>
      );
    }

    return (
      <section
        className="from-essence-cream bg-gradient-to-b to-white px-4 py-16"
        aria-label="Productos más vendidos"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="font-fredoka text-essence-mauve-700 mb-4 text-3xl font-light tracking-wide uppercase sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="font-quicksand text-essence-mauve-500 mx-auto max-w-2xl text-lg tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Desktop Grid (lg+) */}
            {/* <div className="min-w-0 gap-6 lg:grid lg:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onView={onView}
                  priority={index === 0}
                />
              ))}
            </div> */}

            {/* Carousel Container */}
            <div>
              <div className="-mx-3 overflow-hidden sm:-mx-4 lg:-mx-6" ref={emblaRef}>
                <div className="flex touch-pan-y py-5">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="min-w-0 flex-[0_0_85%] px-3 sm:flex-[0_0_48%] sm:px-4 md:flex-[0_0_30%] lg:px-6"
                    >
                      <ProductCard
                        product={product}
                        onAddToCart={onAddToCart}
                        onView={onView}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {products.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    className="text-essence-mauve absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:cursor-pointer hover:bg-white focus:ring-2 focus:ring-[#e3b2a1] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Producto anterior"
                    type="button"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    className="text-essence-mauve absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:cursor-pointer hover:bg-white focus:ring-2 focus:ring-[#e3b2a1] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Siguiente producto"
                    type="button"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Dot Indicators */}
              {scrollSnaps.length > 1 && (
                <div className="mt-8 flex justify-center gap-2">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`rounded-full transition-all duration-300 hover:cursor-pointer focus:ring-2 focus:ring-[#e3b2a1] focus:ring-offset-2 focus:outline-none ${
                        index === selectedIndex
                          ? 'h-2.5 w-8 bg-[#e3b2a1]'
                          : 'hover:bg-essence-mauve h-2.5 w-2.5 bg-[#e0bdb8]'
                      }`}
                      aria-label={`Ir al producto ${index + 1}`}
                      aria-current={index === selectedIndex ? 'true' : 'false'}
                      type="button"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <a
              href="/productos"
              className="font-quicksand hover:bg-essence-creafrom-essence-cream text-essence-mauve hover:border-essencematext-essence-mauve focus:ring-essencematext-essence-mauve inline-block transform rounded-full border-2 border-[#e0bdb8] bg-white px-8 py-3 text-sm font-light tracking-wide uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Ver Todos los Productos
            </a>
          </div>
        </div>
      </section>
    );
  }
);

BestSellers.displayName = 'BestSellers';

export default BestSellers;
