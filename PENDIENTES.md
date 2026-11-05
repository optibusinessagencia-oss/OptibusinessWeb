# Pendientes de la web (quitados del render de la home)

Textos de `copy.md` que dependen de un `[pendiente]` y NO se muestran en la página principal. Cuando Hugo los cierre, se añaden en `src/content.ts`.

- **FAQ "¿Y si llama alguien con una urgencia?"**: falta definir qué hace con urgencias (derivar, pasar la llamada o anotar con prioridad).
- **FAQ de datos, frase "Los datos personales se borran a los 30 días."**: pendiente de validar con asesor de protección de datos.
- **FAQ de datos, frase de grabación de llamadas**: confirmar si se graba y dónde se guarda.
- **Demo, línea `demo.aviso_datos`**: qué pasa con la voz durante la demo.
- **Prueba, "Sin dar datos de pago para empezar"**: Hugo debe confirmarlo.
- **Email de contacto** (footer y legales): falta.
- **Instagram en el pie**: por defecto no se enlaza.
- **Open Graph**: falta imagen 1200x630 (`og:image`) y dominio final (`canonical`, `og:url`, `schema.url`). Al tener dominio, añadir `metadataBase` en `src/app/layout.tsx`.
- **Agente de WhatsApp**: Hugo debe confirmar qué hace hoy (agenda directa, avisos). Se ha dejado el texto de copy.md sin la marca.
- **Titular del hero**: ahora la variante C; se cambia en `HERO_TITLE` de `src/content.ts`.
- **Banner de cookies**: la web no usa cookies no esenciales ni analítica, así que el banner solo informa. Si se añade analítica, hay que volver a poner Rechazar/Aceptar/Configurar (textos en `copy-legal.md`, sección 4).
- **Páginas legales**: borradores con `[pendiente: ...]` visibles (titular, NIF, domicilio, proveedores, plazos...). Revisar con un asesor antes de publicar.
