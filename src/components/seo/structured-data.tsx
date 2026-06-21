import services from '@/data/services'

function getFaqSchema() {
  return {
    "@type": "FAQPage",
    "@id": "https://www.angelcodesoluciones.cl/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma desarrollar un sitio web o sistema?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del alcance, pero en promedio una landing page toma 1-2 semanas, un e-commerce completo 3-4 semanas, y un sistema a medida 4-8 semanas. Durante la consulta gratuita te damos un cronograma exacto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen hosting y mantenimiento después del desarrollo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, contamos con planes de mantenimiento desde $50.000/mes que incluyen hosting, dominio, respaldos automáticos, actualizaciones de seguridad y soporte técnico."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajan con empresas de todo Chile o solo en la Región de Valparaíso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con clientes de todo Chile de forma remota. Usamos videollamadas para las reuniones y metodologías ágiles con entregas constantes. No necesitas estar en Viña del Mar para trabajar con nosotros."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué métodos de pago aceptan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con pagos por transferencia bancaria y Webpay. Generalmente acordamos un 50% al inicio y 50% contra entrega, con planes de pago flexibles según el alcance del proyecto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen garantía o soporte post-entrega?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, incluimos 3 meses de soporte gratuito después de la entrega del proyecto para corregir cualquier detalle y asegurarnos de que todo funcione correctamente. También ofrecemos soporte extendido a través de nuestros planes de mantenimiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito tener conocimientos técnicos para administrar mi web o sistema?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, diseñamos interfaces intuitivas y fáciles de usar. Te capacitamos en el uso del sistema y te entregamos documentación clara. Si surge alguna duda, nuestro soporte está siempre disponible."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo ver un demo o prototipo antes de decidirme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Durante la etapa de diseño creamos prototipos interactivos que puedes probar y validar antes de comenzar el desarrollo. Así te aseguras de que el resultado final sea exactamente lo que necesitas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Integran Webpay para tiendas online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todas nuestras tiendas online incluyen integración con Webpay (Transbank) para que puedas recibir pagos con tarjetas de débito y crédito de forma segura. También soportamos otros medios de pago según tu necesidad."
        }
      }
    ]
  }
}

function getReviewSchema() {
  return [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Esmeralda Valdevenito V." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Angel Code transformó completamente nuestra gestión clínica. El sistema ordenó de manera eficiente nuestros pacientes con sus fichas clínicas y mejoró significativamente nuestro negocio organizando el stock y controlando los costos.",
      "itemReviewed": {
        "@type": "Service",
        "name": "Sistema de Gestión Clínica",
        "provider": { "@id": "https://www.angelcodesoluciones.cl/#organization" }
      },
      "publisher": { "@id": "https://www.angelcodesoluciones.cl/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Roberto Silva" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "La aplicación desarrollada por Angel Code está perfectamente organizada y me proporciona vistas completas de todo mi negocio. Ahora puedo tomar decisiones informadas basadas en datos reales.",
      "itemReviewed": {
        "@type": "Service",
        "name": "Sistema de Ventas Mayoristas",
        "provider": { "@id": "https://www.angelcodesoluciones.cl/#organization" }
      },
      "publisher": { "@id": "https://www.angelcodesoluciones.cl/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Dr. Carlos Mendoza" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Excelente producto, fue exactamente lo que necesitábamos para el seguimiento kinesiológico del equipo. Es muy fácil de utilizar, tiene todo muy intuitivo y visual.",
      "itemReviewed": {
        "@type": "Service",
        "name": "Sistema Kinesiológico Deportivo",
        "provider": { "@id": "https://www.angelcodesoluciones.cl/#organization" }
      },
      "publisher": { "@id": "https://www.angelcodesoluciones.cl/#organization" }
    }
  ]
}

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.angelcodesoluciones.cl/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.angelcodesoluciones.cl" }
        ]
      },
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://www.angelcodesoluciones.cl/#organization",
        "name": "Angel Code Soluciones",
        "url": "https://www.angelcodesoluciones.cl",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.angelcodesoluciones.cl/images/og-image.png",
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
        "industry": "Software Development",
        "priceRange": "$50000 - $500000",
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "18:00" }
        ],
        "areaServed": ["Viña del Mar", "Valparaíso", "Chile"]
      },
      {
        "@type": "Person",
        "@id": "https://www.angelcodesoluciones.cl/#person",
        "name": "Felipe Orellana",
        "givenName": "Felipe",
        "familyName": "Orellana",
        "jobTitle": "Ingeniero en Informatica",
        "knowsAbout": ["Desarrollo de software", "Arquitectura web", "Inteligencia Artificial", "Automatizacion empresarial"],
        "affiliation": { "@id": "https://www.angelcodesoluciones.cl/#organization" },
        "sameAs": ["https://www.linkedin.com/in/felipe-orellana-alvarez-965984333/", "https://github.com/Xamppy"]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.angelcodesoluciones.cl/#website",
        "url": "https://www.angelcodesoluciones.cl",
        "name": "Angel Code Soluciones",
        "description": "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial.",
        "publisher": {
          "@id": "https://www.angelcodesoluciones.cl/#organization"
        },
        "inLanguage": "es-CL"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.angelcodesoluciones.cl/#webpage",
        "url": "https://www.angelcodesoluciones.cl",
        "name": "Angel Code Soluciones - Desarrollo de Software y Consultoría Tecnológica",
        "isPartOf": {
          "@id": "https://www.angelcodesoluciones.cl/#website"
        },
        "about": {
          "@id": "https://www.angelcodesoluciones.cl/#organization"
        },
        "description": "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial.",
        "inLanguage": "es-CL"
      },
      ...services.map(s => ({
        "@type": "Service",
        "name": s.title,
        "description": s.description,
        "provider": { "@id": "https://www.angelcodesoluciones.cl/#organization" },
        "serviceType": s.id,
        "keywords": ({
          'web-development': 'desarrollo web Chile, paginas web, landing pages, e-commerce, tienda online',
          'business-systems': 'software a medida, sistema POS, booking online, control inventario, desarrollo sistemas',
          'maintenance-support': 'mantenimiento web, hosting Chile, seguridad sitio web, soporte tecnico',
          'automation': 'chatbot WhatsApp, automatizacion procesos, IA negocios, chatbot web'
        } as Record<string, string>)[s.id] || '',
        "areaServed": "Chile"
      })),
      getFaqSchema(),
      ...getReviewSchema()
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
