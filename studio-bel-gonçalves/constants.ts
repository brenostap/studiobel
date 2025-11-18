import { ServiceCategory, Differentiator } from './types';

// Agora o sistema vai procurar o arquivo "logo.png" na raiz do site.
// Certifique-se de colocar o arquivo de imagem com esse nome exato na pasta pública.
export const LOGO_URL = "logo.png"; 

export const WHATSAPP_NUMBER = "5511980658004";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um horário";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ADDRESS = "Rua Catiguá, 159 — Sala 1215, São Paulo – SP";
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.577895288613!2d-46.56072992385856!3d-23.54767566108527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e8e8c5c56cd%3A0x8058905490044c09!2sR.%20Catigu%C3%A1%2C%20159%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003065-030!5e0!3m2!1sen!2sbr!4v1709830000000!5m2!1sen!2sbr";

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: "Faciais",
    items: [
      "Limpeza de pele",
      "Hidragloss",
      "Microagulhamento",
      "Dermaplaning",
      "Tratamento de estrias",
      "Lash lifting"
    ]
  },
  {
    title: "Sobrancelhas & Micropigmentação",
    items: [
      "Design de sobrancelhas",
      "Microblading / Micropigmentação"
    ]
  },
  {
    title: "Depilação",
    items: [
      "Depilação corporal a cera",
      "Depilação facial a cera"
    ]
  },
  {
    title: "Corpo & Bem-estar",
    items: [
      "Drenagem linfática",
      "Massagem relaxante",
      "Liberação miofascial",
      "Tratamento de gordura localizada (criolipólise)"
    ]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  { icon: "Sparkles", text: "Ambiente elegante e climatizado" },
  { icon: "User", text: "Atendimento individualizado" },
  { icon: "Award", text: "Produtos e equipamentos de alta qualidade" },
  { icon: "GraduationCap", text: "Profissional experiente e atualizada" },
  { icon: "Heart", text: "Resultados naturais e duradouros" }
];