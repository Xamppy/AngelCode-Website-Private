'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/pixel-art/project-card'
import { ProjectModal } from '@/components/pixel-art/project-modal'
import { ImageGallery } from '@/components/ui/image-gallery'
import { useScrollAnimation } from '@/lib/hooks'
import projectsData, { Project } from '@/data/projects'

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
    const project = projectsData.find(p => p.id === projectId)
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
    const project = projectsData.find(p => p.id === projectId)
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
            {projectsData.map((project, index) => (
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