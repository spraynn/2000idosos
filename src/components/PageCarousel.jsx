import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function PageCarousel() {
  const slides = [
    { src: '/assets/kit-page-flexao-anterior-Cd0g2cjK.webp', title: 'Flexão anterior sentada' },
    { src: '/assets/kit-page-alongamento-coxa-DwvZNNsp.webp', title: 'Alongamento posterior da coxa' },
    { src: '/assets/kit-page-halteres-QFa8fB-P.webp', title: 'Exercícios com halteres' },
    { src: '/assets/kit-page-elevacao-pes-DbURZZE3.webp', title: 'Elevação das pontas dos pés' },
    { src: '/assets/kit-page-rotina-final-L7RZZR-h.webp', title: 'Exercícios extras e rotina final' },
    { src: '/assets/kit-page-marcha-parada-UxX-JiQt.webp', title: 'Marcha parada com apoio' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const features = [
    'Atividades organizadas por nível e objetivo',
    'Exercícios ilustrados com passo a passo',
    'Progressões seguras para qualquer condição',
    'Cartilhas prontas para imprimir e aplicar',
    'Bônus exclusivos para casos especiais',
    'Acesso digital pelo celular ou computador',
  ];

  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Veja um pouco <span className="gradient-heading italic">das páginas</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        {/* Interactive Carousel */}
        <div className="relative max-w-xl mx-auto bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl">
          
          {/* Main Image Viewport */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
            {slides.map((slide, idx) => (
              <img
                key={idx}
                src={slide.src}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-500 ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                loading="lazy"
              />
            ))}

            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Imagem anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próxima imagem"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:scale-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para imagem ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-purple-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              ></button>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold text-purple-700 mt-2">
            {slides[currentIndex].title}
          </p>

        </div>

        {/* Feature List Grid */}
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-2">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-sm font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
