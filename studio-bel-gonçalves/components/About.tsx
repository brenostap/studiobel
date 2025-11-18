import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-bordeaux mb-10 decorative-line">
          Sobre o Studio
        </h2>
        
        <p className="font-sans text-graphite text-lg md:text-xl leading-loose font-light text-justify md:text-center opacity-90">
          O <span className="font-medium text-bordeaux">Studio Bel Gonçalves</span> é especializado em estética facial, corporal e bem-estar. 
          Cada atendimento é personalizado, acolhedor e feito com técnicas modernas para 
          realçar a beleza natural de cada cliente. O ambiente é elegante, confortável e 
          preparado para oferecer uma experiência de autocuidado completa.
        </p>
      </div>
    </section>
  );
};