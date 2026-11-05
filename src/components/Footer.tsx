'use client';

import { FOOTER, SITE, wa } from '@/content';

export default function Footer() {
  return (
    <footer className="border-t border-linea bg-fondo">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-titulo text-xl font-extrabold">
            OptiBusiness<span className="text-turquesa">.</span>
          </p>
          <p className="mt-3 max-w-sm text-tenue">{FOOTER.frase}</p>
        </div>
        <div>
          <p className="font-bold">WhatsApp</p>
          <a href={wa.footer} target="_blank" rel="noopener" className="mt-2 inline-block text-tenue underline underline-offset-4 hover:text-texto">
            {SITE.telefono}
          </a>
        </div>
        <nav aria-label="Legal">
          <ul className="space-y-2 text-tenue">
            <li><a href="/aviso-legal/" className="hover:text-texto">Aviso legal</a></li>
            <li><a href="/privacidad/" className="hover:text-texto">Privacidad</a></li>
            <li><a href="/cookies/" className="hover:text-texto">Cookies</a></li>
            <li>
              <button type="button" className="hover:text-texto" onClick={() => window.dispatchEvent(new Event('ob:cookies'))}>
                Aviso de cookies
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-linea px-5 py-5 text-center text-sm text-tenue">{FOOTER.copyright}</p>
    </footer>
  );
}
