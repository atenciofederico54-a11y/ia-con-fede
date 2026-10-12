import React from 'react';
import { motion } from 'framer-motion';
import {
  Baby,
  Briefcase,
  Video,
  Share2,
  Cpu,
  Sparkles,
  Users,
  CheckCircle,
} from 'lucide-react';

const AUDIENCE_POINTS = [
  {
    icon: Baby,
    title: 'Para personas que quieren aprender desde cero',
    desc: 'Explicado paso a paso con palabras simples. Si nunca usaste una IA, este es el lugar perfecto.',
  },
  {
    icon: Briefcase,
    title: 'Para emprendedores y negocios',
    desc: 'Creá tus propios flyers, anuncios, fotos de catálogo y presentaciones sin gastar una fortuna.',
  },
  {
    icon: Video,
    title: 'Para creadores de contenido',
    desc: 'Diseñá miniaturas impactantes, portadas para reels, infografías y visuales que aumentan clics.',
  },
  {
    icon: Share2,
    title: 'Para quienes usan redes sociales',
    desc: 'Transformá tu perfil de Instagram, TikTok o LinkedIn con imágenes llamativas y profesionales.',
  },
  {
    icon: Cpu,
    title: 'Para personas que quieren conocer el futuro de la tecnología',
    desc: 'Entendé hacia dónde va el mundo digital y cómo subirte a la ola antes de que sea tarde.',
  },
  {
    icon: Sparkles,
    title: 'No necesitás experiencia previa',
    desc: 'Cero requisitos técnicos o matemáticos. Solo ganas de explorar y potenciar tu imaginación.',
  },
  {
    icon: Users,
    title: 'Desde los 18 años, sin límite de edad',
    desc: 'Orientado a personas de 18 a 50 años o más de cualquier país. La curiosidad no tiene edad.',
  },
];

export const FedeWhoIsItFor: React.FC = () => {
  return (
    <section id="para-quien" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-2 block">
            Perfil de los Participantes
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            ¿Para quién es esta clase?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Diseñamos esta experiencia para que cualquier persona, sin importar su profesión o punto de partida, pueda aprovechar el poder de la Inteligencia Artificial hoy mismo.
          </p>
        </div>

        {/* Grid of audience items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_POINTS.map((item, index) => {
            const Icon = item.icon;
            const isHighlight = index === AUDIENCE_POINTS.length - 1; // Last one spans nicely or highlighted
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`bg-[#171717] border border-neutral-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 ${
                  isHighlight ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#171717] via-purple-950/20 to-[#171717]' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>100% Accesible y Práctico</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FedeWhoIsItFor;
