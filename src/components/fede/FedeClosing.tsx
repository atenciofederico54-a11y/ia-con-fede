import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

interface FedeClosingProps {
  onRegisterClick: () => void;
}

export const FedeClosing: React.FC<FedeClosingProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C] relative overflow-hidden text-center">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-blue-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '50px' }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-[#181818] to-[#121212] border border-purple-500/30 rounded-[40px] p-8 sm:p-14 sm:py-16 shadow-2xl relative overflow-hidden"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>El momento de arrancar es ahora</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            Tu primera imagen con IA puede empezar hoy.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Inscribite gratis y descubrí herramientas que pueden ayudarte a crear, vender, comunicar y llevar tus ideas mucho más lejos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="px-10 py-5 rounded-full text-base sm:text-lg font-black uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:scale-95 transition-all shadow-xl shadow-purple-600/30 cursor-pointer flex items-center gap-3"
            >
              <span>QUIERO MI LUGAR GRATIS</span>
              <ArrowUp className="w-5 h-5 -rotate-45" />
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-6 font-light">
            ⚡ Los cupos son limitados para garantizar una buena experiencia interactiva.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FedeClosing;
