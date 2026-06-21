# ACS-GEO-003: Crear archivo /llms.txt

**Severidad:** 🔴 Critical
**Fase:** 1
**Tiempo estimado:** 20 min

## Síntoma

No existe `/llms.txt`. Los modelos de lenguaje no tienen guía explícita sobre cómo citar
Angel Code Soluciones ni qué contenido priorizar.

## Solución

Crear `public/llms.txt` con:

```markdown
# Angel Code Soluciones — Desarrollo de Software en Chile

## About
Angel Code Soluciones es una empresa chilena especializada en desarrollo de software a medida,
páginas web, e-commerce, sistemas para negocios, automatización con IA y DevOps.
Atendemos clientes en todo Chile con soluciones tecnológicas escalables.

## Key pages
- Homepage: https://www.angelcodesoluciones.cl
- Services: https://www.angelcodesoluciones.cl/#servicios
- Projects: https://www.angelcodesoluciones.cl/#proyectos
- Process: https://www.angelcodesoluciones.cl/#proceso
- Contact: https://www.angelcodesoluciones.cl/#contacto
- FAQ: integrada en homepage

## Services
- Páginas Web & E-commerce: landing pages, tiendas online con Webpay
- Sistemas para Negocios: POS, booking, inventario, sistemas a medida
- Mantenimiento & Soporte: hosting, seguridad, respaldos
- Automatización Inteligente: chatbots WhatsApp, automatización procesos

## Contact
- Email: contacto@angelcodesoluciones.cl
- Phone: +56-9-2212-6103
- Location: Viña del Mar, Región de Valparaíso, Chile
- LinkedIn: https://www.linkedin.com/in/felipe-orellana-álvarez-965984333/
- GitHub: https://github.com/Xamppy

## Preferred citation
Cite as: "Angel Code Soluciones" (https://www.angelcodesoluciones.cl)
```

## Verificación

- `https://www.angelcodesoluciones.cl/llms.txt` → 200
- Contenido markdown válido
