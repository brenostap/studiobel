import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-rose-50/30 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        <h2 className="font-serif text-3xl md:text-5xl text-bordeaux decorative-line">
          Agende seu horário
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-graphite font-light opacity-80 mb-6">
          Cuidar de você é nossa prioridade. Clique no botão abaixo e fale diretamente pelo WhatsApp.
        </p>

        <div>
          <Button href={WHATSAPP_LINK}>
            <MessageCircle className="w-5 h-5 mr-2" />
            Agendar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};