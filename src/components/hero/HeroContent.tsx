import CountdownTimer from '../CountdownTimer';

const HeroContent = () => {
    return (
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[inherit]">
            <div className="animate-fade-up">
                <h1 className="font-military text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl text-gradient-gold mb-2 leading-none">
                    WAR OF DOTS
                </h1>
                <p className="text-base sm:text-l md:text-xl text-foreground/95 mb-1 uppercase tracking-[0.2em] text-pop">
                    Command. Conquer. Dominate.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground/90 max-w-2xl mx-auto mb-4 font-medium drop-shadow-md">
                    A strategic multiplayer game where every move matters
                </p>
            </div>

            <div className="animate-fade-up delay-200 w-full">
                <CountdownTimer />
            </div>

            <div className="animate-fade-up delay-400 mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full sm:w-auto">
                <a
                    href="#about"
                    className="btn-war-gold px-8 py-3 rounded-md font-semibold uppercase tracking-wider inline-block w-full sm:w-auto text-sm md:text-base"
                >
                    Learn More
                </a>
                <a
                    href="#discord"
                    className="btn-war px-8 py-3 rounded-md text-foreground inline-block w-full sm:w-auto text-sm md:text-base"
                >
                    Join Discord
                </a>
            </div>
        </div>
    );
};

export default HeroContent;
