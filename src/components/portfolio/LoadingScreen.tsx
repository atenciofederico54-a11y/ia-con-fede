import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const PALABRAS = ['Diseñar', 'Crear', 'Inspirar'];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Palabras rotando cada 900ms
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % PALABRAS.length);
    }, 900);

    // requestAnimationFrame contador 000 -> 100 en 2700ms
    const duration = 2700;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(progress * 100);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    const animId = requestAnimationFrame(animateCount);

    return () => {
      clearInterval(wordInterval);
      cancelAnimationFrame(animId);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
    >
      {/* Superior izquierda: Etiqueta en español */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>PORTAFOLIO · FEDE ATENCIO · 2026</span>
      </motion.div>

      {/* Centro: Palabras rotativas en español */}
      <div className="flex items-center justify-center h-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={PALABRAS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-display italic text-neutral-100 text-center tracking-tight"
          >
            {PALABRAS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fila inferior: Contador + Barra de progreso neón */}
      <div className="w-full">
        <div className="flex justify-between items-end mb-4">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Cargando experiencia...
          </span>
          <span className="text-6xl md:text-8xl lg:text-9xl font-display text-white tabular-nums leading-none">
            {String(count).padStart(3, '0')}
          </span>
        </div>

        {/* Barra de progreso con gradiente cian/azul/magenta */}
        <div className="h-[3px] bg-neutral-800/60 w-full overflow-hidden rounded-full">
          <div
            className="h-full accent-gradient-vivid origin-left transition-transform duration-75"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 14px rgba(0, 240, 255, 0.8)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
