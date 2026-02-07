import { screenshots } from '@/constants/screenshotsgp.ts';

interface ProgressBarProps {
    currentIndex: number;
}

const ProgressBar = ({ currentIndex }: ProgressBarProps) => {
    return (
        <div className="hidden md:flex justify-center gap-1 mt-4">
            {screenshots.map((_, index) => (
                <div
                    key={index}
                    className={`h-0.5 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'w-8 bg-war-gold'
                        : 'w-2 bg-border/50'
                        }`}
                />
            ))}
        </div>
    );
};

export default ProgressBar;
