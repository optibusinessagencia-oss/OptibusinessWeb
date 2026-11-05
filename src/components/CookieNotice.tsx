'use client';

import { useEffect, useState } from 'react';

const KEY = 'ob-aviso-cookies';

// La web no usa cookies no esenciales ni analítica: el aviso solo informa.
// "Configurar cookies" (pie) vuelve a abrirlo con el evento ob:cookies.
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
      aria-label="Tu privacidad"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-linea bg-superficie p-5 shadow-2xl sm:left-auto sm:right-5 sm:bottom-5"
    >
      <p className="font-titulo text-lg font-bold">Tu privacidad</p>
      <p className="mt-1 text-[0.95rem] text-tenue">
        Uso cookies técnicas para que la web funcione.{' '}
        <a href="/cookies/" className="font-semibold text-turquesa underline underline-offset-4">
          Más información en la Política de cookies
        </a>
      </p>
      <button type="button" onClick={cerrar} className="btn btn-primario mt-4 w-full sm:w-auto">
        Entendido
      </button>
    </section>
  );
}
