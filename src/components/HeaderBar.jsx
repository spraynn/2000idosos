import React from 'react';

export default function HeaderBar() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="bg-red-600 text-white py-2.5 px-4 text-center font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-md relative z-40 flex items-center justify-center gap-2">
      <span>Oferta Válida Somente Hoje {formattedDate}</span>
    </div>
  );
}
