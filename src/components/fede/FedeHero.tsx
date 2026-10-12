import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';

interface FedeHeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

export const FedeHero: React.FC<FedeHeroProps> = ({
  onRegisterClick,
  onLearnMoreClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C]"
    >
      {/* Dynamic Background Glows & Atmospheric Parallax Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-blue-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Badge: CLASE GRATUITA · 100% ONLINE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-purple-900/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>CLASE GRATUITA · 100% ONLINE</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black uppercase tracking-tight text-white leading-[1.08] mb-6 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            Aprendé a crear imágenes con{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Inteligencia Artificial.
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-4 max-w-2xl"
          >
            “Descubrí el mundo de las imágenes con Inteligencia Artificial.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            Clase 100% gratuita y 100% online para aprender qué herramientas de IA existen, cuál conviene usar en cada situación y cómo crear imágenes increíbles desde cero. Conocé las herramientas que están cambiando el mundo digital y descubrí cuál sirve mejor para cada idea, negocio o contenido.
          </motion.p>

          {/* Trust bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 mb-8"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sin conocimientos previos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Para cualquier país</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Desde celular o computadora</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onRegisterClick}
              className="px-8 py-4 rounded-full text-base sm:text-lg font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 active:scale-95 transition-all shadow-xl shadow-purple-600/30 text-center cursor-pointer"
            >
              QUIERO INSCRIBIRME GRATIS
            </button>

            <button
              onClick={onLearnMoreClick}
              className="px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-slate-300 border border-slate-700 hover:bg-white/5 hover:text-white transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Ver qué voy a aprender</span>
              <ArrowDown className="w-4 h-4 text-purple-400" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: High-Impact Visual Showcase Grid (Real Generated AI Artworks) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative grid grid-cols-2 gap-3 sm:gap-4 p-3 bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl rounded-[32px] shadow-2xl shadow-purple-950/40"
          >
            {/* Tile 1: AI Cyberpunk / Editorial Portrait */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-neutral-950 border border-neutral-800">
              <img
                src="/src/assets/images/ia_fede_portrait_1791783165664.jpg"
                alt="Retrato realista generado con IA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-purple-300 block">
                  Retratos Realistas
                </span>
                <span className="text-xs text-slate-200 font-medium">Midjourney & Gemini</span>
              </div>
            </div>

            {/* Tile 2: Commercial Product & Flyer */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-neutral-950 border border-neutral-800">
              <img
                src="/src/assets/images/ia_flyer_product_1791783176716.jpg"
                alt="Flyer publicitario de producto con IA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-300 block">
                  Flyers & Publicidad
                </span>
                <span className="text-xs text-slate-200 font-medium">Ideogram & Canva</span>
              </div>
            </div>

            {/* Tile 3: 3D Character Concept Art */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-950 border border-neutral-800">
              <img
                src="/src/assets/images/ia_character_3d_1791783202901.jpg"
                alt="Personajes y assets 3D con IA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-2.5 left-3 right-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-pink-300 block">
                  Personajes & Marcas
                </span>
                <span className="text-xs text-slate-200 font-medium">Leonardo AI</span>
              </div>
            </div>

            {/* Tile 4: Futuristic Cityscape */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-950 border border-neutral-800">
              <img
                src="/src/assets/images/ia_futuristic_landscape_1791783192593.jpg"
                alt="Paisaje futurista generado con IA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-2.5 left-3 right-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                  Paisajes & Fondos
                </span>
                <span className="text-xs text-slate-200 font-medium">Adobe Firefly</span>
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#161616] border border-neutral-700 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-xs">
                <span className="text-slate-400 block font-light">Próxima Edición</span>
                <strong className="text-white font-bold">Cupos Gratuitos Limitados</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FedeHero;
