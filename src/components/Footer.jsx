import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800 text-xs sm:text-sm leading-relaxed">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Brand Header */}
        <div className="space-y-2">
          <h3 className="font-heading font-black text-2xl text-white tracking-tight">
            CENTRAL SÊNIOR
          </h3>
          <p className="text-slate-300 font-semibold text-sm sm:text-base">
            Mais repertório. Mais organização. Mais possibilidades para seus atendimentos.
          </p>
        </div>

        <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>

        {/* Legal Disclaimer */}
        <p className="text-slate-500 max-w-2xl mx-auto leading-normal text-[11px] sm:text-xs">
          Material e plataforma destinados ao uso profissional. Os conteúdos não substituem avaliação, orientação médica ou profissional especializada. As atividades devem ser selecionadas e adaptadas de acordo com as condições individuais de cada idoso.
        </p>

        {/* Copyright Notice */}
        <div className="pt-4 border-t border-slate-800/80 text-slate-500 text-[11px] sm:text-xs">
          © 2026 Central Sênior. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
