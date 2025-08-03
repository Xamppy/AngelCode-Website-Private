'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    title?: string
    description?: string
  }[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
  projectTitle: string
}

export function ImageGallery({ 
  images, 
  isOpen, 
  onClose, 
  initialIndex = 0,
  projectTitle 
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      document.body.style.overflow = 'hidden'
      // Precargar imagen actual y adyacentes
      const toLoad = new Set([initialIndex])
      if (initialIndex > 0) toLoad.add(initialIndex - 1)
      if (initialIndex < images.length - 1) toLoad.add(initialIndex + 1)
      setLoadedImages(toLoad)
    } else {
      document.body.style.overflow = 'unset'
      setIsZoomed(false)
      setLoadedImages(new Set())
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, initialIndex, images.length])

  // Precargar imágenes adyacentes cuando cambia el índice
  useEffect(() => {
    if (isOpen) {
      setLoadedImages(prev => {
        const newLoaded = new Set(prev)
        newLoaded.add(currentIndex)
        if (currentIndex > 0) newLoaded.add(currentIndex - 1)
        if (currentIndex < images.length - 1) newLoaded.add(currentIndex + 1)
        return newLoaded
      })
    }
  }, [currentIndex, isOpen, images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
        case ' ':
          e.preventDefault()
          setShowThumbnails(!showThumbnails)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, showThumbnails, goToNext, goToPrevious, onClose])

  const goToImage = (index: number) => {
    setCurrentIndex(index)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = images[currentIndex].src
    link.download = `${projectTitle}-${currentIndex + 1}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg">{projectTitle}</h3>
              <p className="text-white/70 text-sm">
                {currentIndex + 1} de {images.length} imágenes
              </p>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleZoom()
                }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                title={isZoomed ? "Reducir zoom" : "Ampliar"}
              >
                {isZoomed ? (
                  <ZoomOut className="w-5 h-5 text-white" />
                ) : (
                  <ZoomIn className="w-5 h-5 text-white" />
                )}
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  downloadImage()
                }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                title="Descargar imagen"
              >
                <Download className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowThumbnails(!showThumbnails)
                }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                title="Mostrar/ocultar miniaturas"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                title="Cerrar galería"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div 
          className="absolute inset-0 flex items-center justify-center p-4 pt-20 pb-32"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: isZoomed ? 1.3 : 1,
              transition: { duration: 0.3 }
            }}
            className={cn(
              "relative flex items-center justify-center",
              isZoomed && "cursor-zoom-out overflow-auto"
            )}
            style={{ width: '90vw', height: '80vh' }}
            onClick={isZoomed ? toggleZoom : undefined}
          >
            {loadedImages.has(currentIndex) ? (
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={800}
                height={600}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: '90vw', maxHeight: '80vh' }}
                priority
              />
            ) : (
              <div className="w-full h-full bg-neutral-gray-medium rounded-lg shadow-2xl flex items-center justify-center min-h-[400px]" style={{ maxWidth: '90vw', maxHeight: '80vh' }}>
                <div className="w-8 h-8 border-2 border-purple-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            
            {/* Image Info Overlay */}
            {currentImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <h4 className="text-white font-medium">{currentImage.title}</h4>
                {currentImage.description && (
                  <p className="text-white/70 text-sm mt-1">{currentImage.description}</p>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Thumbnails */}
        <AnimatePresence>
          {showThumbnails && images.length > 1 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={cn(
                      "relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                      index === currentIndex
                        ? "border-purple-primary scale-110"
                        : "border-white/20 hover:border-white/40"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={80}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-purple-primary/20" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading indicator for next/prev images */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-purple-primary scale-125"
                    : "bg-white/30"
                )}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}