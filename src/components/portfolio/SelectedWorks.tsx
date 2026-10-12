import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  colSpan: string;
  aspect: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 'automotive',
    title: 'Animación Automotriz & Ciudad Neón',
    category: 'Renders 3D & Escenarios Futuristas',
    colSpan: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
    image: '/src/assets/images/ia_futuristic_landscape_1791783192593.jpg',
    description: 'Composición cinematográfica de metrópolis nocturna con reflejos bioluminiscentes y vehículos autónomos generados mediante modelos de difusión de alta precisión.',
  },
  {
    id: 'urban',
    title: 'Arquitectura & Geometría Digital',
    category: 'Diseño Espacial 3D',
    colSpan: 'md:col-span-5',
    aspect: 'aspect-[4/3] md:aspect-auto',
    image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description: 'Estructuras arquitectónicas paramétricas optimizadas para presentaciones interactivas y branding tecnológico.',
  },
  {
    id: 'visual-identity',
    title: 'Identidad Visual & Tipografía 3D',
    category: 'Dirección de Arte & Concept Art',
    colSpan: 'md:col-span-5',
    aspect: 'aspect-[4/3] md:aspect-auto',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    description:
      'Exploración de identidades de marca futuristas, tipografía dimensional e iluminación volumétrica en tiempo real.',
  },
  {
    id: 'branding',
    title: 'Publicidad Comercial de Productos',
    category: 'Flyers para Redes & E-Commerce',
    colSpan: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
    image: '/src/assets/images/ia_flyer_product_1791783176716.jpg',
    description: 'Campañas visuales para redes sociales y tiendas online con tipografía integrada y estética de lujo lista para publicar.',
  },
];

export const SelectedWorks: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      // Parallax sutil en las tarjetas de la grilla Bento
      const cards = grid.querySelectorAll('.bento-project-card');
      cards.forEach((card, i) => {
        const speed = i % 2 === 0 ? -25 : 25;
        gsap.to(card, {
          y: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-works"
      className="bg-[#0A0A0A] py-16 md:py-24 selection:bg-cyan-500 selection:text-black relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Encabezado con Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-cyan-500" />
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
                TRABAJOS SELECCIONADOS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
              Proyectos <span className="font-display italic text-cyan-400">destacados</span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-lg font-light">
              Una muestra de piezas visuales y soluciones generativas creadas para marcas, creadores y negocios digitales.
            </p>
          </div>

          <div className="hidden md:inline-flex relative group">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <button
              onClick={() => setActiveModalProject(PROJECTS[0])}
              className="relative px-6 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-xs uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Ver todos los proyectos</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </motion.div>

        {/* Bento Grid con Parallax ScrollTrigger */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setActiveModalProject(project)}
              className={`bento-project-card ${project.colSpan} ${project.aspect} group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer min-h-[300px] shadow-xl`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Halftone Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '4px 4px',
                }}
              />

              {/* Gradiente Inferior para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 md:p-8" />

              {/* Datos del Proyecto */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Overlay con Botón Cápsula Neón */}
              <div className="absolute inset-0 bg-[#0A0A0A]/70 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="relative group/pill p-0.5 rounded-full accent-gradient-vivid shadow-2xl">
                  <div className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <span>Explorar — </span>
                    <span className="font-display italic text-sm font-bold text-cyan-600">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-neutral-400 hover:text-white p-2 text-sm rounded-full bg-neutral-800 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4 bg-black">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              {activeModalProject.description}
            </p>
            <button
              onClick={() => setActiveModalProject(null)}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-400 text-black hover:bg-cyan-300 transition-colors"
            >
              Cerrar vista previa
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedWorks;
