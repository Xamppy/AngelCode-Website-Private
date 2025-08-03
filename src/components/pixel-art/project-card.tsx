'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Trophy } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'
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

interface ProjectCardProps {
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
  achievements: Achievement[]
  onViewDetails: (id: string) => void
  onViewImages?: (id: string) => void
  className?: string
}

export function ProjectCard({
  id,
  title,
  description,
  stack,
  industry,
  timeline,
  roi,
  thumbnail,
  previewImage,
  screenshots,
  achievements,
  onViewDetails,
  onViewImages,
  className
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleCardClick = () => {
    setLoadingState('loading')
    setTimeout(() => {
      setLoadingState('success')
      setTimeout(() => {
        onViewDetails(id)
        setLoadingState('idle')
      }, 500)
    }, 1000)
  }

  return (
    <div
      className={cn(
        "pixel-card bg-neutral-gray-dark border-2 border-neutral-gray-light rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-primary/20 h-full flex flex-col min-h-[700px] sm:min-h-[600px] lg:min-h-[550px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Thumbnail/Header */}
      <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
        {/* Background Preview Image */}
        {previewImage && (
          <Image
            src={previewImage}
            alt={`${title} - Preview`}
            fill
            className="object-cover opacity-60"
          />
        )}

        {/* Project Thumbnail - Only show if no preview image */}
        {!previewImage && (
          <OptimizedImage
            src={thumbnail}
            alt={`${title} - ${industry} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-80"
          />
        )}

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/80 via-transparent to-transparent" />

        {/* Industry Icon */}
        <div className="absolute top-4 left-4 z-10">
          <div className="w-12 h-12 bg-purple-primary/20 backdrop-blur-sm border-2 border-purple-primary rounded-lg flex items-center justify-center">
            <span className="text-2xl">{getIndustryIcon(industry)}</span>
          </div>
        </div>

        {/* Loading/Success State */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {loadingState === 'idle' && (
            <div className={cn(
              "transition-all duration-300 bg-purple-primary/20 backdrop-blur-sm rounded-full p-4",
              isHovered ? "scale-110 opacity-100" : "scale-100 opacity-70"
            )}>
              <Play className="w-8 h-8 text-purple-primary" />
            </div>
          )}
          
          {loadingState === 'loading' && (
            <div className="flex flex-col items-center gap-2 bg-neutral-black/80 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 border-2 border-purple-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-purple-primary font-mono text-sm">Loading...</span>
            </div>
          )}
          
          {loadingState === 'success' && (
            <div className="flex flex-col items-center gap-2 animate-pulse bg-yellow-400/20 backdrop-blur-sm rounded-lg p-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 font-mono text-sm font-bold">Success!</span>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-purple-primary/20 animate-pulse" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        {/* Title and Industry */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <span className="text-sm text-purple-light font-mono">{industry}</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-white/80 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3 sm:mb-4">
          <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 font-mono">TECH STACK</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {stack.slice(0, 4).map((tech, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Pixel Art Tech Card */}
                <div className="bg-neutral-black border-2 border-purple-primary/60 p-1.5 sm:p-2 text-center hover:border-purple-primary hover:bg-purple-primary/10 transition-all duration-200 cursor-pointer"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                     }}>
                  <div className="text-sm sm:text-lg mb-0.5 sm:mb-1">{tech.icon}</div>
                  <div className="text-[10px] sm:text-xs text-purple-light font-mono leading-tight">{tech.name}</div>
                </div>
                
                {/* Pixel Art Shadow */}
                <div className="absolute top-1 left-1 w-full h-full bg-purple-primary/20 -z-10"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                     }} />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-3 sm:mb-4">
          <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 font-mono">ACHIEVEMENTS</h4>
          <div className="flex gap-1.5 sm:gap-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div
                key={index}
                className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400/20 border border-yellow-400 rounded flex items-center justify-center group relative"
                title={achievement.title}
              >
                <span className="text-yellow-400 text-[10px] sm:text-xs">{achievement.icon}</span>
                
                {/* Tooltip - Fixed positioning */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-neutral-black border border-yellow-400/50 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  {achievement.title}
                  {/* Arrow */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-neutral-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-neutral-gray-light/20">
          <div>
            <span className="text-[10px] sm:text-xs text-neutral-white/60 font-mono">TIME</span>
            <div className="text-xs sm:text-sm font-semibold text-white">{timeline}</div>
          </div>
          <div>
            <span className="text-[10px] sm:text-xs text-neutral-white/60 font-mono">ROI</span>
            <div className="text-xs sm:text-sm font-semibold text-purple-primary">{roi}</div>
          </div>
        </div>

        {/* Action Buttons - Improved mobile responsivity */}
        <div className="flex flex-col gap-2 mt-auto pt-3 sm:pt-4">
          <button 
            onClick={(e) => {
              e.stopPropagation()
              onViewImages?.(id)
            }}
            disabled={!screenshots || screenshots.length === 0}
            className="w-full bg-purple-primary/20 border border-purple-primary text-purple-primary px-3 py-3 rounded text-xs sm:text-sm font-mono hover:bg-purple-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
            </svg>
            <span className="truncate">Ver Imágenes ({screenshots?.length || 0})</span>
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              // Guardar el proyecto seleccionado para el formulario de contacto
              localStorage.setItem('selectedProject', title)
              
              // Scroll al formulario de contacto
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full bg-neutral-gray-medium border border-neutral-gray-light text-white px-3 py-3 rounded text-xs sm:text-sm font-mono hover:bg-neutral-gray-light transition-colors min-h-[44px] flex items-center justify-center"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="truncate">Consultar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function getIndustryIcon(industry: string): string {
  const icons: Record<string, string> = {
    'Salud': '🏥',
    'Retail': '🛒',
    'Salud y deporte': '⚽',
    'Logística': '📱',
    'E-commerce': '🛍️',
    'Fintech': '💳',
    'Educación': '📚',
    'default': '💻'
  }
  
  return icons[industry] || icons.default
}