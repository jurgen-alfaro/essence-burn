'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Search, Tag, Mail } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

type BlogCategory =
  | 'rituales'
  | 'cuidado-personal'
  | 'espiritualidad'
  | 'belleza'
  | 'gratitud'
  | 'comunidad';

interface CategoryInfo {
  key: BlogCategory;
  label: string;
  color: string;
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryInfo[] = [
    { key: 'rituales', label: 'Rituales', color: 'bg-essence-peach' },
    { key: 'cuidado-personal', label: 'Cuidado Personal', color: 'bg-essence-rose' },
    { key: 'espiritualidad', label: 'Espiritualidad', color: 'bg-essence-mauve' },
    { key: 'belleza', label: 'Belleza Consciente', color: 'bg-essence-cream-400' },
    { key: 'gratitud', label: 'Gratitud', color: 'bg-essence-sand-400' },
    { key: 'comunidad', label: 'Comunidad', color: 'bg-essence-latte' },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'El Poder del Ritual Nocturno: Cómo Crear Tu Espacio de Calma',
      excerpt:
        'Descubre cómo transformar tus noches en momentos sagrados de conexión. Te compartimos pasos simples para crear un ritual que honre tu descanso.',
      category: 'rituales',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
      date: '2025-01-15',
      readTime: '5 min',
      slug: 'ritual-nocturno-calma',
      featured: true,
    },
    {
      id: '2',
      title: '5 Aromas que Transforman Tu Estado de Ánimo',
      excerpt:
        'La aromaterapia tiene el poder de cambiar cómo te sientes. Conoce los aceites esenciales que pueden elevar tu energía o traerte paz interior.',
      category: 'cuidado-personal',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
      date: '2025-01-12',
      readTime: '4 min',
      slug: 'aromas-estado-animo',
    },
    {
      id: '3',
      title: 'Meditación con Velas: Una Práctica Ancestral',
      excerpt:
        'Encender una vela puede ser el inicio de una meditación profunda. Aprende técnicas milenarias para meditar con la llama como guía.',
      category: 'espiritualidad',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800',
      date: '2025-01-10',
      readTime: '6 min',
      slug: 'meditacion-con-velas',
    },
    {
      id: '4',
      title: 'Rutina de Skin Care Consciente: Menos es Más',
      excerpt:
        'El minimalismo llega a tu piel. Descubre cómo crear una rutina efectiva con productos naturales que realmente necesitas.',
      category: 'belleza',
      image: 'https://images.unsplash.com/photo-1556229162-c47e4c7c8beb?w=800',
      date: '2025-01-08',
      readTime: '7 min',
      slug: 'skincare-consciente',
    },
    {
      id: '5',
      title: 'Diario de Gratitud: El Ritual que Cambió Mi Vida',
      excerpt:
        'Una práctica diaria de gratitud puede transformar tu perspectiva. Te comparto mi experiencia y cómo puedes empezar hoy.',
      category: 'gratitud',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
      date: '2025-01-05',
      readTime: '5 min',
      slug: 'diario-gratitud',
    },
    {
      id: '6',
      title: 'Historias de Nuestra Comunidad: Rituales que Sanan',
      excerpt:
        'Conoce las historias reales de personas que han transformado sus vidas a través de rituales conscientes de autocuidado.',
      category: 'comunidad',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800',
      date: '2025-01-03',
      readTime: '8 min',
      slug: 'historias-comunidad',
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getCategoryInfo = (categoryKey: BlogCategory): CategoryInfo => {
    return categories.find((cat) => cat.key === categoryKey) || categories[0];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600"
            alt="Blog - Essence Burn"
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
              &ldquo;Palabras que encienden. Rituales que transforman&rdquo;
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-justify text-base font-light text-white/90 sm:text-lg lg:text-2xl">
              Este es tu rincón de inspiración. En nuestro blog compartimos reflexiones, rituales de
              bienestar, tips de cuidado personal consciente, historias que sanan y recursos para
              vivir con intención. Porque creemos que el conocimiento también es una forma de amor
              propio.
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

      {/* Search & Filters */}
      <section className="border-essence-rose-100 sticky top-6 z-40 border-b bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* Search Bar */}
          <div className="mx-auto mb-6 max-w-2xl">
            <div className="relative">
              <Search className="text-essence-mauve-400 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artículos..."
                className="bg-essence-cream-50 font-poiretone border-essence-rose-200 focus:ring-essence-peach text-essence-mauve-700 w-full rounded-full border py-3 pr-4 pl-12 font-light focus:border-transparent focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex sm:flex-wrap overflow-x-scroll sm:overflow-x-hidden py-2 sm:justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`font-poiretone cursor-pointer rounded-full px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-essence-peach text-white shadow-md'
                  : 'bg-essence-cream-100 text-essence-mauve-600 hover:bg-essence-cream-200 border-essence-rose-200 border'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`font-poiretone cursor-pointer rounded-full px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-essence-peach text-white shadow-md'
                    : 'bg-essence-cream-100 text-essence-mauve-600 hover:bg-essence-cream-200 border-essence-rose-200 border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="via-essence-cream-50 bg-gradient-to-b from-white to-white px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map((post) => {
                const categoryInfo = getCategoryInfo(post.category);

                return (
                  <article
                    key={post.id}
                    className="group border-essence-rose-100 flex overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:w-2/5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-4 py-1.5 ${categoryInfo.color} font-poiretone rounded-full text-xs font-light tracking-wide text-white uppercase backdrop-blur-sm`}
                        >
                          {categoryInfo.label}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-essence-peach font-poiretone rounded-full px-3 py-1 text-xs font-light tracking-wide text-white uppercase backdrop-blur-sm">
                            ⭐ Destacado
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 md:w-3/5">
                      {/* Meta Info */}
                      <div className="text-essence-mauve-400 mb-3 flex items-center gap-4 text-xs font-light">
                        <span className="font-poiretone flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('es-CR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="font-poiretone flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-essence-mauve-700 font-fredoka group-hover:text-essence-peach mb-3 line-clamp-2 text-xl font-light tracking-wide transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-essence-mauve-600 font-quicksand mb-4 line-clamp-3 leading-relaxed font-light">
                        {post.excerpt}
                      </p>

                      {/* CTA */}
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-essence-peach hover:text-essence-peach-600 group/link font-fredoka inline-flex items-center gap-2 font-light transition-colors"
                      >
                        <span>Leer más</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="bg-essence-rose-50 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                <Search className="text-essence-rose-300 h-10 w-10" />
              </div>
              <p className="text-essence-mauve-500 font-quicksand text-lg font-light">
                No se encontraron artículos que coincidan con tu búsqueda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="from-essence-mauve-50 to-essence-cream-50 bg-gradient-to-br px-4 py-16">
        <div className="mx-auto mb-5 max-w-xl text-center">
          <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="bg-essence-mauve/30 h-px w-12" />
            <div className="bg-essence-mauve/30 h-2 w-2 rounded-full" />
            <div className="bg-essence-mauve/30 h-px w-12" />
          </div>
          <blockquote className="text-essence-mauve-700 font-quicksand text-2xl leading-relaxed font-light italic sm:text-3xl lg:text-4xl">
            Tu bienestar comienza con una palabra que te inspire.
          </blockquote>
          <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="bg-essence-mauve/30 h-px w-12" />
            <div className="bg-essence-mauve/30 h-2 w-2 rounded-full" />
            <div className="bg-essence-mauve/30 h-px w-12" />
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      {/* <section className="from-essence-peach-50 to-essence-rose-50 bg-gradient-to-br px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/50">
            <Mail className="text-essence-peach h-8 w-8" />
          </div>

          <h2 className="text-essence-mauve-700 mb-4 text-3xl font-light tracking-wide sm:text-4xl">
            ¿Querés recibir inspiración directa en tu bandeja de entrada?
          </h2>

          <p className="text-essence-mauve-500 mb-8 text-lg font-light">
            Suscribite a nuestro newsletter y recibí artículos, rituales y ofertas exclusivas cada
            semana.
          </p>

          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="tu@email.com"
              className="border-essence-rose-200 focus:ring-essence-peach text-essence-mauve-700 flex-1 rounded-full border bg-white px-6 py-4 font-light focus:border-transparent focus:ring-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-essence-peach hover:bg-essence-peach-600 transform rounded-full px-8 py-4 text-sm font-light tracking-wide whitespace-nowrap text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Suscribirme
            </button>
          </form>

          <p className="text-essence-mauve-400 mt-4 text-xs font-light">
            No spam, solo contenido que nutre tu alma. Podés desuscribirte cuando quieras.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default BlogPage;
