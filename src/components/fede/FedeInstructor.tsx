import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquareQuote, ShieldCheck, Sparkles } from 'lucide-react';
import { useFlyer } from '../../context/FlyerContext';

interface FedeInstructorProps {
  onRegisterClick: () => void;
}

export const FedeInstructor: React.FC<FedeInstructorProps> = ({ onRegisterClick }) => {
  const { flyerImage, isCustomLoaded } = useFlyer();
  const avatarSrc = isCustomLoaded ? flyerImage : '/src/assets/images/fede_avatar_real_1791784825903.jpg';
  return (
    <section id="fede" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo of Fede */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-sm sm:max-w-md"
            >
              <div className="relative rounded-[36px] overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-950/60 bg-neutral-900 aspect-square">
                <img
                  src={avatarSrc}
                  alt="Fede — Tu profesor de Inteligencia Artificial"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <div className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Fede Atencio</span>
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 rounded-full">
                      Verificado
                    </span>
                  </div>
                  <div className="text-xs text-cyan-300 font-light mt-0.5">
                    Docente & Creador con Inteligencia Artificial
                  </div>
                </div>
              </div>

              {/* Argentine Flag Accent Pill */}
              <div className="absolute -top-3 -right-3 bg-[#181818] border border-neutral-700 px-3.5 py-1.5 rounded-full text-xs text-slate-200 flex items-center gap-2 shadow-lg">
                <span>🇦🇷</span>
                <span className="font-semibold">San Juan, Argentina</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-2 block">
              Conocé a tu profesor
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-['Kanit']"
              style={{ textWrap: 'balance' }}
            >
              Tu guía en este mundo: Fede.
            </h2>

            <div className="relative p-6 sm:p-8 bg-[#181818] border border-purple-500/20 rounded-3xl mb-6">
              <MessageSquareQuote className="w-8 h-8 text-purple-400/50 mb-3" />
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light italic">
                “Te voy a enseñar de manera simple, práctica y sin palabras complicadas. La idea es que salgas de la clase entendiendo cómo usar IA para crear imágenes y potenciar tus ideas.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 font-light">
              Sé lo abrumador que puede ser ver tantas novedades todos los días y no saber por dónde empezar. En esta clase gratuita quiero darte la tranquilidad de entender qué existe hoy, qué conviene ignorar y qué vale la pena usar para tu trabajo, emprendimiento o vida cotidiana.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Sin jerga confusa ni fórmulas raras
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                <Heart className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Enfoque 100% humano y cercano
                </span>
              </div>
            </div>

            <button
              onClick={onRegisterClick}
              className="px-8 py-3.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 transition-all shadow-lg shadow-purple-600/30 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Anotarme a la clase con Fede</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FedeInstructor;
