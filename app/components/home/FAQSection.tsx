'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem, FAQCategory, FAQSectionProps } from '@/app/types/faq';
import Link from 'next/link';

const defaultFAQs: FAQItem[] = [
  {
    id: '1',
    question: '¿Qué hace especiales a las velas de Essence Burn?',
    answer:
      'Nuestras velas están elaboradas con cera de soja 100% natural, libre de toxinas y parabenos. Cada vela es hecha a mano con aceites esenciales premium y mechas de algodón, garantizando una combustión limpia y prolongada. No solo iluminan tu espacio, crean una experiencia sensorial completa.',
    category: 'productos',
  },
  {
    id: '2',
    question: '¿Cuánto tiempo dura una vela?',
    answer:
      'Nuestras velas tienen una duración aproximada de 40-50 horas de combustión continua. Para maximizar su vida útil, recomendamos encenderla al menos 2 horas en cada uso para crear una "memoria de cera" uniforme y cortar la mecha a 0.5cm antes de cada encendido.',
    category: 'productos',
  },
  {
    id: '3',
    question: '¿Los productos son veganos y cruelty-free?',
    answer:
      'Sí, absolutamente. Todos nuestros productos son 100% veganos y libres de crueldad animal. No utilizamos ningún ingrediente de origen animal ni realizamos pruebas en animales. Trabajamos con proveedores certificados que comparten nuestros valores de sostenibilidad y respeto.',
    category: 'productos',
  },
  {
    id: '4',
    question: '¿Hacen envíos a todo Costa Rica?',
    answer:
      'Sí, realizamos envíos seguros a todas las provincias de Costa Rica. Trabajamos con Correos de Costa Rica y mensajería privada. Los pedidos se procesan en 1-2 días hábiles y el tiempo de entrega es de 3-5 días hábiles según tu ubicación. Envío gratuito en compras superiores a ₡30,000.',
    category: 'envios',
  },
  {
    id: '5',
    question: '¿Cuál es su política de devoluciones?',
    answer:
      'Tienes 15 días desde la recepción del producto para solicitar un cambio o devolución. El producto debe estar sin usar y en su empaque original. Los gastos de envío de devolución corren por cuenta del cliente, excepto en casos de productos defectuosos o envíos incorrectos.',
    category: 'envios',
  },
  {
    id: '6',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos tarjetas de crédito y débito (VISA, Mastercard, American Express), PayPal y transferencias SINPE. Todos los pagos son procesados de forma segura a través de plataformas encriptadas que protegen tu información financiera.',
    category: 'pagos',
  },
  {
    id: '7',
    question: '¿Puedo crear un ritual personalizado?',
    answer:
      'Por supuesto. Ofrecemos consultas personalizadas para crear rituales adaptados a tus necesidades específicas. Nuestro equipo de expertos en bienestar te ayudará a seleccionar los productos ideales según tu estilo de vida, preferencias aromáticas y objetivos de autocuidado.',
    category: 'general',
  },
  {
    id: '8',
    question: '¿Ofrecen certificados de regalo?',
    answer:
      'Sí, nuestros certificados de regalo son perfectos para compartir el regalo del bienestar. Están disponibles en diferentes montos y pueden ser canjeados en cualquier producto de nuestra tienda. Los enviamos en formato digital o físico según tu preferencia.',
    category: 'general',
  },
  {
    id: '9',
    question: '¿Cómo puedo saber qué productos son ideales para mí?',
    answer:
      'En nuestra página “Descubrir mi ritual” encontrarás un test interactivo que te ayudará a identificar el ritual que más se alinea con tu energía actual. Según tus respuestas, te recomendaremos productos que potencien tu bienestar.',
    category: 'productos',
  },
];

