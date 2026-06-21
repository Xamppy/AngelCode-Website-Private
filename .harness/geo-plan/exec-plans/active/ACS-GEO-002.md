# ACS-GEO-002: Unificar canonical www vs non-www

**Severidad:** 🔴 Critical
**Fase:** 1
**Tiempo estimado:** 15 min

## Síntoma

El canonical apunta a `https://angelcodesoluciones.cl` (non-www) pero el sitio sirve
en `https://www.angelcodesoluciones.cl/`. Esto confunde a los crawlers y divide el SEO.

## Solución

**Opción A (recomendada):** Elegir www como versión canónica y redirigir non-www → www:
1. En Vercel: configurar `vercel.json` con redirect de `angelcodesoluciones.cl` a `www.angelcodesoluciones.cl`
2. Actualizar canonical en layout.tsx a `https://www.angelcodesoluciones.cl`
3. Actualizar OG url, sitemap, y structured data

**Opción B:** Elegir non-www como canónica y configurar Vercel para que www redirija a non-www.

## Archivos afectados

- `src/app/layout.tsx` — canonical, OG url
- `src/components/seo/structured-data.tsx` — URLs en @graph
- `public/sitemap.xml` — URLs base
- `vercel.json` o Vercel dashboard — redirect de dominio

## Verificación

- `curl -I https://angelcodesoluciones.cl` → 308 → `https://www.angelcodesoluciones.cl`
- Página canónica coincide con URL servida
- `npm run build` pasa
