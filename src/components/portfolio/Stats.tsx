import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  {
    number: '+12',
    label: 'Años en Tecnología Creativa',
    sub: 'Desde diseño digital hasta pipelines de Inteligencia Artificial',
  },
  {
    number: '+95',
    label: 'Proyectos & Campañas Realizadas',
    sub: 'Marcas, flyers comerciales y producciones visuales de alto rendimiento',
  },
  {
    number: '100%',
    label: 'Alumnos y Clientes Satisfechos',
    sub: 'Metodología clara, práctica y enfocada en resultados reales',
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24 border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-start border-l-2 border-cyan-500/40 pl-6 py-2"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-display italic tracking-tight mb-2 text-cyan-400">
                {stat.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                {stat.label}
              </h3>
              <p className="text-xs text-neutral-400 font-light max-w-xs leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
