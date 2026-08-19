import React from 'react';
import { Star, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-4 pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-slate-50">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Brand Logo (Reduced size) */}
        <div className="mb-3 flex justify-center">
          <img
            src="/assets/hero-logo-new.png"
            alt="Logo +2000 Exercícios para Idosos"
            className="w-28 sm:w-36 h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Compact Social Proof Tag */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm mb-6 hover:shadow-md transition-all duration-300">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-2 shrink-0">
            <img src="/assets/hero-avatar-a1-BIHN_yoH.webp" alt="Profissional 1" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" />
            <img src="/assets/hero-avatar-a2-BoduD9Jd.webp" alt="Profissional 2" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" />
            <img src="/assets/hero-avatar-a3-BjCQoxcA.webp" alt="Profissional 3" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" />
          </div>

          {/* 5 Stars tight spacing */}
          <div className="flex text-amber-400 gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* 2-line Text Block */}
          <div className="text-left font-bold text-slate-800 text-xs sm:text-sm leading-tight tracking-tight pl-2.5 border-l border-slate-200">
            <div><span className="text-purple-700 font-extrabold">4.9/5</span> por mais de 1.700</div>
            <div className="text-slate-600 font-semibold">profissionais</div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.05] mb-5">
          <span className="gradient-heading block sm:inline">+2000 EXERCÍCIOS</span>
          <span className="text-slate-900 block sm:inline"> PARA IDOSOS</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium max-w-3xl mx-auto mb-6 leading-relaxed">
          exercícios adaptados, organizados por nível e objetivo para transformar seus atendimentos <span className="inline-block animate-pulse">🧓✨</span>
        </p>

        {/* Key Bullet Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-950 font-bold text-xs sm:text-sm shadow-xs">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            Sem montar sessão do zero
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-950 font-bold text-xs sm:text-sm shadow-xs">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            Sem improvisar no atendimento
          </span>
        </div>

        {/* Hero Product Mockup */}
        <div className="relative max-w-2xl mx-auto my-8">
          {/* Pink/Purple Shadow Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -z-10 transform scale-110"></div>
          <img
            src="/assets/hero-mockup-new.png"
            alt="Kit +2000 Exercícios para Idosos"
            className="w-full h-auto max-w-xl mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            loading="eager"
          />
        </div>

        {/* Video Player Section */}
        <div className="mt-10 mb-8 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            Assista esse vídeo para ver o que vai receber:
          </h2>
          <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://fast.wistia.net/embed/iframe/dzmm74kc01?seo=false&videoFoam=true"
              title="Vídeo de Apresentação do Kit"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full rounded-xl"
              name="wistia_embed"
            ></iframe>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-md mx-auto space-y-3">
          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="gradient-cta inline-flex items-center justify-center w-full px-8 py-5 rounded-full text-white font-extrabold text-lg sm:text-xl uppercase tracking-wider shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            Quero meu kit agora
            <ArrowRight className="w-6 h-6 ml-2 animate-pulse" />
          </a>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span>Entrega imediata via WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
