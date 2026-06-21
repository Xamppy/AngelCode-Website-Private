'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavigationProps {
  className?: string
}

const navigationItems = [
  { name: 'Inicio', href: '#hero', route: '/' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Nosotros', href: '/about', isPage: true },
  { name: 'Proceso', href: '#process' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#contact' },
]

export function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position (only on homepage)
      if (isHomePage) {
        const sections = navigationItems
          .filter(item => !item.isPage)
          .map(item => item.href.substring(1))
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        
        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.isPage) return // Link handles it
    if (item.route && !isHomePage) {
      window.location.href = item.route
      return
    }
    scrollToSection(item.href)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-neutral-gray-dark/95 backdrop-blur-lg border-b border-neutral-gray-light/20'
          : 'bg-transparent',
        className
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-purple-primary hover:text-purple-hover transition-colors"
            >
              Angel Code
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'nav-link',
                    pathname === item.href && 'active'
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    'nav-link',
                    isHomePage && activeSection === item.href.substring(1) && 'active'
                  )}
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-body hover:text-purple-primary transition-colors"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-gray-dark/95 backdrop-blur-lg border-t border-neutral-gray-light/20">
              {navigationItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded-md text-base font-medium nav-link',
                      pathname === item.href && 'active'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded-md text-base font-medium nav-link',
                      isHomePage && activeSection === item.href.substring(1) && 'active'
                    )}
                    aria-current={
                      isHomePage && activeSection === item.href.substring(1) ? 'page' : undefined
                    }
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
