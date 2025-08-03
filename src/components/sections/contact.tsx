'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { sendContactEmail } from '@/lib/email'
import { useSelectedService, useSelectedProject } from '@/lib/hooks'
import toast from 'react-hot-toast'
import { cn } from '@/lib/utils'

interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const selectedService = useSelectedService()
  const selectedProject = useSelectedProject()

  // Generate default message based on selected project
  const defaultMessage = selectedProject
    ? `Estoy interesado en el proyecto "${selectedProject}", quisiera más información sobre el desarrollo, tecnologías utilizadas y posibilidad de implementar algo similar para mi empresa.`
    : ''

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: (selectedService as "software" | "ai" | "devops" | "other") || undefined,
      message: defaultMessage,
      acceptCommunications: false
    }
  })

  // Update message when selectedProject changes
  useEffect(() => {
    if (selectedProject) {
      setValue('message', defaultMessage)
    }
  }, [selectedProject, defaultMessage, setValue])

  const onSubmit = handleSubmit(async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        setIsSubmitted(true)
        reset()
        toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
      } else {
        toast.error('Error al enviar el mensaje. Por favor intenta nuevamente.')
      }
    } catch {
      toast.error('Error al enviar el mensaje. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  })

  if (isSubmitted) {
    return (
      <section id="contact" className={`section-padding bg-neutral-gray-dark ${className}`}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">¡Mensaje Enviado!</h2>
            <p className="text-lg text-neutral-white/80 mb-8">
              Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos dentro de las próximas 24 horas.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={`section-padding bg-neutral-gray-dark ${className}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="body-large max-w-3xl mx-auto text-neutral-white/80">
            Agenda una consulta gratuita de 30 minutos y descubre cómo podemos
            llevar tu proyecto al siguiente nivel con tecnología de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-black border border-neutral-gray-light rounded-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Cuéntanos sobre tu proyecto</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="form-label">
                  Nombre completo *
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Tu nombre completo"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p id="name-error" className="form-error" role="alert">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label">
                  Email corporativo *
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="tu@empresa.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="form-label">
                  Empresa *
                </label>
                <input
                  {...register('company')}
                  id="company"
                  type="text"
                  className="form-input"
                  placeholder="Nombre de tu empresa"
                  aria-describedby={errors.company ? "company-error" : undefined}
                  aria-invalid={errors.company ? "true" : "false"}
                />
                {errors.company && (
                  <p id="company-error" className="form-error" role="alert">{errors.company.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="form-label">
                  Teléfono
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="form-input"
                  placeholder="+56 9 1234 5678"
                />
                {errors.phone && (
                  <p className="form-error">{errors.phone.message}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="form-label">
                  Tipo de proyecto *
                </label>
                <select
                  {...register('projectType')}
                  className="form-input"
                >
                  <option value="">Selecciona un tipo de proyecto</option>
                  <option value="software">Desarrollo de Software</option>
                  <option value="ai">Integración de IA</option>
                  <option value="devops">DevOps & Automatización</option>
                  <option value="other">Otro (especificar en mensaje)</option>
                </select>
                {errors.projectType && (
                  <p className="form-error">{errors.projectType.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="form-label">
                  Presupuesto estimado *
                </label>
                <select
                  {...register('budget')}
                  className="form-input"
                >
                  <option value="">Selecciona un rango de presupuesto</option>
                  <option value="200k-300k">$200.000 - $300.000</option>
                  <option value="400k-600k">$400.000 - $600.000</option>
                  <option value="700k-900k">$700.000 - $900.000</option>
                  <option value="1000k+">+$1.000.000</option>
                </select>
                {errors.budget && (
                  <p className="form-error">{errors.budget.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="form-label">
                  Mensaje/Requerimientos *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y requerimientos específicos..."
                />
                {errors.message && (
                  <p className="form-error">{errors.message.message}</p>
                )}
              </div>

              {/* Accept Communications */}
              <div className="flex items-start gap-3">
                <input
                  {...register('acceptCommunications')}
                  type="checkbox"
                  id="acceptCommunications"
                  className="mt-1 w-4 h-4 text-purple-primary bg-neutral-gray-dark border-neutral-gray-light rounded focus:ring-purple-primary focus:ring-2"
                />
                <label htmlFor="acceptCommunications" className="text-sm text-neutral-white/80">
                  Acepto recibir comunicaciones comerciales y actualizaciones sobre servicios de Angel Code Soluciones *
                </label>
              </div>
              {errors.acceptCommunications && (
                <p className="form-error">{errors.acceptCommunications.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full btn-primary flex items-center justify-center gap-2",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-neutral-black border border-neutral-gray-light rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Otras formas de contacto</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-primary/20 border border-purple-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a
                      href="mailto:contacto@angelcodesoluciones.cl"
                      className="text-purple-light hover:text-purple-primary transition-colors"
                    >
                      contacto@angelcodesoluciones.cl
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <a
                      href="https://wa.me/56922126103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      +56 9 2212 6103
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/felipe-orellana-álvarez-965984333/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Felipe Orellana Álvarez
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-white/20 border border-neutral-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <a
                      href="https://github.com/Xamppy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-white/80 hover:text-white transition-colors"
                    >
                      /Xamppy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Meeting */}
            <div className="bg-gradient-to-br from-purple-primary/10 to-purple-light/5 border border-purple-primary/30 rounded-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-purple-primary" />
                <h3 className="text-xl font-semibold text-white">Agenda una reunión</h3>
              </div>
              <p className="text-neutral-white/80 mb-6">
                ¿Prefieres hablar directamente? Agenda una videollamada gratuita de 30 minutos para discutir tu proyecto.
              </p>
              <a
                href="https://calendly.com/felipe-orellana-angelcodesoluciones/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact w-full inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agendar Reunión
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-neutral-black/50 border border-neutral-gray-light/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
                <h4 className="font-semibold text-white">Tiempo de respuesta</h4>
              </div>
              <p className="text-sm text-neutral-white/70">
                Respondemos todos los mensajes dentro de las primeras 24 horas.
                Para consultas urgentes, contáctanos directamente por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}