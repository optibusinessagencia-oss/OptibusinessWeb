'use client';

import { useEffect, useState } from 'react';

const KEY = 'ob-aviso-cookies';

// La web no usa cookies no esenciales ni analítica: el aviso solo informa.
// "Aviso de cookies" (pie) vuelve a abrirlo con el evento ob:cookies.
export default function CookieNotice() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setAbierto(true);
    } catch {
      setAbierto(true);
    }
    const abrir = () => setAbierto(true);
    window.addEventListener('ob:cookies', abrir);
    return () => window.removeEventListener('ob:cookies', abrir);
  }, []);

  const cerrar = () => {
    try {
      localStorage.setItem(KEY, '1');
    } catch {}
    setAbierto(false);
  };

  if (!abierto) return null;
  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-linea bg-superficie px-4 py-3 shadow-2xl sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-w-sm sm:rounded-xl sm:border"
    >
      <div className="flex items-center gap-3">
        <p className="flex-1 text-[0.8rem] leading-snug text-tenue">
          Esta web solo guarda en tu navegador que has visto este aviso.{' '}
          <a href="/cookies/" className="font-semibold text-turquesa underline underline-offset-2">
            Política de cookies
          </a>
        </p>
        <button type="button" onClick={cerrar} className="btn btn-primario !min-h-10 !px-4 !py-2 shrink-0 text-sm">
          Entendido
        </button>
      </div>
    </section>
  );
}
