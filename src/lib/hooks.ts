'use client'

import { useState, useEffect } from 'react'

export function useSelectedService() {
  const [selectedService, setSelectedService] = useState<string>('')

  useEffect(() => {
    // Check if there's a selected service in localStorage
    const stored = localStorage.getItem('selectedService')
    if (stored) {
      setSelectedService(stored)
      // Clear it after reading
      localStorage.removeItem('selectedService')
    }
  }, [])

  return selectedService
}

// Service mapping for display names
export const serviceDisplayNames: Record<string, string> = {
  software: 'Desarrollo de Software',
  ai: 'Integración de IA', 
  devops: 'DevOps & Automatización',
  consulting: 'Consultoría Tecnológica'
}

// Hook for selected project
export function useSelectedProject() {
  const [selectedProject, setSelectedProject] = useState<string>('')

  useEffect(() => {
    // Check if there's a selected project in localStorage
    const stored = localStorage.getItem('selectedProject')
    if (stored) {
      setSelectedProject(stored)
      // Clear it after reading
      localStorage.removeItem('selectedProject')
    }
  }, [])

  return selectedProject
}

// Hook for scroll-triggered animations
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref])

  return { ref: setRef, isVisible }
}