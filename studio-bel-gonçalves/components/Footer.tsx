import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bordeaux text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo Studio Bel Gonçalves"
          className="w-20 h-auto opacity-90 mb-6"
        />

        {/* Nome */}
        <h3 className="font-serif text-2xl md:text-3xl mb-4 text-rose-light italic">
          Studio Bel Gonçalves
        </h3>

        {/* Frase */}
        <p className="text-sm font-light opacity-80 mb-10 tracking-wide max-w-md">
          Transformando beleza em autoestima, todos os dias.
        </p>

        <div className="w-16 h-px bg-white/20 mx-auto mb-10"></div>

        {/* Direitos */}
        <p className="text-xs font-sans opacity-40 tracking-widest uppercase">
          © {year} Studio Bel Gonçalves — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
