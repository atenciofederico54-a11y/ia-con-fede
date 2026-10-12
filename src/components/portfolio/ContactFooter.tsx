import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

interface ContactFooterProps {
  onClaseClick: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onClaseClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Video HLS invertido
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSource =
      'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  // Marquesina continua con GSAP
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const ctx = gsap.context(() => {
      gsap.to(marquee, {
        xPercent: -50,
        duration: 35,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeText = Array(10).fill('CREANDO EL FUTURO CON INTELIGENCIA ARTIFICIAL • ').join('');

  return (
    <footer className="relative bg-[#0A0A0A] pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden text-neutral-300">
      {/* Video HLS de fondo invertido */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] brightness-50"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10">
        {/* Marquesina Infinita en Español */}
        <div className="w-full overflow-hidden whitespace-nowrap mb-12 sm:mb-16 border-y border-cyan-500/20 py-4 bg-black/60 backdrop-blur-md">
          <div
            ref={marqueeRef}
            className="inline-block text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-purple-400 font-['Kanit']"
          >
            {marqueeText}
          </div>
        </div>

        {/* Bloque Central de Contacto */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-3 block">
            HAGAMOS ALGO INCREÍBLE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display italic text-white mb-8">
            ¿Tenés un proyecto o querés aprender?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Botón WhatsApp Fede */}
            <div className="relative group">
              <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
              <button
                onClick={onClaseClick}
                className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:opacity-95 transition-all duration-200 cursor-pointer shadow-xl shadow-emerald-950/40"
              >
                <MessageCircle className="w-5 h-5 fill-black stroke-none" />
                <span>Escribirme por WhatsApp</span>
              </button>
            </div>

            {/* Correo Electrónico */}
            <div className="relative group">
              <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
              <a
                href="mailto:fede@iaconfede.com"
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-neutral-900 border border-neutral-700 text-white hover:border-cyan-400 transition-all duration-200 cursor-pointer shadow-xl"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>fede@iaconfede.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Fede Atencio</span>
            <span>·</span>
            <span>San Juan, Argentina 🇦🇷</span>
          </div>

          {/* Estado activo con punto verde pulsante */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-neutral-200 font-medium">Disponible para mentorías, clases y proyectos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
