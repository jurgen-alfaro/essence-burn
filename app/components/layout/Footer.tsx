'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  CheckCircle,
  X,
} from 'lucide-react';
import Link from 'next/link';
import DailyQuote from '../ui/DailyQuote';

interface FooterProps {
  onSubscribe?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Por favor ingresa tu correo');
      return;
    }

    setIsSubmitting(true);

    try {
      // Aquí irá tu lógica de API
      // await onSubscribe?.(email);
      setShowModal(true);
      setEmail('');
    } catch (error) {
      setMessage('Error al suscribirse. Intenta de nuevo.');
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b">
      {/* Decorative gradient line */}
      {/* <div
        className="from-essence-peach via-essence-rose to-essence-mauve bg-gradient-to-r"
        aria-hidden="true"
      /> */}

      {/* Newsletter Section */}
      <section className="bg-essence-blushingcoconut relative px-4 py-16">
        {/* Decorative background elements */}
        <div
          className="bg-essence-peach/5 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="bg-essence-rose/5 absolute bottom-0 left-0 h-80 w-80 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Icon decoration */}
          <div className="mb-6 flex justify-center">
            <div className="bg-essence-peach/20 flex h-16 w-16 items-center justify-center rounded-full">
              <Mail className="text-essence-peach h-8 w-8" aria-hidden="true" />
            </div>
          </div>

          <h2 className="font-fredoka text-essence-mauve-700 mb-4 text-3xl font-light tracking-wide sm:text-4xl lg:text-6xl">
            ¡Únete a nuestra comunidad!
          </h2>

          <p className="font-quicksand text-essence-mauve-700/80 mx-auto mb-8 max-w-2xl text-lg leading-relaxed font-light sm:text-xl">
            Recibe inspiración, rituales y novedades directamente en tu correo.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="focus:ring-essence-peach border-essence-mauve/80 bg-essence-cream/20 text-essence-mauve placeholder:text-essence-mauve w-full rounded-full border px-6 py-4 font-light backdrop-blur-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                  disabled={isSubmitting}
                  aria-label="Correo electrónico"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-essence-peach hover:bg-essence-peach-400 flex transform items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide whitespace-nowrap text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Suscribirse al newsletter"
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    <span className="font-fredoka">Recibir Esencia</span>
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            {/* Message feedback */}
            {message && (
              <p
                className={`font-quicksand mt-4 text-sm font-light ${
                  message.includes('Gracias') ? 'text-essence-success' : 'text-essence-error'
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <p className="font-poiretone text-essence-mauve-900 mt-6 text-sm font-light tracking-wide">
            Al suscribirte, aceptas nuestra{' '}
            <a
              href="/politicas/privacidad"
              className="underline transition-colors hover:text-[#948682]"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
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
                  <h4 className="text-essence-mauve-700 font-fredoka mb-2 pb-6 text-2xl font-light">
                    ¡Gracias por encender tu esencia con nosotros!
                  </h4>
                  <p className="text-essence-mauve-500 font-quicksand pb-6 font-light text-balance">
                    Tu suscripción está confirmada. A partir de ahora, recibirás inspiración,
                    rituales personalizados, novedades conscientes y mensajes que nutren el alma
                    directamente en tu bandeja de entrada. Este es solo el comienzo de un viaje de
                    bienestar, conexión y transformación.
                  </p>
                  <p className="text-essence-mauve-500 font-poiretone font-bold text-balance">
                    Bienvenida a la comunidad de Essence Burn
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Main Footer Content */}
      <div className="bg-essence-tokibrown">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Column 1: Brand & Social */}
            <div className="space-y-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="from-essence-rose to-essence-peach flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-xl font-light text-white">
                  <Image
                    src="/logo.webp"
                    alt="Essence Burn logo"
                    width={58}
                    height={58}
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-fredoka text-xl font-light tracking-wide text-white uppercase">
                  Essence Burn
                </h3>
              </div>

              <p className="text-essence-cream/70 font-quicksand text-sm leading-relaxed font-light text-balance">
                Cuidado integral del ser. Transformamos momentos cotidianos en rituales de conexión
                personal.
              </p>

              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-essence-peach/20 text-essence-cream hover:text-essence-peach flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-essence-peach/20 text-essence-cream hover:text-essence-peach flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            {/* <div>
              <h4 className="font-fredoka mb-6 text-lg font-light tracking-wide text-white">
                Enlaces Rápidos
              </h4>
              <ul className="font-poiretone space-y-3 tracking-wider">
                {[
                  { label: 'Inicio', href: '/' },
                  { label: 'Productos', href: '/productos' },
                  { label: 'Certificados de Regalo', href: '/certificados' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Nosotros', href: '/nosotros' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-essence-cream/70 hover:text-essence-peach inline-block text-sm font-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Column 4: Support */}
            <div>
              <h4 className="font-fredoka mb-6 text-lg font-light tracking-wide text-white uppercase">
                Ayuda
              </h4>
              <ul className="font-poiretone space-y-3 tracking-wider">
                {[
                  { label: 'Preguntas Frecuentes', href: '/faq' },
                  { label: 'Envíos & Entregas', href: '/envios' },
                  { label: 'Devoluciones', href: '/devoluciones' },
                  { label: 'Certificados de Regalo', href: '/guia' },
                  { label: 'Guía de Reciclaje', href: '/reciclaje' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-essence-cream hover:text-essence-peach inline-block font-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-fredoka mb-6 text-lg font-light tracking-wide text-white uppercase">
                Contacto
              </h4>
              <ul className="font-poiretone space-y-4 tracking-wider">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="text-essence-peach mt-0.5 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-essence-cream font-light">San José, Costa Rica</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-essence-peach h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+50612345678"
                    className="text-essence-cream hover:text-essence-peach text-tiny font-light transition-colors"
                  >
                    +506 8795-8091
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-essence-peach h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:hola@essenceburn.com"
                    className="text-essence-cream hover:text-essence-peach font-light transition-colors"
                  >
                    hola@essenceburn.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    className="text-essence-peach mt-0.5 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-essence-cream text-tiny font-light">
                    Lun - Vie: 9:00 AM - 6:00 PM
                    <br />
                    Sab: 9:00 AM - 2:00 PM
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Daily */}
            <div>
              <h4 className="font-fredoka mb-6 text-lg font-light tracking-wide text-white uppercase">
                ¡Inspírate!
              </h4>
              <DailyQuote />
            </div>
          </div>

          {/* Payment Methods & Shipping */}
          <div className="mb-8 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              {/* Payment Methods */}
              <div className="text-center lg:text-left">
                <p className="text-essence-cream/50 font-quicksand mb-3 text-sm tracking-wide uppercase">
                  Métodos de pago
                </p>
                <div className="font-fredoka flex flex-wrap justify-center gap-3 lg:justify-start">
                  {['VISA', 'Mastercard', 'American Express', 'PayPal'].map((method) => (
                    <div
                      key={method}
                      className="text-essence-cream/70 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-light backdrop-blur-sm"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping */}
              <div className="text-center lg:text-right">
                <p className="text-essence-cream/50 font-quicksand mb-3 text-sm font-light tracking-wide uppercase">
                  Envíos seguros a todo CR
                </p>
                <div className="font-fredoka flex flex-wrap justify-center gap-3 lg:justify-end">
                  <div className="text-essence-cream/70 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-light backdrop-blur-sm">
                    <span>📦</span> Correos de CR
                  </div>
                  <div className="text-essence-cream/70 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-light backdrop-blur-sm">
                    <span>🚚</span> Mensajería privada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Legal */}
      <div className="font-quicksand bg-essence-tokibrown border-t border-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="text-essence-cream/50 flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
            <p className="font-light">
              © {currentYear} Essence Burn. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <a
                href="/politicas/privacidad"
                className="hover:text-essence-peach font-light transition-colors"
              >
                Política de Privacidad
              </a>
              <span className="text-essence-cream/20 hidden md:inline">•</span>
              <a
                href="/politicas/terminos"
                className="hover:text-essence-peach font-light transition-colors"
              >
                Términos y Condiciones
              </a>
              <span className="text-essence-cream/20 hidden md:inline">•</span>
              <a
                href="/politicas/garantia"
                className="hover:text-essence-peach font-light transition-colors"
              >
                Política de Garantía
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      {/* <div
        className="from-essence-peach via-essence-rose to-essence-mauve bg-gradient-to-r opacity-50"
        aria-hidden="true"
      /> */}
    </footer>
  );
};

export default Footer;
