import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      src: '/assets/prova-social-patricia-CWlO56Tj.webp',
      alt: 'Conversa de WhatsApp da Patrícia Costa',
      name: 'Patrícia Costa — Fisioterapeuta',
    },
    {
      src: '/assets/prova-social-juliana-DkmJ33eH.webp',
      alt: 'Conversa de WhatsApp da Juliana Mendes',
      name: 'Juliana Mendes — Educadora Física',
    },
    {
      src: '/assets/bonus-whatsapp-juliana-DiB93s05.webp',
      alt: 'Conversa de WhatsApp da Juliana Martins',
      name: 'Juliana Martins — Cuidadora de Idosos',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play infinite loop every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p + 1) % testimonials.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 40) {
      // Swiped Left -> Next
      next();
    }
    if (touchEndX.current - touchStartX.current > 40) {
      // Swiped Right -> Prev
      prev();
    }
  };

  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full bg-green-50 border border-green-200 shadow-xs">
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              Depoimentos Reais
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            O Que Nossos <span className="gradient-heading italic">Clientes Dizem</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Mensagens reais de profissionais que já estão aplicando o material no atendimento.
          </p>
        </div>

        {/* Infinite Sideways Sliding Carousel */}
        <div className="relative max-w-md sm:max-w-lg mx-auto bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl">
          
          {/* Outer Viewport Container */}
          <div
            className="relative aspect-[9/16] max-h-[550px] w-full rounded-2xl overflow-hidden bg-white shadow-inner"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track */}
            <div
              className="flex w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full h-full shrink-0 relative flex items-center justify-center p-2">
                  <img
                    src={t.src}
                    alt={t.alt}
                    className="w-full h-full object-contain drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:scale-110 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:scale-110 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Depoimento ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-green-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              ></button>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm font-bold text-slate-700 mt-2">
            {testimonials[currentIndex].name}
          </p>

        </div>

      </div>
    </section>
  );
}
