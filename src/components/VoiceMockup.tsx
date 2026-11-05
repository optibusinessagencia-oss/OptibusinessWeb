'use client';

import { motion } from 'framer-motion';
import { VOZ } from '@/content';
import { useClock } from './useClock';

const PASO = 3; // segundos por línea
const BARRAS = [0.4, 0.8, 0.55, 1, 0.65, 0.9, 0.45, 0.75, 1, 0.6, 0.85, 0.5, 0.95, 0.7, 0.4, 0.8, 0.6, 1, 0.5, 0.75, 0.9, 0.55, 0.7, 0.4];

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export default function VoiceMockup() {
  const n = VOZ.lineas.length;
  const { t, reduce } = useClock(n * PASO + 4);
  const visibles = Math.max(0, Math.floor(t / PASO) + 1);
  const hablando = visibles === 0 ? 0 : VOZ.lineas[Math.min(visibles, n) - 1].quien === 'AGENTE' ? 1 : 0;
  const enCurso = !reduce && visibles <= n && t < n * PASO;
  const crono = reduce ? 7 : 7 + Math.max(0, Math.min(t, n * PASO));

  return (
    <figure aria-label="Ejemplo de llamada atendida" className="overflow-hidden rounded-2xl border border-linea bg-superficie shadow-2xl">
      <div className="flex items-start justify-between gap-3 border-b border-linea px-4 py-3">
        <div>
          <p className="font-bold leading-tight">{VOZ.cabecera}</p>
          <p className="mt-0.5 text-sm text-tenue">
            Llamada en curso · <span className="tabular-nums">{fmt(crono)}</span>
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-turquesa/15 px-3 py-1 text-sm font-bold text-turquesa">{VOZ.chip}</span>
      </div>

      <div className="flex items-center gap-4 px-4 py-4">
        <div className={`flex h-10 flex-1 items-center gap-[3px] ${enCurso ? 'onda-activa' : ''}`} aria-hidden="true">
          {BARRAS.map((h, i) => (
            <span
              key={i}
              className="onda-barra block w-full max-w-[6px] rounded-full bg-turquesa"
              style={{ height: `${h * 100}%`, animationDelay: `${(i % 6) * 0.12}s`, opacity: enCurso ? 1 : 0.5 }}
            />
          ))}
        </div>
        <p className="min-w-[8.5rem] text-right text-xs font-bold tracking-wide text-turquesa" aria-live="off">
          {VOZ.hablando[hablando]}
        </p>
      </div>

      <ol className="flex flex-col gap-2 px-4 pb-4">
        {VOZ.lineas.map((l, i) => {
          const on = i < visibles;
          const agente = l.quien === 'AGENTE';
          return (
            <motion.li
              key={i}
              initial={false}
              animate={{ opacity: on ? 1 : 0, y: on || reduce ? 0 : 8 }}
              transition={{ duration: reduce ? 0 : 0.35 }}
              className={`rounded-xl px-3.5 py-2 text-[0.92rem] leading-snug ${agente ? 'bg-turquesa/10' : 'bg-fondo/60'}`}
            >
              <span className={`block text-[0.7rem] font-bold tracking-wide ${agente ? 'text-turquesa' : 'text-tenue'}`}>{l.quien}</span>
              {l.texto}
            </motion.li>
          );
        })}
      </ol>
      <figcaption className="border-t border-linea px-4 py-2 text-xs text-tenue">{VOZ.aviso}</figcaption>
    </figure>
  );
}
