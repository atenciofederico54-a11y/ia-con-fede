import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/portfolio/LoadingScreen';
import HeroSection from './components/portfolio/HeroSection';
import FedeRealPosterSection from './components/portfolio/FedeRealPosterSection';
import SelectedWorks from './components/portfolio/SelectedWorks';
import Journal from './components/portfolio/Journal';
import Explorations from './components/portfolio/Explorations';
import Stats from './components/portfolio/Stats';
import ContactFooter from './components/portfolio/ContactFooter';

import FedeNavbar from './components/fede/FedeNavbar';
import FedeHero from './components/fede/FedeHero';
import FedeWhatWeWillSee from './components/fede/FedeWhatWeWillSee';
import PromptComparator from './components/fede/PromptComparator';
import FedeWhoIsItFor from './components/fede/FedeWhoIsItFor';
import FedeBenefits from './components/fede/FedeBenefits';
import FedeInstructor from './components/fede/FedeInstructor';
import FedeForm from './components/fede/FedeForm';
import FedeFAQ from './components/fede/FedeFAQ';
import FedeClosing from './components/fede/FedeClosing';
import FedeFloatingWhatsApp from './components/fede/FedeFloatingWhatsApp';
import JackPortfolio from './components/jack/JackPortfolio';

import { Sparkles, Layers, Video } from 'lucide-react';
import { FlyerProvider } from './context/FlyerContext';
import SmoothScrollWrapper from './components/portfolio/SmoothScrollWrapper';

export default function App() {
  return (
    <FlyerProvider>
      <SmoothScrollWrapper>
        <AppContent />
      </SmoothScrollWrapper>
    </FlyerProvider>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState<'portfolio' | 'fede' | 'jack'>('portfolio');

  // Título dinámico en español
  useEffect(() => {
    if (activeView === 'portfolio') {
      document.title = 'Fede Atencio — Portafolio de Inteligencia Artificial & Dirección Creativa 2026';
    } else if (activeView === 'fede') {
      document.title = 'IA con Fede — Clase Gratuita 100% Online';
    } else {
      document.title = 'Jack -- Creador 3D';
    }
  }, [activeView]);

  const scrollToForm = () => {
    if (activeView !== 'fede') {
      setActiveView('fede');
      setTimeout(() => {
        const el = document.getElementById('formulario');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('formulario');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorks = () => {
    const el = document.getElementById('selected-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 font-body selection:bg-cyan-500 selection:text-black relative">
      {/* 1. Pantalla de carga animada (000 a 100) */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Selector Flotante Superior 100% en Español */}
      <div className="fixed top-24 right-4 z-40 hidden sm:flex items-center p-1 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-full shadow-2xl gap-1">
        <button
          onClick={() => setActiveView('portfolio')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeView === 'portfolio'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-md shadow-cyan-950/50'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Video className="w-3.5 h-3.5" />
          <span>Portafolio 2026</span>
        </button>

        <button
          onClick={() => setActiveView('fede')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeView === 'fede'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Clase IA con Fede</span>
        </button>

        <button
          onClick={() => setActiveView('jack')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeView === 'jack'
              ? 'bg-neutral-800 text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-pink-400" />
          <span>Portafolio 3D</span>
        </button>
      </div>

      {/* Renderizado de Vista Seleccionada */}
      {activeView === 'portfolio' && (
        <div className="w-full flex flex-col">
          {/* Sección 2: Hero con Video HLS, Navbar y Fede Real */}
          <HeroSection
            onSeeWorksClick={scrollToWorks}
            onClaseClick={() => setActiveView('fede')}
            onSayHiClick={scrollToForm}
          />

          {/* Sección Destacada: Póster Oficial de Fede (IA Desde Cero) */}
          <FedeRealPosterSection onRegisterClick={scrollToForm} />

          {/* Sección 3: Trabajos Seleccionados (Bento Grid) */}
          <SelectedWorks />

          {/* Sección 4: Artículos & Pensamientos */}
          <Journal />

          {/* Sección 5: Exploraciones (Parallax con GSAP) */}
          <Explorations />

          {/* Sección 6: Estadísticas */}
          <Stats />

          {/* Sección 7: Contacto y Footer con Video HLS y Marquesina */}
          <ContactFooter onClaseClick={scrollToForm} />

          {/* Botón flotante directo de WhatsApp */}
          <FedeFloatingWhatsApp onScrollToForm={scrollToForm} />
        </div>
      )}

      {activeView === 'fede' && (
        <div className="w-full flex flex-col font-['Kanit']">
          <FedeNavbar
            onRegisterClick={scrollToForm}
            activeView="fede"
            setActiveView={(v) => setActiveView(v as any)}
          />

          <main className="w-full">
            <FedeHero
              onRegisterClick={scrollToForm}
              onLearnMoreClick={() => {
                const el = document.getElementById('que-veremos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            {/* Póster de Fede adentro del embudo también */}
            <FedeRealPosterSection onRegisterClick={scrollToForm} />
            <FedeWhatWeWillSee />
            <PromptComparator />
            <FedeWhoIsItFor />
            <FedeBenefits />
            <FedeInstructor onRegisterClick={scrollToForm} />
            <FedeForm />
            <FedeFAQ />
            <FedeClosing onRegisterClick={scrollToForm} />
          </main>

          <FedeFloatingWhatsApp onScrollToForm={scrollToForm} />

          <footer className="w-full border-t border-neutral-900 bg-[#0C0C0C] py-12 px-6 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-300 font-bold uppercase">
                <span>IA con Fede</span>
                <span>·</span>
                <span className="text-cyan-400 font-normal">Clase Gratuita Online</span>
              </div>
              <p className="text-slate-400">
                Inscripciones directas por WhatsApp:{' '}
                <a
                  href="https://wa.me/5492643190783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  +54 9 264 319-0783
                </a>
              </p>
              <button
                onClick={() => setActiveView('portfolio')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline cursor-pointer"
              >
                ← Volver al Portafolio Principal
              </button>
            </div>
          </footer>
        </div>
      )}

      {activeView === 'jack' && (
        <JackPortfolio onSwitchToFede={() => setActiveView('fede')} />
      )}
    </div>
  );
}
