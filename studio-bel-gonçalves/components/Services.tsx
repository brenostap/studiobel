import React from 'react';
import { SERVICES_DATA } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-rose-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-rose-dark uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">Procedimentos Exclusivos</span>
          <h2 className="font-serif text-3xl md:text-5xl text-bordeaux decorative-line">
            Menu de Serviços
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {SERVICES_DATA.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left group">
              <h3 className="font-serif text-2xl text-bordeaux mb-6 decorative-line-left italic group-hover:text-rose-dark transition-colors duration-300">
                {category.title}
              </h3>
              <ul className="space-y-4 w-full">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-graphite/80 font-light text-sm md:text-base hover:text-rose-dark hover:translate-x-1 transition-all duration-300 cursor-default border-b border-transparent hover:border-rose-light/30 pb-1 w-fit">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};