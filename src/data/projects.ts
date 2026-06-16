export interface Technology {
  name: string
  icon: string
}

export interface Achievement {
  title: string
  description: string
  icon: string
}

export interface Project {
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
  repo?: string
  url?: string
  status: 'live' | 'development' | 'done' | 'prototype'
}

const projects: Project[] = [
  {
    id: 'motoforall',
    title: 'MotoForAll',
    description: 'E-commerce completo de neumaticos, repuestos y aceites para motos en Chile. Catalogo, carro de compras, Webpay, dashboard admin, inventario y modulo contable.',
    stack: [
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Drizzle ORM', icon: '🗄️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'NextAuth', icon: '🔐' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Transbank', icon: '💳' }
    ],
    industry: 'E-commerce',
    timeline: '3+ meses',
    roi: '+50% ventas',
    thumbnail: '/images/projects/motoforall.svg',
    screenshots: [],
    architecture: 'Full-stack con Next.js App Router, Drizzle ORM, PostgreSQL, NextAuth.js v5, Transbank Webpay, panel admin con inventario, gastos y cuenta corriente.',
    achievements: [
      { title: 'Completo', description: '15+ modulos funcionales', icon: '📦' },
      { title: 'Contabilidad', description: 'Gastos, IVA, cuenta corriente', icon: '💰' },
      { title: 'Produccion', description: 'Listo para deploy', icon: '🚀' }
    ],
    status: 'development'
  },
  {
    id: 'podoclinic',
    title: 'Podoclinic SaaS',
    description: 'Sistema integral de gestion para clinicas podologicas multi-profesional. Booking online, fichas clinicas, inventario, control de costos y reportes.',
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
    architecture: 'Microservicios con React frontend, Django REST API, PostgreSQL, Docker, Nginx proxy reverso y Cloudflare CDN.',
    achievements: [
      { title: 'Eficiencia', description: '70% mejora en gestion de pacientes', icon: '📈' },
      { title: 'Automatizacion', description: 'Procesos manuales automatizados', icon: '🤖' },
      { title: 'Satisfaccion', description: '5 estrellas de satisfaccion', icon: '⭐' }
    ],
    status: 'done'
  },
  {
    id: 'retorno-seguro',
    title: 'Retorno Seguro Chile',
    description: 'Plataforma web de conductores de reemplazo en la Region Metropolitana. Motor de tarifas hibrido, geobloqueo inteligente en Vercel Edge, integracion WhatsApp y Google Maps.',
    stack: [
      { name: 'React 19', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Vite 6', icon: '⚡' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Google Maps', icon: '🗺️' },
      { name: 'Framer Motion', icon: '🎬' },
      { name: 'Vercel Edge', icon: '🌍' }
    ],
    industry: 'Transporte',
    timeline: '1 mes',
    roi: 'Lighthouse 95+',
    thumbnail: '/images/projects/retorno-seguro.svg',
    screenshots: [],
    architecture: 'SPA con React 19 + Vite 6, motor de tarifas hibrido, Edge Middleware con geobloqueo, Google Maps para rutas, WhatsApp para agendamiento.',
    achievements: [
      { title: 'Performance', description: 'Lighthouse 95+ / FCP <1.2s', icon: '⚡' },
      { title: 'Edge Security', description: 'Geobloqueo + bot whitelist', icon: '🛡️' },
      { title: 'Bundle', description: 'Solo 180KB gzipped', icon: '📦' }
    ],
    repo: 'Xamppy/Retorno_Seguro',
    url: 'https://retornosegurochile.com',
    status: 'live'
  },
  {
    id: 'venta-mayorista',
    title: 'Minimarket Mayorista',
    description: 'Plataforma completa de ventas mayoristas con POS, gestion de inventario, clientes, pedidos y analisis de ventas en tiempo real.',
    stack: [
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'CI/CD', icon: '🔄' }
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
    architecture: 'Full-stack con Next.js y TypeScript, backend serverless con Supabase, PostgreSQL, autenticacion integrada.',
    achievements: [
      { title: 'ROI', description: '90% mejora en eficiencia operacional', icon: '💰' },
      { title: 'Escalabilidad', description: 'Arquitectura serverless escalable', icon: '📊' },
      { title: 'UX Moderna', description: 'Interfaz intuitiva y responsive', icon: '✨' }
    ],
    status: 'development'
  },
  {
    id: 'sistema-kinesiologico',
    title: 'Sistema Kinesiologico Deportivo',
    description: 'Sistema especializado para gestion kinesiologica de equipos de futbol profesional con seguimiento de lesiones, tratamientos y rendimiento.',
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
      '/images/projects/screenshots/kinesiologia/1.webp'
    ],
    architecture: 'React frontend, Django REST API backend, PostgreSQL, Docker, despliegue cloud con Nginx y Cloudflare.',
    achievements: [
      { title: 'Gestion Medica', description: 'Seguimiento completo de lesiones', icon: '🏥' },
      { title: 'Rendimiento', description: 'Analisis de performance deportiva', icon: '⚽' },
      { title: 'Usabilidad', description: 'Interfaz intuitiva', icon: '👨‍⚕️' }
    ],
    status: 'done'
  },
  {
    id: 'estetikflow',
    title: 'EstetikFlow',
    description: 'Landing page profesional con sistema de booking multi-profesional para clinicas de estetica y podologia. Diseno moderno con flow de reserva integrado.',
    stack: [
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎬' }
    ],
    industry: 'Salud',
    timeline: '2 semanas',
    roi: 'Landing rapida',
    thumbnail: '/images/projects/estetikflow.svg',
    screenshots: [],
    architecture: 'Landing page con Next.js App Router, diseno responsivo mobile-first, animaciones Framer Motion, formulario con Zod.',
    achievements: [
      { title: 'Rapido', description: 'Landing en 2 semanas', icon: '⚡' },
      { title: 'Moderno', description: 'Diseno premium dark mode', icon: '🎨' },
      { title: 'Booking', description: 'Flow de reserva integrado', icon: '📅' }
    ],
    repo: 'Xamppy/estetikflow-landing',
    status: 'done'
  },
  {
    id: 'cinematch',
    title: 'CineMatch',
    description: 'App de descubrimiento de peliculas con recomendaciones personalizadas.',
    stack: [],
    industry: 'Entretenimiento',
    timeline: 'Prototipo',
    roi: 'Proyecto personal',
    thumbnail: '/images/projects/cinematch.svg',
    screenshots: [],
    architecture: 'App de descubrimiento cinematografico con recomendaciones personalizadas.',
    achievements: [
      { title: 'Personal', description: 'Proyecto de aprendizaje', icon: '📚' }
    ],
    repo: 'Xamppy/CineMatch',
    status: 'prototype'
  },
  {
    id: 'minimarket-almacen',
    title: 'Minimarket Almacen',
    description: 'Sistema POS con gestion de inventario, control de stock, ventas y reportes para almacen de barrio. Interfaz simple para uso diario.',
    stack: [
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'TailwindCSS', icon: '🎨' }
    ],
    industry: 'Retail',
    timeline: '1 mes',
    roi: '+60% control inventario',
    thumbnail: '/images/projects/minimarket-almacen.svg',
    screenshots: [],
    architecture: 'Sistema POS web con Next.js, PostgreSQL, interfaz optimizada para uso tactil en tabletas.',
    achievements: [
      { title: 'Simple', description: 'Interfaz optimizada para POS', icon: '✓' },
      { title: 'Control', description: 'Stock en tiempo real', icon: '📦' }
    ],
    status: 'done'
  }
]

export default projects
