'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CarouselSlide {
  image: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface PhotoCarouselProps {
  slides: CarouselSlide[];
  autoplayDelay?: number;
  className?: string;
}

export default function PhotoCarousel({
  slides,
  autoplayDelay,
  className = '',
}: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplayDelay) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(autoplay);
  }, [emblaApi, autoplayDelay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollPrev, scrollNext]);

  if (!slides || slides.length === 0) {
    return (
      <div className="flex h-96 w-full items-center justify-center bg-gray-100">
        <p className="text-gray-400">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-4">
      <div className={`relative w-full ${className}`}>
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_100%]"
                style={{ flex: '0 0 100%' }}
              >
                <div className="relative aspect-[8/9] w-full sm:aspect-[15/9] lg:aspect-[21/9]">
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                    quality={90}
                  />
                  {/* Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Content Overlay */}
                  {(slide.title || slide.subtitle || slide.ctaText) && (
                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
                      <div className="animate-fade-in w-full max-w-3xl space-y-4 text-center sm:space-y-6">
                        {slide.subtitle && (
                          <p className="font-quicksand text-sm font-light tracking-widest text-white/90 uppercase sm:text-base md:text-lg">
                            {slide.subtitle}
                          </p>
                        )}

                        {slide.title && (
                          <h2 className="font-fredoka mx-auto max-w-xs text-center text-3xl leading-tight font-light tracking-wide text-balance text-white sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl">
                            {slide.title}
                          </h2>
                        )}

                        {slide.ctaText && slide.ctaLink && (
                          <div className="pt-2 sm:pt-4">
                            <a
                              href={slide.ctaLink}
                              className="font-quicksand inline-block transform rounded-full bg-white/95 px-6 py-3 text-sm font-light tracking-wide text-[#b68187] uppercase shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none sm:px-8 sm:py-4 sm:text-base"
                            >
                              {slide.ctaText}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-4 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-[#e3b2a1] focus:ring-offset-2 focus:outline-none sm:h-12 sm:w-12"
          aria-label="Imagen anterior"
          type="button"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-[#e3b2a1] focus:ring-offset-2 focus:outline-none sm:h-12 sm:w-12"
          aria-label="Siguiente imagen"
          type="button"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full transition-all duration-300 focus:ring-2 focus:ring-[#e3b2a1] focus:ring-offset-2 focus:outline-none ${
                index === selectedIndex
                  ? 'h-2 w-8 bg-white shadow-lg sm:h-2.5 sm:w-10'
                  : 'h-2 w-2 bg-white/60 hover:bg-white/80 sm:h-2.5 sm:w-2.5'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : 'false'}
              type="button"
            />
          ))}
        </div>

        {/* Counter */}
        {/* <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-light text-white backdrop-blur-sm sm:text-sm">
        {selectedIndex + 1} / {images.length}
      </div> */}
      </div>
    </div>
  );
}
