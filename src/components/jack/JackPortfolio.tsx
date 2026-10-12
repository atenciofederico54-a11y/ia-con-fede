import React, { useState } from 'react';
import HeroSection from './HeroSection';
import MarqueeSection from './MarqueeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import { Sparkles, MessageCircle, ArrowRight, X } from 'lucide-react';

interface JackPortfolioProps {
  onSwitchToFede?: () => void;
}

export const JackPortfolio: React.FC<JackPortfolioProps> = ({ onSwitchToFede }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setShowContactModal(false);
      setContactSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 2500);
  };

  return (
    <div className="w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-purple-600 selection:text-white">
      {/* Top Banner connecting to "IA con Fede" Masterclass */}
      {onSwitchToFede && (
        <div className="bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-blue-900/60 border-b border-purple-500/20 py-2.5 px-4 text-center flex items-center justify-center gap-3 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 text-purple-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            ¿Querés aprender a crear imágenes con IA gratis?
          </span>
          <button
            onClick={onSwitchToFede}
            className="inline-flex items-center gap-1 text-white underline underline-offset-4 hover:text-purple-200 font-semibold cursor-pointer transition-colors"
          >
            Ver clase gratuita &quot;IA con Fede&quot; <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Jack 5 Sections in exact specified order */}
      <HeroSection
        onContactClick={() => setShowContactModal(true)}
      />
      <MarqueeSection />
      <AboutSection
        onContactClick={() => setShowContactModal(true)}
      />
      <ServicesSection />
      <ProjectsSection />

      {/* Footer */}
      <footer className="w-full border-t border-neutral-900 bg-[#0C0C0C] py-12 px-6 text-center text-xs text-[#D7E2EA]/50 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <div className="font-bold tracking-widest text-[#D7E2EA] uppercase text-sm">
          JACK — 3D CREATOR
        </div>
        <div>
          © {new Date().getFullYear()} Jack. Crafting striking 3D experiences.
        </div>
        {onSwitchToFede && (
          <button
            onClick={onSwitchToFede}
            className="text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider text-xs"
          >
            Ir a Clase Gratuita IA con Fede →
          </button>
        )}
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md bg-[#141414] border border-neutral-700 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">
              Let&apos;s build together
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-light">
              Send a message directly to Jack for 3D modeling, rendering, or custom brand direction.
            </p>

            {contactSubmitted ? (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm text-center">
                ✨ Thank you! Message received. Jack will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Alex Miller"
                    className="w-full bg-[#1c1c1c] border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full bg-[#1c1c1c] border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-[#1c1c1c] border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full uppercase tracking-widest text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JackPortfolio;
