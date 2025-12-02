import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Smile, 
  CalendarCheck, 
  MapPin,
  Phone,
  MessageCircle,
  Menu,
  X,
  Award
} from 'lucide-react';
import { SITE_CONTENT } from '../constants';
import { StepItem } from '../types';

// --- Header ---
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-soft-50/90 backdrop-blur-md z-40 border-b border-graphite-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SOMA Ortodontia" className="h-12 md:h-14 w-auto object-contain" />
        </div>
        
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#processo" className="text-sm text-graphite-600 hover:text-clinical-600">Como Funciona</a>
            <a href="#agendar" className="text-sm text-graphite-600 hover:text-clinical-600">Unidades</a>
            <a href="#faq" className="text-sm text-graphite-600 hover:text-clinical-600">Perguntas</a>
          </div>

        <a 
          href="#agendar"
          className="hidden md:inline-flex bg-clinical-500 hover:bg-clinical-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:shadow-lg hover:shadow-clinical-500/20"
        >
          Agendar Consulta
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-graphite-600 hover:text-clinical-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-graphite-100 animate-in slide-in-from-top-5 duration-200 shadow-lg">
          <nav className="flex flex-col p-6 gap-6">
            <a 
              href="#agendar" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-clinical-500 text-white px-6 py-3 rounded-xl text-center font-medium shadow-sm active:scale-95 transition-transform"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

