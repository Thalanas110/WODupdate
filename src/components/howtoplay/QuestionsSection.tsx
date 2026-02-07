import { Shield, Target, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuestionsSectionProps {
    onShowModal: () => void;
}

const QuestionsSection = ({ onShowModal }: QuestionsSectionProps) => {
    return (
        <>
            <div className="mt-20 animate-fade-up" style={{ animationDelay: '500ms' }}>
                <div className="relative overflow-hidden rounded-lg">
                    {/* Tactical grid background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-war-gold/5 via-transparent to-war-gold/5 pointer-events-none" />
                    <div className="absolute inset-0 border border-war-gold/20 rounded-lg pointer-events-none" />

                    {/* Animated border glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-war-gold/0 via-war-gold/10 to-war-gold/0 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-war-gold/40" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-war-gold/40" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-war-gold/40" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-war-gold/40" />

                    {/* Content */}
                    <div className="relative z-10 p-10 md:p-16 text-center group">
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <Shield className="w-14 h-14 md:w-18 md:h-18 text-war-gold animate-bounce-slow" />
                                <div className="absolute inset-0 rounded-full border border-war-gold/20 animate-pulse" style={{ transform: 'scale(1.5)' }} />
                            </div>
                        </div>

                        <h2 className="font-military text-3xl md:text-5xl text-gradient-gold mb-4 drop-shadow-lg">
                            NEED MORE INTEL?
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-war-gold/50 to-transparent mx-auto mb-8" />

                        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                            Access the complete tactical documentation for advanced strategies, detailed mechanics, and expert tips from the field.
                        </p>

                        <button
                            onClick={onShowModal}
                            className="inline-flex items-center gap-3 btn-war-gold px-10 py-4 rounded-md font-semibold uppercase tracking-wider text-lg hover:scale-105 hover:shadow-lg hover:shadow-war-gold/40 transition-all duration-300 group/btn"
                        >
                            <Target className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                            <span>Access Full Briefing</span>
                            <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
                <Link
                    to="/"
                    className="btn-war px-10 py-4 rounded-md font-semibold uppercase tracking-wider inline-flex items-center gap-3 text-foreground hover:scale-105 transition-transform duration-300"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Return to Base
                </Link>
            </div>
        </>
    );
};

export default QuestionsSection;
