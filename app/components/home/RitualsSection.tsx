import React from 'react';
import Image from 'next/image';
import { Sparkles, Moon, Sun, Heart, ArrowRight } from 'lucide-react';

interface Ritual {
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
}

interface RitualsSectionProps {
  rituals?: Ritual[];
  title?: string;
  subtitle?: string;
  onRitualClick?: (ritual: Ritual) => void;
}

const defaultRituals: Ritual[] = [
  {
    id: '1',
    title: 'Ritual de Noche',
    subtitle: 'Desconexión y Descanso',
    description:
      'Enciende una vela. Respira profundo. Deja que la calma del anochecer envuelva tu espacio.',
    image: '/ebr01.webp',
    icon: 'moon',
    products: ['Vela Lavanda', 'Aceite Nocturno', 'Incienso Sándalo'],
    ctaText: 'Descubrir Ritual',
    ctaLink: '/rituales/noche',
    time: '8:00 PM - 10:00 PM',
  },
  {
    id: '2',
    title: 'Ritual de Amanecer',
    subtitle: 'Energía y Claridad',
    description:
      'Recibe el nuevo día con intención. Enciende, respira, renueva tu energía interior.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    icon: 'sun',
    products: ['Vela Cítrica', 'Spray Energizante', 'Té Matutino'],
    ctaText: 'Comenzar el Día',
    ctaLink: '/rituales/amanecer',
    time: '6:00 AM - 8:00 AM',
  },
  {
    id: '3',
    title: 'Ritual de Calma',
    subtitle: 'Pausa y Reconexión',
    description: 'Un momento para ti. Desacelera, encuentra tu centro, honra tu paz interior.',
    image: '/ebr00.webp',
    icon: 'heart',
    products: ['Vela Rosa', 'Aceite Esencial', 'Cristal Cuarzo'],
    ctaText: 'Encontrar Calma',
    ctaLink: '/rituales/calma',
    time: 'Cualquier momento',
  },
  {
    id: '4',
    title: 'Ritual de Gratitud',
    subtitle: 'Reflexión y Abundancia',
    description: 'Celebra lo esencial. Agradece, medita, transforma tu espacio en santuario.',
    image: '/ebr02.webp',
    icon: 'sparkles',
    products: ['Vela Dorada', 'Diario de Gratitud', 'Incienso Palo Santo'],
    ctaText: 'Practicar Gratitud',
    ctaLink: '/rituales/gratitud',
    time: 'Diario',
  },
];

const iconMap = {
  moon: Moon,
  sun: Sun,
  heart: Heart,
  sparkles: Sparkles,
};

