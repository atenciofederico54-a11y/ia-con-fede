import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FLYER_IMAGE = import.meta.env.BASE_URL + 'WhatsApp Image 2026-09-30 at 02.13.35.jpeg';

export default function FedeRealPosterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (posterRef.current) {
        gsap.fromTo(
          posterRef.current,
          { y: 70, rotate: -3, opacity: 0 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: posterRef.current,
              start: 'top 82%',
            },
          },
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="clase-gratis" className="relative overflow-hidden bg-[#050509] px-6 py-24 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,238,255,0.16),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(168,85,247,0.14),transparent_31%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        <div ref={posterRef} className="lg:col-span-6">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 opacity-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-cyan-300/60 bg-black shadow-[0_0_45px_rgba(34,211,238,0.35)]">
              <img
                src={FLYER_IMAGE}
                alt="Fede Atencio — IA Desde Cero"
                className="block h-auto w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full border border-cyan-300/70 bg-black/75 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-100 backdrop-blur">
                Tu foto oficial
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            <Zap className="h-4 w-4" /> Clase online en vivo
          </div>
          <h2 className="max-w-xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl">
            Aprendé IA desde cero,
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent">sin vueltas.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Una clase gratuita, 100% online, para conocer las herramientas de inteligencia artificial que más sirven hoy y elegir cuáles usar según tu objetivo.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Clase 100% gratuita',
              'Online desde cualquier país',
              'De 18 a 50 años y más',
              'Herramientas reales para crear',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-100">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5492643190783?text=Hola%20Fede%2C%20quiero%20inscribirme%20a%20la%20clase%20gratuita%20de%20IA"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-7 py-4 font-black text-slate-950 transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero inscribirme por WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
