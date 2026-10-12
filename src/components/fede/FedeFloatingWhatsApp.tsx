import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FedeFloatingWhatsAppProps {
  onScrollToForm: () => void;
}

export const FedeFloatingWhatsApp: React.FC<FedeFloatingWhatsAppProps> = ({ onScrollToForm }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <div className="hidden md:flex items-center bg-[#181818]/90 backdrop-blur-md border border-neutral-700/80 text-white text-xs px-3.5 py-2 rounded-full shadow-lg">
        <span>¿Consultas por WhatsApp?</span>
      </div>

      <button
        onClick={onScrollToForm}
        title="Inscribirme por WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-all cursor-pointer group"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default FedeFloatingWhatsApp;
