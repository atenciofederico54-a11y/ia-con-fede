import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface JournalEntry {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  fullText: string;
}

const ENTRIES: JournalEntry[] = [
  {
    id: 1,
    title: 'El Futuro de las Imágenes con IA en el Branding y la Publicidad',
    category: 'Inteligencia Artificial & Diseño',
    readTime: '4 min de lectura',
    date: 'Oct 2026',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    fullText:
      'Las marcas ya no necesitan semanas de producción fotográfica para testear conceptos. Con modelos como Midjourney y Gemini, la velocidad de iteración visual permite crear prototipos en minutos y validar el impacto comercial antes de invertir en producción masiva.',
  },
  {
    id: 2,
    title: 'Por qué la Ingeniería de Prompts es la Nueva Dirección Creativa',
    category: 'Metodología & Flujos de Trabajo',
    readTime: '6 min de lectura',
    date: 'Sep 2026',
    image: '/src/assets/images/ia_flyer_product_1791783176716.jpg',
    fullText: 'Escribir un buen prompt no se trata de apilar palabras aleatorias en inglés. Se trata de entender la iluminación (volumétrica, rim light, golden hour), la distancia focal de la cámara (85mm, 35mm) y el balance de composición para que la IA actúe como tu fotógrafo de estudio personal.',
  },
  {
    id: 3,
    title: 'Combinando Diseño en Movimiento con Modelos Generativos',
    category: 'Tecnología & Video',
    readTime: '5 min de lectura',
    date: 'Ago 2026',
    image: '/src/assets/images/ia_character_3d_1791783202901.jpg',
    fullText: 'La fusión entre assets 3D procedurales y modelos generativos de difusión está abriendo un campo sin precedentes para la creación de videojuegos, motion graphics y contenido dinámico para redes sociales.',
  },
  {
    id: 4,
    title: 'Cómo Cualquier Persona de 18 a 50+ Años Puede Dominar la IA desde Cero',
    category: 'Educación & Futuro',
    readTime: '7 min de lectura',
    date: 'Jul 2026',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    fullText:
      'La barrera de entrada a la tecnología ya no es el código ni la matemática avanzada. Es la curiosidad. En mis clases gratuitas demostramos que con las explicaciones correctas y ejemplos cotidianos, cualquier persona puede crear imágenes que sorprendan a clientes y amigos.',
  },
];

export const Journal: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  return (
    <section id="journal" className="bg-[#0A0A0A] py-16 md:py-24 border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-cyan-500" />
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
                ARTÍCULOS & PENSAMIENTOS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
              Ideas & <span className="font-display italic text-cyan-400">reflexiones</span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-lg font-light">
              Artículos prácticos sobre creación de imágenes, herramientas de IA y oportunidades en el ecosistema digital.
            </p>
          </div>

          <div className="hidden md:inline-flex relative group">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <button
              onClick={() => setSelectedEntry(ENTRIES[0])}
              className="relative px-6 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-xs uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Ver todas las lecturas</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* 4 Entradas Horizontales */}
        <div className="space-y-4">
          {ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedEntry(entry)}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-5 rounded-[32px] sm:rounded-full bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-800/80 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-950/20"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-neutral-700 bg-neutral-800">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block mb-0.5">
                    {entry.category}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {entry.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 shrink-0 sm:pr-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{entry.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{entry.date}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-cyan-400 group-hover:text-black text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lector */}
      {selectedEntry && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedEntry(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                {selectedEntry.category}
              </span>
              <button
                onClick={() => setSelectedEntry(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedEntry.title}
            </h3>
            <p className="text-xs text-neutral-400 mb-6 flex items-center gap-4">
              <span>{selectedEntry.date}</span>
              <span>·</span>
              <span>{selectedEntry.readTime}</span>
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
              {selectedEntry.fullText}
            </p>
            <button
              onClick={() => setSelectedEntry(null)}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-400 text-black hover:bg-cyan-300 cursor-pointer"
            >
              Cerrar lectura
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Journal;
