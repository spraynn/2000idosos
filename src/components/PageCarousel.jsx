import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function PageCarousel() {
  const pages = [
    {
      src: '/assets/preview-equipamentos-BRAxkuH6.webp',
      alt: 'Biblioteca de Exercícios',
      title: 'Biblioteca de Exercícios (+2.000 exercícios e atividades)',
    },
    {
      src: '/assets/preview-alongamentos-BPg1uzwA.webp',
      alt: 'Exercícios sem Equipamentos',
      title: 'Exercícios sem Equipamentos (Atividades com poucos recursos)',
    },
    {
      src: '/assets/preview-cognitivo-C2cm29fx.webp',
      alt: 'Exercícios Cognitivos',
      title: 'Exercícios Cognitivos (Estímulo cognitivo, memória e atenção)',
    },
    {
      src: '/assets/guia-avaliacao-mobilidade-CrP8j3wg.webp',
      alt: 'Dinâmicas para Idosos',
      title: 'Dinâmicas para Idosos (Atividades individuais e em grupo)',
    },
    {
      src: '/assets/ficha-anamnese-idosos-DMt-750X.webp',
      alt: 'Fichas e Ferramentas Profissionais',
      title: 'Fichas e Ferramentas Profissionais (Organização e acompanhamento)',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? pages.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p + 1) % pages.length);
  };

  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full bg-green-50 border border-green-200">
            <Eye className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              Espie Por Dentro
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Veja tudo o que você <span className="gradient-heading italic">encontra dentro da Central</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Biblioteca organizada por objetivo, nível e categoria com +2.000 exercícios e ferramentas.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl">
          
          <div className="relative aspect-[3/4] max-h-[500px] w-full rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
            {pages.map((page, idx) => (
              <img
                key={idx}
                src={page.src}
                alt={page.alt}
                className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-300 ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                loading="lazy"
              />
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              aria-label="Página anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-800 hover:bg-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Próxima página"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-800 hover:bg-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para página ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-green-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              ></button>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold text-green-800 mt-2">
            {pages[currentIndex].title} ({currentIndex + 1} de {pages.length})
          </p>

        </div>

      </div>
    </section>
  );
}
