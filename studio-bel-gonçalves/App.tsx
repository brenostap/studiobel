import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentiators } from './components/Differentiators';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <About />
      <Services />
      <Differentiators />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;