// --- Hero ---
export const Hero: React.FC = () => (
  <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-soft-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        <div className="mb-16 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clinical-50 text-clinical-700 text-xs font-semibold uppercase tracking-widest mb-8 border border-clinical-100">
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-500"></span>
            Tecnologia iTero 5D
          </div>
          <h1 className="text-4xl lg:text-6xl font-semibold text-graphite-800 tracking-tight leading-[1.1] mb-8">
            Invisalign SOMA. Seu sorriso com tecnologia e conforto.
          </h1>
          <p className="text-lg lg:text-xl text-graphite-500 mb-10 leading-relaxed max-w-lg font-light">
            {SITE_CONTENT.hero.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#agendar" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-clinical-500 hover:bg-clinical-600 transition-all shadow-xl shadow-clinical-500/20"
            >
              {SITE_CONTENT.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative pl-4 lg:pl-0">
            {/* Image Container with Soft Borders */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-white aspect-[3/4]">
                <img 
                  src="/rebeca_andrade.png" 
                  alt="Rebeca Andrade" 
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-8 border-t border-graphite-100">
                    <p className="text-graphite-800 font-medium">Rebeca Andrade</p>
                    <p className="text-clinical-500 text-sm">a maior medalhista olímpica da história do Brasil</p>
                  </div>
            </div>
            {/* Subtle decorative element instead of blob */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-clinical-200 rounded-[2.5rem]"></div>
        </div>
      </div>
    </div>
  </section>
);

// --- Why Invisalign ---
export const WhyInvisalign: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-20">
        <h2 className="text-3xl font-semibold text-graphite-800 sm:text-4xl mb-6">{SITE_CONTENT.whyInvisalign.title}</h2>
        <p className="text-xl text-graphite-500 font-light leading-relaxed">{SITE_CONTENT.whyInvisalign.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SITE_CONTENT.whyInvisalign.benefits.map((benefit, index) => (
          <div key={index} className="group flex items-center gap-5 p-8 rounded-2xl bg-soft-50 hover:bg-white border border-transparent hover:border-clinical-100 transition-all shadow-sm hover:shadow-soft">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-clinical-50 flex items-center justify-center text-clinical-600 group-hover:bg-clinical-500 group-hover:text-white transition-colors">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-graphite-700 text-lg">{benefit}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Dr Profile ---
export const DrProfile: React.FC = () => (
  <section className="py-24 bg-soft-50 border-t border-graphite-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <div className="md:col-span-5 relative order-2 md:order-1">
           <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-white aspect-[3/4]">
             <img 
               src="/dr_pedro.png" 
               alt="Dr. Pedro Hammes" 
               className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
             />
           </div>
           <div className="absolute -z-10 bottom-6 -left-6 w-full h-full border border-clinical-200 rounded-[2.5rem]"></div>
          </div>

        {/* Text Side */}
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinical-50 text-clinical-700 text-xs font-semibold uppercase tracking-wide mb-6">
            Especialista
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-graphite-800 mb-2">
            {SITE_CONTENT.drPedroProfile.name}
          </h2>
          <div className="flex flex-wrap gap-4 items-center text-clinical-600 mb-8 font-medium">
             <span>{SITE_CONTENT.drPedroProfile.role}</span>
             <span className="w-1.5 h-1.5 rounded-full bg-clinical-300"></span>
             <span>{SITE_CONTENT.drPedroProfile.cro}</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-graphite-100 shadow-sm mb-8">
            <h3 className="text-graphite-800 font-medium mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-clinical-500" />
              Formação e Títulos
            </h3>
            <ul className="space-y-3">
              {(SITE_CONTENT.drPedroProfile as any).titles?.map((title: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-clinical-400 shrink-0 mt-0.5" />
                  <span className="text-graphite-600 font-light">{title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-graphite-500 font-light text-lg leading-relaxed whitespace-pre-line">
            {SITE_CONTENT.drPedroProfile.description}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Process ---
export const Process: React.FC = () => (
  <section id="processo" className="py-24 bg-white border-t border-graphite-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
            <h2 className="text-3xl font-semibold text-graphite-800 mb-6 leading-tight">
              {SITE_CONTENT.processSection.title}
            </h2>
            <p className="text-graphite-500 font-light text-lg leading-relaxed whitespace-pre-line">
              {SITE_CONTENT.processSection.intro}
            </p>
        </div>
      
      <div className="relative space-y-12">
        {/* Connection Line (Vertical) */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-clinical-200 via-clinical-100 to-transparent hidden md:block"></div>

        {SITE_CONTENT.processSection.steps.map((step, index) => (
          <div key={step.number} className="relative flex flex-col md:flex-row gap-8 group">
            
            {/* Number Indicator */}
            <div className="flex-shrink-0 z-10">
              <div className="w-12 h-12 rounded-xl bg-white border border-clinical-100 text-clinical-600 font-bold text-lg flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:border-clinical-400 group-hover:text-clinical-700 transition-all duration-300">
                {step.number}
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-grow bg-soft-50 p-8 rounded-3xl border border-graphite-100 shadow-sm hover:shadow-soft transition-all duration-300">
              <h3 className="text-xl font-semibold text-graphite-800 mb-4">{step.title}</h3>
              <p className="text-graphite-500 leading-relaxed font-light mb-6 whitespace-pre-line">
                {step.description}
              </p>
              
              {/* Bullet Points */}
              {step.bullets && step.bullets.length > 0 && (
                <ul className="space-y-3 pt-2 border-t border-graphite-200">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-clinical-400 flex-shrink-0"></div>
                      <span className="text-sm text-graphite-600 font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {step.afterBullets && (
                <p className="text-graphite-500 leading-relaxed font-light mt-4 whitespace-pre-line">
                  {step.afterBullets}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Outro */}
        {(SITE_CONTENT.processSection as any).outro && (
           <div className="bg-clinical-50 p-8 rounded-3xl border border-clinical-100 mt-12 text-center shadow-sm">
             <p className="text-graphite-600 text-lg font-light leading-relaxed whitespace-pre-line">
               {(SITE_CONTENT.processSection as any).outro}
             </p>
           </div>
        )}
      </div>
    </div>
  </section>
);

// --- Locations / Agendar ---
export const Locations: React.FC = () => (
  <section id="agendar" className="py-24 bg-soft-50 border-t border-graphite-100 scroll-mt-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-graphite-800 mb-4">Agende sua Consulta</h2>
        <p className="text-graphite-500 font-light text-lg">Escolha a unidade mais próxima para iniciar sua transformação.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SITE_CONTENT.locations.map((loc, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-graphite-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col h-full">
             <div className="mb-6">
                <h3 className="text-2xl font-medium text-clinical-600 mb-2">{loc.city}</h3>
                <div className="h-1 w-12 bg-clinical-200 rounded-full"></div>
             </div>
             
             <div className="space-y-4 mb-8 flex-grow">
               <div className="flex items-start gap-3 text-graphite-500 font-light">
                 <MapPin className="w-5 h-5 text-clinical-500 shrink-0 mt-0.5" />
                 <span className="text-sm">{loc.address}</span>
               </div>
               <div className="flex items-center gap-3 text-graphite-500 font-light">
                 <Phone className="w-5 h-5 text-clinical-500 shrink-0" />
                 <span className="text-sm">{loc.phone}</span>
               </div>
             </div>

             <a 
               href={`https://wa.me/${loc.whatsapp}?text=Olá! Gostaria de agendar uma avaliação com o Dr. Pedro na unidade de ${loc.city}.`}
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full flex items-center justify-center gap-2 bg-clinical-500 hover:bg-clinical-600 text-white py-3.5 rounded-xl transition-colors font-medium shadow-sm hover:shadow-clinical-500/20"
             >
               <MessageCircle className="w-5 h-5" />
               WhatsApp {loc.city}
             </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Footer ---
export const Footer: React.FC = () => (
  <footer className="bg-graphite-50 text-graphite-600 pt-12 pb-8 border-t border-graphite-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
             <img src="/logo.png" alt="SOMA Ortodontia" className="h-10 w-auto object-contain" />
             <span className="sr-only">SOMA Ortodontia</span>
          </div>
          <p className="text-graphite-500 text-sm max-w-sm font-light leading-relaxed">
            {SITE_CONTENT.footer.text}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-3">
             <div className="flex items-center gap-3 text-graphite-600">
                <Smile className="text-clinical-500 w-5 h-5" />
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-graphite-800">{SITE_CONTENT.drPedroProfile.name}</span>
                  <span className="text-xs text-graphite-400">{SITE_CONTENT.drPedroProfile.role}</span>
                </div>
             </div>
             <div className="flex items-center gap-3 text-graphite-600">
                <CalendarCheck className="text-clinical-500 w-5 h-5" />
                <span className="text-sm">{SITE_CONTENT.drPedroProfile.cro}</span>
             </div>
        </div>
      </div>
      <div className="border-t border-graphite-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-graphite-400 font-light">
        <p>&copy; {new Date().getFullYear()} SOMA Ortodontia. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido por Zeith Company</p>
      </div>
    </div>
  </footer>
);
