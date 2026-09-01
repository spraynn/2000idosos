import React, { useState, useEffect } from 'react';
import {
  Users,
  ClipboardList,
  Calendar,
  Activity,
  FileEdit,
  PlayCircle,
  Timer,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function AppFeatureShowcase() {
  const screens = [
    { src: '/assets/app-screen-8.jpg', alt: 'Central Sênior - Início & Busca de Exercícios' },
    { src: '/assets/app-screen-1.jpg', alt: 'Central Sênior - Exercício Sentar e Levantar' },
    { src: '/assets/app-screen-2.jpg', alt: 'Central Sênior - Montar Nova Ficha de Treino' },
    { src: '/assets/app-screen-7.jpg', alt: 'Central Sênior - Dados da Ficha & Aluno' },
    { src: '/assets/app-screen-3.jpg', alt: 'Central Sênior - Meus Alunos e Clientes' },
    { src: '/assets/app-screen-4.jpg', alt: 'Central Sênior - Cronômetro Integrado 02:00' },
    { src: '/assets/app-screen-5.jpg', alt: 'Central Sênior - Calendário de Atendimentos' },
    { src: '/assets/app-screen-6.jpg', alt: 'Central Sênior - Atividades Cognitivas' },
  ];

  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [screens.length]);

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing-cards') || document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const features = [
    { icon: Users, title: 'Cadastre seus alunos', desc: 'Tenha cada aluno organizado em sua própria ficha.' },
    { icon: ClipboardList, title: 'Organize as fichas', desc: 'Centralize informações e treinos de cada aluno em um só lugar.' },
    { icon: Calendar, title: 'Organize sua rotina', desc: 'Use o calendário para visualizar e organizar seus atendimentos.' },
    { icon: Activity, title: '+2.000 exercícios', desc: 'Encontre rapidamente exercícios e atividades por objetivo, nível e categoria.' },
    { icon: FileEdit, title: 'Monte o treino', desc: 'Escolha os exercícios e monte o treino de cada aluno.' },
    { icon: PlayCircle, title: 'Inicie o atendimento', desc: 'Abra a ficha, selecione o treino e comece a sessão direto pela plataforma.' },
    { icon: Timer, title: 'Cronômetro integrado', desc: 'Controle o tempo das atividades sem precisar sair da Central.' },
    { icon: Star, title: 'Seus favoritos', desc: 'Salve os exercícios que mais utiliza e encontre tudo ainda mais rápido.' },
  ];

  return (
    <section className="px-4 py-16 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-green-700 bg-green-100 px-4 py-1.5 rounded-full border border-green-200 inline-block">
            Central Sênior na prática
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Seu atendimento com idosos, <br className="hidden sm:block" />
            <span className="gradient-heading italic font-serif">em um só lugar.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto">
            +2.000 exercícios, seus alunos, fichas, calendário e treinos organizados dentro da Central Sênior.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-amber-800 bg-amber-50 px-4 py-2 rounded-2xl border border-amber-200 inline-block">
            Chega de arquivos espalhados, planilhas e ficar procurando o que aplicar.
          </p>
        </div>

        {/* Main Content: Phone Mockup & 8 Features */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Left Column: Phone Mockup with Auto-Swapping Screenshots (All 8 Screens) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[330px]">
              {/* Green Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/25 to-emerald-500/25 rounded-[3rem] blur-2xl -z-10 transform scale-110"></div>
              
              {/* Smartphone Frame */}
              <div className="relative rounded-[2.8rem] p-3 bg-slate-900 border-4 border-slate-800 shadow-2xl shadow-green-900/30">
                {/* Speaker Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-1 bg-slate-700 rounded-full"></div>
                </div>

                {/* Screen Viewport */}
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-slate-950 flex items-center justify-center">
                  {screens.map((screen, idx) => (
                    <img
                      key={idx}
                      src={screen.src}
                      alt={screen.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        idx === currentScreen ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevScreen}
                    aria-label="Tela anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/80 text-white shadow-md flex items-center justify-center hover:bg-slate-900 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextScreen}
                    aria-label="Próxima tela"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/80 text-white shadow-md flex items-center justify-center hover:bg-slate-900 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1.5 mt-3 mb-1">
                  {screens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentScreen(idx)}
                      aria-label={`Tela ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentScreen ? 'w-5 bg-green-500' : 'w-1.5 bg-slate-700'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 8 App Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-green-300 transition-all flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm">{feat.title}</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer Summary Box & CTA */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-900 via-slate-900 to-green-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-2xl space-y-5 border border-green-800/40">
          <h3 className="font-heading font-black text-xl sm:text-2xl text-amber-300">
            Tudo que você precisa para atender. Em um só lugar.
          </h3>
          <p className="text-slate-200 font-bold text-sm sm:text-base">
            Menos tempo procurando. Menos improviso. Mais organização.
          </p>
          <p className="text-green-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Central Sênior — feita para quem trabalha com idosos.
          </p>
          <div className="pt-2">
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="gradient-cta inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-xl transition-all cursor-pointer transform active:scale-95"
            >
              QUERO ACESSAR A CENTRAL SÊNIOR
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
