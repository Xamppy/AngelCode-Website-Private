'use client'

import { useState, useEffect } from 'react'
import { X, Code, Calendar, TrendingUp, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Technology {
  name: string
  proficiency?: number
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
  screenshots: string[]
  architecture: string
  achievements: Achievement[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onViewImages?: (projectId: string) => void
  onConsultProject?: (projectTitle: string) => void
}

export function ProjectModal({ project, isOpen, onClose, onViewImages, onConsultProject }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'architecture'>('overview')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-4xl max-h-[90vh] bg-neutral-gray-dark border-2 border-purple-primary rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-gray-light/20">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <span className="text-purple-light font-mono">{project.industry}</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-neutral-gray-medium hover:bg-neutral-gray-light rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-gray-light/20">
          {[
            { id: 'overview', label: 'Overview', icon: Zap },
            { id: 'tech', label: 'Tech Stack', icon: Code },
            { id: 'architecture', label: 'Architecture', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'overview' | 'tech' | 'architecture')}
              className={cn(
                "flex items-center gap-2 px-6 py-4 font-mono text-sm transition-colors",
                activeTab === tab.id
                  ? "bg-purple-primary/20 text-purple-primary border-b-2 border-purple-primary"
                  : "text-neutral-white/70 hover:text-white hover:bg-neutral-gray-medium/50"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto scrollbar-thin">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Descripción del Proyecto</h3>
                <p className="text-neutral-white/80 leading-relaxed">{project.description}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-neutral-gray-medium/50 p-4 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-primary mb-2" />
                  <div className="text-sm text-neutral-white/60">Duración</div>
                  <div className="text-lg font-semibold text-white">{project.timeline}</div>
                </div>
                <div className="bg-neutral-gray-medium/50 p-4 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-neutral-white/60">ROI Cliente</div>
                  <div className="text-lg font-semibold text-green-400">{project.roi}</div>
                </div>
                <div className="bg-neutral-gray-medium/50 p-4 rounded-lg">
                  <Code className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-sm text-neutral-white/60">Tecnologías</div>
                  <div className="text-lg font-semibold text-white">{project.stack.length}</div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Logros del Proyecto</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-neutral-gray-medium/30 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 text-sm">{achievement.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{achievement.title}</h4>
                        <p className="text-xs text-neutral-white/70">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white font-mono">TECH STACK</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.stack.map((tech, index) => (
                  <div key={index} className="relative group">
                    {/* Pixel Art Tech Card */}
                    <div className="bg-neutral-black border-2 border-purple-primary/60 p-4 text-center hover:border-purple-primary hover:bg-purple-primary/10 transition-all duration-200 cursor-pointer"
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                         }}>
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <div className="text-sm text-purple-light font-mono font-semibold">{tech.name}</div>
                    </div>
                    
                    {/* Pixel Art Shadow */}
                    <div className="absolute top-2 left-2 w-full h-full bg-purple-primary/20 -z-10"
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                         }} />
                    
                    {/* Pixel Grid Overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                         style={{
                           backgroundImage: `
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                           `,
                           backgroundSize: '4px 4px'
                         }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Arquitectura del Sistema</h3>
              <div className="bg-neutral-gray-medium/30 p-6 rounded-lg">
                <p className="text-neutral-white/80 leading-relaxed">{project.architecture}</p>
              </div>
              
              {/* Architecture Diagram Placeholder */}
              <div className="bg-neutral-gray-medium/20 border-2 border-dashed border-neutral-gray-light/30 rounded-lg p-8 text-center">
                <Code className="w-12 h-12 text-neutral-gray-light/50 mx-auto mb-4" />
                <p className="text-neutral-white/50">Diagrama de arquitectura</p>
                <p className="text-sm text-neutral-white/30">Disponible en la documentación técnica</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-neutral-gray-light/20">
          <div className="flex gap-3">
            <button 
              onClick={() => {
                if (project && onViewImages) {
                  onViewImages(project.id)
                }
              }}
              disabled={!project?.screenshots || project.screenshots.length === 0}
              className="bg-purple-primary text-white px-4 py-2 rounded-lg font-mono text-sm hover:bg-purple-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Ver Imágenes ({project?.screenshots?.length || 0})
            </button>
            <button 
              onClick={() => {
                if (project && onConsultProject) {
                  onConsultProject(project.title)
                }
              }}
              className="bg-neutral-gray-medium text-white px-4 py-2 rounded-lg font-mono text-sm hover:bg-neutral-gray-light transition-colors"
            >
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Consultar Proyecto
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-white/70 hover:text-white transition-colors font-mono text-sm"
          >
            Cerrar [ESC]
          </button>
        </div>
      </div>
    </div>
  )
}