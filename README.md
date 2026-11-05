# Web OptiBusiness

Next.js (App Router) + TypeScript + Tailwind v4 + Framer Motion, export estático.

## Arrancar
```
npm install
npm run dev      # http://localhost:3000
npm run build    # genera la carpeta out/
```

Los textos están en `src/content.ts` y las páginas legales en `src/app/*/page.tsx`. El titular del hero se cambia con `HERO_TITLE`.

## Desplegar en Vercel
1. Sube este proyecto a un repositorio de GitHub (si subes la carpeta `web-optibusiness` entera, en Vercel pon "Root Directory" = `site`).
2. En vercel.com: Add New > Project, elige el repo. Vercel detecta Next.js; no hay variables de entorno.
3. Deploy. Con `output: 'export'` se genera la carpeta `out/`, que Vercel sirve tal cual.

Antes de publicar, revisa `PENDIENTES.md`.