const RitualsSection: React.FC<RitualsSectionProps> = ({
  rituals = defaultRituals,
  title = 'Rituales de Conexión',
  subtitle = 'Transforma momentos cotidianos en experiencias de autocuidado',
  onRitualClick,
}) => {
  const handleRitualClick = (ritual: Ritual) => {
    if (onRitualClick) {
      onRitualClick(ritual);
    } else {
      window.location.href = ritual.ctaLink;
    }
  };

  return (
    <section
      className="bg-essence-rose-100 relative overflow-hidden px-4 pt-8 pb-20 sm:pb-10 lg:pb-16"
      aria-labelledby="rituals-heading"
    >
      {/* Decorative background elements */}
      <div
        className="bg-essence-peach/5 absolute top-20 right-0 h-96 w-96 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-essence-rose/5 absolute bottom-20 left-0 h-80 w-80 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <div className="bg-essence-peach/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
          <Sparkles className="text-essence-peach h-8 w-8" aria-hidden="true" />
        </div>

        <h2
          id="rituals-heading"
          className="text-essence-mauve-700 font-fredoka mb-4 text-3xl font-light tracking-wide uppercase sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>

        <p className="text-essence-mauve-500 font-quicksand mx-auto max-w-2xl text-lg font-light sm:text-xl">
          {subtitle}
        </p>

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
          <div className="to-essence-rose-300 h-px w-12 bg-gradient-to-r from-transparent" />
          <div className="bg-essence-peach h-2 w-2 rounded-full" />
          <div className="to-essence-rose-300 h-px w-12 bg-gradient-to-l from-transparent" />
        </div>
      </div>

      {/* Rituals Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {rituals.map((ritual, index) => {
            const Icon = iconMap[ritual.icon];

            return (
              <article
                key={ritual.id}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl"
                onClick={() => handleRitualClick(ritual)}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalles del ${ritual.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleRitualClick(ritual);
                  }
                }}
              >
                {/* Background Image */}
                <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                  <Image
                    src={ritual.image}
                    alt={`${ritual.title} - ${ritual.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Time Badge */}
                  <div className="bg-essence-peach/90 absolute top-6 left-6 rounded-full px-4 py-1.5 backdrop-blur-sm">
                    <span className="font-poiretone text-xs tracking-widest text-white uppercase">
                      {ritual.time}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="translate-y-2 transform space-y-3 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-essence-cream/80 font-quicksand text-sm font-light tracking-widest uppercase">
                      {ritual.subtitle}
                    </p>

                    <h3 className="font-fredoka text-2xl font-light tracking-wide text-white sm:text-3xl lg:text-4xl">
                      {ritual.title}
                    </h3>

                    <p className="font-quicksand max-w-lg leading-relaxed font-light text-white/90">
                      {ritual.description}
                    </p>

                    {/* Products List */}
                    {ritual.products && ritual.products.length > 0 && (
                      <div className="pt-2 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                        <p className="font-poiretone mb-2 text-xs font-light tracking-wide text-white/60 uppercase">
                          Incluye:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {ritual.products.map((product, idx) => (
                            <span
                              key={idx}
                              className="font-poiretone rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-light tracking-widest text-white backdrop-blur-sm"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button
                        className="text-essence-mauve-700 hover:bg-essence-cream font-fredoka inline-flex transform items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-light tracking-wide uppercase shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl hover:cursor-pointer"
                        aria-label={ritual.ctaText}
                      >
                        <span>{ritual.ctaText}</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-500 group-hover:border-white/20" />
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-16 max-w-4xl text-center">
        <div className="from-essence-peach-200 to-essence-cream-500 border-essence-rose-200/30 rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
          <h3 className="text-essence-mauve-700 font-quicksand mb-4 text-2xl font-semibold tracking-wide sm:text-4xl">
            ¿Necesitas ayuda para elegir tu ritual?
          </h3>
          <p className="text-essence-mauve-500 font-quicksand mx-auto mb-6 max-w-2xl font-light sm:text-lg">
            Nuestros expertos en bienestar pueden crear un ritual personalizado según tus
            necesidades.
          </p>
          <a
            href="/quiz-ritual"
            className="bg-essence-peach hover:bg-essence-peach-600 inline-flex transform items-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span className="font-fredoka">Descubrir Mi Ritual</span>
          </a>
        </div>
      </div>

      {/* Decorative quote */}
      <div className="mx-auto mt-20 max-w-3xl text-center">
        {/* Top dots decoration */}
        <div className="mb-12 flex items-center justify-center sm:mb-10" aria-hidden="true">
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-r from-transparent to-transparent sm:max-w-md" />
          <div className="mx-4 sm:mx-6">
            <div className="bg-essence-peach h-2 w-2 rounded-full" />
          </div>
          <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-l from-transparent to-transparent sm:max-w-md" />
        </div>
        <blockquote className="relative">
          <div
            className="text-essence-peach/20 absolute -top-6 left-1/2 -translate-x-1/2 text-6xl"
            aria-hidden="true"
          ></div>
          <p className="text-essence-mauve-600 font-quicksand text-xl leading-relaxed font-light italic sm:text-2xl">
            Un ritual es más que una acción, es una intención de cuidado convertida en momento
            sagrado.
          </p>
        </blockquote>
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
      </div>
    </section>
  );
};

export default RitualsSection;
