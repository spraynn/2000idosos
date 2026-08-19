import React from 'react';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 px-4 py-12 text-center text-xs sm:text-sm space-y-3 border-t border-slate-800">
      <div className="flex items-center justify-center gap-2 text-slate-200 font-bold text-base mb-2">
        <Flame className="w-5 h-5 text-orange-400" />
        <span>Atividades para Idosos</span>
      </div>
      <p>© 2026 Atividades para Idosos. Todos os direitos reservados.</p>
      <p className="max-w-2xl mx-auto text-slate-500">
        Material licenciado para uso pessoal e profissional no atendimento e acompanhamento de idosos.
      </p>
      <p className="max-w-2xl mx-auto text-slate-500">
        Este material não substitui orientação médica ou profissional especializada.
      </p>
    </footer>
  );
}
