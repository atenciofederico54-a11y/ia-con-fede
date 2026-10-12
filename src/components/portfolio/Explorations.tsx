import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  id: number;
  title: string;
  category: string;
  rotation: string;
  image: string;
  desc: string;
}

const ITEMS: ExplorationItem[] = [
  {
    id: 1,
    title: 'Personaje 3D Estilizado',
    category: 'Animación & Concept Art',
    rotation: '-rotate-3',
    image: '/src/assets/images/ia_character_3d_1791783202901.jpg',
    desc: 'Diseño de personaje con texturas cerámicas mate e iluminación de estudio cálida, ideal para branding y videojuegos.',
  },
  {
    id: 2,
    title: 'Interfaz Neuronal & Datos',
    category: 'Diseño HUD & UI Futurista',
    rotation: 'rotate-2',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    desc: 'Paneles de visualización biométrica y telemetría de redes neuronales con estética ciberespacial.',
  },
  {
    id: 3,
    title: 'Producto en Gravedad Cero',
    category: 'Fotografía Comercial',
    rotation: '-rotate-2',
    image: '/src/assets/images/ia_flyer_product_1791783176716.jpg',
    desc: 'Flyer publicitario de alta conversión con smartwatch flotante sobre pedestal de vidrio y destellos volumétricos.',
  },
  {
    id: 4,
    title: 'Ciudad Neón del Mañana',
    category: 'Paisajes & Fondos',
    rotation: 'rotate-3',
    image: '/src/assets/images/ia_futuristic_landscape_1791783192593.jpg',
    desc: 'Paisaje urbano panorámico con rascacielos curvos, canales luminosos y niebla atmosférica hiperdetallada.',
  },
  {
    id: 5,
    title: 'Arquitectura Paramétrica Neón',
    category: 'Estructuras Digitales',
    rotation: '-rotate-1',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    desc: 'Complejo arquitectónico de cristal y luz procedural diseñado para entornos inmersivos.',
  },
  {
    id: 6,
    title: 'Prisma Holográfico Cromático',
    category: 'Arte Procedural 3D',
    rotation: 'rotate-2',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    desc: 'Escultura óptica con refracción cáustica y dispersión espectral generada en estudio.',
  },
];

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedCenterRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [activeLightbox, setActiveLightbox] = useState<ExplorationItem | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinnedCenter = pinnedCenterRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!container || !pinnedCenter || !col1 || !col2) return;

    const ctx = gsap.context(() => {
      // Centro fijado
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinnedCenter,
        pinSpacing: false,
      });

      // Parallax en Columna 1
      gsap.fromTo(
        col1,
        { y: 100 },
        {
          y: -400,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Parallax en Columna 2
      gsap.fromTo(
        col2,
        { y: 250 },
        {
          y: -250,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const col1Items = ITEMS.slice(0, 3);
  const col2Items = ITEMS.slice(3, 6);

  return (
    <section
      ref={containerRef}
      id="explorations"
      className="relative min-h-[300vh] w-full bg-[#0A0A0A] overflow-hidden"
    >
      {/* Capa 1: Centro Fijado con GSAP (z-10) */}
      <div
        ref={pinnedCenterRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
      >
        <div className="max-w-xl pointer-events-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-3 block">
            EXPLORACIONES VISUALES
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-4">
            Laboratorio <span className="font-display italic text-cyan-400">visual</span>
          </h2>
          <p className="text-neutral-300 text-sm md:text-base font-light mb-8 max-w-md mx-auto leading-relaxed">
            Piezas experimentales, composiciones generativas y exploración de estilos realizadas con inteligencia artificial.
          </p>

          <button
            onClick={() => setActiveLightbox(ITEMS[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 hover:scale-105 transition-all shadow-xl shadow-cyan-950/40 cursor-pointer"
          >
            <span>Ver pieza destacada</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </button>
        </div>
      </div>

      {/* Capa 2: Columnas de Parallax (z-20, absoluto) */}
      <div className="absolute inset-0 z-20 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1400px] px-6 sm:px-12 grid grid-cols-2 gap-8 md:gap-40 pt-[25vh]">
          {/* Columna 1 */}
          <div ref={col1Ref} className="flex flex-col gap-24 sm:gap-40 pointer-events-auto">
            {col1Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`group cursor-pointer aspect-square max-w-[320px] w-full mx-auto rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 p-2 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 ${item.rotation}`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Columna 2 */}
          <div ref={col2Ref} className="flex flex-col gap-24 sm:gap-40 pt-48 pointer-events-auto">
            {col2Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`group cursor-pointer aspect-square max-w-[320px] w-full mx-auto rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 p-2 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-pink-400/50 ${item.rotation}`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-xl w-full bg-neutral-900 border border-neutral-700 rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-3">
              <div>
                <span className="text-xs uppercase text-cyan-400 font-bold tracking-wider">
                  {activeLightbox.category}
                </span>
                <h3 className="text-xl font-bold text-white">{activeLightbox.title}</h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="text-neutral-400 hover:text-white p-2 rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square mb-4 bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {activeLightbox.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Explorations;
