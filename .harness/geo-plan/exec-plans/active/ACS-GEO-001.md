# ACS-GEO-001: Corregir og-image (existe como .svg, referencia como .png)

**Severidad:** 🔴 Critical
**Fase:** 1
**Tiempo estimado:** 15 min

## Síntoma

`src/app/layout.tsx` línea 66 referencia `https://angelcodesoluciones.cl/images/og-image.png`
pero el archivo real es `public/images/og-image.svg`. AI crawlers (OpenAI, Facebook, Twitter)
reciben 404 al intentar cargar la OG image.

## Solución

**Opción recomendada:** Convertir el SVG a PNG y guardarlo en la misma ruta esperada.

1. Usar `sharp` o `rsvg-convert` para convertir el SVG a PNG 1200×630
2. O cambiar la referencia en layout.tsx a `.svg` (pero PNG es más compatible para OG)

## Archivos afectados

- `public/images/` — convertir og-image.svg → og-image.png
- `src/components/seo/structured-data.tsx` línea 128 — también referencia `og-image.png`

## Verificación

- `curl -I https://angelcodesoluciones.cl/images/og-image.png` → 200
- Facebook Sharing Debugger muestra la imagen
- `npm run build` pasa
