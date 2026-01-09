import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Shield, Target, Crosshair, AlertTriangle, X, Settings, Gamepad2, Palette } from 'lucide-react';
import { tutorialSections, customizationSections, skinCustomizationSections } from '@/constants/howto';
import { GUIDE_URL, MODDING_URL, SKIN_URL } from '@/constants/socials';


const HowToPlay = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState<'howto' | 'customize' | 'skin'>('howto');

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Fog overlay */}
                <div className="fog-overlay absolute inset-0 opacity-60" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
            </div>



            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-war-gold/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-foreground/80 hover:text-war-gold transition-colors duration-300 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="text-sm uppercase tracking-wider font-medium">Return to HQ</span>
                        </Link>
                        <span className="font-military text-xl md:text-2xl text-gradient-gold">
                            WAR OF DOTS
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-28 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <div className="text-center mb-20 animate-fade-up">
                        <div className="inline-flex items-center justify-center gap-4 mb-6">
                            <Crosshair className="w-8 h-8 md:w-10 md:h-10 text-war-gold/70" />
                            <BookOpen className="w-10 h-10 md:w-14 md:h-14 text-war-gold" />
                            <Crosshair className="w-8 h-8 md:w-10 md:h-10 text-war-gold/70" />
                        </div>
                        <h1 className="font-military text-5xl md:text-7xl text-gradient-gold mb-4 drop-shadow-lg">
                            FIELD MANUAL
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-[0.2em]">
                            Tactical Operations Guide
                        </p>
                        {/* Decorative line */}
                        <div className="mt-8 mx-auto w-64 h-1 bg-gradient-to-r from-transparent via-war-gold/50 to-transparent" />

                        {/* Tab Navigation */}
                        <div className="mt-10 flex justify-center">
                            <div className="inline-flex bg-background/60 backdrop-blur-sm border border-war-gold/30 rounded-lg p-1.5 gap-2">
                                <button
                                    onClick={() => setActiveTab('howto')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${activeTab === 'howto'
                                        ? 'bg-gradient-to-r from-war-gold to-war-gold/80 text-background shadow-lg shadow-war-gold/20'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-war-gold/10'
                                        }`}
                                >
                                    <Gamepad2 className="w-4 h-4" />
                                    <span>How to Play</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('customize')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${activeTab === 'customize'
                                        ? 'bg-gradient-to-r from-war-gold to-war-gold/80 text-background shadow-lg shadow-war-gold/20'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-war-gold/10'
                                        }`}
                                >
                                    <Settings className="w-4 h-4" />
                                    <span>Customize Your Game</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('skin')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${activeTab === 'skin'
                                        ? 'bg-gradient-to-r from-war-gold to-war-gold/80 text-background shadow-lg shadow-war-gold/20'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-war-gold/10'
                                        }`}
                                >
                                    <Palette className="w-4 h-4" />
                                    <span>Customize Skin</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tutorial Sections */}
                    <div className="space-y-12">
                        {(activeTab === 'howto' ? tutorialSections : activeTab === 'customize' ? customizationSections : skinCustomizationSections).map((section, index) => (
                            <div
                                key={`${activeTab}-${index}`}
                                className="war-card p-6 md:p-10 overflow-hidden relative group animate-fade-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Tactical corner markers */}
                                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-war-gold/40" />
                                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-war-gold/40" />
                                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-war-gold/40" />
                                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-war-gold/40" />

                                {/* Section header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-war-gold to-war-gold/70 flex items-center justify-center shadow-lg shadow-war-gold/20">
                                            <span className="font-military text-lg md:text-xl text-background">{index + 1}</span>
                                        </div>
                                        {/* Pulse ring */}
                                        <div className="absolute inset-0 rounded-full border-2 border-war-gold/30 animate-pulse-slow" />
                                    </div>
                                    <div>
                                        <h2 className="font-military text-2xl md:text-3xl text-gradient-gold">
                                            {section.title}
                                        </h2>
                                        <div className="h-0.5 w-20 bg-gradient-to-r from-war-gold/50 to-transparent mt-1" />
                                    </div>
                                </div>

                                {/* Content text */}
                                <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed pl-4 border-l-2 border-war-gold/30">
                                    {section.content}
                                </p>

                                {/* Tutorial Image */}
                                <div className="relative rounded-lg overflow-hidden border-2 border-border/50 shadow-xl shadow-black/30 group-hover:border-war-gold/30 transition-colors duration-300">
                                    {/* Image overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 pointer-events-none" />
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
                    <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '500ms' }}>
                        <div className="war-card p-10 md:p-14 relative">
                            {/* Corner markers */}
                            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-war-gold/50" />
                            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-war-gold/50" />
                            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-war-gold/50" />
                            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-war-gold/50" />

                            <Shield className="w-12 h-12 md:w-16 md:h-16 text-war-gold mx-auto mb-6" />
                            <h2 className="font-military text-3xl md:text-5xl text-gradient-gold mb-4">
                                NEED INTEL?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md mx-auto">
                                Access the complete tactical documentation for advanced strategies
                            </p>
                            <button
                                onClick={() => setShowModal(true)}
                                className="inline-flex items-center gap-3 btn-war-gold px-10 py-4 rounded-md font-semibold uppercase tracking-wider text-lg hover:scale-105 transition-transform duration-300"
                            >
                                <Target className="w-5 h-5" />
                                <span>View Full Guide</span>
                                <ExternalLink className="w-5 h-5" />
                            </button>
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
                </div>
            </main>

            {/* External Link Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal */}
                    <div className="relative war-card p-8 md:p-10 max-w-md w-full animate-fade-up">
                        {/* Corner markers */}
                        <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-war-gold/50" />
                        <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-war-gold/50" />
                        <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-war-gold/50" />
                        <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-war-gold/50" />

                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="text-center">
                            <AlertTriangle className="w-14 h-14 text-war-gold mx-auto mb-4" />
                            <h3 className="font-military text-2xl md:text-3xl text-gradient-gold mb-3">
                                EXTERNAL LINK
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                You are about to be redirected to an external documentation page{activeTab === 'howto' ? ' on Google Docs' : activeTab === 'customize' ? ' for map modding' : ' for skin modding'}.
                            </p>
                            <p className="text-sm text-muted-foreground/70 mb-8 break-all">
                                {(activeTab === 'howto' ? GUIDE_URL : activeTab === 'customize' ? MODDING_URL : SKIN_URL).substring(0, 50)}...
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="btn-war px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-foreground"
                                >
                                    Cancel
                                </button>
                                <a
                                    href={activeTab === 'howto' ? GUIDE_URL : activeTab === 'customize' ? MODDING_URL : SKIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setShowModal(false)}
                                    className="inline-flex items-center justify-center gap-2 btn-war-gold px-6 py-3 rounded-md font-semibold uppercase tracking-wider"
                                >
                                    <span>Proceed</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HowToPlay;
