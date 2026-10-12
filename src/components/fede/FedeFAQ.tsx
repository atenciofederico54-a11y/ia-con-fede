import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: '¿La clase es realmente gratis?',
    a: 'Sí, es 100% gratuita. No tenés que ingresar tarjetas de crédito ni abonar nada para participar en esta primera clase.',
  },
  {
    q: '¿Es presencial?',
    a: 'No, es 100% online. Te conectás desde la comodidad de tu casa con el link que te enviamos por WhatsApp.',
  },
  {
    q: '¿Necesito saber de IA?',
    a: 'No. Vamos a empezar desde cero. Está pensada justamente para quienes nunca usaron estas herramientas o sienten que son complicadas.',
  },
  {
    q: '¿Qué edad debo tener?',
    a: 'Está dirigida a personas desde los 18 años, sin límite de edad. Es ideal tanto para jóvenes emprendedores como para adultos que quieren modernizarse.',
  },
  {
    q: '¿Puedo participar desde otro país?',
    a: 'Sí, la clase es online y pueden participar personas de distintos países (Argentina, Chile, Uruguay, Colombia, México, España y más).',
  },
  {
    q: '¿Necesito una computadora?',
    a: 'Podés participar desde computadora o celular con conexión a internet. Lo importante es que puedas ver la pantalla y tomar notas de las herramientas.',
  },
  {
    q: '¿Voy a aprender a crear imágenes?',
    a: 'Sí. Vas a conocer herramientas y aprender cómo elegirlas según el resultado que buscás: flyers para redes, productos comerciales, retratos realistas o fondos.',
  },
];

export const FedeFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] relative">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-2 block">
            Dudas Habituales
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Todo lo que necesitás saber antes de anotarte a la clase gratuita.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-[#181818] border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60 font-light">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FedeFAQ;
