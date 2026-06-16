'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/service-card'
import { scrollToSection } from '@/lib/scroll'
import { useScrollAnimation } from '@/lib/hooks'
import services from '@/data/services'

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const handleRequestQuote = (serviceId: string) => {
    // Map old IDs for backward compat with contact form
    const idMap: Record<string, string> = {
      'web-development': 'software',
      'business-systems': 'ai',
      'maintenance-support': 'devops',
      'automation': 'other',
    }
    localStorage.setItem('selectedService', idMap[serviceId] || serviceId)
    scrollToSection('contact')
  }

  return (
    <section id="services" className={`section-padding bg-neutral-gray-dark ${className}`}>
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
            Soluciones Tecnológicas de Vanguardia
          </h2>
          <p className="body-large max-w-3xl mx-auto text-neutral-white/80">
            Transformamos tu visión en realidad con nuestros servicios especializados en desarrollo de software, 
            inteligencia artificial y automatización empresarial.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={gridRef}
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={gridVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="h-full"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                href={`/servicios/${service.id}`}
                onRequestQuote={() => handleRequestQuote(service.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="body-normal text-neutral-white/70 mb-6">
            ¿No encuentras exactamente lo que necesitas?
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Consulta Personalizada
          </button>
        </div>
      </div>
    </section>
  )
}