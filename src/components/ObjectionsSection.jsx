import React from 'react';

export default function ObjectionsSection() {
  return (
    <section className="px-4 py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Pare de perder tempo procurando o que aplicar Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Pare de perder tempo procurando o que aplicar
            </h2>
            <div className="w-20 h-1.5 gradient-bar mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-bold text-slate-900">Você conhece essa situação:</p>
            
            <ul className="space-y-2 pl-4 border-l-4 border-amber-400 font-medium">
              <li>• Tem um paciente diferente.</li>
              <li>• Precisa trabalhar um objetivo específico.</li>
              <li>• A atividade que você costuma usar não se encaixa naquele caso.</li>
            </ul>

            <p className="font-semibold text-slate-800">
              E aí começa a procura... <span className="text-slate-500 italic">Google. YouTube. Arquivos antigos. Pastas. Anotações.</span> Até encontrar alguma coisa que possa funcionar.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 space-y-3">
              <p className="font-bold text-slate-900 text-lg">
                A Central Sênior foi criada para facilitar justamente essa parte do seu trabalho.
              </p>
              <p className="text-slate-700">
                Você entra na plataforma, pesquisa o que precisa e encontra diferentes possibilidades para montar seu atendimento.
              </p>
              <p className="text-green-800 font-black text-lg pt-1">
                Mais repertório. Menos improviso. Menos tempo procurando.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
