import { ChevronLeft, ChevronRight } from 'lucide-react';
import { screenshots } from '@/constants/screenshotsgp.ts';

interface CarouselControlsProps {
    onNext: () => void;
    onPrev: () => void;
    currentIndex: number;
}

const CarouselControls = ({ onNext, onPrev, currentIndex }: CarouselControlsProps) => {
    return (
        <>
            {/* Navigation Arrows with enhanced styling */}
            <button
                onClick={onPrev}
                className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-war-darker/90 hover:bg-war-dark rounded-full border border-war-gold/30 transition-all duration-300 hover:scale-110 hover:border-war-gold/60 group-hover:opacity-100 md:opacity-0 shadow-lg shadow-black/30"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-war-gold" />
            </button>
            <button
                onClick={onNext}
                className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-war-darker/90 hover:bg-war-dark rounded-full border border-war-gold/30 transition-all duration-300 hover:scale-110 hover:border-war-gold/60 group-hover:opacity-100 md:opacity-0 shadow-lg shadow-black/30"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-war-gold" />
            </button>

            {/* Slide counter badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-war-darker/80 rounded-full border border-war-gold/30 text-xs text-war-gold font-mono z-10">
                {currentIndex + 1} / {screenshots.length}
            </div>
        </>
    );
};

export default CarouselControls;
