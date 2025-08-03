'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/pixel-art/project-card'
import { ProjectModal } from '@/components/pixel-art/project-modal'
import { ImageGallery } from '@/components/ui/image-gallery'
import { useScrollAnimation } from '@/lib/hooks'

interface Technology {
  name: string
  icon: string
}

interface Achievement {
  title: string
  description: string
  icon: string
}

interface Project {
  id: string
  title: string
  description: string
  stack: Technology[]
  industry: string
  timeline: string
  roi: string
  thumbnail: string
  previewImage?: string
  screenshots: string[]
  architecture: string
  achievements: Achievement[]
}

const projects: Project[] = [
  {
    id: 'podoclinic',
    title: 'Sistema Podoclinic',
    description: 'Sistema integral de gestión para clínica podológica que optimiza el manejo de pacientes, fichas clínicas, inventario y costos operacionales.',
    stack: [
      { name: 'React', icon: '⚛️' },
      { name: 'Django', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'Cloudflare', icon: '☁️' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Bizagi', icon: '📋' }
    ],
    industry: 'Salud',
    timeline: '2 meses',
    roi: '+70% eficiencia',
    thumbnail: '/images/projects/podoclinic.svg',
    previewImage: '/images/projects/screenshots/podoclinic/1.webp',
    screenshots: [
      '/images/projects/screenshots/podoclinic/1.webp',
      '/images/projects/screenshots/podoclinic/2.webp',
      '/images/projects/screenshots/podoclinic/3.webp',
      '/images/projects/screenshots/podoclinic/4.webp',
      '/images/projects/screenshots/podoclinic/5.webp',
      '/images/projects/screenshots/podoclinic/6.webp',
      '/images/projects/screenshots/podoclinic/7.webp',
      '/images/projects/screenshots/podoclinic/8.webp',
      '/images/projects/screenshots/podoclinic/9.webp',
      '/images/projects/screenshots/podoclinic/10.webp',
      '/images/projects/screenshots/podoclinic/11.webp'
    ],
    architecture: 'Arquitectura de microservicios con frontend React, backend Django REST API, base de datos PostgreSQL, contenedorización con Docker y despliegue en la nube con Nginx como proxy reverso y Cloudflare para CDN y seguridad.',
    achievements: [
      { title: 'Eficiencia Mejorada', description: '70% mejora en gestión de pacientes', icon: '📈' },
      { title: 'Automatización', description: 'Procesos manuales automatizados', icon: '🤖' },
      { title: 'Satisfacción Cliente', description: '5 estrellas de satisfacción', icon: '⭐' }
    ]
  },
  {
    id: 'venta-mayorista',
    title: 'Sistema de Venta Mayorista',
    description: 'Plataforma completa de ventas mayoristas con gestión de inventario, clientes, pedidos y análisis de ventas en tiempo real.',
    stack: [
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Bizagi', icon: '📋' }
    ],
    industry: 'Retail',
    timeline: '2 meses',
    roi: '+90% eficiencia',
    thumbnail: '/images/projects/mayorista.svg',
    previewImage: '/images/projects/screenshots/mayorista/1.webp',
    screenshots: [
      '/images/projects/screenshots/mayorista/1.webp',
      '/images/projects/screenshots/mayorista/2.webp',
      '/images/projects/screenshots/mayorista/3.webp',
      '/images/projects/screenshots/mayorista/4.webp',
      '/images/projects/screenshots/mayorista/5.webp',
      '/images/projects/screenshots/mayorista/6.webp',
      '/images/projects/screenshots/mayorista/7.webp',
      '/images/projects/screenshots/mayorista/8.webp',
      '/images/projects/screenshots/mayorista/9.webp',
      '/images/projects/screenshots/mayorista/10.webp',
      '/images/projects/screenshots/mayorista/11.webp'
    ],
    architecture: 'Aplicación full-stack con Next.js y TypeScript, backend serverless con Supabase, base de datos PostgreSQL, autenticación y autorización integrada, y procesos de negocio modelados con Bizagi.',
    achievements: [
      { title: 'ROI Excepcional', description: '90% mejora en eficiencia operacional', icon: '💰' },
      { title: 'Escalabilidad', description: 'Arquitectura serverless escalable', icon: '📊' },
      { title: 'UX Moderna', description: 'Interfaz intuitiva y responsive', icon: '✨' }
    ]
  },
  {
    id: 'sistema-kinesiologico',
    title: 'Sistema Kinesiológico Deportivo',
    description: 'Sistema especializado para gestión kinesiológica de equipos de fútbol con seguimiento de lesiones, tratamientos y rendimiento.',
    stack: [
      { name: 'React', icon: '⚛️' },
      { name: 'Django', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'Cloudflare', icon: '☁️' }
    ],
    industry: 'Salud y deporte',
    timeline: '3 meses',
    roi: '+80% eficiencia',
    thumbnail: '/images/projects/kinesiologia.svg',
    previewImage: '/images/projects/screenshots/kinesiologia/1.webp',
    screenshots: [
      '/images/projects/screenshots/kinesiologia/1.webp',
      '/images/projects/screenshots/kinesiologia/2.webp',
      '/images/projects/screenshots/kinesiologia/3.webp',
      '/images/projects/screenshots/kinesiologia/4.webp',
      '/images/projects/screenshots/kinesiologia/5.webp',
      '/images/projects/screenshots/kinesiologia/5.1.webp',
      '/images/projects/screenshots/kinesiologia/6.webp',
      '/images/projects/screenshots/kinesiologia/6.1.webp',
      '/images/projects/screenshots/kinesiologia/7.webp',
      '/images/projects/screenshots/kinesiologia/8.webp',
      '/images/projects/screenshots/kinesiologia/9.webp',
      '/images/projects/screenshots/kinesiologia/10.webp',
      '/images/projects/screenshots/kinesiologia/11.webp',
      '/images/projects/screenshots/kinesiologia/12.webp',
      '/images/projects/screenshots/kinesiologia/13.webp',
      '/images/projects/screenshots/kinesiologia/14.webp',
      '/images/projects/screenshots/kinesiologia/15.webp',
      '/images/projects/screenshots/kinesiologia/16.webp',
      '/images/projects/screenshots/kinesiologia/17.webp',
      '/images/projects/screenshots/kinesiologia/19.webp'
    ],
    architecture: 'Sistema web con React frontend, Django REST API backend, base de datos PostgreSQL para almacenamiento de datos médicos, contenedorización con Docker y despliegue seguro en la nube.',
    achievements: [
      { title: 'Gestión Médica', description: 'Seguimiento completo de lesiones', icon: '🏥' },
      { title: 'Rendimiento', description: 'Análisis de performance deportiva', icon: '⚽' },
      { title: 'Usabilidad', description: 'Interfaz intuitiva para profesionales', icon: '👨‍⚕️' }
    ]
  }
]

interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<{src: string, alt: string, title?: string}[]>([])
  const [galleryTitle, setGalleryTitle] = useState('')
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const handleViewDetails = (projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    if (project) {
      setSelectedProject(project)
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleViewImages = (projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    if (project && project.screenshots.length > 0) {
      setGalleryImages(
        project.screenshots.map((screenshot, index) => ({
          src: screenshot,
          alt: `${project.title} - Screenshot ${index + 1}`,
          title: `${project.title} - Captura ${index + 1}`
        }))
      )
      setGalleryTitle(project.title)
      setIsGalleryOpen(true)
    }
  }

  const handleCloseGallery = () => {
    setIsGalleryOpen(false)
    setGalleryImages([])
    setGalleryTitle('')
  }

  const handleConsultProject = (projectTitle: string) => {
    // Guardar el proyecto seleccionado para el formulario de contacto
    localStorage.setItem('selectedProject', projectTitle)
    
    // Scroll al formulario de contacto
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
    
    // Cerrar el modal
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" className={`section-padding bg-neutral-black ${className}`}>
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
              Proyectos Destacados
            </h2>
            <p className="body-large max-w-3xl mx-auto text-neutral-white/80">
              Explora nuestros proyectos más exitosos, cada uno diseñado con tecnologías de vanguardia
              y enfoque en resultados medibles para nuestros clientes.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            ref={gridRef}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={gridVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.4, 
                  delay: gridVisible ? 0.05 * index : 0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="h-full"
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  industry={project.industry}
                  timeline={project.timeline}
                  roi={project.roi}
                  thumbnail={project.thumbnail}
                  previewImage={project.previewImage}
                  screenshots={project.screenshots}
                  achievements={project.achievements}
                  onViewDetails={handleViewDetails}
                  onViewImages={handleViewImages}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="body-normal text-neutral-white/70 mb-6">
              ¿Tienes un proyecto en mente?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Iniciar Proyecto
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewImages={handleViewImages}
        onConsultProject={handleConsultProject}
      />

      {/* Image Gallery */}
      <ImageGallery
        images={galleryImages}
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
        projectTitle={galleryTitle}
      />
    </>
  )
}