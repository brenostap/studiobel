import React from 'react';
import { ADDRESS, GOOGLE_MAPS_EMBED_URL } from '../constants';
import { MapPin, Clock } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Info Box */}
        <div className="order-2 lg:order-1 space-y-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-bordeaux mb-6 decorative-line-left">
              Localização
            </h2>
            <p className="text-graphite/70 font-light text-lg max-w-md">
              Venha nos visitar em um espaço pensado exclusivamente para o seu conforto.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-light transition-colors duration-300">
                <MapPin className="w-5 h-5 text-bordeaux group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-bordeaux text-sm uppercase tracking-widest mb-2">Endereço</h3>
                <p className="font-light text-lg text-graphite">{ADDRESS}</p>
              </div>
            </div>

            <div className="w-full h-px bg-rose-50"></div>

            <div className="flex items-start gap-5 group">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-light transition-colors duration-300">
                <Clock className="w-5 h-5 text-bordeaux group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-bordeaux text-sm uppercase tracking-widest mb-2">Horário</h3>
                <p className="font-light text-lg text-graphite">9h às 19h</p>
                <p className="font-serif italic text-rose-dark mt-1">Segunda a Sábado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map with Rose Frame */}
        <div className="order-1 lg:order-2 relative">
          {/* Decorative offset border */}
          <div className="absolute -inset-4 border border-rose-light/40 rounded-sm z-0 hidden md:block"></div>
          
          <div className="relative z-10 w-full h-[450px] bg-gray-100 rounded-sm overflow-hidden shadow-soft border-8 border-white ring-1 ring-rose-50">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Studio Bel Gonçalves"
              className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};