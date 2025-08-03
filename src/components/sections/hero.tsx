'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Transformamos ideas en soluciones tecnológicas escalables'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  const handlePrimaryClick = () => {
    scrollToSection('contact')
  }

  const handleSecondaryClick = () => {
    scrollToSection('projects')
  }

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/background-image.png"
            alt="Pixel art mountain background with purple gradient overlay for Angel Code Soluciones website"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Dark Overlay for better contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(26,26,26,0.9) 100%)'
          }}
        />

        {/* Purple Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(139,92,246,0.2) 0%, rgba(124,58,237,0.12) 100%)'
          }}
        />

        {/* Additional darkening overlay */}
        <div
          className="absolute inset-0 bg-black/30"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating Purple Circles - Below description text only */}
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-purple-primary/50 rounded-full blur-sm"
          animate={{
            y: [0, -25, 0],
            x: [0, -35, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 4.2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-purple-light/80 rounded-full blur-sm"
          animate={{
            opacity: [0.8, 1, 0.8],
            x: [0, 20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container text-center max-w-4xl">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="hero-title drop-shadow-2xl">
            Angel Code Soluciones
          </h1>

          {/* Animated Subtitle - Pixel Art Style */}
          <div className="min-h-[3rem] flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-purple-light font-mono font-bold drop-shadow-lg pixel-text">
              {typedText}
              <motion.span
                className="text-purple-light"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                █
              </motion.span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Especializados en desarrollo de software y automatización de procesos empresariales
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handlePrimaryClick}
              className="btn-primary flex items-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group shadow-2xl w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Solicitar Consulta Gratuita</span>
              <span className="sm:hidden">Consulta Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleSecondaryClick}
              className="btn-secondary flex items-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group shadow-xl backdrop-blur-sm bg-white/10 border-white/30 w-full sm:w-auto"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Ver Nuestros Proyectos</span>
              <span className="sm:hidden">Ver Proyectos</span>
            </button>
          </div>


        </div>
      </div>


    </section>
  )
}