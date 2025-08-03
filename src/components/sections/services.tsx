'use client'

import { Code, Bot, Settings, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/service-card'
import { scrollToSection } from '@/lib/scroll'
import { useScrollAnimation } from '@/lib/hooks'

interface ServicesProps {
  className?: string
}

const services = [
  {
    id: 'software',
    icon: Code,
    title: 'Desarrollo de Software',
    description: 'Creamos aplicaciones web, móviles y de escritorio personalizadas que se adaptan perfectamente a las necesidades de tu negocio.',
    features: [
      'Apps web y móviles',
      'Sistemas empresariales',
      'APIs y microservicios',
      'Integración con sistemas existentes'
    ],
    price: '$200.000'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'Integración de IA',
    description: 'Implementamos soluciones de inteligencia artificial para automatizar procesos y mejorar la toma de decisiones en tu empresa.',
    features: [
      'Chatbots empresariales',
      'Automatización inteligente',
      'Análisis predictivo',
      'Procesamiento de lenguaje natural'
    ],
    price: '$400.000'
  },
  {
    id: 'devops',
    icon: Settings,
    title: 'DevOps & Automatización',
    description: 'Optimizamos tus procesos de desarrollo y despliegue con herramientas modernas de DevOps y automatización.',
    features: [
      'CI/CD pipelines',
      'Infraestructura como código',
      'Monitoreo y alertas',
      'Contenedorización con Docker'
    ],
    price: '$300.000'
  },
  {
    id: 'consulting',
    icon: Database,
    title: 'Consultoría Tecnológica',
    description: 'Te ayudamos a definir la mejor estrategia tecnológica para tu empresa y a migrar sistemas legacy a tecnologías modernas.',
    features: [
      'Auditoría de sistemas',
      'Arquitectura de soluciones',
      'Migración de aplicaciones',
      'Optimización de rendimiento'
    ],
    price: '$150.000'
  }
]

export function Services({ className }: ServicesProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const handleRequestQuote = (serviceId: string) => {
    // Store selected service in localStorage for the contact form
    localStorage.setItem('selectedService', serviceId)
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