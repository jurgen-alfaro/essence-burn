import React from 'react';

interface QuoteSectionProps {
  quote?: string;
  author?: string;
  variant?: 'default' | 'minimal' | 'elegant' | 'centered';
  showDecorations?: boolean;
  className?: string;
}

import { Flame } from 'lucide-react';

const QuoteSection: React.FC<QuoteSectionProps> = ({
  quote = 'Enciende emociones, despierta tu esencia con Essence Burn',
  author,
  variant = 'elegant',
  showDecorations = true,
  className = '',
}) => {
  // Variante por defecto (con líneas laterales)
  if (variant === 'default') {
    return (
      <section
        className={`to-essence-tokibrown from-essence-tokibrown relative flex flex-col items-center justify-center bg-gradient-to-b via-white px-4 py-16 sm:py-20 lg:py-24 ${className}`}
        aria-label="Cita inspiracional"
      >
        {/* Top dots decoration */}
        <div className="mb-6 flex justify-center">
          <div className="bg-essence-mauve-500 flex h-16 w-16 items-center justify-center rounded-full">
            <Flame className="text-essence-cream-600 h-8 w-8" aria-hidden="true" />
          </div>
        </div>

        <div className="flex w-full max-w-7xl items-center justify-center gap-6 lg:gap-8">
          {/* Left decoration */}
          <div
            className="via-essence-rose to-essence-mauve hidden h-px flex-grow bg-gradient-to-r from-transparent sm:block"
            aria-hidden="true"
          />

          {/* Quote content */}
          <blockquote className="max-w-4xl text-center">
            <p className="text-essence-mauve-500 font-petit text-4xl leading-relaxed tracking-wide italic sm:text-5xl xl:text-7xl">
              &quot;{quote.slice(0, 20)}
            </p>
            <p className="text-essence-mauve-500 font-poiretone text-4xl leading-relaxed tracking-wide italic sm:text-5xl xl:text-7xl">
              <span className="">{quote.slice(20, 45)}</span>
            </p>
            <p className="text-essence-mauve-500 font-fredoka text-4xl leading-relaxed tracking-wide italic sm:text-5xl xl:text-7xl">
              {quote.slice(45)}&quot;
            </p>

            {author && (
              <footer className="text-essence-mauve/70 mt-6 text-sm font-light tracking-widest uppercase sm:text-base">
                — {author}
              </footer>
            )}
          </blockquote>

          {/* Right decoration */}
          <div
            className="via-essence-rose to-essence-mauve hidden h-px flex-grow bg-gradient-to-l from-transparent sm:block"
            aria-hidden="true"
          />
        </div>
        {/* Bottom dots decoration */}
        <div className="mt-12 flex items-center justify-center sm:mt-16" aria-hidden="true">
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-r from-transparent to-transparent sm:max-w-md" />
          <div className="mx-4 flex gap-2 sm:mx-6">
            <div className="bg-essence-peach h-1.5 w-1.5 rounded-full" />
            <div className="bg-essence-mauve h-1.5 w-1.5 rounded-full" />
            <div className="bg-essence-rose via-essence-rose h-1.5 w-1.5 rounded-full" />
          </div>
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-l from-transparent to-transparent sm:max-w-md" />
        </div>
      </section>
    );
  }

  // Variante minimalista
  if (variant === 'minimal') {
    return (
      <section
        className={`bg-essence-cream px-4 py-16 sm:py-20 lg:py-24 ${className}`}
        aria-label="Cita inspiracional"
      >
        <div className="mx-auto max-w-4xl text-center">
          <blockquote>
            <p className="text-essence-mauve text-xl leading-relaxed font-light tracking-wide sm:text-2xl lg:text-3xl">
              {quote}
            </p>
            {author && (
              <footer className="text-essence-mauve/70 mt-4 text-sm font-light tracking-widest uppercase">
                — {author}
              </footer>
            )}
          </blockquote>
        </div>
      </section>
    );
  }

  // Variante centrada con fondo destacado
  if (variant === 'centered') {
    return (
      <section
        className={`relative overflow-hidden px-4 py-20 sm:py-24 lg:py-32 ${className}`}
        aria-label="Cita inspiracional"
      >
        {/* Background gradient */}
        <div
          className="from-essence-cream to-essence-cream via-essence-rose/50 absolute inset-0 bg-gradient-to-b"
          aria-hidden="true"
        />

        {/* Decorative circles */}
        {showDecorations && (
          <>
            <div
              className="bg-essence-peach/10 absolute top-10 left-10 h-32 w-32 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="bg-essence-mauve/10 absolute right-10 bottom-10 h-40 w-40 rounded-full blur-3xl"
              aria-hidden="true"
            />
          </>
        )}

        {/* Content */}
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Quote mark decoration */}
          <div className="mb-8 flex justify-center" aria-hidden="true">
            <svg
              className="text-essence-peach/40 h-12 w-12 sm:h-16 sm:w-16"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.3-.5 2.2-2.4 3.8-4.7 3.8-.6 0-1 .4-1 1s.4 1 1 1c3.9 0 7-3.1 7-7v-3c0-3.3-2.7-6-6-6zm12 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.3-.5 2.2-2.4 3.8-4.7 3.8-.6 0-1 .4-1 1s.4 1 1 1c3.9 0 7-3.1 7-7v-3c0-3.3-2.7-6-6-6z" />
            </svg>
          </div>

          <blockquote>
            <p className="text-essence-mauve mb-8 text-2xl leading-relaxed font-light tracking-wide sm:text-3xl lg:text-4xl xl:text-5xl">
              {quote}
            </p>
            {author && (
              <footer className="text-essence-mauve/70 text-base font-light tracking-widest uppercase sm:text-lg">
                {author}
              </footer>
            )}
          </blockquote>

          {/* Bottom decoration */}
          <div className="mt-12 flex justify-center gap-2" aria-hidden="true">
            <div className="bg-essence-peach h-2 w-2 rounded-full" />
            <div className="bg-essence-mauve h-2 w-2 rounded-full" />
            <div className="bg-essence-rose via-essence-rose h-2 w-2 rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  // Variante elegante (recomendada para Escence Burn)
  return (
    <section
      className={`via-essence-cream to-essence-cream relative overflow-hidden bg-gradient-to-b from-white px-4 py-20 sm:py-24 lg:py-32 ${className}`}
      aria-label="Cita inspiracional"
    >
      {/* Decorative background elements */}
      {showDecorations && (
        <>
          <div
            className="bg-essence-rose/20 via-essence-rose/5 absolute top-0 left-1/4 h-64 w-64 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="bg-essence-peach/15 absolute right-1/4 bottom-16 h-80 w-80 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </>
      )}

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-6xl">
        {/* Top border decoration */}
        <div className="mb-12 flex items-center justify-center sm:mb-16" aria-hidden="true">
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-r from-transparent to-transparent sm:max-w-md" />
          <div className="mx-4 sm:mx-6">
            <div className="bg-essence-peach h-2 w-2 rounded-full" />
          </div>
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-l from-transparent to-transparent sm:max-w-md" />
        </div>

        {/* Quote content */}
        <blockquote className="px-4 text-center">
          <p className="text-essence-mauve mx-auto max-w-4xl text-2xl leading-relaxed font-light tracking-wide sm:text-3xl lg:text-4xl xl:text-5xl">
            <span
              className="text-essence-peach/40 mr-2 inline-block -translate-y-2 transform text-4xl sm:text-5xl"
              aria-hidden="true"
            ></span>
            {quote}
            <span
              className="text-essence-peach/40 ml-2 inline-block translate-y-2 transform text-4xl sm:text-5xl"
              aria-hidden="true"
            ></span>
          </p>

          {author && (
            <footer className="mt-8 sm:mt-10">
              <cite className="text-essence-mauve/70 text-base font-light tracking-widest uppercase not-italic sm:text-lg">
                {author}
              </cite>
            </footer>
          )}
        </blockquote>

        {/* Bottom border decoration */}
        <div className="mt-12 flex items-center justify-center sm:mt-16" aria-hidden="true">
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-r from-transparent to-transparent sm:max-w-md" />
          <div className="mx-4 flex gap-2 sm:mx-6">
            <div className="bg-essence-peach h-1.5 w-1.5 rounded-full" />
            <div className="bg-essence-mauve h-1.5 w-1.5 rounded-full" />
            <div className="bg-essence-rose via-essence-rose h-1.5 w-1.5 rounded-full" />
          </div>
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-l from-transparent to-transparent sm:max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
