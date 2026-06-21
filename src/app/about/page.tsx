'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Lightbulb, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.15 }
}

const values = [
  {
    icon: Code,
    title: "Código con Propósito",
    description: "Cada línea de código que escribimos tiene un objetivo claro: resolver problemas reales de nuestros clientes. No hacemos software por hacerlo, creamos herramientas que transforman negocios."
  },
  {
    icon: Users,
    title: "Cercanía y Confianza",
    description: "Trabajamos hombro a hombro con nuestros clientes. Sin intermediarios, sin equipos gigantes donde nadie sabe quién eres. Hablas directamente con quien desarrolla tu proyecto."
  },
  {
    icon: Zap,
    title: "Agilidad sin Sacrificar Calidad",
    description: "Entregamos resultados rápido usando metodologías ágiles, pero sin tomar atajos. Cada solución pasa por pruebas rigurosas antes de llegar a tus manos."
  },
  {
    icon: Shield,
    title: "Compromiso Total",
    description: "No entregamos un proyecto y desaparecemos. Incluimos soporte post-entrega y estamos siempre disponibles para mejorar, escalar o mantener tus sistemas."
  }
]

const badges = [
  { emoji: "🎓", label: "Ing. Informática" },
  { emoji: "💻", label: "Full-Stack" },
  { emoji: "🇨🇱", label: "Chile" },
  { emoji: "🤝", label: "Soporte directo" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-black">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-transparent to-purple-dark/5" />
          <div className="absolute inset-0 bg-neutral-black/60" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-primary/30 rounded-full blur-sm"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container text-center max-w-4xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Construyendo soluciones que{' '}
            <span className="text-purple-primary">transforman negocios</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Angel Code Soluciones nació de la convicción de que la tecnología bien aplicada 
            puede llevar cualquier negocio al siguiente nivel. Conoce nuestra historia, 
            nuestro fundador y los valores que nos guían.
          </motion.p>
        </div>
      </section>

      {/* ===== HISTORIA ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title text-purple-light">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-text-body text-base md:text-lg leading-relaxed">
                <p>
                  Angel Code Soluciones nació en 2025 desde la necesidad de ofrecer 
                  desarrollo de software con un trato cercano y personalizado. 
                  Su fundador, Felipe Orellana, comenzó trabajando con clínicas locales 
                  en Viña del Mar, construyendo sistemas a medida que resolvían problemas 
                  reales del día a día.
                </p>
                <p>
                  Lo que empezó como proyectos freelance para automatizar procesos 
                  clínicos —fichas de pacientes, gestión de stock, control de costos— 
                  rápidamente demostró que había un vacío en el mercado: 
                  pequeñas y medianas empresas necesitaban tecnología de calidad, 
                  pero sin la frialdad de las grandes consultoras ni los precios imposibles.
                </p>
                <p>
                  Hoy trabajamos con clientes de todo Chile, desarrollando desde 
                  landing pages hasta sistemas empresariales completos, siempre 
                  manteniendo la misma filosofía: <strong className="text-purple-light">código con propósito, 
                  resultados que importan.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative card */}
              <div className="bg-neutral-gray-dark border border-purple-primary/20 rounded-large p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-primary/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-purple-primary" />
                    <div className="w-3 h-3 rounded-full bg-purple-light/50" />
                    <div className="w-3 h-3 rounded-full bg-purple-dark/50" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-primary/20 border border-purple-primary/30 flex items-center justify-center">
                        <Code className="w-5 h-5 text-purple-primary" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">+15 Proyectos Entregados</p>
                        <p className="text-sm text-text-subtitle">En Chile y Latinoamérica</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-primary/20 border border-purple-primary/30 flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-primary" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Atención 100% Personalizada</p>
                        <p className="text-sm text-text-subtitle">Hablas directo con el desarrollador</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-primary/20 border border-purple-primary/30 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-purple-primary" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Soluciones a Medida</p>
                        <p className="text-sm text-text-subtitle">Cada proyecto es único</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PERFIL FELIPE ORELLANA ===== */}
      <section className="section-padding bg-neutral-gray-dark/50">
        <div className="container">
          <motion.h2
            className="section-title text-purple-light text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Conoce al Fundador
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-neutral-black border border-purple-primary/20 rounded-large overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Avatar column */}
              <div className="md:col-span-1 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 flex items-center justify-center p-8 md:p-12">
                <motion.div
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-white">FO</span>
                </motion.div>
              </div>

              {/* Info column */}
              <div className="md:col-span-2 p-6 md:p-8 lg:p-10 space-y-5">
                <div>
                  <h3 className="text-3xl font-bold text-white">Felipe Orellana Álvarez</h3>
                  <p className="text-lg text-purple-light font-medium mt-1">Ingeniero en Informática</p>
                  <p className="text-sm text-text-subtitle mt-0.5">Fundador y Desarrollador Principal</p>
                </div>

                <p className="text-text-body leading-relaxed">
                  Ingeniero en Informática con experiencia en desarrollo full-stack, 
                  especializado en React, Next.js, Node.js y automatización de procesos. 
                  Felipe combina su formación técnica con una visión práctica del negocio, 
                  asegurándose de que cada solución no solo funcione bien, sino que 
                  realmente aporte valor al cliente.
                </p>
                <p className="text-text-body leading-relaxed">
                  Su experiencia trabajando directamente con clínicas, comercios y 
                  profesionales independientes le ha dado una perspectiva única: 
                  entiende tanto la parte técnica como las necesidades reales de 
                  quienes usan el software día a día.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {badges.map((badge) => (
                    <span
                      key={badge.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-sm text-purple-light"
                    >
                      <span>{badge.emoji}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== VALORES ===== */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title text-purple-light mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              La forma en que trabajamos define los resultados que entregamos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="card group cursor-default"
                  variants={fadeInUp}
                >
                  <div className="w-14 h-14 rounded-lg bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center mb-5 group-hover:bg-purple-primary/20 group-hover:border-purple-primary/40 transition-all duration-300">
                    <Icon className="w-7 h-7 text-purple-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-light transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-text-body leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-neutral-gray-dark/50">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-primary/10 via-purple-dark/5 to-transparent border border-purple-primary/20 rounded-large p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-lg text-text-body mb-8 max-w-xl mx-auto">
              Cuéntanos tu proyecto y recibe una cotización personalizada sin compromiso. 
              Te responderemos en menos de 24 horas.
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Contáctanos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
