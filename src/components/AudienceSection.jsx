import React from 'react';
import { Stethoscope, Flame, HeartHandshake } from 'lucide-react';

export default function AudienceSection() {
  const audiences = [
    {
      icon: Stethoscope,
      title: 'Fisioterapeutas',
      desc: 'Ideal pra quem precisa de mais variedade nos atendimentos. Com esse kit você chega na sessão sabendo exatamente oq vai aplicar, sem improvisar.',
    },
    {
      icon: Flame,
      title: 'Educadores Físicos',
      desc: 'Perfeito pra quem trabalha com turma de idosos e precisa de atividades organizadas, seguras e prontas pra usar no dia a dia.',
    },
    {
      icon: HeartHandshake,
      title: 'Cuidadores de Idosos',
      desc: 'Mesmo sem formação técnica, dá pra oferecer muito mais qualidade de vida e estímulo físico com esse material. É simples e direto.',
    },
  ];

  return (
    <section className="px-4 py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Para Quem É <span className="gradient-heading-green italic">Este Material</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Audience Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center"
              >
                <div className="gradient-icon-green w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-green-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
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
