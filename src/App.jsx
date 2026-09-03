import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import Hero from './components/Hero';
import ValuePropSection from './components/ValuePropSection';
import AppFeatureShowcase from './components/AppFeatureShowcase';
import PageCarousel from './components/PageCarousel';
import AudienceSection from './components/AudienceSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import UpsellModal from './components/UpsellModal';

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar */}
      <HeaderBar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <ValuePropSection />
        <AppFeatureShowcase />
        <PageCarousel />
        <AudienceSection />
        <BonusSection />
        <PricingSection onBasicClick={() => setIsUpsellOpen(true)} />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Upsell Offer Modal */}
      <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />
    </div>
  );
}
