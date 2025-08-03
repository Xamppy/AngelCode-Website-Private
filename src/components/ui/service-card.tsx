'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  price: string
  onRequestQuote: () => void
  className?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  onRequestQuote,
  className
}: ServiceCardProps) {
  return (
    <motion.div 
      className={cn("card group h-full flex flex-col", className)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-purple-primary/10 rounded-lg mb-6 group-hover:bg-purple-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-purple-primary" />
      </div>

      {/* Title */}
      <h3 className="card-title mb-4">{title}</h3>

      {/* Description */}
      <p className="body-normal mb-6 text-neutral-white/80 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-purple-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-neutral-white/90">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-6 mt-auto">
        <span className="text-sm text-neutral-white/60">Precio desde:</span>
        <div className="text-price text-2xl font-bold">{price}</div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onRequestQuote}
        className="w-full btn-primary group-hover:shadow-lg transition-all duration-200 mt-auto"
      >
        Solicitar Presupuesto
      </button>
    </motion.div>
  )
}