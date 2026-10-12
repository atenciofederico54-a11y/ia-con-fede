import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Wrench,
  Compass,
  Megaphone,
  Layers,
  Wand2,
  FileCode,
  Rocket,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface TopicItem {
  id: number;
  number: string;
  title: string;
  description: string;
  tools: string[];
  icon: React.ElementType;
  color: string;
  tip: string;
}

const TOPICS: TopicItem[] = [
  {
    id: 1,
    number: '01',
    title: 'Qué es la Inteligencia Artificial aplicada a imágenes',
    description:
      'Entendé cómo los modelos de difusión y redes generativas interpretan texto y lo convierten en píxeles fotorrealistas de alta definición.',
    tools: ['Conceptos Clave', 'Modelos de Difusión', 'Resolución'],
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
    tip: 'No hace falta saber programar: la IA entiende tu propio lenguaje natural.',
  },
  {
    id: 2,
    number: '02',
    title: 'Las principales herramientas disponibles del mercado',
    description:
      'Un mapa claro de ChatGPT, Gemini, Midjourney, Leonardo AI, Ideogram, Adobe Firefly, Canva y las alternativas gratuitas y de pago.',
    tools: ['ChatGPT', 'Gemini', 'Midjourney', 'Leonardo', 'Ideogram', 'Firefly', 'Canva'],
    icon: Wrench,
    color: 'from-pink-500 to-rose-500',
    tip: 'Vas a saber cuánto cuesta cada una y cuáles tienen versiones 100% gratuitas.',
  },
  {
    id: 3,
    number: '03',
    title: 'Qué herramienta conviene para cada necesidad',
    description:
      '¿Buscás hiperrealismo o letras perfectas dentro del flyer? Te enseño el criterio exacto para no perder horas probando en el lugar equivocado.',
    tools: ['Criterio Profesional', 'Ahorro de Tiempo', 'Calidad Final'],
    icon: Compass,
    color: 'from-cyan-500 to-blue-500',
    tip: 'Para texto legible dentro de la imagen, Ideogram supera al resto; para realismo cinematográfico, Midjourney.',
  },
  {
    id: 4,
    number: '04',
    title: 'Cómo crear flyers y publicidades para redes sociales',
    description:
      'Generá piezas comerciales para Instagram, TikTok, Facebook y estados de WhatsApp que capten miradas y vendan tus servicios o productos.',
    tools: ['Stories', 'Feeds', 'Promociones', 'Campañas'],
    icon: Megaphone,
    color: 'from-amber-500 to-orange-500',
    tip: 'Aprendé la regla de tercios y composición para que el flyer tenga espacio de lectura.',
  },
  {
    id: 5,
    number: '05',
    title: 'Cómo generar productos, personas, personajes, fondos y escenas',
    description:
      'Fotografía de productos con iluminación de estudio, modelos consistentes para marcas de indumentaria, fondos cinematográficos y escenarios.',
    tools: ['Mockups', 'Modelos', 'Texturas', 'Fondo Transparente'],
    icon: Layers,
    color: 'from-emerald-500 to-teal-500',
    tip: 'Podés colocar tu producto real dentro de un paisaje generado sin fotógrafo costoso.',
  },
  {
    id: 6,
    number: '06',
    title: 'Cómo mejorar o editar fotos existentes con IA',
    description:
      'Inpainting, Outpainting, ampliación de fondos (generative expand), cambio de atuendos, mejora de resolución (upscaling) y eliminación de imperfecciones.',
    tools: ['Inpainting', 'Upscaling 4K', 'Expansión de Lienzo'],
    icon: Wand2,
    color: 'from-violet-500 to-purple-500',
    tip: 'Rescatá fotos viejas o borrosas y convertilas en tomas de portada de revista.',
  },
  {
    id: 7,
    number: '07',
    title: 'Cómo escribir prompts claros para mejores resultados',
    description:
      'La anatomía del prompt perfecto: sujeto, acción, iluminación de estudio, plano de cámara, paleta de colores y estilo artístico sin rodeos.',
    tools: ['Estructura de Prompts', 'Palabras Clave', 'Parámetros'],
    icon: FileCode,
    color: 'from-blue-500 to-indigo-500',
    tip: 'Decir "luz difusa de ventana a 45 grados" cambia completamente el resultado.',
  },
  {
    id: 8,
    number: '08',
    title: 'Cómo transformar una idea en una imagen lista para publicar',
    description:
      'El flujo de trabajo completo paso a paso: desde el boceto mental hasta la exportación en alta calidad optimizada para WhatsApp, web o imprenta.',
    tools: ['Workflow Ágil', 'Formatos PNG/JPG', 'Publicación'],
    icon: Rocket,
    color: 'from-fuchsia-500 to-pink-500',
    tip: 'En menos de 10 minutos vas a poder tener un diseño final listo para lanzar.',
  },
];

export const FedeWhatWeWillSee: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicItem | null>(null);

  return (
    <section id="que-veremos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C] relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-2 block">
            Programa de la Clase
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            Qué vamos a ver en la clase
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Un recorrido práctico, directo y sin tecnicismos difíciles. Vas a descubrir cómo usar cada herramienta de forma estratégica y con resultados tangibles.
          </p>
        </div>

        {/* 8 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedTopic(topic)}
                className="group relative bg-[#131313] hover:bg-[#181818] border border-neutral-800 hover:border-purple-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-950/30 cursor-pointer"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-neutral-600 group-hover:text-purple-400 transition-colors font-mono">
                      {topic.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${topic.color} p-0.5 shadow-md flex items-center justify-center`}
                    >
                      <div className="w-full h-full bg-[#131313] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {topic.description}
                  </p>
                </div>

                {/* Bottom interactive hint */}
                <div className="border-t border-neutral-800/80 pt-4 flex items-center justify-between text-xs text-purple-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Ver detalle
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal / Detailed view for selected card */}
        {selectedTopic && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          >
            <div className="relative w-full max-w-lg bg-[#161616] border border-neutral-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-black text-purple-400 font-mono">
                    {selectedTopic.number}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {selectedTopic.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-neutral-400 hover:text-white p-1 rounded-lg cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                {selectedTopic.description}
              </p>

              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Herramientas y conceptos clave:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTopic.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-xs text-purple-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 leading-relaxed mb-6">
                💡 <strong className="text-purple-300">Dato de la clase:</strong> {selectedTopic.tip}
              </div>

              <button
                onClick={() => setSelectedTopic(null)}
                className="w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 transition-colors cursor-pointer"
              >
                Cerrar y continuar viendo el temario
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FedeWhatWeWillSee;
