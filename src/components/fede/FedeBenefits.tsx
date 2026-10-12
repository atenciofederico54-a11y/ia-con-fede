import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Image, Type, Palette, Scissors, UserCheck } from 'lucide-react';

const CAPABILITIES = [
  {
    category: 'Realismo & Fotografía',
    winner: 'Midjourney & Leonardo AI',
    icon: Image,
    explanation:
      'Ideal para retratos hiperrealistas, iluminación cinematográfica, texturas de piel y tomas que parecen hechas con una cámara profesional.',
    strengths: ['Retratos fotorrealistas', 'Texturas de piel naturales', 'Luz cinematográfica volumétrica'],
  },
  {
    category: 'Texto legible dentro de la imagen',
    winner: 'Ideogram & DALL-E 3',
    icon: Type,
    explanation:
      'Si necesitás que un cartel, remera o flyer tenga palabras legibles en español sin errores tipográficos, estas herramientas son imbatibles.',
    strengths: ['Tipografías nítidas', 'Títulos comerciales claros', 'Letras en español sin deformaciones'],
  },
  {
    category: 'Diseño rápido para redes',
    winner: 'Canva Magic Studio & Firefly',
    icon: Palette,
    explanation:
      'Pensado para publicar en minutos: formatos predefinidos para Stories, Reels y Feeds con integración directa a tus plantillas.',
    strengths: ['Plantillas automáticas', 'Exportación instantánea', 'Fácil para principiantes'],
  },
  {
    category: 'Edición y retoque de fotos',
    winner: 'Adobe Firefly & Photoshop AI',
    icon: Scissors,
    explanation:
      'Perfecto para quitar elementos indeseados, extender fondos estrechos (outpainting) o cambiar fondos manteniendo al sujeto intacto.',
    strengths: ['Borrado mágico con precisión', 'Generative expand', 'Fondos profesionales'],
  },
  {
    category: 'Personajes y consistencia',
    winner: 'Leonardo AI & Midjourney v6',
    icon: UserCheck,
    explanation:
      'Permite mantener la misma cara, ropa o estilo de tu personaje a lo largo de múltiples escenas, esencial para cuentos, marcas o cómics.',
    strengths: ['Mismo personaje en distintas poses', 'Coherencia estilística', 'Control de semillas'],
  },
  {
    category: 'Creatividad y Conceptualización',
    winner: 'ChatGPT & Gemini Vision',
    icon: Zap,
    explanation:
      'Te ayudan a encontrar la idea inicial, redactar el prompt técnico y afinar los detalles conceptuales antes de generar el arte.',
    strengths: ['Brainstorming guiado', 'Optimización automática del prompt', 'Asistencia en tu idioma'],
  },
];

export const FedeBenefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="beneficios" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-2 block">
            El verdadero secreto de la IA
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            No vas a aprender una sola herramienta: vas a saber elegir la mejor.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            La mayoría de las personas se frustra porque intenta hacer todo con una misma IA. En esta clase vas a descubrir la fórmula para combinar sus mayores virtudes.
          </p>
        </div>

        {/* Interactive Capability Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Capability Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CAPABILITIES.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-950/60 border-purple-500/80 shadow-lg shadow-purple-950/40 text-white'
                      : 'bg-[#141414] border-neutral-800 text-slate-300 hover:border-neutral-700 hover:bg-[#181818]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-purple-600 text-white' : 'bg-neutral-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold leading-tight">
                        {item.category}
                      </div>
                      <div className="text-xs text-purple-400 font-light mt-0.5">
                        Recomendado: {item.winner}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Card Breakdown */}
          <div className="lg:col-span-7 bg-[#161616] border border-neutral-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-1">
                  Categoría destacada
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {CAPABILITIES[activeTab].category}
                </h3>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/40 text-purple-300 text-xs font-semibold">
                Líder: {CAPABILITIES[activeTab].winner}
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-light mb-8">
              {CAPABILITIES[activeTab].explanation}
            </p>

            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                Fortalezas que aprenderás a dominar:
              </span>
              <ul className="space-y-3">
                {CAPABILITIES[activeTab].strengths.map((str, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>🎯 En la clase vas a ver comparativas en vivo con casos reales.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FedeBenefits;
