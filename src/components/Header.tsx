'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV, wa } from '@/content';

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-linea/70 bg-fondo/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="font-titulo text-xl font-extrabold tracking-tight">
          OptiBusiness<span className="text-turquesa">.</span>
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.h} href={`/${n.h}`} className="text-[0.95rem] text-tenue transition-colors hover:text-texto">
              {n.t}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa.menu} target="_blank" rel="noopener" className="btn btn-primario !min-h-10 !px-4 !py-2 text-[0.95rem]">
            Escríbeme
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-linea lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {abierto ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-linea bg-fondo px-5 pb-4 lg:hidden">
          <ul>
            {NAV.map((n) => (
              <li key={n.h}>
                <Link
                  href={`/${n.h}`}
                  onClick={() => setAbierto(false)}
                  className="block border-b border-linea/60 py-3 text-lg"
                >
                  {n.t}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
