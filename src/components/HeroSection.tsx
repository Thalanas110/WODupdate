import BackgroundMap from './hero/BackgroundMap';
import FloatingDots from './hero/FloatingDots';
import HeroContent from './hero/HeroContent';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 md:pb-40">
      <BackgroundMap />
      <FloatingDots />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
