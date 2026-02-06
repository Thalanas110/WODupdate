import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Shield, Target, Crosshair, AlertTriangle, X, Settings, Gamepad2, Palette, ChevronDown, Zap, Sword, Map, Airplay } from 'lucide-react';
import { tutorialSections, customizationSections, skinCustomizationSections } from '@/constants/howto';
import { GUIDE_URL, MAP_MODDING_URL, SKIN_URL } from '@/constants/socials';


const HowToPlay = () => {
    const [showModal, setShowModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState<'howto' | 'customize' | 'skin'>('howto');
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
                    <div className="text-center mb-20 animate-fade-up relative z-30">
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
                        <div className="mt-10 flex justify-center sticky top-20 z-40">
                            {/* Mobile Dropdown (< 1000px) */}
                            <div className="relative w-full max-w-md min-[1000px]:hidden">
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setShowDropdown(!showDropdown);
                                    }}
                                    className="w-full flex items-center justify-between bg-background/80 backdrop-blur-md border border-war-gold/30 rounded-lg p-4 text-left shadow-lg shadow-black/20"
                                >
                                    <div className="flex items-center gap-3">
                                        {activeTab === 'howto' && <Gamepad2 className="w-5 h-5 text-war-gold" />}
                                        {activeTab === 'customize' && <Settings className="w-5 h-5 text-war-gold" />}
                                        {activeTab === 'skin' && <Palette className="w-5 h-5 text-war-gold" />}
                                        <span className="font-semibold uppercase tracking-wider text-war-gold">
                                            {activeTab === 'howto' ? 'How to Play' : activeTab === 'customize' ? 'Customize Game' : 'Customize Skin'}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-war-gold transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {showDropdown && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-xl border border-war-gold/30 rounded-lg shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
                                        <div className="p-1.5 space-y-1">
                                            {[
                                                { id: 'howto', label: 'How to Play', icon: Gamepad2 },
                                                { id: 'customize', label: 'Customize Game', icon: Settings },
                                                { id: 'skin', label: 'Customize Skin', icon: Palette }
                                            ].map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => {
                                                        setActiveTab(tab.id as any);
                                                        setShowDropdown(false);
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium uppercase tracking-wider text-sm transition-all duration-200
                                                        ${activeTab === tab.id
                                                            ? 'bg-war-gold/20 text-war-gold border border-war-gold/20'
                                                            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                                        }`}
                                                >
                                                    <tab.icon className="w-4 h-4" />
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Desktop Buttons (>= 1000px) */}
                            <div className="hidden min-[1000px]:inline-flex bg-background/60 backdrop-blur-sm border border-war-gold/30 rounded-lg p-1.5 gap-2">
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
                    <div className="space-y-6">
                        {(activeTab === 'howto' ? tutorialSections : activeTab === 'customize' ? customizationSections : skinCustomizationSections).map((section, index) => {
                            const icons = {
                                'howto': [Target, Sword, Airplay, Zap, Shield],
                                'customize': [Map, Zap, Shield, Target],
                                'skin': [Palette, Palette, Palette, Palette, Palette]
                            };
                            const currentIcons = icons[activeTab as keyof typeof icons] || [];
                            const IconComponent = currentIcons[index % currentIcons.length];
                            const isExpanded = expandedIndex === index;

                            return (
                                <div
                                    key={`${activeTab}-${index}`}
                                    className="animate-fade-up"
                                    style={{ animationDelay: `${index * 75}ms` }}
                                >
                                    {/* Card button */}
                                    <button
                                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                        className={`w-full group relative overflow-hidden rounded-lg transition-all duration-300 ${
                                            isExpanded
                                                ? 'ring-2 ring-war-gold/50'
                                                : 'hover:ring-1 hover:ring-war-gold/30'
                                        }`}
                                    >
                                        {/* Background with gradient on hover */}
                                        <div className={`absolute inset-0 transition-all duration-300 ${
                                            isExpanded
                                                ? 'bg-gradient-to-r from-war-gold/15 via-transparent to-transparent'
                                                : 'bg-background/40 group-hover:bg-gradient-to-r group-hover:from-war-gold/10 group-hover:via-transparent group-hover:to-transparent'
                                        }`} />
                                        
                                        {/* Border effect */}
                                        <div className={`absolute inset-0 border rounded-lg transition-colors duration-300 ${
                                            isExpanded
                                                ? 'border-war-gold/40'
                                                : 'border-border/50 group-hover:border-war-gold/20'
                                        }`} />

                                        {/* Tactical corner markers */}
                                        <div className="absolute top-3 left-3 w-2 h-2 bg-war-gold/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute top-3 right-3 w-2 h-2 bg-war-gold/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-3 left-3 w-2 h-2 bg-war-gold/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-3 right-3 w-2 h-2 bg-war-gold/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Content */}
                                        <div className="relative p-6 md:p-8 flex items-center gap-6">
                                            {/* Icon badge */}
                                            <div className="relative flex-shrink-0 group/icon">
                                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                    isExpanded
                                                        ? 'bg-gradient-to-br from-war-gold to-war-gold/60 shadow-lg shadow-war-gold/30'
                                                        : 'bg-gradient-to-br from-war-gold/20 to-war-gold/10 group-hover:from-war-gold/30 group-hover:to-war-gold/20'
                                                }`}>
                                                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${
                                                        isExpanded ? 'text-background' : 'text-war-gold'
                                                    }`} />
                                                </div>
                                                {/* Rank number */}
                                                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full font-military font-bold text-sm flex items-center justify-center transition-all duration-300 ${
                                                    isExpanded
                                                        ? 'bg-war-gold text-background ring-2 ring-background'
                                                        : 'bg-background border border-war-gold/30 text-war-gold/70 group-hover:text-war-gold'
                                                }`}>
                                                    {index + 1}
                                                </div>
                                            </div>

                                            {/* Title and description */}
                                            <div className="flex-grow text-left">
                                                <h3 className={`font-military text-xl md:text-2xl transition-colors duration-300 ${
                                                    isExpanded ? 'text-gradient-gold' : 'text-foreground group-hover:text-war-gold'
                                                }`}>
                                                    {section.title}
                                                </h3>
                                                {!isExpanded && (
                                                    <p className="text-sm md:text-base text-muted-foreground mt-1 line-clamp-1">
                                                        {section.content.substring(0, 60)}...
                                                    </p>
                                                )}
                                            </div>

                                            {/* Expand indicator */}
                                            <div className="flex-shrink-0 hidden md:flex">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-war-gold/10 transition-all duration-300 group-hover:bg-war-gold/20 ${
                                                    isExpanded ? 'rotate-180 bg-war-gold/20' : ''
                                                }`}>
                                                    <ChevronDown className={`w-5 h-5 text-war-gold transition-transform duration-300 ${
                                                        isExpanded ? 'rotate-180' : ''
                                                    }`} />
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="mt-3 overflow-hidden rounded-lg border border-war-gold/20 bg-background/50 backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
                                            <div className="p-6 md:p-10 space-y-6">
                                                {/* Content text with tactical styling */}
                                                <div>
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <div className="w-1 h-full min-h-[100px] bg-gradient-to-b from-war-gold/50 to-transparent rounded-full" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <p className="text-lg md:text-lg text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                                                {section.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tutorial Image */}
                                                <div className="relative mt-8 rounded-lg overflow-hidden border border-war-gold/20 shadow-xl shadow-black/50 group/img">
                                                    {/* Image overlay effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 pointer-events-none" />
                                                    <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-war-gold/10 to-transparent z-5" />
                                                    <img
                                                        src={section.image}
                                                        alt={section.title}
                                                        className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Questions Section */}
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
                                        <div className="absolute inset-0 rounded-full border border-war-gold/20 animate-pulse" style={{transform: 'scale(1.5)'}} />
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
                                    onClick={() => setShowModal(true)}
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
                </div>
            </main>

            {/* External Link Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop with enhanced blur */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md rounded-lg overflow-hidden animate-fade-up">
                        {/* Glowing border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-war-gold/30 via-war-gold/10 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 border border-war-gold/40 rounded-lg pointer-events-none" />
                        
                        {/* Background */}
                        <div className="absolute inset-0 bg-background/95 backdropfilter-blur-xl pointer-events-none" />

                        {/* Corner markers */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-war-gold/50" />
                        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-war-gold/50" />
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-war-gold/50" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-war-gold/50" />

                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-5 right-5 z-20 text-muted-foreground hover:text-war-gold transition-colors duration-200 p-2 hover:bg-war-gold/10 rounded-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-10 text-center">
                            <div className="mb-6 flex justify-center">
                                <AlertTriangle className="w-16 h-16 text-war-gold animate-bounce-slow" />
                            </div>
                            
                            <h3 className="font-military text-2xl md:text-3xl text-gradient-gold mb-4">
                                EXTERNAL TRANSMISSION
                            </h3>
                            
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-war-gold/50 to-transparent mx-auto mb-6" />
                            
                            <p className="text-foreground/90 mb-4 text-base md:text-lg">
                                You are about to be redirected to an external documentation resource{activeTab === 'howto' ? ' on Google Docs' : activeTab === 'customize' ? ' for map modding guidance' : ' for skin modding reference'}.
                            </p>
                            
                            <p className="text-sm text-muted-foreground/70 mb-8 break-all font-mono bg-background/50 p-4 rounded border border-war-gold/20">
                                {(activeTab === 'howto' ? GUIDE_URL : activeTab === 'customize' ? MAP_MODDING_URL : SKIN_URL)}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="btn-war px-8 py-3 rounded-md font-semibold uppercase tracking-wider text-foreground hover:bg-war-gold/20 hover:border-war-gold/50 transition-all duration-300"
                                >
                                    Abort
                                </button>
                                <a
                                    href={activeTab === 'howto' ? GUIDE_URL : activeTab === 'customize' ? MAP_MODDING_URL : SKIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setShowModal(false)}
                                    className="inline-flex items-center justify-center gap-2 btn-war-gold px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:scale-105 hover:shadow-lg hover:shadow-war-gold/40 transition-all duration-300 group"
                                >
                                    <span>Launch</span>
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
