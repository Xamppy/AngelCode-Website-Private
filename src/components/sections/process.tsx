'use client'

import { useState } from 'react'
import { Search, Palette, Code, Rocket, FileText, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProcessStep {
  step: number
  title: string
  description: string
  activities: string[]
  deliverables: string[]
  timeline: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Análisis y Consultoría',
    description: 'Evaluamos tu situación actual y definimos la mejor estrategia tecnológica para tu proyecto.',
    activities: [
      'Auditoría técnica actual',
      'Definición de requerimientos',
      'Propuesta de arquitectura',
      'Análisis de viabilidad'
    ],
    deliverables: [
      'Documento técnico detallado',
      'Presupuesto personalizado',
      'Cronograma del proyecto',
      'Propuesta de arquitectura'
    ],
    timeline: 'Semana 1',
    icon: Search,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 2,
    title: 'Diseño y Prototipado',
    description: 'Creamos los diseños y prototipos interactivos para validar la experiencia de usuario.',
    activities: [
      'UX/UI design',
      'Mockups interactivos',
      'Validación con stakeholders',
      'Refinamiento de diseños'
    ],
    deliverables: [
      'Prototipo funcional',
      'Guía de estilos',
      'Wireframes detallados',
      'Especificaciones de diseño'
    ],
    timeline: 'Semanas 2-3',
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: 3,
    title: 'Desarrollo Iterativo',
    description: 'Implementamos la solución usando metodologías ágiles con entregas incrementales.',
    activities: [
      'Sprints de 2 semanas',
      'Demos semanales',
      'Testing continuo',
      'Integración continua'
    ],
    deliverables: [
      'Releases incrementales',
      'Documentación técnica',
      'Tests automatizados',
      'Código fuente'
    ],
    timeline: 'Semanas 4-N',
    icon: Code,
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: 4,
    title: 'Deploy y Soporte',
    description: 'Ponemos tu solución en producción y te acompañamos en los primeros meses.',
    activities: [
      'Puesta en producción',
      'Capacitación del equipo',
      'Documentación técnica',
      'Monitoreo inicial'
    ],
    deliverables: [
      'Sistema en vivo',
      'Manual de usuario',
      'Documentación técnica',
      '3 meses de soporte'
    ],
    timeline: 'Semana Final',
    icon: Rocket,
    color: 'from-orange-500 to-red-500'
  }
]

interface ProcessProps {
  className?: string
}

export function Process({ className }: ProcessProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="process" className={`section-padding bg-neutral-gray-dark ${className}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Metodología Ágil Garantizada
          </h2>
          <p className="body-large max-w-3xl mx-auto text-neutral-white/80">
            Nuestro proceso probado asegura entregas de calidad, transparencia total 
            y resultados que superan las expectativas de nuestros clientes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2 hidden md:block" />
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={cn(
                  "relative group cursor-pointer",
                  activeStep === step.step && "z-10"
                )}
                onMouseEnter={() => setActiveStep(step.step)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Card */}
                <div className={cn(
                  "bg-neutral-black border-2 border-neutral-gray-light rounded-lg p-6 transition-all duration-300 hover:border-purple-primary hover:-translate-y-2",
                  activeStep === step.step && "border-purple-primary -translate-y-2 shadow-2xl shadow-purple-primary/20"
                )}>
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-full bg-gradient-to-r flex items-center justify-center text-white font-bold text-sm",
                        step.color
                      )}>
                        {step.step}
                      </div>
                      <step.icon className="w-6 h-6 text-purple-primary" />
                    </div>
                    <span className="text-xs text-neutral-white/60 font-mono">{step.timeline}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-white/80 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Activities Preview */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-purple-light mb-2 font-mono">ACTIVIDADES</h4>
                    <ul className="space-y-1">
                      {step.activities.slice(0, 2).map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-white/70">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                      {step.activities.length > 2 && (
                        <li className="text-xs text-purple-primary font-mono">
                          +{step.activities.length - 2} más...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Hover Expansion */}
                  {activeStep === step.step && (
                    <div className="absolute top-full left-0 right-0 mt-4 bg-neutral-black border-2 border-purple-primary rounded-lg p-4 shadow-2xl z-20">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* All Activities */}
                        <div>
                          <h4 className="text-sm font-semibold text-purple-light mb-2 font-mono">ACTIVIDADES COMPLETAS</h4>
                          <ul className="space-y-1">
                            {step.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-neutral-white/80">
                                <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-sm font-semibold text-purple-light mb-2 font-mono">ENTREGABLES</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-neutral-white/80">
                                <FileText className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>


                    </div>
                  )}
                </div>

                {/* Connection Line (Mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-primary to-purple-light" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="body-normal text-neutral-white/70 mb-6">
            ¿Quieres conocer más detalles sobre nuestro proceso?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  )
}