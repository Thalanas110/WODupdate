import { Crosshair, Target } from 'lucide-react';
import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';
import { useCarousel } from './gameplay/useCarousel';
import Carousel from './gameplay/Carousel';
import CarouselControls from './gameplay/CarouselControls';
import ThumbnailNavigation from './gameplay/ThumbnailNavigation';
import ProgressBar from './gameplay/ProgressBar';

const GameplaySection = () => {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useCarousel();

  return (
    <section id="gameplay" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Decorative background elements - CSS only for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[5%] w-32 h-32 bg-war-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[5%] w-40 h-40 bg-war-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 text-war-gold/20 hidden md:block">
        <Crosshair className="w-8 h-8" />
      </div>
      <div className="absolute top-8 right-8 text-war-gold/20 hidden md:block">
        <Target className="w-8 h-8" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated underline */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="font-military text-3xl md:text-5xl text-gradient-gold mb-4">
              Gameplay Preview
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-war-gold to-transparent" />
          </div>
          <p className="text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <img src={redDot} alt="" className="w-4 h-4" aria-hidden="true" />
            Experience intense tactical battles across diverse terrain
            <img src={blueDot} alt="" className="w-4 h-4" aria-hidden="true" />
          </p>
        </div>

        {/* Main Carousel */}
        <Carousel
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <CarouselControls
            onNext={nextSlide}
            onPrev={prevSlide}
            currentIndex={currentIndex}
          />
        </Carousel>

        <ThumbnailNavigation
          currentIndex={currentIndex}
          onSelect={goToSlide}
        />

        <ProgressBar currentIndex={currentIndex} />
      </div>
    </section>
  );
};

export default GameplaySection;
