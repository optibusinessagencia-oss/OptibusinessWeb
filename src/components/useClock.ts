'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Reloj en décimas de segundo que vuelve a empezar tras `total` segundos.
// Con movimiento reducido devuelve el final (todo visible y quieto).
export function useClock(total: number, delay = 0.6) {
  const reduce = useReducedMotion();
  const [t, setT] = useState(-delay);
  const [listo, setListo] = useState(false);
  useEffect(() => {
    if (reduce) return;
    setListo(true);
    const id = setInterval(() => setT((v) => (v + 0.2 > total ? -delay : v + 0.2)), 200);
    return () => clearInterval(id);
  }, [reduce, total, delay]);
  // Antes de hidratar (HTML estático) y con movimiento reducido: todo visible y quieto.
  const quieto = !!reduce || !listo;
  return { t: quieto ? total : t, reduce: quieto };
}
