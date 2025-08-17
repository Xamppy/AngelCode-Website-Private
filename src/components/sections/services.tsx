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
    title: 'Páginas Web & E-commerce',
    description: 'Creamos páginas web profesionales y tiendas online que hacen crecer tu negocio.',
    features: [
      'Landing pages',
      'Tiendas online con Webpay',
      'Catálogos de productos',
      'Integración con redes sociales'
    ],
    price: '$200.000'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'Sistemas para Negocios',
    description: 'Desarrollamos sistemas simples y personalizados para que administres mejor tu negocio.',
    features: [
      'Sistemas POS para ventas',
      'Reservas de horas online',
      'Control de inventario',
      'Integración con medios de pago'
    ],
    price: '$250.000'
  },
  {
    id: 'devops',
    icon: Settings,
    title: 'Mantenimiento & Soporte',
    description: 'Mantenemos tu web o sistema siempre actualizado, seguro y funcionando al 100%.',
    features: [
      'Hosting y dominios',
      'Seguridad y respaldos',
      'Optimización de velocidad',
      'Actualizaciones técnicas'
    ],
    price: '$50.000/mes'
  },
  {
    id: 'consulting',
    icon: Database,
    title: 'Automatización Inteligente',
    description: 'Implementamos chatbots y automatizaciones para ahorrar tiempo y mejorar la atención de tus clientes.',
    features: [
      'Chatbots en WhatsApp y web',
      'Automatización de tareas repetitivas',
      'Reportes básicos de ventas',
      'Recordatorios automáticos para clientes'
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