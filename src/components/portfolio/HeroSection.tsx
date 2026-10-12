import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { useFlyer } from '../../context/FlyerContext';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onSeeWorksClick: () => void;
  onClaseClick: () => void;
  onSayHiClick: () => void;
}

const ROLES = ['Creador de IA', 'Director Creativo', 'Educador Digital', 'Emprendedor'];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSeeWorksClick,
  onClaseClick,
  onSayHiClick,
}) => {
  const { flyerImage, isCustomLoaded } = useFlyer();
  const avatarSrc = isCustomLoaded ? flyerImage : '/src/assets/images/fede_avatar_real_1791784825903.jpg';
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Setup de video HLS
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
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Animación de entrada GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.8'
      );

      // Efecto Parallax suave de video de fondo y luces
      gsap.to('.hero-video-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Efecto Parallax en el contenido central
      gsap.to('.hero-center-content', {
        yPercent: -18,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Ciclo de roles cada 2s
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  // Sombras del Navbar con el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#0A0A0A] select-none pt-24 pb-12 px-6"
    >
      {/* Video HLS de Fondo con Parallax */}
      <div className="hero-video-bg absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* Navbar Superior Flotante en Español con la Foto Real de Fede */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <nav
          className={`inline-flex items-center rounded-full backdrop-blur-xl border border-white/10 bg-[#121212]/90 px-2.5 py-1.5 transition-all duration-300 ${
            scrolled ? 'shadow-2xl shadow-cyan-950/40 border-cyan-500/30' : ''
          }`}
        >
          {/* Logo Circular con Foto Real de Fede */}
          <div className="relative group p-0.5 rounded-full overflow-hidden mr-1">
            <div className="absolute inset-0 accent-gradient-vivid animate-gradient-shift rounded-full" />
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <img
                src={avatarSrc}
                alt="Fede Atencio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divisor */}
          <div className="hidden sm:block w-px h-5 bg-neutral-800 mx-1" />

          {/* Enlaces de Navegación 100% en Español */}
          <div className="flex items-center gap-1">
            <a
              href="#hero"
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-white bg-white/10 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#selected-works"
              onClick={(e) => {
                e.preventDefault();
                onSeeWorksClick();
              }}
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Proyectos
            </a>
            <button
              onClick={onClaseClick}
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Clase Gratis</span>
            </button>
            <a
              href="#journal"
              className="hidden md:inline-block text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Artículos
            </a>
          </div>

          {/* Divisor */}
          <div className="w-px h-5 bg-neutral-800 mx-1" />

          {/* Botón WhatsApp / Contacto */}
          <div className="relative group">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <button
              onClick={onSayHiClick}
              className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#1c1c1c] text-white hover:bg-[#252525] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>Escribime</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Contenido Central del Hero */}
      <div className="hero-center-content relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto pt-14">
        {/* Antetítulo en Español */}
        <div className="blur-in text-xs sm:text-sm text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span>ESTUDIO CREATIVO DE INTELIGENCIA ARTIFICIAL · 2026</span>
        </div>

        {/* Nombre de Fede */}
        <h1 className="name-reveal text-6xl sm:text-8xl md:text-9xl font-display italic leading-[0.9] tracking-tight text-white mb-6">
          Fede Atencio
        </h1>

        {/* Línea de Rol en Español */}
        <div className="blur-in text-lg sm:text-2xl text-neutral-300 font-light mb-5">
          Un{' '}
          <span
            key={roleIndex}
            className="font-display italic text-cyan-400 font-bold animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          apasionado por la tecnología en Argentina.
        </div>

        {/* Descripción en Español */}
        <p className="blur-in text-sm sm:text-base text-neutral-300 max-w-lg mb-10 leading-relaxed font-light">
          Diseñando experiencias digitales inmersivas y enseñando a crear imágenes de calidad cinematográfica con Inteligencia Artificial sin complicaciones.
        </p>

        {/* Botones de Acción */}
        <div className="blur-in flex flex-wrap items-center justify-center gap-4">
          {/* Botón 1: Ver Proyectos */}
          <div className="relative group">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
            <button
              onClick={onSeeWorksClick}
              className="relative px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-900 hover:text-white transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg"
            >
              Ver Proyectos
            </button>
          </div>

          {/* Botón 2: Clase IA Gratis */}
          <div className="relative group">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
            <button
              onClick={onClaseClick}
              className="relative px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider border-2 border-cyan-400/60 bg-[#0A0A0A]/90 backdrop-blur-md text-white hover:border-transparent transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Clase Online Gratis</span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de Desplazamiento */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-[10px] text-neutral-500 uppercase tracking-[0.25em] mb-2 font-medium">
          DESLIZÁ
        </span>
        <div className="w-px h-10 bg-neutral-800 relative overflow-hidden">
          <div className="w-full h-1/2 bg-cyan-400 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
