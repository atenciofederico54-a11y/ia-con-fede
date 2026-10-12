import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { useFlyer } from '../../context/FlyerContext';
import ExactFlyerUploader from './ExactFlyerUploader';

gsap.registerPlugin(ScrollTrigger);

interface FedeRealPosterSectionProps {
  onRegisterClick: () => void;
}

export const FedeRealPosterSection: React.FC<FedeRealPosterSectionProps> = ({
  onRegisterClick,
}) => {
  const { flyerImage, isCustomLoaded } = useFlyer();
  const sectionRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Parallax en Orbes de Luz de fondo (velocidad suave)
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          yPercent: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // Parallax sutil en la tarjeta del póster
      if (posterRef.current) {
        gsap.to(posterRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Parallax suave en la columna de texto (crea profundidad 3D)
      if (textColRef.current) {
        gsap.to(textColRef.current, {
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clase-fede"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0B0E] border-y border-cyan-500/20 overflow-hidden"
    >
      {/* Luces y Atmósfera Neón con Scroll Parallax */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Trama de cuadrícula ciberespacial */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Póster Real de Fede con Parallax */}
          <div ref={posterRef} className="lg:col-span-6 flex flex-col items-center">
            {/* Uploader interactivo para asegurar tu foto 100% exacta */}
            <ExactFlyerUploader />

            <div className="relative max-w-md w-full">
              {/* Borde Neón Resplandeciente */}
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur-md animate-gradient-shift" />

              <div className="relative rounded-[32px] overflow-hidden bg-black border-2 border-cyan-400/50 shadow-2xl shadow-cyan-950/70 aspect-[9/16] group">
                <img
                  src={flyerImage}
                  alt="Fede Atencio — IA Desde Cero"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Si no es personalizada, mostramos los overlays sutiles; si es personalizada se ve pura y limpia */}
                {!isCustomLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-8 pointer-events-none">
                    <div className="flex items-center gap-2 mb-3 bg-black/80 backdrop-blur-md border border-cyan-400/50 rounded-full px-3.5 py-1.5 w-fit shadow-lg shadow-cyan-950/40">
                      <span className="text-cyan-400 font-bold text-xs tracking-wider">
                        ChatGPT · Midjourney · Notion · Gemini
                      </span>
                    </div>

                    <div className="mb-2">
                      <h3 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-400 uppercase tracking-tighter drop-shadow-[0_0_25px_rgba(0,240,255,0.9)] font-['Kanit'] leading-none">
                        IA DESDE CERO
                      </h3>
                    </div>

                    <div className="inline-block bg-[#001428]/90 border border-cyan-400/80 text-cyan-300 font-bold text-[11px] sm:text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                      TRUCOS • APPS • AUTOMATIZACIÓN
                    </div>

                    <div className="w-fit transform -rotate-2">
                      <span className="inline-block bg-[#FFD700] text-black font-black text-xs sm:text-sm px-4 py-1.5 rounded-md shadow-lg uppercase tracking-wider font-['Kanit']">
                        ⚡ EMPEZÁ HOY · 100% ONLINE Y GRATIS
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Distintivo Superior En Vivo */}
              <div className="absolute -top-3 -right-3 bg-black/90 border border-cyan-400/70 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-xl shadow-cyan-950/50">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Tu Foto Oficial
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Explicación en Español y Botón a WhatsApp con Parallax */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/50 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-lg shadow-cyan-950/30">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLASE 100% GRATUITA Y ONLINE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 font-['Kanit'] leading-[1.05]">
              Aprendé Inteligencia Artificial{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                desde cero
              </span>{' '}
              conmigo.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
              Te voy a enseñar de manera simple, práctica y sin palabras difíciles. En esta clase vas a aprender qué herramientas de IA existen hoy en día, cómo elegir la mejor para cada situación y cómo crear imágenes increíbles desde cero para tus ideas, negocios o redes sociales.
            </p>

            {/* Puntos destacados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  Desde 18 a 50+ años, sin conocimientos previos
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  Participá desde cualquier país (online)
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  Flyers, productos, fotos y personas
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                  Confirmación directa por WhatsApp
                </span>
              </div>
            </div>

            {/* Botón Principal a Formulario WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <button
                onClick={onRegisterClick}
                className="relative px-8 py-4 rounded-full font-black text-sm sm:text-base uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:opacity-95 active:scale-95 transition-all shadow-xl shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-black stroke-none" />
                <span>QUIERO RESERVAR MI LUGAR GRATIS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <span className="text-[11px] text-slate-400 mt-3 font-light">
              📲 Mensajes enviados al WhatsApp oficial de Fede:{' '}
              <strong className="text-emerald-400">+54 9 264 319-0783</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FedeRealPosterSection;
