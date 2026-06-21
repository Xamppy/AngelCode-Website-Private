# ACS-GEO-006: Agregar LocalBusiness schema

**Severidad:** 🟡 High
**Fase:** 2
**Tiempo estimado:** 15 min

## Síntoma

El schema tiene Organization sin subtipo LocalBusiness. Para aparecer en búsquedas
locales "desarrollo software Viña del Mar" o "desarrollo web Chile" se necesita
LocalBusiness con datos de ubicación, horario y servicio local.

## Solución

En `src/components/seo/structured-data.tsx`, modificar el Organization para que
también sea LocalBusiness (o agregar un nodo separado):

```json
{
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.angelcodesoluciones.cl/#organization",
  ...
  "priceRange": "$50.000 - $500.000",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "18:00" }
  ],
  "areaServed": [
    { "@type": "City", "name": "Viña del Mar" },
    { "@type": "City", "name": "Valparaíso" },
    { "@type": "Country", "name": "Chile" }
  ]
}
```

## Archivos afectados

- `src/components/seo/structured-data.tsx`

## Verificación

- LocalBusiness aparece en JSON-LD (puede ser array de types)
- priceRange y openingHours están presentes
- `npm run build` pasa
