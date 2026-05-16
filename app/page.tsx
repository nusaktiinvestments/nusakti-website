import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EcosystemSection from './components/EcosystemSection';
import InvestmentsSection from './components/InvestmentsSection';
import ManufacturingSection from './components/ManufacturingSection';
import AIAssistantSection from './components/AIAssistantSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Nusakti Ecosystem | Strategic Investments & Manufacturing',
  description: 'Luxury institutional homepage showcasing strategic investments, advanced manufacturing, and AI-powered automation.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Header />
      <HeroSection />
      <EcosystemSection />
      <InvestmentsSection />
      <ManufacturingSection />
      <AIAssistantSection />
      <Footer />
    </main>
  );
}
