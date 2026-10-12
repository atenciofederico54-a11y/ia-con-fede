import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight, Wand2 } from 'lucide-react';

interface PresetPrompt {
  id: string;
  name: string;
  category: string;
  tool: string;
  toolColor: string;
  promptText: string;
  tip: string;
}

const PRESETS: PresetPrompt[] = [
  {
    id: 'flyer',
    name: 'Flyer Publicitario para Redes',
    category: 'Comercial & Ventas',
    tool: 'Ideogram 2.0 / Canva',
    toolColor: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
    promptText:
      'Flyer publicitario moderno para delivery de hamburguesas artesanales, texto destacado "BURGER NIGHT 50% OFF" en tipografía bold blanca, hamburguesa jugosa con queso fundido en primer plano, fondo oscuro con luces de neón sutiles, 4k comercial.',
    tip: 'Ideogram respeta las palabras exactas entre comillas ("BURGER NIGHT"). En la clase te enseñamos trucos para que nunca salgan letras deformes.',
  },
  {
    id: 'portrait',
    name: 'Retrato Fotorrealista de Estudio',
    category: 'Fotografía & Modelos',
    tool: 'Midjourney v6.1 / Gemini',
    toolColor: 'text-purple-400 border-purple-500/30 bg-purple-950/20',
    promptText:
      'Retrato de estudio de alta costura, mujer de 30 años con mirada directa a cámara, piel natural con textura realista y pecas sutiles, iluminación rim light suave en tonos lavanda y cian, lente 85mm f/1.4, estilo editorial Vogue.',
    tip: 'Especificar la distancia focal (85mm) y apertura (f/1.4) le indica a la IA el desenfoque bokeh exacto detrás del modelo.',
  },
  {
    id: 'product',
    name: 'Foto de Producto Flotante',
    category: 'E-commerce & Tiendas',
    tool: 'Leonardo AI / Adobe Firefly',
    toolColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
    promptText:
      'Frasco minimalista de perfume de vidrio esmerilado suspendido en gravedad cero sobre agua cristalina, refracción cáustica en el fondo, gotas de agua congeladas en el aire, luz solar matutina difusa, fotografía de catálogo de lujo.',
    tip: 'Podés quitarle el fondo con un solo clic y montarlo directo en tu tienda online de Shopify o Tiendanube.',
  },
  {
    id: 'avatar3d',
    name: 'Personaje 3D Estilizado',
    category: 'Branding & Videojuegos',
    tool: 'Midjourney --niji / Leonardo AI',
    toolColor: 'text-pink-400 border-pink-500/30 bg-pink-950/20',
    promptText:
      'Personaje 3D de un explorador espacial amigable, material cerámico mate, traje estilizado con detalles luminosos en tonos naranja y menta, render con iluminación global suave, estilo Pixar / videojuego indie moderno.',
    tip: 'Los modelos dedicados a animación o estilizado 3D permiten crear mascotas y assets de marca sin requerir modeladores 3D costosos.',
  },
];

export const PromptComparator: React.FC = () => {
  const [activePreset, setActivePreset] = useState<PresetPrompt>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activePreset.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111] border-y border-neutral-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2 block">
            Demostración Interactiva
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-['Kanit']">
            Probá la fórmula del prompt perfecto
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Elegí un objetivo y mirá cómo se estructura la instrucción técnica y qué herramienta conviene utilizar.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {PRESETS.map((p) => {
            const isSelected = activePreset.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePreset(p)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-[#181818] text-slate-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Viewer Card */}
        <div className="bg-[#161616] border border-neutral-700/80 rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-5 border-b border-neutral-800">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-light">
                Herramienta recomendada:
              </span>
              <span
                className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold border ${activePreset.toolColor}`}
              >
                {activePreset.tool}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copiar Prompt</span>
                </>
              )}
            </button>
          </div>

          <div className="mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
              Prompt Modelo en Español:
            </span>
            <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-neutral-800 font-mono text-xs sm:text-sm text-purple-200 leading-relaxed select-all">
              &quot;{activePreset.promptText}&quot;
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed flex items-start gap-3">
            <Wand2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300 font-bold">Por qué funciona:</strong>{' '}
              {activePreset.tip}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptComparator;
