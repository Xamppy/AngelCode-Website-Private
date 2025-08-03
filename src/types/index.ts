export interface Project {
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

export interface Technology {
  name: string
  proficiency: number // 0-100 for progress bar
  icon: string
}

export interface Achievement {
  title: string
  description: string
  icon: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  startingPrice: number
  icon: string
  category: 'development' | 'ai' | 'devops' | 'consulting'
}

export interface Testimonial {
  id: string
  clientName: string
  role: string
  company: string
  testimonial: string
  rating: number
  avatar: string
  projectType: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  activities: string[]
  deliverables: string[]
  timeline: string
}