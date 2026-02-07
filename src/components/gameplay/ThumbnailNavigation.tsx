import { screenshots } from '@/constants/screenshotsgp.ts';

interface ThumbnailNavigationProps {
    currentIndex: number;
    onSelect: (index: number) => void;
}

const ThumbnailNavigation = ({ currentIndex, onSelect }: ThumbnailNavigationProps) => {
    return (
        <>
            {/* Thumbnail Navigation - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex justify-center gap-2 md:gap-3 mt-8 overflow-x-auto pb-2 px-4">
                {screenshots.map((screenshot, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`flex-shrink-0 w-16 h-10 md:w-24 md:h-14 rounded-md overflow-hidden border-2 transition-all duration-300 relative ${index === currentIndex
                            ? 'border-war-gold scale-110 shadow-lg shadow-war-gold/20'
                            : 'border-border/30 opacity-50 hover:opacity-100 hover:border-border'
                            }`}
                    >
                        <img
                            src={screenshot.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        {index === currentIndex && (
                            <div className="absolute inset-0 bg-war-gold/10" />
                        )}
                    </button>
                ))}
            </div>

            {/* Mobile Dot Pagination - Interactive dots for mobile */}
            <div className="flex md:hidden justify-center gap-2 mt-6">
                {screenshots.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-3 h-3 bg-war-gold shadow-lg shadow-war-gold/30'
                            : 'w-2 h-2 bg-border/50 hover:bg-border'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
};

export default ThumbnailNavigation;
