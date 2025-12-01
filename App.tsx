import React from 'react';
import { 
  Header, 
  Hero, 
  WhyInvisalign, 
  DrProfile,
  Process, 
  Locations,
  Footer 
} from './components/Sections';
import { ChatWidget } from './components/ChatWidget';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-50 text-graphite-800 font-light">
      <Header />
      <main>
        <Hero />
        <WhyInvisalign />
        <DrProfile />
        <Process />
        <Locations />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;