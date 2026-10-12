import React from 'react';
import { Sparkles } from 'lucide-react';

interface FedeNavbarProps {
  onRegisterClick: () => void;
  onSwitchToJack?: () => void;
  activeView: 'fede' | 'jack';
  setActiveView: (view: 'fede' | 'jack') => void;
}

export const FedeNavbar: React.FC<FedeNavbarProps> = ({
  onRegisterClick,
  activeView,
  setActiveView,
}) => {
  const scrollTo = (id: string) => {
    if (activeView !== 'fede') {
      setActiveView('fede');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0C0C0C]/85 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-purple-900/30">
            <div className="w-full h-full bg-[#0C0C0C] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="text-xl font-black tracking-tight text-white font-['Kanit']">
            IA con <span className="text-purple-400">Fede</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo('que-veremos')}
            className="hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Qué veremos
          </button>
          <button
            onClick={() => scrollTo('para-quien')}
            className="hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            ¿Para quién es?
          </button>
          <button
            onClick={() => scrollTo('beneficios')}
            className="hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Herramientas
          </button>
          <button
            onClick={() => scrollTo('fede')}
            className="hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Tu profesor
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Preguntas frecuentes
          </button>
        </nav>

        {/* Zone 3: Primary Action + View Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Switcher pill between IA con Fede & Jack 3D */}
          <div className="hidden sm:flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs">
            <button
              type="button"
              onClick={() => setActiveView('fede')}
              className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeView === 'fede'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              IA con Fede
            </button>
            <button
              type="button"
              onClick={() => setActiveView('jack')}
              className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeView === 'jack'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Jack 3D
            </button>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-purple-600/30 cursor-pointer whitespace-nowrap shrink-0 uppercase tracking-wider"
          >
            Inscribirme Gratis
          </button>
        </div>
      </div>
    </header>
  );
};

export default FedeNavbar;
