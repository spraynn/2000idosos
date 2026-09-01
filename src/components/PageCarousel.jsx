import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function PageCarousel() {
  const pages = [
    {
      src: '/assets/preview-equipamentos-BRAxkuH6.webp',
      alt: 'Página de Exercícios com Equipamentos',
      title: 'Página de Exercícios com Equipamentos',
    },
    {
      src: '/assets/preview-alongamentos-BPg1uzwA.webp',
      alt: 'Página de Alongamentos e Mobilidade',
      title: 'Página de Alongamentos e Mobilidade',
    },
    {
      src: '/assets/preview-cognitivo-C2cm29fx.webp',
      alt: 'Página de Exercícios Cognitivos',
      title: 'Página de Exercícios Cognitivos',
    },
    {
      src: '/assets/guia-avaliacao-mobilidade-CrP8j3wg.webp',
      alt: 'Guia de Avaliação da Mobilidade',
      title: 'Guia de Avaliação da Mobilidade',
    },
    {
      src: '/assets/ficha-anamnese-idosos-DMt-750X.webp',
      alt: 'Ficha de Anamnese e Acompanhamento',
      title: 'Ficha de Anamnese e Acompanhamento',
    },
    {
      src: '/assets/bonus-recuperacao-mockup-CbGfKf1l.webp',
      alt: 'Bônus de Atividades de Recuperação Física',
      title: 'Bônus de Atividades de Recuperação Física',
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full bg-orange-50 border border-orange-200">
            <Eye className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
              Espie Por Dentro
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Veja Algumas <span className="gradient-heading italic">Páginas do Kit</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Material 100% ilustrado, em alta resolução e pronto pra imprimir ou usar no tablet/celular.
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
                  idx === currentIndex ? 'w-8 bg-orange-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              ></button>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold text-orange-700 mt-2">
            {pages[currentIndex].title} ({currentIndex + 1} de {pages.length})
          </p>

        </div>

      </div>
    </section>
  );
}
