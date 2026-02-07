import { features } from '@/constants/aboutpage';
import FeatureCard from './about/FeatureCard';
import CTASection from './about/CTASection';
import BackgroundEffects from './about/BackgroundEffects';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 bg-secondary/30 overflow-hidden">
      <BackgroundEffects />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="font-military text-3xl md:text-5xl text-gradient-gold mb-4">
              What is War of Dots?
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-war-gold to-transparent" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
            War of Dots is a strategic multiplayer game where every move matters.
            Command your armies in real-time battles across dynamic maps: capture territory,
            control resources, and conquer your rivals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <CTASection />
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default AboutSection;
