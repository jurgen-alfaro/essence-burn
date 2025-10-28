import React from 'react';
import Image from 'next/image';
import {
  Package,
  Leaf,
  ShieldCheck,
  Heart,
  Clock,
  MapPin,
  Truck,
  DollarSign,
  RefreshCw,
  Check,
  Send,
  Earth,
} from 'lucide-react';
import Link from 'next/link';

const ShippingPage: React.FC = () => {
  const shippingProcess = [
    {
      icon: Heart,
      title: 'Preparación Consciente',
      description: 'Cada pedido se prepara con amor y atención al detalle',
    },
    {
      icon: Leaf,
      title: 'Empaque Ecológico',
      description: 'Materiales sostenibles, reciclables y reutilizables',
    },
    {
      icon: ShieldCheck,
      title: 'Envío Seguro',
      description: 'Protección completa para que tu ritual llegue perfecto',
    },
    {
      icon: Package,
      title: 'Llegada con Intención',
      description: 'Tu pedido llega envuelto en propósito y cuidado',
    },
  ];

  const deliveryTimes = [
    {
      zone: 'San José y GAM',
      time: '1-2 días hábiles',
      icon: '🏙️',
    },
    {
      zone: 'Resto de Costa Rica',
      time: '3-5 días hábiles',
      icon: '🌴',
    },
    {
      zone: 'Zonas rurales',
      time: '5-7 días hábiles',
      icon: '🏔️',
    },
  ];

  const shippingCosts = [
    {
      condition: 'Compras mayores a ₡30,000',
      cost: 'GRATIS',
      highlight: true,
    },
    {
      condition: 'San José y GAM',
      cost: '₡2,500',
    },
    {
      condition: 'Resto del país',
      cost: '₡3,500',
    },
    {
      condition: 'Zonas alejadas',
      cost: '₡4,500',
    },
  ];

  const carriers = [
    {
      name: 'Correos de Costa Rica',
      description: 'Servicio postal nacional confiable',
      logo: '📮',
    },
    {
      name: 'Mensajería Privada',
      description: 'Entrega rápida y tracking en tiempo real',
      logo: '🚚',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600"
            alt="Envíos Essence Burn"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="font-fredoka mb-6 text-3xl leading-tight font-light tracking-wide text-white sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              &ldquo;Cada ritual llega con intención, cuidado y respeto&rdquo;
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-justify text-base font-light text-balance text-white/90 sm:text-lg lg:text-2xl">
              Desde el momento en que preparamos tu pedido, lo hacemos con amor, atención al detalle
              y compromiso con el planeta. Usamos empaques sostenibles y procesos conscientes para
              que tu experiencia sea tan especial como el ritual que estás por recibir. Porque tu
              bienestar merece llegar envuelto en propósito.
            </p>

            {/* Decorative divider */}
            <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/60" />
              <div className="h-2 w-2 rounded-full bg-white/80" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="to-essence-cream-50 bg-gradient-to-b from-white px-4 py-16 sm:py-20">
        <div className="mx-auto text-center">
          <div className="bg-essence-cream mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <Truck className="text-essence-rose h-8 w-8" />
          </div>
          <h3 className="text-essence-mauve-600 font-fredoka text-xl leading-relaxed font-light sm:text-4xl lg:text-5xl">
            Envíos y Entregas
          </h3>
          <p className="text-essence-mauve-500 font-quicksand mt-6 text-2xl leading-relaxed font-light text-balance">
            En <span className="italic">Essence Burn</span>, creemos que el viaje de cada producto
            comienza mucho antes de llegar a tus manos.
          </p>
        </div>
      </section>
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-2" aria-hidden="true">
        <div className="to-essence-mauve/60 h-px w-32 bg-gradient-to-r from-transparent" />
        <div className="bg-essence-mauve h-2 w-2 rounded-full" />
        <div className="to-essence-mauve/60 h-px w-32 bg-gradient-to-l from-transparent" />
      </div>

      {/* Shipping Process */}
      <section className="bg-essence-cream-50 px-4 py-12 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-essence-mauve-600 font-fredoka mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
              ¿Cómo enviamos tu ritual?
            </h2>
            <p className="text-essence-mauve-500 mx-auto max-w-2xl text-2xl font-light">
              Cada paso del proceso está diseñado con conciencia y amor
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {shippingProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="border-essence-rose-100 group hover:bg-essence-peach relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  {/* Step number */}
                  <div className="bg-essence-peach font-poiretone absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full text-lg font-light text-white shadow-lg">
                    {index + 1}
                  </div>

                  <div className="bg-essence-peach/10 group-hover:bg-essence-cream mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                    <Icon className="text-essence-peach h-8 w-8" />
                  </div>

                  <h3 className="text-essence-mauve-700 font-fredoka mb-3 text-center text-xl font-light tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-essence-mauve-600 font-quicksand text-center leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sustainability Note */}
          <div className="from-essence-peach-200 to-essence-cream-500 border-essence-rose-200/30 mt-16 rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="bg-essence-peach/20 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full">
                <Earth className="text-essence-peach h-10 w-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-essence-mauve-700 font-fredoka mb-3 text-2xl font-light tracking-wide">
                  Compromiso con el Planeta
                </h3>
                <p className="text-essence-mauve-600 font-quicksand text-xl leading-relaxed font-light">
                  Todos nuestros empaques son biodegradables, reciclables o reutilizables. Usamos
                  papel kraft sin blanquear, cintas de algodón y relleno de papel reciclado. Porque
                  cuidarte y cuidar el planeta van de la mano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & Delivery Times */}
      <section className="bg-white px-4 py-12 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Coverage Map */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="bg-essence-peach/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <MapPin className="text-essence-peach h-6 w-6" />
                </div>
                <h2 className="text-essence-mauve-700 font-fredoka text-3xl font-light tracking-wide sm:text-4xl">
                  Zonas de Entrega
                </h2>
              </div>

              <div className="border-essence-rose-100 bg-essence-cream-100 rounded-3xl border p-8 shadow-xl sm:p-8 lg:p-10">
                <p className="text-essence-mauve-600 font-quicksand mb-6 text-lg leading-relaxed font-light">
                  Actualmente realizamos envíos a{' '}
                  <strong className="text-essence-peach">todo Costa Rica</strong>. Llegamos desde el
                  centro de San José hasta las zonas más remotas del país.
                </p>

                {/* Carriers */}
                <div className="mb-6 space-y-4">
                  <p className="text-essence-mauve-500 font-poiretone mb-3 text-base font-semibold">
                    Trabajamos con:
                  </p>
                  {carriers.map((carrier, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-xl bg-white p-4">
                      <span className="text-3xl">{carrier.logo}</span>
                      <div>
                        <p className="text-essence-mauve-700 font-fredoka mb-1 font-light">
                          {carrier.name}
                        </p>
                        <p className="text-essence-mauve-500 font-quicksand text-sm font-light">
                          {carrier.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-essence-rose-200 border-t pt-6">
                  <p className="text-essence-mauve-500 font-quicksand text-sm font-light italic">
                    ¿Tu ubicación no aparece?{' '}
                    <Link href="/contacto#form" className="underline">
                      Escríbenos
                    </Link>{' '}
                    para ver cómo podemos ayudarte.
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Times */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="bg-essence-mauve/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <Clock className="text-essence-mauve h-6 w-6" />
                </div>
                <h2 className="text-essence-mauve-700 font-fredoka text-3xl font-light tracking-wide sm:text-4xl">
                  Tiempos de Entrega
                </h2>
              </div>

              <div className="mb-8 space-y-4">
                {deliveryTimes.map((time, index) => (
                  <div
                    key={index}
                    className="border-essence-rose-100 bg-essence-cream-100 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{time.icon}</span>
                        <div>
                          <p className="text-essence-mauve-700 font-fredoka text-lg font-light">
                            {time.zone}
                          </p>
                          <p className="text-essence-mauve-500 font-quicksand text-sm font-light">
                            {time.time}
                          </p>
                        </div>
                      </div>
                      <Truck className="text-essence-peach h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="from-essence-peach-50 to-essence-rose-50 border-essence-peach-100 rounded-2xl border bg-gradient-to-br p-6">
                <p className="text-essence-mauve-700 font-quicksand text-center text-lg font-semibold italic">
                  ¡Cada ritual llega en el momento justo!
                </p>
              </div>

              {/* Important Notes */}
              <div className="font-quicksand mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="text-essence-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-essence-mauve-600 text-sm font-light">
                    Los pedidos se procesan en 24 horas hábiles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-essence-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-essence-mauve-600 text-sm font-light">
                    Recibirás tracking por email al despachar
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-essence-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-essence-mauve-600 text-sm font-light">
                    Días hábiles: Lunes a Viernes (no incluye feriados)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="from-essence-peach-200 to-essence-cream-500 bg-gradient-to-b px-4 py-12 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="bg-essence-peach/10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
              <DollarSign className="text-essence-peach h-7 w-7" />
            </div>
            <h2 className="text-essence-mauve-700 font-fredoka mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
              Costos de Envío
            </h2>
            <p className="text-essence-mauve-500 font-quicksand text-2xl font-light">
              ¡Tarifas transparentes y justas para todo el país!
            </p>
          </div>

          <div className="space-y-4">
            {shippingCosts.map((cost, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-300 ${
                  cost.highlight
                    ? 'from-essence-peach to-essence-rose border-essence-peach border-2 bg-gradient-to-r shadow-lg'
                    : 'border-essence-rose-100 border bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="font-poiretone flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {cost.highlight && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                        <Heart className="text-essence-peach h-5 w-5" />
                      </div>
                    )}
                    <p
                      className={`text-lg font-light ${
                        cost.highlight ? 'text-white' : 'text-essence-mauve-700'
                      }`}
                    >
                      {cost.condition}
                    </p>
                  </div>
                  <p
                    className={`text-2xl font-light ${
                      cost.highlight ? 'text-white' : 'text-essence-peach'
                    }`}
                  >
                    {cost.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-essence-mauve-500 font-quicksand text-sm font-light">
              * El costo exacto se calcula automáticamente en el carrito según tu ubicación
            </p>
          </div>
        </div>
      </section>

      {/* Returns & Exchanges */}
      <section className="bg-white px-4 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="bg-essence-mauve/10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
              <RefreshCw className="text-essence-mauve h-7 w-7" />
            </div>
            <h2 className="text-essence-mauve-700 font-fredoka mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
              Cambios & Devoluciones
            </h2>
            <p className="text-essence-mauve-500 font-quicksand text-2xl font-light">
              ¡Si algo no vibra contigo, estamos acá para ayudarte!
            </p>
          </div>
          <div className="from-essence-peach-200 to-essence-cream-500 border-essence-rose-200/30 mx-auto mt-16 max-w-xl rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
            <p className="text-essence-mauve-500 font-quicksand text-center text-lg">
              Para conocer todos los detalles sobre nuestra Política de Devolución y Garantía,
              visita nuestra{' '}
              <Link
                href="/devoluciones"
                className="text-essence-mauve-700 hover:text-essence-mauve-900 underline transition-colors"
              >
                página de Devoluciones
              </Link>
              .
            </p>
          </div>

          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            <div className="from-essence-rose-50 to-essence-cream-50 border-essence-rose-100 rounded-3xl border bg-gradient-to-br p-8">
              <h3 className="text-essence-mauve-700 font-fredoka mb-4 text-xl font-light tracking-wide">
                Política de Devolución
              </h3>
              <ul className="font-quicksand space-y-3">
                {[
                  'Tienes 15 días desde la recepción',
                  'El producto debe estar sin usar',
                  'Empaque original intacto',
                  'Incluir comprobante de compra',
                  'Reembolso o crédito en tienda',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-essence-peach mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-essence-mauve-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

         
            <div className="from-essence-peach-50 to-essence-rose-50 border-essence-peach-100 rounded-3xl border bg-gradient-to-br p-8">
              <h3 className="text-essence-mauve-700 font-fredoka mb-4 text-xl font-light tracking-wide">
                Cambios y Garantía
              </h3>
              <ul className="font-quicksand space-y-3">
                {[
                  'Cambios sin costo adicional',
                  'Productos defectuosos: reemplazo inmediato',
                  'Error en pedido: corrección gratis',
                  'Garantía de satisfacción 100%',
                  'Atención personalizada siempre',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-essence-mauve mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-essence-mauve-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div> 
          <div className="bg-essence-cream-50 border-essence-rose-100 mt-8 rounded-2xl border p-6">
            <p className="text-essence-mauve-600 font-quicksand text-center leading-relaxed font-light">
              <strong className="text-essence-mauve-700 font-bold">Nota importante:</strong> Por
              motivos de higiene, no aceptamos devoluciones de productos de skin care que hayan sido
              abiertos o usados.
            </p>
          </div>
          */}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-essence-rose-400/90 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <Truck className="h-8 w-8 text-white" />
          </div>

          <h2 className="font-fredoka mb-4 text-3xl font-light tracking-wide text-white sm:text-4xl">
            ¿Tenés dudas sobre tu envío?
          </h2>
          <p className="font-quicksand mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Nuestro equipo está listo para ayudarte con cualquier consulta sobre entregas, tiempos o
            seguimiento de tu pedido.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto#form"
              className="text-essence-mauve-700 hover:bg-essence-cream font-fredoka inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-light tracking-wide uppercase shadow-xl transition-all duration-300"
            >
              <Send className="h-5 w-5" />
              <span>Escríbenos aquí</span>
            </Link>
          </div>

          {/* <p className="mt-8 text-sm font-semibold tracking-wide text-white/60 font-poiretone">
            Tiempo de respuesta: 2-4 horas en horario laboral
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
