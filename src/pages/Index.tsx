import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GameplaySection from '@/components/GameplaySection';
import DiscordSection from '@/components/DiscordSection';
import DonateSection from '@/components/DonateSection';
import CreatorSection from '@/components/CreatorSection';
import Footer from '@/components/Footer';
import YoutubeSection from '@/components/YoutubeSection';
import GrassEffect from '@/components/GrassEffect';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GameplaySection />
      <YoutubeSection />
      <DiscordSection />
      <DonateSection />
      <CreatorSection />
      <GrassEffect />
      <Footer />
    </main>
  );
};

export default Index;
