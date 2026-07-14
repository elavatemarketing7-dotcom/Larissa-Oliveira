import React from 'react';

interface NavItem {
  label: string;
  targetId: string;
}

export default function HeaderMarquee() {
  const items: NavItem[] = [
    { label: 'Sobre Mim', targetId: 'sobre-mim' },
    { label: 'Prova Visual', targetId: 'prova-visual' },
    { label: 'Harmonização de 💚', targetId: 'harmonizacao' },
    { label: 'Onde nos Encontrar', targetId: 'onde-nos-encontrar' },
    { label: 'Contato', targetId: 'contato' },
  ];

  // Repeat the items list to ensure smooth continuous marquee effect
  const repeatedItems = [...items, ...items, ...items, ...items];

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-brand-emerald-950/95 border-b border-brand-gold-600/20 backdrop-blur-md">
      <div className="relative flex overflow-x-hidden py-3 select-none">
        {/* Continuous ticker container */}
        <div className="animate-marquee flex whitespace-nowrap gap-12 text-sm uppercase tracking-widest text-brand-gold-100 font-medium hover:[animation-play-state:paused] cursor-pointer">
          {repeatedItems.map((item, idx) => (
            <a
              key={`${item.targetId}-${idx}`}
              href={`#${item.targetId}`}
              onClick={(e) => handleScroll(e, item.targetId)}
              className="hover:text-brand-gold-500 transition-colors duration-300 flex items-center gap-2 px-3 py-1 bg-brand-emerald-900/40 rounded-full border border-brand-gold-500/10 hover:border-brand-gold-500/30"
            >
              <span className="text-[10px] text-brand-gold-500">◆</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
