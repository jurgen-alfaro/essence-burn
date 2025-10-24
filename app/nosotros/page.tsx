import React from 'react';
import Image from 'next/image';
import {
  Heart,
  Leaf,
  Sparkles,
  Users,
  Target,
  Eye,
  InfinityIcon,
  HandHeart,
  Sprout,
  Flame,
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: HandHeart,
      title: 'Respeto por la vida',
      description: 'Todos los seres merecen vivir con dignidad',
    },
    {
      icon: Flame,
      title: 'Transformación',
      description: 'Creemos en el poder de reinventarse',
    },
    {
      icon: Sparkles,
      title: 'Autenticidad',
      description: 'Honramos la esencia única de cada persona',
    },
    {
      icon: Sprout,
      title: 'Sostenibilidad',
      description: 'Cuidamos el planeta con cada decisión',
    },
    {
      icon: Users,
      title: 'Conexión espiritual',
      description: 'Promovemos momentos de introspección y paz',
    },
    {
      icon: Heart,
      title: 'Amor propio',
      description: 'Fomentamos el cuidado consciente y amoroso',
    },
  ];

  return (
    <div className="via-essence-cream-50 to-essence-rose-50 min-h-screen bg-gradient-to-b from-white">
      {/* Hero Section with Overlay */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1600"
            alt="Essence Burn - Nuestra Historia"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="font-fredoka mb-6 text-3xl leading-tight font-light tracking-wide text-white sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              La llama que transforma. La esencia que permanece.
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-base font-light text-balance text-white/90 sm:text-lg lg:text-xl">
              Transformamos momentos cotidianos en rituales sagrados de autocuidado
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

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-essence-mauve-700 font-fredoka mb-6 text-center text-3xl font-light tracking-wide sm:text-2xl lg:text-4xl">
            Essence Burn
          </h2>
          <p className="text-essence-mauve-600 font-poiretone mx-auto max-w-2xl text-center text-lg leading-relaxed font-semibold text-balance sm:text-xl">
            ✨ “Tu rutina es tu ritual. Tu esencia merece arder con propósito.” ✨
          </p>
        </div>
      </section>

      {/* Nuestra Esencia - Image Left, Text Right */}
      <section className="pb-20 pt-12 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl lg:order-1 lg:aspect-square">
              <Image
                src="/logo.webp"
                alt="Nuestra Esencia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="bg-essence-rose/10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
                <Sparkles className="text-essence-rose h-7 w-7" />
              </div>

              <h2 className="text-essence-mauve-700 font-fredoka mb-6 text-4xl font-light tracking-wide sm:text-5xl lg:text-6xl">
                Nuestra Esencia
              </h2>

              <div className="text-essence-mauve-600 font-quicksand mx-auto max-w-2xl text-lg leading-relaxed font-light text-balance sm:text-xl">
                <p>
                  Essence Burn nace del fuego interior que transforma. Inspirada en la creatividad
                  de mi abuela, una mujer resiliente y emprendedora, y en mi propia búsqueda de
                  bienestar, esta marca representa más que productos: es un espacio sagrado para
                  reconectar contigo misma.
                </p>

                <p>
                  Desde pequeña, he encontrado en el cuidado personal un acto de amor propio.
                  Encender una vela, aplicar tu skincare, maquillarte, elegir un bolso que
                  complemente tu energía… cada gesto puede convertirse en un ritual de conexión, paz
                  y renovación.
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-8 flex items-center gap-3">
                {/* <div className="bg-essence-peach h-px w-12" /> */}
                <div className="bg-essence-peach h-2 w-2 rounded-full" />
                <div className="bg-essence-peach h-px w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Essence Burn? - Text Left, Image Right */}
      <section className="bg-essence-cream-500 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div>
              <div>
                <div className="bg-essence-mauve-500 justi mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <Heart className="text-essence-cream-600 h-7 w-7" />
                </div>
              </div>

              <h2 className="text-essence-mauve-700 font-fredoka mb-6 text-left text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
                ¿Por qué Essence Burn?
              </h2>

              <div className="font-quicksand text-essence-mauve-600 space-y-4 text-lg leading-relaxed font-light text-balance">
                <p>
                  El fuego transforma. Quema lo viejo, lo que ya no sirve, lo que duele. Y en ese
                  proceso, revela nuestra esencia más pura.
                </p>
                <p>
                  Essence Burn simboliza ese viaje de evolución personal, donde cada llama encendida
                  es una invitación a renacer, a reconectar con tu alma y a honrar tu autenticidad.
                </p>
              </div>

              {/* Stats */}
              <div className="font-poiretone mt-10 flex items-center justify-around gap-6">
                <div className="text-center">
                  <p className="text-essence-peach-500 mb-1 text-3xl font-light">100%</p>
                  <p className="text-essence-mauve-500 font-light">Natural</p>
                </div>
                <div className="text-center">
                  <p className="text-essence-peach-500 mb-1 text-3xl font-light">0</p>
                  <p className="text-essence-mauve-500 font-light">Toxinas</p>
                </div>
                <div className="items-center- flex flex-col justify-center">
                  <p className="text-essence-peach-500 mb-1 flex items-center justify-center text-3xl font-light">
                    <InfinityIcon className="h-8 w-8" />
                  </p>
                  <p className="text-essence-mauve-500 font-light">Amor</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="mt-10 flex items-center justify-end gap-3">
                {/* <div className="bg-essence-peach h-px w-12" /> */}
                <div className="bg-essence-peach-500 h-px w-20" />
                <div className="bg-essence-peach-500 h-2 w-2 rounded-full" />
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800"
                alt="Por qué Essence Burn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Misión y Visión */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Misión */}
            <div className="from-essence-rose-50 to-essence-cream-50 border-essence-rose-100 rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
              <div className="bg-essence-peach/20 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
                <Target className="text-essence-peach h-7 w-7" />
              </div>

              <h3 className="text-essence-mauve-700 font-fredoka mb-6 text-2xl font-light tracking-wide sm:text-3xl">
                Nuestra Misión
              </h3>

              <p className="text-essence-mauve-600 font-quicksand text-lg leading-relaxed font-light text-balance">
                Crear productos conscientes que acompañen los rituales personales de bienestar,
                belleza y conexión espiritual, respetando profundamente la vida animal y el medio
                ambiente.
              </p>

              {/* Decorative element */}
              <div className="mt-8 flex w-full items-center justify-center gap-2">
                <div className="bg-essence-peach h-px w-20" />
                <div className="bg-essence-peach h-1.5 w-1.5 rounded-full" />
                <div className="bg-essence-peach h-px w-20" />
              </div>
            </div>

            {/* Visión */}
            <div className="from-essence-peach-200 to-essence-cream-500 border-essence-peach-100 rounded-3xl border bg-gradient-to-br p-8 sm:p-12">
              <div className="bg-essence-mauve-500 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
                <Eye className="text-essence-cream-500 h-7 w-7" />
              </div>

              <h3 className="text-essence-mauve-700 font-fredoka mb-6 text-2xl font-light tracking-wide sm:text-3xl">
                Nuestra Visión
              </h3>

              <p className="text-essence-mauve-600 font-quicksand text-lg leading-relaxed font-light">
                Ser una marca que inspire a las personas a vivir con intención, cuidarse con amor y
                transformar su rutina diaria en un espacio sagrado, mientras construimos una
                comunidad comprometida con el respeto por todos los seres vivos y el planeta.
              </p>

              {/* Decorative element */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="bg-essence-mauve h-px w-20" />
                <div className="bg-essence-mauve h-1.5 w-1.5 rounded-full" />
                <div className="bg-essence-mauve h-px w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section with overlay */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1600"
            alt="Essence Burn - Nuestra Historia"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="font-fredoka mb-6 text-3xl leading-tight font-light tracking-wide text-white sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              Filosofía
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-base font-light text-balance text-white/90 sm:text-lg lg:text-xl">
              Creemos que el bienestar integral comienza en los pequeños actos. Que el cuidado
              personal es un ritual, no una rutina. Que la belleza está en la autenticidad. Que el
              respeto por la vida animal y el medio ambiente es parte de nuestro compromiso
              espiritual. Y que cada producto debe reflejar esa armonía entre lo que somos, lo que
              sentimos y lo que elegimos.
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

      {/* Nuestros Valores */}
      <section className="bg-essence-cream-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-essence-mauve-700 font-fredoka mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
              Nuestros Valores
            </h2>
            <p className="text-essence-mauve-500 font-quicksand mx-auto max-w-2xl text-lg font-light">
              Los principios que guían cada decisión, cada producto y cada interacción
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group justify-s flex flex-col items-center rounded-xl p-8 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-14 w-14 items-center justify-center rounded-full transition-colors">
                    <Icon className="text-essence-peach h-7 w-7" />
                  </div>
                  <h3 className="text-essence-mauve-700 font-poiretone text-xl font-semibold tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-essence-mauve-600 font-quicksand text-center text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative quote */}
      <section className="bg-essence-cream-500 py-10 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
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
              No vendemos productos. <br />
              Creamos rituales
            </p>
          </blockquote>
          {/* Bottom dots decoration */}
          <div className="mt-12 flex items-center justify-center sm:mt-16" aria-hidden="true">
            <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-r from-transparent to-transparent sm:max-w-md" />
            <div className="mx-4 flex gap-2 sm:mx-6">
              <div className="bg-essence-cream-700 h-1.5 w-1.5 rounded-full" />
              <div className="bg-essence-mauve h-1.5 w-1.5 rounded-full" />
              <div className="bg-essence-cream via-essence-rose h-1.5 w-1.5 rounded-full" />
            </div>
            <div className="via-essence-rose/40 h-px max-w-xs flex-grow bg-gradient-to-l from-transparent to-transparent sm:max-w-md" />
          </div>
        </div>
      </section>

      {/* Manifiesto - Pergamino Style */}
      <section className="bg-essence-cream relative overflow-hidden px-4 py-20 lg:py-32">
        {/* Background texture */}
        {/* <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b68187' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        /> */}

        <div className="relative mx-auto max-w-4xl">
          {/* Pergamino Container */}
          <div
            className="relative rounded-3xl bg-gradient-to-br from-[#f5e6d3] via-[#f9f3e8] to-[#f5e6d3] p-8 shadow-2xl sm:p-12 lg:p-16"
            style={{
              boxShadow:
                '0 20px 60px rgba(182, 129, 135, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}
          >
            {/* Decorative corners */}
            <div
              className="border-essence-mauve/20 absolute top-4 left-4 h-12 w-12 rounded-tl-lg border-t-2 border-l-2"
              aria-hidden="true"
            />
            <div
              className="border-essence-mauve/20 absolute top-4 right-4 h-12 w-12 rounded-tr-lg border-t-2 border-r-2"
              aria-hidden="true"
            />
            <div
              className="border-essence-mauve/20 absolute bottom-4 left-4 h-12 w-12 rounded-bl-lg border-b-2 border-l-2"
              aria-hidden="true"
            />
            <div
              className="border-essence-mauve/20 absolute right-4 bottom-4 h-12 w-12 rounded-br-lg border-r-2 border-b-2"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="mb-10 text-center">
              <h2 className="text-essence-mauve-800 font-fredoka mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
                Nuestro Manifiesto
              </h2>
              <div className="flex items-center justify-center gap-2" aria-hidden="true">
                <div className="bg-essence-mauve/30 h-px w-12" />
                <div className="bg-essence-mauve/30 h-2 w-2 rounded-full" />
                <div className="bg-essence-mauve/30 h-px w-12" />
              </div>
            </div>

            <div className="text-essence-mauve-700 font-poiretone space-y-6">
              <p className="text-base leading-relaxed font-light italic sm:text-xl">
                Creemos en el poder del fuego como símbolo de transformación.
              </p>

              <p className="text-base leading-loose font-light sm:text-lg">
                Creemos que cada rutina puede convertirse en un ritual sagrado.
              </p>

              <p className="text-base leading-loose font-light sm:text-lg">
                Creemos que el respeto por la vida animal y el planeta es parte de nuestro
                propósito.
              </p>

              <p className="text-base leading-loose font-light sm:text-lg">
                Creemos que la belleza comienza en el alma y se refleja en cada gesto de amor
                propio.
              </p>

              <p className="text-base leading-loose font-light sm:text-lg">
                Creemos que emprender es un acto de valentía, y que cada vela encendida es una luz
                que guía el camino hacia nuestra mejor versión.
              </p>

              <p className="mt-8 text-lg leading-relaxed font-light italic sm:text-xl">
                Creemos en ti, en tu esencia, en tu fuego interior.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 text-center">
              <div className="inline-block">
                <p
                  className="text-essence-mauve-700 mb-2 text-2xl font-light sm:text-3xl"
                  style={{ fontFamily: 'Brush Script MT, cursive' }}
                >
                  Somos Essence Burn. Somos ritual. Somos alma. Somos cambio
                </p>
                <div className="bg-essence-mauve/30 w mx-auto h-px w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
