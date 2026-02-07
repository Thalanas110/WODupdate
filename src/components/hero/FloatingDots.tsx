import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';

const FloatingDots = () => {
    return (
        <>
            {/* Floating Dots - Red Team */}
            <img
                src={redDot}
                alt=""
                className="absolute top-[20%] left-[10%] w-8 h-8 md:w-12 md:h-12 opacity-70 animate-float pointer-events-none"
                aria-hidden="true"
            />
            <img
                src={redDot}
                alt=""
                className="absolute top-[60%] left-[15%] w-6 h-6 md:w-10 md:h-10 opacity-50 animate-float-delayed pointer-events-none"
                aria-hidden="true"
            />
            <img
                src={redDot}
                alt=""
                className="absolute bottom-[25%] left-[8%] w-5 h-5 md:w-8 md:h-8 opacity-60 animate-float pointer-events-none"
                aria-hidden="true"
            />

            {/* Floating Dots - Blue Team */}
            <img
                src={blueDot}
                alt=""
                className="absolute top-[25%] right-[12%] w-8 h-8 md:w-12 md:h-12 opacity-70 animate-float-delayed pointer-events-none"
                aria-hidden="true"
            />
            <img
                src={blueDot}
                alt=""
                className="absolute top-[55%] right-[10%] w-6 h-6 md:w-10 md:h-10 opacity-50 animate-float pointer-events-none"
                aria-hidden="true"
            />
            <img
                src={blueDot}
                alt=""
                className="absolute bottom-[30%] right-[15%] w-5 h-5 md:w-8 md:h-8 opacity-60 animate-float-delayed pointer-events-none"
                aria-hidden="true"
            />
        </>
    );
};

export default FloatingDots;
