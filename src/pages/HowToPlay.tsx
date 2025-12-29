import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { tutorialSections } from '@/constants/howto';

// Guide URL - replace with your actual Google Docs link
const GUIDE_URL = 'https://docs.google.com/document/d/17dbGNQC-BPwQHfUeeI1-0o5-_Gohf6XWWTObdLhV9VA/edit?tab=t.0';



const HowToPlay = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="text-sm uppercase tracking-wider">Back to Home</span>
                        </Link>
                        <span className="font-military text-xl md:text-2xl text-gradient-gold">
                            WAR OF DOTS
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-war-gold" />
                            <h1 className="font-military text-4xl md:text-6xl text-gradient-gold">
                                How to Play
                            </h1>
                        </div>
                    </div>

                    {/* Tutorial Sections */}
                    <div className="space-y-16">
                        {tutorialSections.map((section, index) => (
                            <div key={index} className="war-card p-6 md:p-8 overflow-hidden">
                                {/* Section number */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-war-gold/90 flex items-center justify-center">
                                        <span className="font-military text-sm text-background">{index + 1}</span>
                                    </div>
                                    <h2 className="font-military text-2xl md:text-3xl text-gradient-gold">
                                        {section.title}
                                    </h2>
                                </div>

                                {/* Content text */}
                                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                                    {section.content}
                                </p>

                                {/* Tutorial Image */}
                                <div className="rounded-lg overflow-hidden border border-border/50">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Questions Section */}
                    <div className="mt-16 text-center">
                        <div className="war-card p-8 md:p-12">
                            <h2 className="font-military text-3xl md:text-4xl text-gradient-gold mb-4">
                                Questions?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Have more questions? Consult the Guide here!
                            </p>
                            <a
                                href={GUIDE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 btn-war-gold px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-lg"
                            >
                                <span>View Full Guide</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12">
                        <Link
                            to="/"
                            className="btn-war px-8 py-3 rounded-md font-semibold uppercase tracking-wider inline-block text-foreground"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HowToPlay;
