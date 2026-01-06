import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';

export const FloatingDots = () => {
    return (
        <>
            {/* Floating Tactical Dots */}
            <img
                src={redDot}
                alt=""
                className="fixed top-[15%] left-[5%] w-6 h-6 md:w-10 md:h-10 opacity-40 animate-float pointer-events-none z-0"
                aria-hidden="true"
            />
            <img
                src={blueDot}
                alt=""
                className="fixed top-[35%] right-[8%] w-8 h-8 md:w-12 md:h-12 opacity-35 animate-float-delayed pointer-events-none z-0"
                aria-hidden="true"
            />
            <img
                src={redDot}
                alt=""
                className="fixed bottom-[40%] left-[3%] w-5 h-5 md:w-8 md:h-8 opacity-30 animate-float-delayed pointer-events-none z-0"
                aria-hidden="true"
            />
            <img
                src={blueDot}
                alt=""
                className="fixed bottom-[25%] right-[5%] w-6 h-6 md:w-9 md:h-9 opacity-35 animate-float pointer-events-none z-0"
                aria-hidden="true"
            />
        </>
    );
};

