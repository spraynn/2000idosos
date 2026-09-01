import React from 'react';
import { Search, Users, ClipboardList, PlayCircle } from 'lucide-react';

export default function ValuePropSection() {
  const steps = [
    {
      icon: Search,
      title: 'ENCONTRE',
      desc: 'Pesquise entre +2.000 exercícios e atividades para idosos.',
    },
    {
      icon: Users,
      title: 'ORGANIZE',
      desc: 'Cadastre seus alunos e mantenha as informações dos seus atendimentos organizadas.',
    },
    {
      icon: ClipboardList,
      title: 'PLANEJE',
      desc: 'Tenha fichas e ferramentas para organizar o acompanhamento de cada aluno.',
    },
    {
      icon: PlayCircle,
      title: 'APLIQUE',
      desc: 'Escolha as atividades, adapte ao seu atendimento e tenha tudo à mão quando precisar.',
    },
  ];

  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Imagine ter tudo isso <br className="hidden sm:block" />
            <span className="text-green-600 italic font-serif">em um só lugar</span>
          </h2>
          <div className="w-24 h-1.5 gradient-bar mx-auto rounded-full mt-4 mb-8"></div>
        </div>

        {/* Overlapping Mockup & Green Card Wrapper */}
        <div className="relative pt-6">
          
          {/* Overlapping Mockup Image */}
          <div className="relative max-w-lg mx-auto -mb-20 sm:-mb-32 z-20 px-4">
            <img
              src="/assets/valueprop-mockup-new.png"
              alt="Plataforma Central Sênior"
              className="w-full h-auto drop-shadow-2xl mx-auto max-w-sm sm:max-w-md transform hover:scale-[1.02] transition-transform duration-500"
              loading="eager"
            />
          </div>

          {/* Green Container Card */}
          <div className="relative bg-gradient-to-b from-[#15803d] via-[#16a34a] to-[#0f766e] rounded-[2.5rem] pt-24 sm:pt-36 pb-10 sm:pb-12 px-6 sm:px-12 text-white shadow-2xl shadow-green-600/25 border border-green-400/30 space-y-6 text-base sm:text-lg leading-relaxed text-center sm:text-left z-10">
            <p className="text-lg sm:text-xl font-medium text-white/95 text-center">
              Em vez de ficar procurando exercícios em diferentes arquivos, pastas, vídeos ou sites...
            </p>
            <p className="text-center sm:text-lg font-bold text-white bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20">
              Você entra na <strong className="text-amber-300 font-extrabold">Central Sênior</strong>, encontra o que precisa e organiza tudo de forma muito mais prática.
            </p>
          </div>

        </div>

        {/* 4 Pillars Grid (ENCONTRE, ORGANIZE, PLANEJE, APLIQUE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
