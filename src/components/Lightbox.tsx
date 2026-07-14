import React from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  if (currentIndex === null) return null;

  const currentImageUrl = images[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      {/* Top right buttons */}
      <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
        <span className="text-xs text-brand-gold-500 font-mono tracking-widest uppercase">
          {currentIndex + 1} / {images.length}
        </span>
        <button 
          onClick={onClose}
          className="bg-brand-emerald-950/80 border border-brand-gold-500/20 text-brand-gold-100 p-2.5 rounded-full hover:bg-brand-gold-500 hover:text-brand-emerald-950 transition-all cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation - Left Arrow */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 bg-brand-emerald-950/50 hover:bg-brand-emerald-900 border border-brand-gold-500/10 hover:border-brand-gold-500/40 text-brand-gold-500 p-3 rounded-full transition-all cursor-pointer select-none"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative select-none">
        <img 
          src={currentImageUrl} 
          alt={`Resultados Dra. Larissa Oliveira #${currentIndex + 1}`} 
          className="max-w-full max-h-[75vh] object-contain rounded-xl border border-brand-gold-500/20 shadow-2xl animate-fade-in"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating Indicator */}
        <div className="mt-4 flex items-center gap-1.5 text-[11px] text-gray-400">
          <ZoomIn className="w-3.5 h-3.5 text-brand-gold-500" />
          <span>Arraste ou clique nas setas para navegar • Resultados reais</span>
        </div>
      </div>

      {/* Navigation - Right Arrow */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 bg-brand-emerald-950/50 hover:bg-brand-emerald-900 border border-brand-gold-500/10 hover:border-brand-gold-500/40 text-brand-gold-500 p-3 rounded-full transition-all cursor-pointer select-none"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
