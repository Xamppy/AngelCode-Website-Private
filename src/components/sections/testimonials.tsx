'use client'

import { Star } from 'lucide-react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import { useScrollAnimation } from '@/lib/hooks'
import { useRef, useState } from 'react'

interface Testimonial {
  id: string
  clientName: string
  role: string
  company: string
  testimonial: string
  rating: number
  projectType: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Esmeralda Valdevenito V.',
    role: 'Podóloga Clínica',
    company: 'Esmeralda Podología Clínica',
    testimonial: 'Angel Code transformó completamente nuestra gestión clínica. El sistema ordenó de manera eficiente nuestros pacientes con sus fichas clínicas y mejoró significativamente nuestro negocio organizando el stock y controlando los costos. La productividad aumentó un 70%.',
    rating: 5,
    projectType: 'Sistema de Gestión Clínica'
  },
  {
    id: '2',
    clientName: 'Roberto Silva',
    role: 'Propietario',
    company: 'Minimarket Silva',
    testimonial: 'La aplicación desarrollada por Angel Code está perfectamente organizada y me proporciona vistas completas de todo mi negocio. Ahora puedo tomar decisiones informadas basadas en datos reales. El ROI fue inmediato.',
    rating: 5,
    projectType: 'Sistema de Ventas Mayoristas'
  },
  {
    id: '3',
    clientName: 'Dr. Carlos Mendoza',
    role: 'Kinesiólogo Deportivo',
    company: 'Club Deportivo Profesional',
    testimonial: 'Excelente producto, fue exactamente lo que necesitábamos para el seguimiento kinesiológico del equipo. Es muy fácil de utilizar, tiene todo muy intuitivo y visual. La gestión de lesiones y tratamientos nunca fue tan eficiente.',
    rating: 5,
    projectType: 'Sistema Kinesiológico Deportivo'
  }
]

// Multiplicar para scroll infinito más suave
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation()
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation()

  // Estados del carrusel
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(1) // Velocidad variable 0.5x a 3x
  const [isDragging, setIsDragging] = useState(false)

  // Motion values para control suave
  const x = useMotionValue(0)
  const baseVelocity = -50 // Velocidad base en pixels por segundo

  // Ref para dimensiones
  const containerRef = useRef<HTMLDivElement>(null)

  // Animación frame por frame
  useAnimationFrame((t, delta) => {
    if (isPaused || isDragging) return

    // Calcular movimiento basado en velocidad y delta time
    const moveBy = (baseVelocity * speed * delta) / 1000
    const currentX = x.get()

    // Reset cuando llegue al final del primer set
    const cardWidth = 384 + 24 // w-96 + gap-6
    const resetPoint = -(cardWidth * testimonials.length)

    if (currentX <= resetPoint) {
      x.set(0)
    } else {
      x.set(currentX + moveBy)
    }
  })

  return (
    <section id="testimonials" className={`section-padding bg-neutral-black ${className}`}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="body-large max-w-3xl mx-auto text-neutral-white/80">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
            Conoce las experiencias reales de quienes han confiado en nosotros.
          </p>
        </motion.div>

       

        {/* Draggable Infinite Scroll Testimonials */}
        <motion.div
          ref={carouselRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, x: -100 }}
          animate={carouselVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -2000, right: 200 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            onDragStart={() => {
              setIsDragging(true)
              setIsPaused(true)
            }}
            onDragEnd={() => {
              setIsDragging(false)
              // Reanudar después de 2 segundos
              setTimeout(() => setIsPaused(false), 3000)
            }}
            whileHover={{ cursor: "grab" }}
            whileDrag={{ cursor: "grabbing" }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-neutral-gray-dark border border-neutral-gray-light rounded-lg p-4 sm:p-6 transition-all duration-300"
                whileHover={{
                  borderColor: '#8B5CF6',
                  scale: 1.02,
                  y: -4
                }}
                whileDrag={{ scale: 0.98 }}
              >
                {/* Quote */}
                <blockquote className="text-sm text-neutral-white/90 leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-4 h-4 transition-colors ${starIndex < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-neutral-gray-light"
                        }`}
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-primary to-purple-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.clientName.split(' ').map(name => name[0]).join('').slice(0, 2)}
                  </div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white">
                      {testimonial.clientName}
                    </h4>
                    <p className="text-xs text-purple-light">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-neutral-white/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="mt-3">
                  <span className="inline-block px-2 py-1 bg-purple-primary/20 border border-purple-primary/40 rounded text-xs text-purple-light font-mono">
                    {testimonial.projectType}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        

        {/* Impact Metrics */}
        <motion.div
          ref={metricsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-neutral-gray-light/20"
          initial={{ opacity: 0, y: 50 }}
          animate={metricsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={metricsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-purple-primary mb-2">100%</div>
            <div className="text-neutral-white/80">Satisfacción del Cliente</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={metricsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-purple-primary mb-2">10+</div>
            <div className="text-neutral-white/80">Proyectos Completados</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={metricsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-4xl font-bold text-purple-primary mb-2">2</div>
            <div className="text-neutral-white/80">Años de Experiencia</div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="body-normal text-neutral-white/70 mb-6">
            ¿Quieres ser nuestro próximo caso de éxito?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Iniciar Mi Proyecto
          </button>
        </div>
      </div>
    </section>
  )
}