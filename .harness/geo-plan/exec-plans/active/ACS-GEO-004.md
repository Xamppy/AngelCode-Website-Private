# ACS-GEO-004: Crear página About / equipo

**Severidad:** 🔴 Critical
**Fase:** 1
**Tiempo estimado:** 90 min

## Síntoma

No existe `/about` ni `/nosotros` — dan 404. Esto es crítico para E-E-A-T porque
los AI crawlers y visitantes no pueden verificar quién está detrás de la empresa.

## Solución (basada en el diseño existente)

Esta información ya está disponible:
- **Nombre:** Felipe Orellana
- **Título:** Ingeniero en Informática
- **Rol:** Fundador y desarrollador principal
- **Background:** Trabajó digitalizando clínicas podológicas en Chile
- **Ubicación:** Viña del Mar, Región de Valparaíso
- **LinkedIn:** https://www.linkedin.com/in/felipe-orellana-álvarez-965984333/
- **GitHub:** https://github.com/Xamppy

Crear `src/app/about/page.tsx` siguiendo el mismo estilo visual (dark theme #0A0A0A,
acento #8B5CF6 purple, Framer Motion) con:
1. Hero: "Construyendo soluciones que transforman negocios"
2. Historia: cómo empezó Angel Code, la motivación
3. Perfil de Felipe: foto placeholder, bio, credenciales, stack
4. Valores del estudio
5. CTA de contacto

Además, agregar ruta en el Navigation para /about.

## Archivos afectados

- `src/app/about/page.tsx` — nueva página
- `src/components/ui/navigation.tsx` — agregar link "Nosotros"

## Verificación

- `https://www.angelcodesoluciones.cl/about` → 200 con contenido
- Diseño coherente con el resto del sitio
- `npm run build` pasa
