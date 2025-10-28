'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Briefcase,
  Users,
  Newspaper,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-react';
import Link from 'next/link';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

interface ContactPageProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const ContactPage: React.FC<ContactPageProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const subjects = [
    { value: '', label: 'Selecciona un motivo' },
    { value: 'productos', label: 'Consulta sobre productos' },
    { value: 'garantia', label: 'Consulta sobre garantía' },
    { value: 'pedido', label: 'Estado de mi pedido' },
    { value: 'rituales', label: 'Rituales personalizados' },
    { value: 'certificados', label: 'Certificados de regalo' },
    { value: 'colaboraciones', label: 'Colaboraciones/Prensa' },
    { value: 'otro', label: 'Otro' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject) {
      newErrors.subject = 'Por favor selecciona un motivo';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior: send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Error al enviar');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        subscribe: false,
      });
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="via-essence-cream-50 to-essence-rose-50 min-h-screen bg-gradient-to-b from-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600)',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="font-fredoka mb-6 text-3xl leading-tight font-light tracking-wide text-white sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              &ldquo;Conecta con nuestra esencia, comparte la tuya&rdquo;
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-justify text-base font-light text-white/90 sm:text-lg lg:text-2xl">
              ¡Queremos escucharte! Este espacio es para que nos cuentes tus dudas, ideas,
              colaboraciones o simplemente para que nos digas hola. En{' '}
              <span className="italic">Essence Burn</span> creemos en el poder de la conexión
              auténtica, así que si sientes que tu energía vibra con la nuestra, escríbenos.
            </p>

            {/* Decorative divider */}
            {/* <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
              <div className="h-2 w-2 rounded-full bg-white/70" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
            </div> */}
          </div>
        </div>

        {/* Scroll indicator
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2">
            <div className="h-2 w-1 rounded-full bg-white/70" />
          </div>
        </div> */}
      </section>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:pb-24">
        {/* Background decoration */}
        <div
          className="bg-essence-peach/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="bg-essence-rose/10 absolute bottom-0 left-0 h-80 w-80 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="bg-essence-peach/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <MessageCircle className="text-essence-peach h-8 w-8" aria-hidden="true" />
          </div>

          <h1 className="text-essence-mauve-700 font-fredoka mb-6 text-4xl font-light tracking-wide sm:text-5xl lg:text-6xl">
            Estamos aquí para ti
          </h1>

          <p className="text-essence-mauve-500 font-quicksand mx-auto max-w-2xl text-xl leading-relaxed font-light sm:text-2xl">
            Cada pregunta es importante. Conectemos y creemos juntos tu experiencia de bienestar
            perfecta.
          </p>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="to-essence-rose-300 h-px w-12 bg-gradient-to-r from-transparent" />
            <div className="bg-essence-peach h-2 w-2 rounded-full" />
            <div className="to-essence-rose-300 h-px w-12 bg-gradient-to-l from-transparent" />
          </div>
        </div>
      </section>

      {/* Main Contact Section - Two Columns */}
      <section className="mx-auto max-w-7xl px-4 pb-20" id="form">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="border-essence-rose-100 rounded-3xl border bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <h2 className="text-essence-mauve-700 font-fredoka mb-6 text-2xl font-light tracking-wide sm:text-3xl">
              Envíanos un mensaje
            </h2>

            <form onSubmit={handleSubmit} className="font-quicksand space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-essence-mauve-600 mb-2 block text-sm">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`bg-essence-cream-50 w-full border px-4 py-3 ${
                    errors.name ? 'border-essence-error' : 'border-essence-rose-200'
                  } focus:ring-essence-peach text-essence-mauve-700 rounded-xl font-light transition-all focus:border-transparent focus:ring-2 focus:outline-none`}
                  placeholder="Tu nombre"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-essence-error mt-1 flex items-center gap-1 text-sm font-light">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-essence-mauve-600 mb-2 block text-sm font-light"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`bg-essence-cream-50 w-full border px-4 py-3 ${
                    errors.email ? 'border-essence-error' : 'border-essence-rose-200'
                  } focus:ring-essence-peach text-essence-mauve-700 rounded-xl font-light transition-all focus:border-transparent focus:ring-2 focus:outline-none`}
                  placeholder="tu@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-essence-error mt-1 flex items-center gap-1 text-sm font-light">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-essence-mauve-600 mb-2 block text-sm font-light"
                >
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-essence-cream-50 border-essence-rose-200 focus:ring-essence-peach text-essence-mauve-700 w-full rounded-xl border px-4 py-3 font-light transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                  placeholder="+506 1234-5678"
                  disabled={isSubmitting}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-essence-mauve-600 mb-2 block text-sm font-light"
                >
                  Motivo de consulta *
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`bg-essence-cream-50 w-full border px-4 py-3 ${
                    errors.subject ? 'border-essence-error' : 'border-essence-rose-200'
                  } focus:ring-essence-peach text-essence-mauve-700 cursor-pointer appearance-none rounded-xl font-light transition-all focus:border-transparent focus:ring-2 focus:outline-none`}
                  disabled={isSubmitting}
                >
                  {subjects.map((subj) => (
                    <option key={subj.value} value={subj.value}>
                      {subj.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-essence-error mt-1 flex items-center gap-1 text-sm font-light">
                    <AlertCircle className="h-4 w-4" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-essence-mauve-600 mb-2 block text-sm font-light"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  className={`bg-essence-cream-50 w-full border px-4 py-3 ${
                    errors.message ? 'border-essence-error' : 'border-essence-rose-200'
                  } focus:ring-essence-peach text-essence-mauve-700 resize-none rounded-xl font-light transition-all focus:border-transparent focus:ring-2 focus:outline-none`}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-essence-error mt-1 flex items-center gap-1 text-sm font-light">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Subscribe Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={formData.subscribe}
                  onChange={(e) => handleChange('subscribe', e.target.checked)}
                  className="text-essence-peach border-essence-rose-300 focus:ring-essence-peach mt-1 h-4 w-4 cursor-pointer rounded"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="subscribe"
                  className="text-essence-mauve-600 cursor-pointer text-sm font-light"
                >
                  Quiero recibir inspiración y novedades en mi correo
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-essence-peach hover:bg-essence-peach-600 font-fredoka flex w-full transform items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden="true" />
                    <span>Encender conexión</span>
                  </>
                )}
              </button>
              {/* // HONEYPOT (ANTI-SPAM) */}
              {/* // Agregar al formulario un campo oculto que los bots llenan
              // Si ese campo tiene valor, rechazar el envío */}

              {/* // En API verificar:
              /*
              if (body.website) {
                // Es un bot, rechazar silenciosamente
                return NextResponse.json({ success: true }); // Fingir éxito
              }
              */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Success/Error Messages */}
              {/* {submitStatus === 'success' && (
                <div className="bg-essence-success/10 border-essence-success flex items-start gap-3 rounded-xl border p-4">
                  <CheckCircle className="text-essence-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-essence-success text-sm font-light">
                      ¡Gracias por escribirnos!
                    </p>
                    <p className="text-essence-success/70 mt-1 text-xs">
                      Tu mensaje ya es parte de nuestra energía. Nos pondremos en contacto muy
                      pronto.
                    </p>
                  </div>
                </div>
              )} */}

              {submitStatus === 'error' && (
                <div className="bg-essence-error/10 border-essence-error flex items-start gap-3 rounded-xl border p-4">
                  <AlertCircle className="text-essence-error mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-essence-error text-sm font-light">
                      Error al enviar el mensaje
                    </p>
                    <p className="text-essence-error/70 mt-1 text-xs">
                      Por favor intenta de nuevo o contáctanos por WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              {/* Privacy Note */}
              <p className="text-essence-mauve-400 text-center text-xs font-light">
                Tus datos están seguros. Lee nuestra{' '}
                <a href="/politicas/privacidad" className="text-essence-peach hover:underline">
                  Política de Privacidad
                </a>
              </p>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="border-essence-rose-100 rounded-3xl border bg-white p-6 shadow-xl sm:p-8">
              <h3 className="text-essence-mauve-700 font-fredoka mb-6 text-xl font-light tracking-wide sm:text-2xl">
                Otras formas de contacto
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:hola@essenceburn.com"
                  className="hover:bg-essence-cream-50 group flex items-start gap-4 rounded-2xl p-4 transition-colors"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors">
                    <Mail className="text-essence-peach h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-essence-mauve-700 font-fredoka mb-1 text-sm font-light">
                      Email
                    </p>
                    <p className="text-essence-mauve-500 font-quicksand font-light">
                      hola@essenceburn.com
                    </p>
                    <p className="text-essence-mauve-400 font-poiretone mt-1 text-xs">
                      Respuesta en 24-48 horas
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/50612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-essence-cream-50 group flex items-start gap-4 rounded-2xl p-4 transition-colors"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors">
                    <MessageCircle className="text-essence-peach h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-essence-mauve-700 font-fredoka mb-1 text-sm font-light">
                      WhatsApp
                    </p>
                    <p className="text-essence-mauve-500 font-quicksand font-light">
                      +506 8795-8091
                    </p>
                    <p className="text-essence-mauve-400 font-poiretone mt-1 text-xs">
                      Respuesta inmediata en horario laboral
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+50612345678"
                  className="hover:bg-essence-cream-50 group flex items-start gap-4 rounded-2xl p-4 transition-colors"
                >
                  <div className="bg-essence-peach/10 group-hover:bg-essence-peach/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors">
                    <Phone className="text-essence-peach h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-essence-mauve-700 font-fredoka mb-1 text-sm font-light">
                      Teléfono
                    </p>
                    <p className="text-essence-mauve-500 font-light">+506 8795-8091</p>
                    <p className="text-essence-mauve-400 font-poiretone mt-1 text-xs">
                      Lun-Vie: 8:00 AM - 5:00 PM
                      <br />
                      Sab: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="border-essence-rose-100 rounded-3xl border bg-white p-6 shadow-xl sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-essence-peach/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Clock className="text-essence-peach h-5 w-5" />
                </div>
                <h3 className="text-essence-mauve-700 font-fredoka text-lg font-light">
                  Horario de atención
                </h3>
              </div>

              <div className="font-quicksand space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-essence-mauve-600 text-sm font-light">Lunes - Viernes</span>
                  <span className="text-essence-mauve-700 text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-essence-mauve-600 text-sm font-light">Sábados</span>
                  <span className="text-essence-mauve-700 text-sm">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-essence-mauve-600 text-sm font-light">Domingos</span>
                  <span className="text-essence-mauve-500 text-sm">Cerrado</span>
                </div>
              </div>

              <div className="border-essence-rose-200 mt-6 border-t pt-6">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="text-essence-peach h-4 w-4" />
                  <p className="text-essence-mauve-700 font-fredoka text-sm font-light">
                    Ubicación
                  </p>
                </div>
                <p className="text-essence-mauve-500 font-quicksand text-sm font-light">
                  San José, Costa Rica
                </p>
                <p className="text-essence-mauve-400 font-poiretone mt-1 text-xs">
                  Envíos a todo el país
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="border-essence-rose-100 rounded-3xl border bg-white p-6 shadow-xl sm:p-8">
              <h3 className="text-essence-mauve-700 font-fredoka mb-4 text-lg font-light">
                Síguenos en redes
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-essence-peach/10 hover:bg-essence-peach text-essence-peach flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-essence-peach/10 hover:bg-essence-peach text-essence-peach flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="bg-essence-cream-700 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <Briefcase className="h-7 w-7 text-white" />
            </div>
            <h2 className="font-fredoka mb-4 text-3xl font-semibold tracking-wide text-white uppercase sm:text-4xl">
              Colaboraciones & Negocios
            </h2>
            <p className="font-quicksand mx-auto max-w-2xl text-xl font-light text-white/80">
              ¿Eres empresa, marca o creador de contenido? ¡Trabajemos juntos! 🤝
            </p>
          </div>

          <div className="font-quicksand grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Regalos Corporativos',
                description: 'Packs personalizados para tu equipo o clientes',
              },
              {
                icon: TrendingUp,
                title: 'Influencers',
                description: 'Colaboraciones con creadores de contenido',
              },
              {
                icon: Newspaper,
                title: 'Prensa',
                description: 'Solicitudes de medios y comunicación',
              },
              {
                icon: Briefcase,
                title: 'Distribuidores',
                description: 'Oportunidades de venta al por mayor',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <div className="bg-essence-peach mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon className="text-essence-peach-600 h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-base font-light text-white/70">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:colaboraciones@essenceburn.com"
              className="text-essence-mauve-700 hover:bg-essence-cream inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-light tracking-wide uppercase shadow-xl transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              <span className="font-fredoka">colaboraciones@essenceburn.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <h2 className="text-essence-mauve-700 font-fredoka mb-8 text-center text-2xl font-light tracking-wide sm:text-3xl">
          Preguntas rápidas
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { q: '¿Cuánto tarda el envío?', a: '3-5 días hábiles' },
            { q: '¿Puedo rastrear mi pedido?', a: 'Sí, recibes tracking por email' },
            { q: '¿Hacen envío express?', a: 'Sí, disponible en checkout' },
            { q: '¿Aceptan devoluciones?', a: 'Sí, 15 días sin uso' },
          ].map((faq, index) => (
            <div
              key={index}
              className="border-essence-rose-100 font-quicksand rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-essence-mauve-700 mb-2 text-sm font-light">{faq.q}</p>
              <p className="text-essence-peach font-light">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-essence-peach hover:text-essence-peach-600 font-quicksand inline-flex items-center gap-2 font-light transition-colors"
          >
            <span>Ver todas las preguntas frecuentes</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="border-essence-rose-100 sticky top-0 z-10 rounded-t-3xl border-b bg-white p-6 sm:p-8">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-essence-rose-50 hover:bg-essence-rose-100 text-essence-mauve-600 hover:text-essence-mauve-700 ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="text-center">
                <div className="bg-essence-success/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                  <CheckCircle className="text-essence-success h-8 w-8" />
                </div>
                <h4 className="text-essence-mauve-700 font-fredoka mb-2 text-xl font-light">
                  ¡Gracias por escribirnos!
                </h4>
                <p className="text-essence-mauve-500 font-quicksand font-light text-balance">
                  Tu mensaje ya es parte de nuestra energía. Nos pondremos en contacto muy pronto.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