const ALL_CATEGORIES: FAQCategory[] = [
  { key: 'productos', label: 'Productos' },
  { key: 'envios', label: 'Envíos' },
  { key: 'pagos', label: 'Pagos' },
  { key: 'general', label: 'General' },
  { key: 'devoluciones', label: 'Devoluciones' },
];

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFAQs,
  title = "FAQ's",
  subtitle = 'Todo lo que necesitas saber sobre Essence Burn',
  showContactCTA = false,
  showViewAllButton = false,
  maxItems,
  className = '',
  filterByCategory,
  showCategoryFilter = true,
  allowedCategories,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(filterByCategory || 'all');

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filtrar categorías disponibles
  const availableCategories = useMemo(() => {
    let categories = ALL_CATEGORIES;

    // Si se especifican categorías permitidas, filtrar
    if (allowedCategories && allowedCategories.length > 0) {
      categories = categories.filter((cat) => allowedCategories.includes(cat.key));
    }

    // Obtener solo las categorías que tienen FAQs
    const categoriesWithFAQs = categories.filter((cat) =>
      faqs.some((faq) => faq.category === cat.key)
    );

    return categoriesWithFAQs;
  }, [faqs, allowedCategories]);

  // Filtrar FAQs según la categoría seleccionada o prop filterByCategory
  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Si hay un filtro de categoría desde props, aplicarlo primero
    if (filterByCategory) {
      filtered = filtered.filter((faq) => faq.category === filterByCategory);
    }
    // Si no, usar la categoría seleccionada por el usuario
    else if (selectedCategory !== 'all') {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    return filtered;
  }, [faqs, filterByCategory, selectedCategory]);

  // Aplicar límite si existe
  const displayedFAQs = maxItems ? filteredFAQs.slice(0, maxItems) : filteredFAQs;

  return (
    <section
      className={`via-essence-cream-50 relative overflow-hidden bg-gradient-to-b from-white to-white px-4 py-8 sm:py-16 lg:py-20 ${className}`}
      aria-labelledby="faq-heading"
    >
      {/* Decorative background elements */}
      <div
        className="bg-essence-rose/5 absolute top-20 left-0 h-96 w-96 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-essence-peach/5 absolute right-0 bottom-20 h-80 w-80 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="bg-essence-peach/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <HelpCircle className="text-essence-peach h-8 w-8" aria-hidden="true" />
          </div>

          <h2
            id="faq-heading"
            className="font-fredoka text-essence-mauve-700 mb-4 text-3xl font-light tracking-wide uppercase sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>

          <p className="font-quicksand text-essence-mauve-500 mx-auto max-w-2xl text-lg font-light sm:text-xl">
            {subtitle}
          </p>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="to-essence-rose-300 h-px w-12 bg-gradient-to-r from-transparent" />
            <div className="bg-essence-peach h-2 w-2 rounded-full" />
            <div className="to-essence-rose-300 h-px w-12 bg-gradient-to-l from-transparent" />
          </div>
        </div>

        {/* Category Filters - Solo mostrar si no hay filterByCategory y showCategoryFilter es true */}
        {!filterByCategory && showCategoryFilter && availableCategories.length > 0 && (
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {/* Botón "Todas" solo si no hay filtro fijo */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`font-poiretone rounded-full px-6 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-essence-peach text-white shadow-md'
                  : 'border-essence-rose-200 text-essence-mauve-600 hover:bg-essence-rose-50 border bg-white'
              }`}
            >
              Todas
            </button>

            {availableCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`font-poiretone rounded-full px-6 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:cursor-pointer ${
                  selectedCategory === category.key
                    ? 'bg-essence-peach text-white shadow-md'
                    : 'border-essence-rose-200 text-essence-mauve-600 hover:bg-essence-rose-50 border bg-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            const categoryInfo = ALL_CATEGORIES.find((cat) => cat.key === faq.category);

            return (
              <div
                key={faq.id}
                className="border-essence-rose-100 overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="hover:bg-essence-cream-50 flex w-full items-start justify-between gap-4 px-6 py-6 text-left transition-colors duration-200 hover:cursor-pointer sm:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      {/* Number badge */}
                      <span
                        className="bg-essence-peach/10 font-quicksand text-essence-peach flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-light"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1 pt-1">
                        <h3 className="font-fredoka text-essence-mauve-700 pr-4 text-lg leading-relaxed font-light sm:text-xl">
                          {faq.question}
                        </h3>

                        {categoryInfo && (
                          <span className="bg-essence-rose-50 font-poiretone text-essence-mauve-600 mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                            {categoryInfo.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <ChevronDown
                    className={`text-essence-peach h-6 w-6 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.5rem] sm:px-8 sm:pl-[5rem]">
                    <p className="font-quicksand text-essence-mauve-600 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* View All Button */}
          {showViewAllButton && (
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="bg-essence-peach font-fredoka hover:bg-essence-peach-600 inline-flex transform items-center gap-2 rounded-full px-8 py-3 text-sm font-light tracking-wide text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver todas las preguntas
              </Link>
            </div>
          )}
        </div>

        {/* Empty state */}
        {displayedFAQs.length === 0 && (
          <div className="py-16 text-center">
            <div className="bg-essence-rose-50 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
              <HelpCircle className="text-essence-rose-300 h-10 w-10" />
            </div>
            <p className="font-fredoka text-essence-mauve-500 font-light">
              No hay preguntas en esta categoría
            </p>
          </div>
        )}

        {/* Contact CTA */}
        {showContactCTA && (
          <div className="mt-16">{/* ... tu código de contacto CTA sin cambios ... */}</div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
