export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://angelcodesoluciones.cl/#organization",
        "name": "Angel Code Soluciones",
        "url": "https://angelcodesoluciones.cl",
        "logo": {
          "@type": "ImageObject",
          "url": "https://angelcodesoluciones.cl/images/og-image.png",
          "width": 1200,
          "height": 630
        },
        "description": "Empresa especializada en desarrollo de software, integración de IA, DevOps y automatización empresarial en Chile.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CL",
          "addressRegion": "Región de Valparaíso",
          "addressLocality": "Viña del Mar"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+56-9-2212-6103",
          "contactType": "customer service",
          "email": "contacto@angelcodesoluciones.cl",
          "availableLanguage": "Spanish"
        },
        "sameAs": [
          "https://www.linkedin.com/in/felipe-orellana-álvarez-965984333/",
          "https://github.com/Xamppy"
        ],
        "foundingDate": "2025",
        "numberOfEmployees": "1",
        "industry": "Software Development"
      },
      {
        "@type": "WebSite",
        "@id": "https://angelcodesoluciones.cl/#website",
        "url": "https://angelcodesoluciones.cl",
        "name": "Angel Code Soluciones",
        "description": "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial.",
        "publisher": {
          "@id": "https://angelcodesoluciones.cl/#organization"
        },
        "inLanguage": "es-CL"
      },
      {
        "@type": "WebPage",
        "@id": "https://angelcodesoluciones.cl/#webpage",
        "url": "https://angelcodesoluciones.cl",
        "name": "Angel Code Soluciones - Desarrollo de Software y Consultoría Tecnológica",
        "isPartOf": {
          "@id": "https://angelcodesoluciones.cl/#website"
        },
        "about": {
          "@id": "https://angelcodesoluciones.cl/#organization"
        },
        "description": "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial.",
        "inLanguage": "es-CL"
      },
      {
        "@type": "Service",
        "name": "Desarrollo de Software",
        "description": "Creamos aplicaciones web, móviles y de escritorio personalizadas que se adaptan perfectamente a las necesidades de tu negocio.",
        "provider": {
          "@id": "https://angelcodesoluciones.cl/#organization"
        },
        "serviceType": "Software Development",
        "areaServed": "Chile"
      },
      {
        "@type": "Service",
        "name": "Integración de IA",
        "description": "Implementamos soluciones de inteligencia artificial para automatizar procesos y mejorar la toma de decisiones en tu empresa.",
        "provider": {
          "@id": "https://angelcodesoluciones.cl/#organization"
        },
        "serviceType": "AI Integration",
        "areaServed": "Chile"
      },
      {
        "@type": "Service",
        "name": "DevOps & Automatización",
        "description": "Optimizamos tus procesos de desarrollo y despliegue con herramientas modernas de DevOps y automatización.",
        "provider": {
          "@id": "https://angelcodesoluciones.cl/#organization"
        },
        "serviceType": "DevOps Consulting",
        "areaServed": "Chile"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}