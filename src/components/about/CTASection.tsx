import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';

const CTASection = () => {
    return (
        <div className="text-center mt-16">
            <p className="font-military text-xl md:text-2xl text-gradient-blood">
                Think you can rise above the chaos and outsmart the rest?
            </p>
            <p className="text-lg text-muted-foreground mt-2">
                The battle's waiting.
            </p>

            {/* How to Play Button - positioned between text and dots */}
            <div className="mt-8 mb-10">
                <Link
                    to="/how-to-play"
                    className="inline-flex items-center gap-3 btn-war-gold px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300"
                >
                    <BookOpen className="w-5 h-5" />
                    How to Play
                </Link>
            </div>

            {/* Red and Blue dots display - visual finale */}
            <div className="flex items-center justify-center gap-6 md:gap-10">
                <div className="relative group">
                    <div className="absolute inset-0 bg-war-blue/30 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
                    <img
                        src={blueDot}
                        alt="Blue Team"
                        className="w-20 h-20 md:w-28 md:h-28 relative z-10 drop-shadow-[0_0_15px_rgba(50,100,200,0.5)] hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <span className="text-war-gold/60 font-military text-2xl md:text-3xl">VS</span>
                <div className="relative group">
                    <div className="absolute inset-0 bg-war-red/30 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
                    <img
                        src={redDot}
                        alt="Red Team"
                        className="w-20 h-20 md:w-28 md:h-28 relative z-10 drop-shadow-[0_0_15px_rgba(200,50,50,0.5)] hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default CTASection;
