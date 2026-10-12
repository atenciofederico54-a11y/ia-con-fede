import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

const AI_AREAS = [
  'Crear imágenes.',
  'Crear videos.',
  'Redes sociales y contenido.',
  'Automatización.',
  'Negocios y ventas.',
  'Diseño y publicidad.',
  'Chatbots y asistentes.',
  'Otro.',
];

const AI_PURPOSES = [
  'Para mi trabajo.',
  'Para mi negocio o emprendimiento.',
  'Para crear contenido para redes.',
  'Para estudiar y aprender.',
  'Para conseguir nuevas oportunidades.',
  'Por curiosidad.',
  'Otro.',
];

const COUNTRIES = [
  'Argentina',
  'Chile',
  'Uruguay',
  'Paraguay',
  'Bolivia',
  'Perú',
  'Colombia',
  'México',
  'Ecuador',
  'España',
  'Estados Unidos',
  'Venezuela',
  'Guatemala',
  'Costa Rica',
  'Panamá',
  'Otro país',
];

export const FedeForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('Argentina');
  const [customCountry, setCustomCountry] = useState('');
  const [area, setArea] = useState('Crear imágenes.');
  const [customArea, setCustomArea] = useState('');
  const [purpose, setPurpose] = useState('Para mi negocio o emprendimiento.');
  const [customPurpose, setCustomPurpose] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field validations
    if (!fullName.trim()) {
      setErrorMsg('Por favor, ingresá tu nombre y apellido.');
      return;
    }
    if (!age.trim() || isNaN(Number(age)) || Number(age) < 10 || Number(age) > 120) {
      setErrorMsg('Por favor, ingresá una edad válida.');
      return;
    }

    const finalCountry = country === 'Otro país' ? customCountry.trim() || 'Otro país' : country;
    const finalArea = area === 'Otro.' ? customArea.trim() || 'Otro' : area;
    const finalPurpose = purpose === 'Otro.' ? customPurpose.trim() || 'Otro' : purpose;

    setIsSubmitting(true);

    // Exact message template specified in prompt:
    const whatsappMessage = `Hola Fede, quiero inscribirme a la clase gratuita online de IA con Fede.

Nombre y apellido: ${fullName.trim()}
Edad: ${age.trim()}
País: ${finalCountry}
Área de IA que quiero profundizar: ${finalArea}
Quiero aprender IA para: ${finalPurpose}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const targetUrl = `https://wa.me/5492643190783?text=${encodedMessage}`;

    // Celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Ignore if confetti fails
    }

    setSubmitted(true);

    // Open WhatsApp link
    setTimeout(() => {
      window.location.href = targetUrl;
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="formulario" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0C0C0C] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto w-full">
        {/* Form Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2 block">
            Paso Final · Inscripción Inmediata
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 font-['Kanit']"
            style={{ textWrap: 'balance' }}
          >
            Reservá tu lugar gratis
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Completá tus datos y te redirigimos a WhatsApp para confirmar tu inscripción.
          </p>
        </div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#141414] border border-neutral-700/80 rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {submitted ? (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3 font-['Kanit']">
                ¡Listo! Te estamos llevando a WhatsApp para confirmar tu lugar gratuito.
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 font-light">
                Si tu WhatsApp no se abrió automáticamente en unos segundos, hacé clic en el botón de abajo:
              </p>
              <a
                href={`https://wa.me/5492643190783?text=${encodeURIComponent(
                  `Hola Fede, quiero inscribirme a la clase gratuita online de IA con Fede.\n\nNombre y apellido: ${fullName}\nEdad: ${age}\nPaís: ${country}\nÁrea de IA que quiero profundizar: ${area}\nQuiero aprender IA para: ${purpose}`
                )}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all text-sm shadow-lg shadow-emerald-900/30"
              >
                <span>Abrir WhatsApp manualmente</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 1. Nombre y apellido */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-2">
                  Nombre y apellido <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej: Laura Gómez"
                  className="w-full bg-[#1b1b1b] border border-neutral-700 rounded-2xl px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* 2. Edad & País in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-2">
                    ¿Cuántos años tenés? <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min={18}
                    max={120}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Ej: 32"
                    className="w-full bg-[#1b1b1b] border border-neutral-700 rounded-2xl px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    Desde 18 años, sin límite de edad.
                  </span>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-2">
                    País <span className="text-purple-400">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#1b1b1b] border border-neutral-700 rounded-2xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all cursor-pointer"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c} className="bg-[#1b1b1b] text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                  {country === 'Otro país' && (
                    <input
                      type="text"
                      required
                      value={customCountry}
                      onChange={(e) => setCustomCountry(e.target.value)}
                      placeholder="Escribí tu país"
                      className="mt-2 w-full bg-[#1b1b1b] border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                    />
                  )}
                </div>
              </div>

              {/* 3. Área de IA a profundizar */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-2">
                  ¿Qué área de Inteligencia Artificial querés profundizar? <span className="text-purple-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {AI_AREAS.map((item) => {
                    const isChecked = area === item;
                    return (
                      <label
                        key={item}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-purple-950/60 border-purple-500 text-white'
                            : 'bg-[#1b1b1b] border-neutral-800 text-slate-300 hover:border-neutral-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="ai-area"
                          checked={isChecked}
                          onChange={() => setArea(item)}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-xs sm:text-sm font-medium">{item}</span>
                      </label>
                    );
                  })}
                </div>
                {area === 'Otro.' && (
                  <input
                    type="text"
                    required
                    value={customArea}
                    onChange={(e) => setCustomArea(e.target.value)}
                    placeholder="Especificá qué área querés profundizar"
                    className="mt-2 w-full bg-[#1b1b1b] border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                  />
                )}
              </div>

              {/* 4. Para qué querés aprender IA */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-2">
                  ¿Para qué querés aprender Inteligencia Artificial? <span className="text-purple-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {AI_PURPOSES.map((item) => {
                    const isChecked = purpose === item;
                    return (
                      <label
                        key={item}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-purple-950/60 border-purple-500 text-white'
                            : 'bg-[#1b1b1b] border-neutral-800 text-slate-300 hover:border-neutral-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="ai-purpose"
                          checked={isChecked}
                          onChange={() => setPurpose(item)}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-xs sm:text-sm font-medium">{item}</span>
                      </label>
                    );
                  })}
                </div>
                {purpose === 'Otro.' && (
                  <input
                    type="text"
                    required
                    value={customPurpose}
                    onChange={(e) => setCustomPurpose(e.target.value)}
                    placeholder="Contanos tu objetivo específico"
                    className="mt-2 w-full bg-[#1b1b1b] border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                  />
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-4 sm:py-5 px-6 rounded-full font-black uppercase tracking-wider text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-green-500 active:scale-[0.98] transition-all shadow-xl shadow-emerald-950/40 cursor-pointer flex items-center justify-center gap-3 group overflow-hidden"
                >
                  {/* Subtle sheen / shimmer effect */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  <span>
                    {isSubmitting
                      ? 'Redirigiendo a WhatsApp...'
                      : 'ENVIAR INSCRIPCIÓN POR WHATSAPP'}
                  </span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-3 font-light">
                  🔒 No enviamos spam. Tu número solo se usa para enviarte el enlace de acceso a la clase.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FedeForm;
