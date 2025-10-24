import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Phone, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'productos' | 'envios' | 'pagos' | 'general';
}

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  showContactCTA?: boolean;
  className?: string;
  maxItems?: number;
  showViewAllButton?: boolean;
}

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

const categoryLabels = {
  productos: 'Productos',
  envios: 'Envíos',
  pagos: 'Pagos',
  general: 'General',
};

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFAQs,
  title = "FAQ's",
  subtitle = 'Todo lo que necesitas saber sobre Essence Burn',
  showContactCTA = false,
  showViewAllButton = false,
  maxItems,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    'all',
    ...Array.from(new Set(faqs.map((faq) => faq.category).filter(Boolean))),
  ];

  const filteredFAQs =
    selectedCategory === 'all' ? faqs : faqs.filter((faq) => faq.category === selectedCategory);

  const limitedFAQs = maxItems ? filteredFAQs.slice(0, maxItems) : filteredFAQs;

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

        {/* Category Filters */}
        {categories.length > 1 && (
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as string)}
                className={`font-poiretone rounded-full px-6 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-essence-peach text-white shadow-md'
                    : 'text-essence-mauve-600 hover:bg-essence-rose-50 border-essence-rose-200 border bg-white'
                }`}
              >
                {category === 'all'
                  ? 'Todas'
                  : categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {limitedFAQs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);

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
                        className="bg-essence-peach/10 text-essence-peach font-quicksand flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-light"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1 pt-1">
                        <h3 className="text-essence-mauve-700 font-fredoka pr-4 text-lg leading-relaxed font-light sm:text-xl">
                          {faq.question}
                        </h3>

                        {faq.category && (
                          <span className="bg-essence-rose-50 text-essence-mauve-600 font-poiretone mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                            {categoryLabels[faq.category]}
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
                    <p className="text-essence-mauve-600 font-quicksand leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {showViewAllButton && (
            <div className="mt-8 text-center">
              <a
                href="/faq"
                className="bg-essence-peach hover:bg-essence-peach-600 font-fredoka inline-flex transform items-center gap-2 rounded-full px-8 py-3 text-sm font-light tracking-wide text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver todas las preguntas
              </a>
            </div>
          )}
        </div>

        {/* Empty state */}
        {filteredFAQs.length === 0 && (
          <div className="py-16 text-center">
            <div className="bg-essence-rose-50 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
              <HelpCircle className="text-essence-rose-300 h-10 w-10" />
            </div>
            <p className="text-essence-mauve-500 font-fredoka font-light">
              No hay preguntas en esta categoría
            </p>
          </div>
        )}

        {/* Contact CTA */}
        {showContactCTA && (
          <div className="mt-16">
            <div className="from-essence-peach-200 to-essence-cream-500 border-essence-rose-200/30 rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
              <div className="mb-8 text-center">
                <h3 className="text-essence-mauve-700 font-fredoka mb-3 text-2xl font-semibold tracking-wide sm:text-4xl">
                  ¿No encontraste lo que buscabas?
                </h3>
                <p className="text-essence-mauve-500 font-quicksand font-light sm:text-lg">
                  Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
                </p>
              </div>

              {/* Contact options */}
              <div className="font-quicksand grid grid-cols-1 gap-4 sm:grid-cols-3">
                <a
                  href="mailto:hola@essenceburn.com"
                  className="group border-essence-rose-100 hover:border-essence-peach flex flex-col items-center gap-3 rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <Mail className="text-essence-peach h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-essence-mauve-700 mb-1 text-sm font-light">Email</p>
                    <p className="text-essence-mauve-500 text-xs">hola@essenceburn.com</p>
                  </div>
                </a>

                <a
                  href="tel:+50612345678"
                  className="group border-essence-rose-100 hover:border-essence-peach flex flex-col items-center gap-3 rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <Phone className="text-essence-peach h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-essence-mauve-700 mb-1 text-sm font-light">Teléfono</p>
                    <p className="text-essence-mauve-500 text-xs">+506 8795-8091</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/50612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-essence-rose-100 hover:border-essence-peach flex flex-col items-center gap-3 rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <MessageCircle className="text-essence-peach h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-essence-mauve-700 mb-1 text-sm font-light">WhatsApp</p>
                    <p className="text-essence-mauve-500 text-xs">Chat en vivo</p>
                  </div>
                </a>
              </div>

              {/* Additional CTA */}
              <div className="mt-8 text-center">
                <a
                  href="/contacto"
                  className="bg-essence-peach hover:bg-essence-peach-600 font-fredoka inline-flex transform items-center gap-2 rounded-full px-8 py-3 text-sm font-light tracking-wide text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Ir a Contacto</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
