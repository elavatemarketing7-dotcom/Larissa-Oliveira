import React, { useState } from 'react';
import HeaderMarquee from './components/HeaderMarquee';
import QuizOverlay from './components/QuizOverlay';
import Lightbox from './components/Lightbox';
import { 
  HeroSection, 
  AboutSection, 
  GallerySection, 
  WhyTrustSection, 
  HowItWorksSection, 
  MapSection 
} from './components/Sections';
import { 
  MessageSquare, Sparkles, Star, Heart, ShieldCheck, 
  Instagram, ArrowUpRight, Phone, CheckCircle 
} from 'lucide-react';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(true);
  
  // Lightbox State
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const whatsappUrl = "https://api.whatsapp.com/message/HVLTJ63A64LOO1?autoload=1&app_absent=0&utm_source=ig";
  const instagramUrl = "https://www.instagram.com/dra.larissa.oliveira/reels/";

  const handleOpenLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null || prev === 0 ? lightboxImages.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null || prev === lightboxImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-brand-emerald-950 text-gray-100 selection:bg-brand-gold-500 selection:text-brand-emerald-950 relative">
      
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 left-0 right-0 h-[600px] premium-gradient-bg pointer-events-none z-0" />
      
      {/* Sticky Top Scrolling Logradouro / Marquee Ticker Navigation */}
      <HeaderMarquee />

      {/* MAIN CONTAINER */}
      <main className="relative z-10">
        
        {/* HERO SECTION (First fold with presentation video) */}
        <HeroSection 
          onOpenQuiz={() => setIsQuizOpen(true)} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* ABOUT ME SECTION */}
        <AboutSection />

        {/* GALLERY SECTION (Results & Heart Harmonization) */}
        <GallerySection 
          onOpenQuiz={() => setIsQuizOpen(true)} 
          onOpenLightbox={handleOpenLightbox} 
        />

        {/* INTERMEDIATE CTA SECTION */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald-900/40 to-brand-emerald-800/20 rounded-3xl border border-brand-gold-500/10 pointer-events-none" />
          <div className="relative space-y-6 max-w-2xl mx-auto py-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-gold-100 font-semibold leading-snug">
              Pronta para desenhar a sua melhor versão sem compromisso?
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Clique abaixo para agendar uma conversa direta no meu WhatsApp. Analisaremos juntas as suas queixas estéticas e criaremos um plano de tratamento exclusivo.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Conversar Sem Compromisso no WhatsApp</span>
              </a>
            </div>
            <p className="text-[11px] text-gray-400">
              * Atendimento sob medida com total descrição e segurança.
            </p>
          </div>
        </section>

        {/* WHY TRUST SECTION */}
        <WhyTrustSection />

        {/* HOW THE FIRST CONSULTATION WORKS SECTION */}
        <HowItWorksSection />

        {/* MAP & CLINIC LOCATION */}
        <MapSection />

        {/* FINAL HERO CTA SECTION (Decision Fold) */}
        <section id="contato" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
          <div className="emerald-gradient-card rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-8">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-brand-gold-600/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-brand-gold-600/15 rounded-full blur-2xl" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold-500/10 border border-brand-gold-500/30 rounded-full text-[10px] uppercase tracking-widest text-brand-gold-500 font-bold">
              Último Passo para Seu Novo Sorriso
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold-100 font-medium leading-tight max-w-xl mx-auto">
              Seu sorriso é o seu maior cartão de visitas. Cuide dele com exclusividade.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
              Chega de salas de espera lotadas, diagnósticos industriais e resultados artificiais. Viva uma experiência verdadeiramente individualizada e segura.
            </p>

            <div className="pt-4 flex flex-col items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-base py-4.5 px-12 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-pulse-slow"
              >
                <MessageSquare className="w-6 h-6 shrink-0 text-white" />
                <span>AGENDAR MINHA PRIMEIRA CONSULTA</span>
              </a>
              <span className="text-[11px] text-gray-400">
                Primeira consulta sem compromisso no WhatsApp.
              </span>
            </div>

            {/* Guarantee / Credibility badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-brand-gold-500/10 max-w-md mx-auto text-left">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-brand-gold-500 shrink-0" />
                <span>Sigilo e descrição</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <Heart className="w-4 h-4 text-brand-gold-500 shrink-0" />
                <span>Naturalidade clínica</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 col-span-2 sm:col-span-1">
                <Star className="w-4 h-4 text-brand-gold-500 shrink-0 fill-brand-gold-500/20" />
                <span>Material importado</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-brand-emerald-950 border-t border-brand-gold-500/10 py-12 px-6 relative z-10 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Logo Name & Subtitle */}
          <div className="space-y-2">
            {/* Signature style manual font */}
            <h3 className="font-signature text-5xl text-brand-gold-500 tracking-wide select-none">
              Dra. Larissa Oliveira
            </h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans">
              Dentist & Dental Office • Pediatria
            </p>
          </div>

          {/* Contact and address tags */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
            <span className="px-3.5 py-1.5 bg-brand-emerald-900/30 rounded-full border border-brand-gold-500/5">
              Itaim Bibi, São Paulo - SP
            </span>
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 bg-brand-emerald-900/30 hover:bg-brand-emerald-900/60 rounded-full border border-brand-gold-500/5 hover:border-brand-gold-500/30 text-brand-gold-500 transition-all flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@dra.larissa.oliveira</span>
            </a>
          </div>

          <div className="border-t border-brand-gold-500/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Dra. Larissa Oliveira. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              <span>Feito com 💚 para sorrisos extraordinários</span>
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING QUIZ ACTION / RETAKE BUTTON (For users to take the evaluation any time) */}
      <button
        onClick={() => setIsQuizOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-gradient-to-r from-brand-gold-600 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-emerald-950 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 group cursor-pointer border border-brand-gold-100/20"
        title="Iniciar Avaliação de Sorriso"
      >
        <Sparkles className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-widest max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Fazer Avaliação (Quiz)
        </span>
      </button>

      {/* STICKY FLOATING WHATSAPP CTA BADGE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-30 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border border-emerald-400/20"
        title="Chamar no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>

      {/* QUIZ AND ONBOARDING OVERLAY MODAL */}
      <QuizOverlay 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />

      {/* FULLSCREEN LIGHTBOX VISUALIZER */}
      <Lightbox 
        images={lightboxImages} 
        currentIndex={lightboxIndex} 
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

    </div>
  );
}
