import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';
import logo from "../logo.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-b from-rose-50/80 via-white to-white px-6 py-12 overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">

        {/* LOGO FIXO */}
        <div className="mb-8 md:mb-10">
          <img
            src={logo}
            alt="Logo Studio Bel Gonçalves"
            className="w-48 md:w-64 h-auto object-contain drop-shadow-sm transition-transform duration-700 hover:scale-105"
          />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-bordeaux leading-tight tracking-tight mb-6">
          Studio Bel Gonçalves
        </h1>

        <p className="font-sans text-lg md:text-xl text-graphite/80 font-light tracking-wide max-w-lg mb-10">
          Beleza, cuidado e autoestima em cada detalhe.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Button href={WHATSAPP_LINK}>
            <MessageCircle className="w-5 h-5 mr-2" />
            Agendar Horário
          </Button>
        </div>

      </div>
    </section>
  );
};
