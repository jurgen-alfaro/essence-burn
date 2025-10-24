'use client';

import React, { useState } from 'react';
import FAQSection from '@/app/components/home/FAQSection';
import { X, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface QuickContactFormData {
  name: string;
  email: string;
  question: string;
}

const FAQPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<QuickContactFormData>({
    name: '',
    email: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof QuickContactFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof QuickContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.question.trim()) {
      newErrors.question = 'La pregunta es requerida';
    } else if (formData.question.trim().length < 10) {
      newErrors.question = 'La pregunta debe tener al menos 10 caracteres';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'faq',
          message: formData.question,
        }),
      });

      if (!response.ok) throw new Error('Error al enviar');

      setSubmitStatus('success');
      setTimeout(() => {
        setShowModal(false);
        setFormData({ name: '', email: '', question: '' });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof QuickContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', question: '' });
    setErrors({});
    setSubmitStatus('idle');
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
              Preguntas Frecuentes
            </h1>
            <p className="font-quicksand mx-auto max-w-4xl text-base font-light text-balance text-white/90 sm:text-lg lg:text-xl">
              Sabemos que cada camino hacia el bienestar es único, y que las preguntas son parte
              esencial del viaje. En este espacio sagrado de respuestas, encontrarás guía, claridad
              y tranquilidad. Hemos reunido las dudas más comunes que surgen al explorar el universo
              de Essence Burn, para que tu experiencia sea tan fluida como tu ritual.
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

      {/* FAQ Section */}
      <FAQSection showContactCTA={false} showViewAllButton={false} />

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="from-essence-rose-50 to-essence-cream-50 border-essence-rose-200 rounded-3xl border bg-gradient-to-br p-8 text-center sm:p-12">
          <h2 className="text-essence-mauve-700 font-fredoka mb-4 text-2xl font-semibold tracking-wide sm:text-4xl">
            ¿Aún tienes dudas?
          </h2>
          <p className="text-essence-mauve-500 font-quicksand mx-auto mb-8 max-w-lg text-lg font-light">
            No te preocupes, estamos aquí para ayudarte en cada paso de tu viaje de bienestar.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-essence-peach hover:bg-essence-peach-600 font-fredoka inline-flex transform items-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-xl"
          >
            <span>No encontré mi respuesta</span>
          </button>
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
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-essence-mauve-700 font-fredoka mb-2 text-2xl font-light tracking-wide sm:text-3xl">
                    Pregúntanos directamente
                  </h3>
                  <p className="text-essence-mauve-500 font-quicksand text-sm font-light">
                    Te responderemos en 24-48 horas
                  </p>
                </div>
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
              {submitStatus === 'success' ? (
                <div className="py-12 text-center">
                  <div className="bg-essence-success/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                    <CheckCircle className="text-essence-success h-8 w-8" />
                  </div>
                  <h4 className="text-essence-mauve-700 mb-2 text-xl font-light">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-essence-mauve-500 font-light">
                    Te responderemos pronto. Revisa tu bandeja de entrada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="font-quicksand space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="text-essence-mauve-600 mb-2 block text-sm font-light"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
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
                      htmlFor="modal-email"
                      className="text-essence-mauve-600 mb-2 block text-sm font-light"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
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

                  {/* Question */}
                  <div>
                    <label
                      htmlFor="modal-question"
                      className="text-essence-mauve-600 mb-2 block text-sm font-light"
                    >
                      Tu pregunta *
                    </label>
                    <textarea
                      id="modal-question"
                      value={formData.question}
                      onChange={(e) => handleChange('question', e.target.value)}
                      rows={4}
                      className={`bg-essence-cream-50 w-full border px-4 py-3 ${
                        errors.question ? 'border-essence-error' : 'border-essence-rose-200'
                      } focus:ring-essence-peach text-essence-mauve-700 resize-none rounded-xl font-light transition-all focus:border-transparent focus:ring-2 focus:outline-none`}
                      placeholder="Escribe tu pregunta aquí..."
                      disabled={isSubmitting}
                    />
                    {errors.question && (
                      <p className="text-essence-error mt-1 flex items-center gap-1 text-sm font-light">
                        <AlertCircle className="h-4 w-4" />
                        {errors.question}
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-essence-error/10 border-essence-error flex items-start gap-3 rounded-xl border p-4">
                      <AlertCircle className="text-essence-error mt-0.5 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-essence-error text-sm font-light">
                          Error al enviar tu pregunta
                        </p>
                        <p className="text-essence-error/70 mt-1 text-xs">
                          Por favor intenta de nuevo o contáctanos por WhatsApp.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-essence-peach hover:bg-essence-peach-600 flex w-full transform items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-light tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" aria-hidden="true" />
                        <span>Enviar pregunta</span>
                      </>
                    )}
                  </button>

                  <p className="text-essence-mauve-400 text-center text-xs font-light">
                    También puedes contactarnos por{' '}
                    <a
                      href="https://wa.me/50612345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-essence-peach hover:underline"
                    >
                      WhatsApp
                    </a>{' '}
                    para una respuesta inmediata.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
