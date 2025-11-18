import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bordeaux text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-serif text-2xl md:text-3xl mb-6 text-rose-light italic">Studio Bel Gonçalves</h3>
        <p className="text-sm font-light opacity-80 mb-10 tracking-wide">
          Beleza, autoestima e bem-estar.
        </p>
        <div className="w-12 h-px bg-white/10 mx-auto mb-10"></div>
        <p className="text-xs font-sans opacity-40 tracking-widest uppercase">
          &copy; {year} Studio Bel Gonçalves. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};