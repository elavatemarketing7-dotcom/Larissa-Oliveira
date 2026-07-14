import React, { useState, useRef, useEffect } from 'react';
import { 
  Award, Heart, ShieldCheck, Sparkles, Star, MapPin, 
  MessageSquare, Calendar, Compass, Clock, CheckCircle2, 
  Play, Users, Check, ExternalLink, Instagram, Volume2, VolumeX 
} from 'lucide-react';

interface SectionsProps {
  onOpenQuiz: () => void;
  onOpenLightbox: (images: string[], index: number) => void;
}

export function HeroSection({ onOpenQuiz, onOpenLightbox }: SectionsProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/message/HVLTJ63A64LOO1?autoload=1&app_absent=0&utm_source=ig";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay prevented, interaction required:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald-900/50 border border-brand-gold-500/20 rounded-full text-[11px] uppercase tracking-widest text-brand-gold-500 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Atendimento Exclusivo & Personalizado
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-gold-100 font-semibold leading-tight">
            Eu sou a <br className="hidden sm:inline" />
            <span className="text-white">Dra. Larissa Oliveira</span>
          </h1>

          <p className="font-display text-lg sm:text-xl text-brand-gold-500 font-medium tracking-wide">
            Transformando sorrisos com a precisão da ciência e a sensibilidade da arte estética.
          </p>

          <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Minha missão é entregar resultados sob medida que preservam a sua identidade e devolvem a segurança de sorrir sem restrições. Aqui, cada paciente recebe uma avaliação única e um protocolo de tratamento exclusivo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto bg-gradient-to-r from-brand-gold-600 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-emerald-950 font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Iniciar Diagnóstico & Agendar Consulta</span>
            </button>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent hover:bg-brand-emerald-900/30 text-white border border-emerald-500/40 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Agendar Direto no WhatsApp</span>
            </a>
          </div>

          <p className="text-xs text-gray-400 italic text-center lg:text-left">
            * Consulta personalizada e planejada para o seu conforto bucal.
          </p>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-sm">
            {/* Frame accent */}
            <div className="absolute -inset-2 rounded-3xl border border-brand-gold-500/20 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl border border-brand-gold-500/10 pointer-events-none animate-pulse-slow" />
            
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-emerald-900 shadow-2xl border border-brand-gold-500/30">
              <img 
                src="https://i.imgur.com/Ikrd7Yz.png" 
                alt="Dra. Larissa Oliveira" 
                className="w-full h-full object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay with subtle dark shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-950 via-transparent to-transparent opacity-70" />
              
              {/* Small floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-brand-emerald-950/90 backdrop-blur-md border border-brand-gold-500/30 p-3 rounded-xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold-500 font-semibold">Dentista Integrada</p>
                  <p className="text-xs text-brand-gold-100 font-medium">Harmonização & Odontopediatria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTED PRESENTATION VIDEO BLOCK */}
      <div className="mt-24 bg-brand-emerald-900/30 border border-brand-gold-500/15 rounded-3xl p-6 md:p-10 max-w-5xl mx-auto shadow-xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold-600/10 rounded-full blur-2xl" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Autoplay Video Component with sound control */}
          <div className="md:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden bg-brand-emerald-950 border border-brand-gold-500/30 shadow-2xl group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                controls={false}
              >
                {/* Imgur direct video path corresponding to 1-https://imgur.com/Npok4jN */}
                <source src="https://i.imgur.com/Npok4jN.mp4" type="video/mp4" />
                {/* Robust vimeo video loop representing high quality clinical environments */}
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05d003d47f30ef3501ca9f0ec0a5e20&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                {/* Mixkit highly reliable dentist stock video */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-explaining-hygiene-procedures-to-patient-44165-large.mp4" type="video/mp4" />
              </video>
              
              {/* Subtle visual gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />
              
              {/* Premium Status Badge */}
              <div className="absolute top-3 left-3 bg-brand-emerald-950/90 backdrop-blur-md text-[9px] uppercase tracking-wider text-brand-gold-500 py-1 px-2.5 rounded-full border border-brand-gold-500/25 flex items-center gap-1.5 font-medium shadow-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Dra. Larissa • Apresentação
              </div>

              {/* Float sound control action */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-10 bg-brand-emerald-950/90 text-brand-gold-500 hover:text-white hover:bg-brand-gold-500 hover:border-brand-gold-600 p-3 rounded-full border border-brand-gold-500/30 shadow-lg backdrop-blur-md transition-all duration-300 transform active:scale-95 flex items-center justify-center cursor-pointer"
                title={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 animate-pulse-slow" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Copy Area next to the Video */}
          <div className="md:col-span-7 text-left space-y-4">
            <div className="flex items-center gap-1.5 text-brand-gold-500 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Exclusividade em Detalhes
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-brand-gold-100 font-medium">
              Sinta a diferença de um cuidado personalizado
            </h3>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Assista à nossa demonstração de atendimento e sinta o ambiente de acolhimento projetado para o seu absoluto bem-estar. O vídeo é executado de forma contínua e silenciosa para sua comodidade. Use o botão no vídeo para ativar ou desativar o som.
            </p>

            <button 
              onClick={toggleMute}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-500 hover:text-brand-gold-100 transition-colors py-1 cursor-pointer"
            >
              {isMuted ? (
                <>
                  <Volume2 className="w-4 h-4 text-brand-gold-500" />
                  <span>Ativar som do vídeo de demonstração</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-brand-gold-500" />
                  <span>Silenciar vídeo de demonstração</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Helper for X Icon close
function XCloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}

export function AboutSection() {
  return (
    <section id="sobre-mim" className="relative py-20 px-4 md:px-8 bg-brand-emerald-900/10 border-y border-brand-gold-500/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Image */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-2 rounded-2xl border border-brand-gold-500/15 pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-brand-emerald-900 border border-brand-gold-500/20 shadow-xl">
              <img 
                src="https://i.imgur.com/eZm2RJt.png" 
                alt="Dra. Larissa Oliveira no consultório" 
                className="w-full h-full object-cover filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-950/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Right column: Copys & Bullets */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 text-brand-gold-500 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '20s' }} />
            O Propósito do Meu Trabalho
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold-100 font-semibold leading-tight">
            Cuidado humanizado focado em você e na sua família.
          </h2>

          <p className="text-base text-gray-300 leading-relaxed font-sans">
            Acredito que sorrir deve ser um ato de pura felicidade, livre de dores ou constrangimentos. No meu consultório, abandonei a impessoalidade fria das clínicas tradicionais para criar um verdadeiro refúgio de bem-estar.
          </p>

          <p className="text-base text-gray-300 leading-relaxed font-sans">
            Com especialização combinada em Odontologia Estética (Harmonização e Sorriso) e Odontopediatria, integro técnica de nível internacional com a delicadeza necessária para acolher desde crianças pequenas até adultos exigentes.
          </p>

          {/* Differentiators list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex items-start gap-3 p-3 bg-brand-emerald-900/20 rounded-xl border border-brand-gold-500/5 hover:border-brand-gold-500/25 transition-all">
              <CheckCircle2 className="w-5 h-5 text-brand-gold-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-brand-gold-100">Atendimento Individualizado</h4>
                <p className="text-xs text-gray-400 mt-0.5">Uma única paciente por horário. Tempo dedicado exclusivamente ao seu diagnóstico.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-brand-emerald-900/20 rounded-xl border border-brand-gold-500/5 hover:border-brand-gold-500/25 transition-all">
              <CheckCircle2 className="w-5 h-5 text-brand-gold-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-brand-gold-100">Odontopediatria sem Trauma</h4>
                <p className="text-xs text-gray-400 mt-0.5">Ambiente lúdico e técnicas psicológicas para consultas 100% livres de medo.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-brand-emerald-900/20 rounded-xl border border-brand-gold-500/5 hover:border-brand-gold-500/25 transition-all">
              <CheckCircle2 className="w-5 h-5 text-brand-gold-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-brand-gold-100">Estética & Harmonização</h4>
                <p className="text-xs text-gray-400 mt-0.5">Tratamentos desenhados para realçar suas melhores proporções com extrema sutileza.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-brand-emerald-900/20 rounded-xl border border-brand-gold-500/5 hover:border-brand-gold-500/25 transition-all">
              <CheckCircle2 className="w-5 h-5 text-brand-gold-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-brand-gold-100">Modernidade & Conforto</h4>
                <p className="text-xs text-gray-400 mt-0.5">Sedação consciente e tecnologias avançadas para alívio total de ansiedades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ onOpenQuiz, onOpenLightbox }: SectionsProps) {
  const resultImages = [
    "https://i.imgur.com/HiPgKlk.png",
    "https://i.imgur.com/uGkqaJj.png",
    "https://i.imgur.com/Pow3Ff7.png",
    "https://i.imgur.com/HJyNlX1.png",
    "https://i.imgur.com/Cv07X9f.png"
  ];

  const heartImages = [
    "https://i.imgur.com/zhuSDSp.png",
    "https://i.imgur.com/4cjDDQQ.png",
    "https://i.imgur.com/g7d1iuT.png",
    "https://i.imgur.com/hOSOVwB.png"
  ];

  return (
    <section id="prova-visual" className="py-16 md:py-24 max-w-7xl mx-auto space-y-20 overflow-hidden">
      {/* 1. RESULTS GRID */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 px-4">
          <div className="inline-flex items-center gap-1.5 text-brand-gold-500 text-xs font-semibold uppercase tracking-widest">
            <Star className="w-4 h-4 fill-brand-gold-500" />
            Resultados Reais & Transformadores
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-gold-100 font-semibold leading-tight">
            Sorrisos que inspiram confiança e transmitem saúde.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Explore a nossa galeria de transformações clínicas em movimento contínuo. Passe o mouse ou toque para pausar e clique para ampliar.
          </p>
        </div>

        {/* Dynamic Horizontal Auto-scrolling Row */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fading side mask gradients for high-end look */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-brand-emerald-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-brand-emerald-950 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
            {/* Duplicated once to provide seamless looping scroll */}
            {[...resultImages, ...resultImages].map((img, index) => {
              const originalIndex = index % resultImages.length;
              return (
                <div 
                  key={`result-${index}`}
                  onClick={() => onOpenLightbox(resultImages, originalIndex)}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 aspect-square rounded-2xl overflow-hidden border border-brand-gold-500/10 hover:border-brand-gold-500/40 bg-brand-emerald-900 group cursor-pointer shadow-lg transition-all duration-300 shrink-0"
                >
                  <img 
                    src={img} 
                    alt={`Antes e Depois Sorriso #${originalIndex + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[10px] text-brand-gold-100 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <span>Ampliar Foto</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-[10px] sm:text-[11px] text-gray-500 mt-2 px-4 italic">
          * Nota ética: Os resultados mostrados acima são individuais. Cada organismo reage de maneira única e resultados podem variar de pessoa para pessoa.
        </p>
      </div>

      {/* 2. HEART PROOFS SECTION (HARMONIZAÇÃO DE <3 / 💚) */}
      <div id="harmonizacao" className="pt-12 border-t border-brand-gold-500/10 space-y-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 px-4">
          <div className="inline-flex items-center gap-1.5 text-brand-gold-500 text-xs font-semibold uppercase tracking-widest">
            <Heart className="w-4 h-4 fill-brand-gold-500 text-brand-gold-500" />
            Nossos Detalhes de Harmonização 💚
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-gold-100 font-semibold leading-tight">
            Harmonização e Tratamento com Amor e Precisão.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            A harmonização orofacial e estética dental aplicada com carinho, buscando sempre realçar sua beleza natural.
          </p>
        </div>

        {/* Dynamic Horizontal Auto-scrolling Row sliding backwards */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fading side mask gradients for high-end look */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-brand-emerald-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-brand-emerald-950 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused] w-max">
            {/* Duplicated once to provide seamless looping scroll */}
            {[...heartImages, ...heartImages].map((img, index) => {
              const originalIndex = index % heartImages.length;
              return (
                <div 
                  key={`heart-${index}`}
                  onClick={() => onOpenLightbox(heartImages, originalIndex)}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 aspect-square rounded-2xl overflow-hidden border border-brand-gold-500/10 hover:border-brand-gold-500/40 bg-brand-emerald-900 group cursor-pointer shadow-md transition-all duration-300 shrink-0"
                >
                  <img 
                    src={img} 
                    alt={`Harmonização Dra Larissa #${originalIndex + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[10px] text-brand-gold-100 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <span>Visualizar Detalhes</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyTrustSection() {
  const cards = [
    {
      title: "Avaliação Sincera",
      desc: "Sem falsas promessas ou indicações de tratamentos desnecessários. Ofereço apenas o que você realmente precisa para restabelecer saúde e estética de forma honesta.",
      icon: Award
    },
    {
      title: "Clareza nos Protocolos",
      desc: "Você saberá exatamente o que será feito, quais produtos e técnicas serão utilizados e o que esperar de cada fase do seu tratamento de forma transparente.",
      icon: ShieldCheck
    },
    {
      title: "Tratamento Personalizado",
      desc: "Você é cuidada diretamente por mim em todas as consultas. Não terceirizo o seu sorriso. Seu planejamento é executado do início ao fim sob meu olhar clínico atento.",
      icon: Sparkles
    },
    {
      title: "Tecnologia & Sem Dor",
      desc: "Utilizo as técnicas anestésicas mais avançadas e equipamentos modernos para garantir que sua consulta seja extremamente confortável e livre de medos ou dores.",
      icon: Clock
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-brand-emerald-900/15">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-500">
            Diferenciais de Autoridade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold-100 font-semibold">
            Por que confiar o seu sorriso a mim?
          </h2>
          <p className="text-sm text-gray-400">
            Construí minha trajetória profissional baseada em pilares rígidos de acolhimento, técnica impecável e respeito absoluto pela individualidade de cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="emerald-gradient-card rounded-2xl p-6 hover:gold-border-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-gold-500/10 border border-brand-gold-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-gold-500" />
                  </div>
                  <h3 className="font-serif text-lg text-brand-gold-100 font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Triagem Inteligente (Quiz)",
      desc: "Você responde a poucas perguntas rápidas para que eu possa conhecer suas queixas, objetivos e medos bucais antes de nos encontrarmos no WhatsApp."
    },
    {
      num: "02",
      title: "Contato e Agendamento",
      desc: "Minha equipe ou eu validaremos suas informações para agendarmos seu horário exclusivo de forma tranquila, sem salas de espera cheias."
    },
    {
      num: "03",
      title: "Sua Primeira Consulta",
      desc: "Realizamos uma consulta completa e minuciosa, desenhamos seu plano estético e iniciamos os cuidados com segurança e conforto incomparáveis."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-500">
          Experiência Fluida
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold-100 font-semibold">
          Como funciona o seu atendimento
        </h2>
        <p className="text-sm text-gray-400">
          Do primeiro contato digital até o momento em que você sai sorrindo do consultório, cada passo foi desenhado para ser acolhedor, rápido e livre de estresse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Visual connecting line */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-brand-gold-500/10 -translate-y-12 z-0" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 text-center space-y-4 p-6 bg-brand-emerald-900/10 rounded-2xl border border-brand-gold-500/5 hover:border-brand-gold-500/20 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-emerald-950 border border-brand-gold-500 flex items-center justify-center mx-auto shadow-lg text-brand-gold-500 font-display font-bold text-xl">
              {step.num}
            </div>
            <h3 className="font-serif text-lg text-brand-gold-100 font-semibold">
              {step.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto font-sans">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MapSection() {
  const address = "Itaim Bibi, São Paulo - SP";
  const mapsIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.985959325965!2d-46.685363324669146!3d-23.586938978782352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744eac27f37%3A0xe53c06497c28d40e!2sAv.%20Brigadeiro%20Faria%20Lima%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  return (
    <section id="onde-nos-encontrar" className="py-20 px-4 md:px-8 bg-brand-emerald-900/10 border-t border-brand-gold-500/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Map Details */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 text-brand-gold-500 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            Nossa Localização
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold-100 font-semibold">
            Onde nos encontrar
          </h2>
          
          <p className="text-base text-gray-300 leading-relaxed font-sans">
            Nosso consultório está localizado em uma das áreas mais nobres, seguras e acessíveis de São Paulo. Preparamos uma infraestrutura de alto padrão com estacionamento no local, segurança e privacidade absoluta para o seu atendimento.
          </p>

          <div className="p-4 bg-brand-emerald-950/80 border border-brand-gold-500/20 rounded-2xl text-left space-y-3">
            <p className="text-sm text-brand-gold-100 font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-gold-500" />
              <span>Av. Brigadeiro Faria Lima - Itaim Bibi, São Paulo - SP</span>
            </p>
            <p className="text-xs text-gray-400">
              Próximo aos principais hotéis, centros executivos e com serviço de vallet e manobrista na entrada principal do edifício comercial.
            </p>
          </div>
        </div>

        {/* Map Iframe */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-gold-500/20 shadow-2xl h-96 relative">
          <iframe 
            src={mapsIframeUrl} 
            className="w-full h-full border-0 grayscale filter contrast-110" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Consultório Itaim Bibi"
          />
          {/* Accent frame over the map border */}
          <div className="absolute inset-0 border-4 border-brand-emerald-950/20 pointer-events-none rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
