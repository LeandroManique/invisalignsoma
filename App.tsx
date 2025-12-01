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
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;