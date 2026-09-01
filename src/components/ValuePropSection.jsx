import React from 'react';

export default function ValuePropSection() {
  const categories = [
    { src: '/assets/preview-equipamentos-BRAxkuH6.webp', title: 'Exercícios c/ Equipamentos' },
    { src: '/assets/preview-alongamentos-BPg1uzwA.webp', title: 'Exercícios s/ Equipamentos' },
    { src: '/assets/preview-cognitivo-C2cm29fx.webp', title: 'Exercícios Cognitivos' },
    { src: '/assets/guia-avaliacao-mobilidade-CrP8j3wg.webp', title: 'Guia de Avaliação Física' },
  ];

  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Por que os <br className="hidden sm:block" />
            profissionais escolhem{' '}
            <span className="gradient-heading-green italic font-serif">esse kit?</span>
          </h2>
          <div className="w-24 h-1.5 gradient-bar mx-auto rounded-full mt-4 mb-8"></div>
        </div>

        {/* Overlapping Mockup & Green Card Wrapper */}
        <div className="relative pt-6">
          
          {/* Overlapping Mockup Image */}
          <div className="relative max-w-lg mx-auto -mb-20 sm:-mb-32 z-20 px-4">
            <img
              src="/assets/valueprop-mockup-new.png"
              alt="Kit +1000 Atividades e Exercícios para Idosos"
              className="w-full h-auto drop-shadow-2xl mx-auto max-w-sm sm:max-w-md transform hover:scale-[1.02] transition-transform duration-500"
              loading="eager"
            />
          </div>

          {/* Green Container Card */}
          <div className="relative bg-gradient-to-b from-[#15803d] via-[#16a34a] to-[#0f766e] rounded-[2.5rem] pt-24 sm:pt-36 pb-10 sm:pb-12 px-6 sm:px-12 text-white shadow-2xl shadow-green-600/25 border border-green-400/30 space-y-6 text-base sm:text-lg leading-relaxed text-center sm:text-left z-10">
            <p>
              O <strong className="font-extrabold text-white">Kit +1000 Atividades</strong> é um material completo de exercícios adaptados para idosos, organizado <strong className="font-extrabold text-white">por nível, objetivo e tipo de exercício</strong>, preparando você para atender, planejar e aplicar a sessão com confiança, simplificando a rotina de quem trabalha com a terceira idade todos os dias.
            </p>
            <p>
              Com o <strong className="font-extrabold text-white">Kit +1000 Atividades</strong>, você vai parar de improvisar e começar a aplicar com <strong className="font-extrabold text-white">clareza</strong>, equipado com <strong className="font-extrabold text-white">cartilhas, exercícios ilustrados, progressões seguras e bônus exclusivos</strong> prontos pra usar no atendimento individual ou em turma.
            </p>
            <p className="pt-2 text-white font-medium">
              Essa é <strong className="font-extrabold text-white">a melhor forma de elevar a qualidade dos seus atendimentos</strong>, trabalhando com confiança e oferecendo aos seus pacientes mais autonomia, mobilidade e qualidade de vida no dia a dia.
            </p>
          </div>

        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-3 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
