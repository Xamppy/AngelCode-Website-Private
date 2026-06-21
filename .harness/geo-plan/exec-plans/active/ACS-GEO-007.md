# ACS-GEO-007: Optimizar Service schema con keywords objetivo

**Severidad:** 🟡 High
**Fase:** 2
**Tiempo estimado:** 30 min

## Síntoma

Los Service schema actuales usan descripciones genéricas. Para rankear en
"desarrollo de software Chile" y "software a medida", cada Service debe incluir
keywords relevantes en sus descripciones y properties.

## Solución

En `src/components/seo/structured-data.tsx` y `src/data/services.ts`, enriquecer
las descripciones de servicios con keywords objetivo:

| Servicio | Keywords a incluir |
|----------|-------------------|
| Páginas Web & E-commerce | desarrollo web Chile, landing pages, tiendas online, Webpay, e-commerce |
| Sistemas para Negocios | software a medida, sistema POS, booking online, control inventario |
| Mantenimiento & Soporte | hosting Chile, mantenimiento web, seguridad sitio web |
| Automatización Inteligente | chatbots WhatsApp, automatización procesos, IA negocios |

## Archivos afectados

- `src/data/services.ts` — descripciones, features, benefits
- `src/components/seo/structured-data.tsx` — Service schema descriptions

## Implementación

1. Actualizar `longDescription` y `description` de cada servicio para incluir keywords
   de forma natural (sin keyword stuffing)
2. Agregar `keywords` field al Service schema en structured-data.tsx
3. No exagerar — las descripciones deben sonar naturales

## Verificación

- Cada Service schema incluye keywords relevantes
- `npm run build` pasa
- Las descripciones siguen sonando naturales y atractivas
