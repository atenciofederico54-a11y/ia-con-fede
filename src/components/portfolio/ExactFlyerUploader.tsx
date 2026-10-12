import React, { useRef, useState } from 'react';
import { useFlyer } from '../../context/FlyerContext';
import { UploadCloud, CheckCircle2, RefreshCw, Image as ImageIcon } from 'lucide-react';

export const ExactFlyerUploader: React.FC = () => {
  const { isCustomLoaded, loadFlyerFromFile, resetToDefault } = useFlyer();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    await loadFlyerFromFile(file);
    setLoading(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setLoading(true);
    await loadFlyerFromFile(file);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-center select-none ${
          isCustomLoaded
            ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
            : isDragging
            ? 'bg-cyan-950/60 border-cyan-400 scale-[1.02]'
            : 'bg-[#141418] border-dashed border-cyan-500/40 hover:border-cyan-400 hover:bg-[#1a1a22]'
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          {isCustomLoaded ? (
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          ) : (
            <UploadCloud className="w-6 h-6 text-cyan-400 shrink-0" />
          )}

          <div className="text-left flex-1">
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              {isCustomLoaded ? (
                <span>¡Tu flyer original está activo!</span>
              ) : (
                <span>Cargar tu archivo &quot;WhatsApp Image 2026-09-30...&quot;</span>
              )}
            </div>
            <div className="text-[11px] text-slate-300 font-light mt-0.5">
              {isCustomLoaded
                ? 'Mostrando tu foto real sin ninguna modificación ni filtro.'
                : 'Hacé clic acá o arrastrá tu imagen para aplicarla 100% idéntica.'}
            </div>
          </div>
        </div>

        {isCustomLoaded && (
          <div className="mt-2.5 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-emerald-300">
            <span>Archivo guardado en tu navegador</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="underline hover:text-white"
            >
              Cambiar imagen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExactFlyerUploader;
