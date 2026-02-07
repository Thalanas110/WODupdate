import { TouchEvent } from 'react';
import { screenshots } from '@/constants/screenshotsgp.ts';

interface CarouselProps {
    currentIndex: number;
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: (e: TouchEvent) => void;
    children?: React.ReactNode;
}

const Carousel = ({ currentIndex, onTouchStart, onTouchMove, onTouchEnd, children }: CarouselProps) => {
    return (
        <div className="relative group">
            {/* Outer glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-war-red/20 via-war-gold/30 to-war-blue/20 rounded-xl blur-sm opacity-60" />

            <div
                className="war-card overflow-hidden rounded-xl relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-war-gold/40 rounded-tl-xl z-10" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-war-gold/40 rounded-tr-xl z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-war-gold/40 rounded-bl-xl z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-war-gold/40 rounded-br-xl z-10" />

                <div className="relative aspect-video overflow-hidden">
                    {screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${index === currentIndex
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-105'
                                }`}
                            loading="lazy"
                        />
                    ))}
                    {/* Vignette overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
                    {/* Scan line effect - CSS only */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
                </div>
            </div>

            {children}
        </div>
    );
};

export default Carousel;
