import React from 'react';
import { Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing') || document.getElementById('pricing-cards');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative px-4 pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-gradient-to-b from-green-50/60 via-white to-slate-50">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Brand Logo (Visible on mobile; on desktop it's in the left navbar menu) */}
        <div className="mb-4 flex justify-center md:hidden">
          <img
            src="/assets/hero-logo-new.png"
            alt="Central Sênior Logo"
            className="w-48 h-auto object-contain drop-shadow-xs"
          />
        </div>

        {/* Compact Social Proof Tag */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm mb-4 hover:shadow-md transition-all duration-300">
          <div className="flex -space-x-2 shrink-0">
            <img src="/assets/hero-avatar-a1-BIHN_yoH.webp" alt="Profissional 1" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" />
            <img src="/assets/hero-avatar-a2-BoduD9Jd.webp" alt="Profissional 2" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" />
            <img src="/assets/hero-avatar-a3-BjCQoxcA.webp" alt="Profissional 3" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs" />
          </div>

          <div className="flex text-amber-400 gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="text-left font-bold text-slate-800 text-xs sm:text-sm leading-tight tracking-tight pl-2.5 border-l border-slate-200">
            <div><span className="text-green-700 font-extrabold">4.9/5</span> por mais de 1.700</div>
            <div className="text-slate-600 font-semibold">profissionais</div>
          </div>
        </div>

        {/* Tagline Badge */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-green-700 mb-4 bg-green-100/80 px-4 py-1.5 rounded-full inline-block border border-green-200">
          A plataforma completa para profissionais que trabalham com idosos
        </p>

        {/* Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.08] mb-5">
          <span className="text-green-600 block sm:inline">+2.000 EXERCÍCIOS </span>
          <span className="text-slate-900 block sm:inline">E ATIVIDADES PARA IDOSOS</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-3xl mx-auto mb-6 leading-relaxed">
          Uma plataforma completa com exercícios, ferramentas e recursos para organizar seus alunos, fichas e atendimentos em um só lugar. <span className="inline-block animate-pulse">🧓✨</span>
        </p>

        {/* Key Bullet Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-100/80 border border-green-200 text-green-950 font-bold text-xs sm:text-sm shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Mais opções para cada paciente
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-100/80 border border-green-200 text-green-950 font-bold text-xs sm:text-sm shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Mais praticidade para cada atendimento
          </span>
        </div>

        {/* Brand New Hero Product Mockup */}
        <div className="relative max-w-3xl mx-auto my-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/25 to-emerald-500/25 rounded-full blur-3xl -z-10 transform scale-110"></div>
          <img
            src="/assets/hero-mockup-new.png"
            alt="Kit Central Sênior +2000 Exercícios para Idosos"
            className="w-full h-auto max-w-2xl sm:max-w-3xl mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            loading="eager"
          />
        </div>

        {/* Video Player Section (Wistia VSL 6x5ykbkahy) */}
        <div className="mt-10 mb-8 max-w-xs sm:max-w-sm mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            Assista esse vídeo para ver o que vai receber:
          </h2>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
            <wistia-player media-id="6x5ykbkahy" aspect="0.5625"></wistia-player>
          </div>
        </div>

        {/* CTA Block below VSL */}
        <div className="max-w-md mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 font-extrabold text-xs uppercase tracking-wider">
            🔥 OFERTA ESPECIAL
          </div>

          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            ACESSO A PARTIR DE <span className="text-green-600 font-extrabold">R$9,90</span>
          </div>

          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="gradient-cta inline-flex items-center justify-center w-full px-8 py-5 rounded-full text-white font-extrabold text-lg sm:text-xl uppercase tracking-wider shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            ENTRAR AGORA!
            <ArrowRight className="w-6 h-6 ml-2 animate-pulse" />
          </a>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold pt-1">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span>Pagamento único • Acesso digital • Garantia de 7 dias</span>
          </div>
        </div>

      </div>
    </section>
  );
}
