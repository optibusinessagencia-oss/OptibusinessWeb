'use client';

import { motion } from 'framer-motion';
import { WA_CHAT } from '@/content';
import { useClock } from './useClock';

const PASO = 1.9; // segundos por mensaje

export default function WhatsAppMockup() {
  const n = WA_CHAT.msgs.length;
  const { t, reduce } = useClock(n * PASO + 5);
  const visibles = Math.max(0, Math.floor(t / PASO) + 1);
  const confirmada = visibles >= n;

  return (
    <figure className="relative" aria-label="Ejemplo de conversación por WhatsApp">
      <motion.span
        className="absolute -left-2 -top-4 z-10 rounded-full bg-turquesa px-4 py-1.5 text-sm font-bold text-fondo shadow-lg sm:-left-6"
        animate={{ y: reduce ? 0 : [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {WA_CHAT.badges[0]}
      </motion.span>

      <div className="overflow-hidden rounded-2xl border border-linea bg-[#0b1a2c] shadow-2xl">
        <div className="flex items-center gap-3 bg-[#0e3b3a] px-4 py-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#14524f] text-sm font-bold" aria-hidden="true">
            {WA_CHAT.avatar}
          </span>
          <div className="leading-tight">
            <p className="font-bold">{WA_CHAT.nombre}</p>
            <p className="text-sm text-[#a7f3d0]">{WA_CHAT.estado}</p>
          </div>
          <span className="ml-auto text-xl text-[#a7f3d0]" aria-hidden="true">⋯</span>
        </div>

        <ol className="flex flex-col gap-2 px-3 py-4 sm:px-4">
          {WA_CHAT.msgs.map((m, i) => {
            const mio = m.quien === 'paciente';
            const on = i < visibles;
            return (
              <motion.li
                key={i}
                initial={false}
                animate={{ opacity: on ? 1 : 0, y: on || reduce ? 0 : 8 }}
                transition={{ duration: reduce ? 0 : 0.35 }}
                className={`max-w-[84%] rounded-2xl px-3.5 py-2 text-[0.95rem] leading-snug ${
                  mio ? 'self-end rounded-br-md bg-[#0f5c4f]' : 'self-start rounded-bl-md bg-[#17304b]'
                }`}
              >
                {m.texto}
                <span className="mt-1 flex items-center justify-end gap-1 text-[0.7rem] text-[#9fb4c9]">
                  {m.hora}
                  {mio && <span className="text-[#5eead4]" aria-hidden="true">✓✓</span>}
                </span>
              </motion.li>
            );
          })}
        </ol>
        <figcaption className="border-t border-linea/70 px-4 py-2 text-xs text-tenue">{WA_CHAT.aviso}</figcaption>
      </div>

      <motion.span
        className="absolute -bottom-4 right-1 z-10 rounded-full bg-superficie px-4 py-1.5 text-sm font-bold text-turquesa ring-1 ring-turquesa sm:-right-4"
        initial={false}
        animate={{ opacity: confirmada ? 1 : 0, y: confirmada || reduce ? 0 : 6 }}
        transition={{ duration: reduce ? 0 : 0.4 }}
      >
        {WA_CHAT.badges[1]}
      </motion.span>
    </figure>
  );
}
