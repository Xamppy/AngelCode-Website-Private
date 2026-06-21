# ACS-GEO-005: Agregar Person + BreadcrumbList schema

**Severidad:** 🟡 High
**Fase:** 2
**Tiempo estimado:** 30 min

## Síntoma

El JSON-LD no tiene schema Person para el fundador ni BreadcrumbList para navegación.
AI crawlers no pueden identificar al creador ni la estructura del sitio.

## Solución

En `src/components/seo/structured-data.tsx`, agregar al @graph:

### Person (antes de Service):
```json
{
  "@type": "Person",
  "@id": "https://www.angelcodesoluciones.cl/#person",
  "name": "Felipe Orellana",
  "givenName": "Felipe",
  "familyName": "Orellana",
  "jobTitle": "Ingeniero en Informática",
  "knowsAbout": [
    "Desarrollo de software",
    "Arquitectura web",
    "Inteligencia Artificial",
    "DevOps",
    "Automatización empresarial"
  ],
  "affiliation": { "@id": "https://www.angelcodesoluciones.cl/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/felipe-orellana-álvarez-965984333/",
    "https://github.com/Xamppy"
  ]
}
```

### BreadcrumbList:
```json
{
  "@type": "BreadcrumbList",
  "@id": "https://www.angelcodesoluciones.cl/#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.angelcodesoluciones.cl" }
  ]
}
```

## Archivos afectados

- `src/components/seo/structured-data.tsx`

## Verificación

- Person schema aparece en el JSON-LD
- BreadcrumbList aparece en el JSON-LD
- `npm run build` pasa
