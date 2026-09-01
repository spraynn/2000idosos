import React from 'react';
import { Stethoscope, Dumbbell, HeartPulse } from 'lucide-react';

export default function AudienceSection() {
  const audiences = [
    {
      icon: Stethoscope,
      title: 'Fisioterapeutas',
      subtitle: 'Para quem precisa de mais repertório para adaptar os atendimentos às necessidades de cada paciente.',
      desc: 'Tenha diferentes possibilidades para trabalhar seus objetivos sem depender sempre dos mesmos exercícios.',
    },
    {
      icon: Dumbbell,
      title: 'Educadores Físicos',
      subtitle: 'Para quem trabalha com idosos individualmente ou em grupos e precisa de variedade para planejar suas atividades.',
      desc: 'Mais opções para montar aulas e atendimentos diferentes.',
    },
    {
      icon: HeartPulse,
      title: 'Profissionais da Terceira Idade',
      subtitle: 'Cuidadores, terapeutas e profissionais que atuam diariamente no cuidado sênior.',
      desc: 'Se você trabalha diariamente com a terceira idade e quer ter exercícios, atividades e ferramentas organizadas em um só lugar, a Central Sênior foi feita para você.',
    },
  ];

  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Para quem é a <span className="gradient-heading italic">Central Sênior?</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 font-semibold text-sm mb-3 leading-snug">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
