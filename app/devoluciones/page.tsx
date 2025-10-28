import React from 'react';
import Image from 'next/image';
import {
  Package,
  ShieldCheck,
  RefreshCw,
  Heart,
  Clock,
  CheckCircle,
  AlertCircle,
  Mail,
  MessageCircle,
  PackageOpen,
} from 'lucide-react';
import FAQSection from '../components/home/FAQSection';
import Link from 'next/link';

//

const ReturnsPage: React.FC = () => {
  const returnSteps = [
    {
      number: 1,
      title: 'Contáctanos',
      description: 'Escríbenos con tu número de pedido y motivo de la devolución',
      icon: Mail,
    },
    {
      number: 2,
      title: 'Recibe instrucciones',
      description: 'Te respondemos en máximo 48 horas con los pasos a seguir',
      icon: Clock,
    },
    {
      number: 3,
      title: 'Envía el producto',
      description: 'Devuelve el artículo en su empaque original y sin uso',
      icon: Package,
    },
    {
      number: 4,
      title: 'Recibe tu reembolso',
      description: 'Procesamos el reembolso o cambio una vez verificado',
      icon: CheckCircle,
    },
  ];

  const guaranteePoints = [
    {
      icon: RefreshCw,
      title: 'Reemplazo sin costo',
      description: 'Si tu producto llega defectuoso, lo reemplazamos gratis',
    },
    {
      icon: ShieldCheck,
      title: 'Reembolso completo',
      description: 'Si no podemos reemplazarlo, te devolvemos tu dinero',
    },
    {
      icon: Heart,
      title: 'Atención personalizada',
      description: 'Estamos aquí para resolver cualquier inconveniente',
    },
  ];

  const conditions = [
    'Producto sin uso y en perfectas condiciones',
    'Empaque original intacto con todos sus accesorios',
    'Etiquetas y sellos de seguridad sin romper',
    'Comprobante de compra (email de confirmación)',
    'Dentro del plazo de 7 días hábiles',
  ];

  const exceptions = [
    'Productos de skincare abiertos o usados (por higiene)',
    'Velas encendidas o con la mecha quemada',
    'Productos personalizados o hechos a pedido',
    'Artículos en oferta o liquidación (salvo defecto)',
    'Productos sin empaque original',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600"
            alt="Devoluciones y Garantía - Essence Burn"
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
              &ldquo;Si algo no vibra contigo, estamos acá para ayudarte&rdquo;
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-justify text-base font-light text-white/90 sm:text-lg lg:text-2xl">
              En <span className="italic">Essence Burn</span>, cada producto es creado con amor,
              intención y respeto por tí y por el planeta. Sabemos que a veces las cosas no salen
              como esperamos, por eso queremos que te sientas acompañada también en esos momentos.
              Nuestra Política de Devoluciones y Garantía está pensada para ofrecerte tranquilidad,
              claridad y cuidado.
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-essence-cream mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <PackageOpen className="text-essence-rose h-8 w-8" />
          </div>
          <h3 className="text-essence-mauve-600 font-fredoka text-xl leading-relaxed font-light sm:text-4xl lg:text-5xl">
            Devoluciones & Garantía
          </h3>
          <p className="text-essence-mauve-500 font-quicksand mt-6 text-2xl leading-relaxed font-light text-balance">
            En <span className="italic">Essence Burn</span>, creemos que la confianza se construye
            con cada detalle, incluso después de tu compra. Descubre cómo gestionamos devoluciones y
            garantías con transparencia y cuidado.
          </p>
        </div>
      </section>
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-2" aria-hidden="true">
        <div className="to-essence-mauve/60 h-px w-32 bg-gradient-to-r from-transparent" />
        <div className="bg-essence-mauve h-2 w-2 rounded-full" />
        <div className="to-essence-mauve/60 h-px w-32 bg-gradient-to-l from-transparent" />
      </div>

      {/* Return Process */}
      <section className="bg-essence-cream-50 px-4 py-12 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="bg-essence-peach/10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
              <RefreshCw className="text-essence-peach h-7 w-7" />
            </div>
            <h2 className="text-essence-mauve-700 font-fredoka mb-5 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
              ¿Querés devolver tu ritual?
            </h2>
            <p className="text-essence-mauve-500 font-quicksand mx-auto max-w-xl text-2xl leading-relaxed font-light text-balance lg:max-w-5xl">
              Si tu pedido no fue lo que esperabas, puedes solicitar una devolución dentro de los{' '}
              <strong className="text-essence-peach">7 días hábiles</strong> posteriores a
              recibirlo, siempre que el producto esté sin uso, en su empaque original y en perfectas
              condiciones.
            </p>
          </div>

          {/* Steps */}
          <div className="mb-16 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {returnSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="border-essence-rose-100 group hover:bg-essence-peach relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  {/* Step number */}
                  <div className="from-essence-peach to-essence-rose font-poiretone absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-xl font-light text-white shadow-lg">
                    {step.number}
                  </div>

                  <div className="bg-essence-peach/10 group-hover:bg-essence-cream mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                    <Icon className="text-essence-peach h-8 w-8" />
                  </div>

                  <h3 className="text-essence-mauve-700 font-fredoka mb-3 text-center text-xl font-light tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-essence-mauve-600 font-quicksand text-center text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Conditions */}
          <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-2">
            {/* Required Conditions */}
            <div className="border-essence-rose-100 rounded-3xl border bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <CheckCircle className="text-essence-success h-6 w-6" />
                <h3 className="text-essence-mauve-700 font-fredoka text-2xl font-light tracking-wide">
                  Condiciones requeridas
                </h3>
              </div>

              <ul className="font-quicksand space-y-3">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-essence-success/20 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <CheckCircle className="text-essence-success h-3 w-3" />
                    </div>
                    <span className="text-essence-mauve-600 text-base font-light">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exceptions */}
            <div className="bg-essence-rose-50 border-essence-rose-200 rounded-3xl border p-8">
              <div className="mb-6 flex items-center gap-3">
                <AlertCircle className="text-essence-error h-6 w-6" />
                <h3 className="text-essence-mauve-700 font-fredoka text-2xl font-light tracking-wide">
                  No se aceptan devoluciones de
                </h3>
              </div>

              <ul className="font-quicksand space-y-3">
                {exceptions.map((exception, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-essence-error/20 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <AlertCircle className="text-essence-error h-3 w-3" />
                    </div>
                    <span className="text-essence-mauve-600 text-base font-light">{exception}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mx-auto mt-16 flex w-full justify-center">
          <Link
            href="/contacto#form"
            className="bg-essence-peach hover:bg-essence-peach-600 font-fredoka flex transform items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-xl"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>Escríbenos aquí</span>
          </Link>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="from-essence-peach-200 to-essence-cream-500 bg-gradient-to-b px-4 py-12 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="bg-essence-mauve/10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
              <ShieldCheck className="text-essence-mauve h-7 w-7" />
            </div>
            <h2 className="text-essence-mauve-700 font-fredoka mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
              Garantía de nuestros productos
            </h2>
            <p className="text-essence-mauve-500 font-quicksand mx-auto max-w-3xl text-2xl leading-relaxed font-light text-balance">
              Todos nuestros productos están respaldados por una garantía de calidad. Si recibes un
              artículo dañado, defectuoso o incorrecto, por favor comunicate con nosotros dentro de
              los <strong className="text-essence-peach-500">3 días hábiles</strong> posteriores a
              la entrega.
            </p>
          </div>

          {/* Guarantee Cards */}
          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {guaranteePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="from-essence-peach-50 to-essence-rose-50 border-essence-peach-100 rounded-3xl border bg-gradient-to-br p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="text-essence-peach h-7 w-7" />
                  </div>
                  <h3 className="text-essence-mauve-700 font-fredoka mb-3 text-xl font-semibold tracking-wide">
                    {point.title}
                  </h3>
                  <p className="text-essence-mauve-600 font-quicksand leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Commitment Box */}
          {/* <div className="from-essence-mauve-50 to-essence-cream-50 border-essence-mauve-100 rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
            <h3 className="text-essence-mauve-700 font-fredoka mb-6 text-center text-2xl font-light tracking-wide sm:text-3xl">
              Compromiso Essence Burn
            </h3>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 text-4xl">🔄</div>
                <p className="text-essence-mauve-700 font-poiretone mb-1 font-light">
                  Reemplazo sin costo
                </p>
                <p className="text-essence-mauve-500 text-sm font-light">
                  Para productos defectuosos
                </p>
              </div>
              <div>
                <div className="mb-2 text-4xl">💰</div>
                <p className="text-essence-mauve-700 mb-1 font-light">Reembolso completo</p>
                <p className="text-essence-mauve-500 text-sm font-light">
                  Si no hay reemplazo disponible
                </p>
              </div>
              <div>
                <div className="mb-2 text-4xl">💜</div>
                <p className="text-essence-mauve-700 mb-1 font-light">Atención personalizada</p>
                <p className="text-essence-mauve-500 text-sm font-light">
                  Para resolver inconvenientes
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* FAQ Quick */}
      <FAQSection
        filterByCategory="envios"
        maxItems={3}
        showCategoryFilter={true}
        showViewAllButton={true}
      />

      {/* <section className="bg-essence-cream-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-essence-mauve-700 mb-12 text-center text-3xl font-light tracking-wide sm:text-4xl">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Cuánto tarda el proceso de devolución?',
                a: 'Una vez recibido el producto, procesamos el reembolso en 5-7 días hábiles.',
              },
              {
                q: '¿Quién paga el envío de la devolución?',
                a: 'Si el producto está defectuoso, nosotros cubrimos el envío. En otros casos, el costo corre por cuenta del cliente.',
              },
              {
                q: '¿Puedo cambiar por otro producto?',
                a: 'Sí, podés cambiar por otro producto del mismo valor o superior pagando la diferencia.',
              },
              {
                q: '¿Cómo recibiré mi reembolso?',
                a: 'El reembolso se procesa al mismo método de pago original (tarjeta, transferencia, etc.).',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border-essence-rose-100 rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="text-essence-mauve-700 mb-2 text-lg font-light">{faq.q}</h4>
                <p className="text-essence-mauve-600 font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Final */}
      <section className="bg-essence-rose-400/90 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>

          <h2 className="font-fredoka mb-4 text-3xl font-light tracking-wide text-white sm:text-4xl">
            ¿Tienes dudas?
          </h2>
          <p className="font-quicksand fontsemi mx-auto mb-8 max-w-2xl text-2xl leading-relaxed text-balance text-white/80">
            Estamos aquí para ayudarte con cualquier consulta sobre devoluciones, cambios o garantía
          </p>

          {/* CTA */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto#form"
              className="bg-essence-peach hover:bg-essence-peach-600 font-fredoka flex transform items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-xl"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Escríbenos aquí</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnsPage;
