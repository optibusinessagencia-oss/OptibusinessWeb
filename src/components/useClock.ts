'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Reloj en décimas de segundo que vuelve a empezar tras `total` segundos.
// Con movimiento reducido devuelve el final (todo visible y quieto).
export function useClock(total: number, delay = 0.6) {
  const reduce = useReducedMotion();
  const [t, setT] = useState(-delay);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setT((v) => (v + 0.2 > total ? -delay : v + 0.2)), 200);
    return () => clearInterval(id);
  }, [reduce, total, delay]);
  return { t: reduce ? total : t, reduce: !!reduce };
}
