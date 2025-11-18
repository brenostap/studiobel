import React from 'react';
import { DIFFERENTIATORS } from '../constants';
import { Sparkles, User, Award, GraduationCap, Heart } from 'lucide-react';

const icons = {
  Sparkles: Sparkles,
  User: User,
  Award: Award,
  GraduationCap: GraduationCap,
  Heart: Heart,
};

export const Differentiators: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-bordeaux decorative-line">
            Por que escolher o Studio?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((diff, index) => {
            const IconComponent = icons[diff.icon as keyof typeof icons];
            
            // Ajuste de grid para centralizar os ultimos itens na linha de baixo em telas maiores
            const gridClasses = 
              index >= 3 
                ? "md:col-span-1.5 lg:col-span-1 lg:col-start-auto" 
                : "";
            
            // Logica especifica para centralizar os dois ultimos (index 3 e 4) na tela MD/LG
            let specificGrid = "";
            if (index === 3) specificGrid = "lg:col-start-1 lg:translate-x-1/2"; // centralizado na esquerda
            if (index === 4) specificGrid = "lg:col-start-3 lg:-translate-x-1/2"; // centralizado na direita
            // *Nota: simplificando layout para grid puro 3 colunas e centralizando flexivelmente
            const flexCenter = (index === 3 || index === 4) ? "lg:col-auto" : ""; 
            
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center p-10 rounded-sm bg-white border border-rose-50 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${index === 3 ? 'md:col-start-1 md:col-end-3 lg:col-auto' : ''} ${index === 4 ? 'md:col-start-2 md:col-end-4 lg:col-auto' : ''}`}
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-dark group-hover:scale-110 transition-transform duration-500">
                  {IconComponent && <IconComponent strokeWidth={1} className="w-7 h-7" />}
                </div>
                <h3 className="font-serif text-xl text-bordeaux mb-2">
                   Diferencial
                </h3>
                <p className="font-sans text-graphite font-light">
                  {diff.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};