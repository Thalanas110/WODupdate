import { Target, Sword, Airplay, Zap, Shield, Map, Palette, ChevronDown } from 'lucide-react';

interface TutorialSection {
    title: string;
    content: string;
    image: string;
}

interface TutorialCardProps {
    section: TutorialSection;
    index: number;
    activeTab: 'howto' | 'customize' | 'skin';
    isExpanded: boolean;
    onToggle: () => void;
}

const TutorialCard = ({ section, index, activeTab, isExpanded, onToggle }: TutorialCardProps) => {
    const icons = {
        'howto': [Target, Sword, Airplay, Zap, Shield],
        'customize': [Map, Zap, Shield, Target],
        'skin': [Palette, Palette, Palette, Palette, Palette]
    };
    const currentIcons = icons[activeTab as keyof typeof icons] || [];
    const IconComponent = currentIcons[index % currentIcons.length];

    return (
        <div
            className={`animate-fade-up ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Card button */}
            <button
                onClick={onToggle}
                className={`w-full group relative overflow-hidden rounded-lg transition-all duration-300 ${isExpanded
                    ? 'ring-2 ring-war-gold/50'
                    : 'hover:ring-1 hover:ring-war-gold/30'
                    }`}
            >
                {/* Background with gradient on hover */}
                <div className={`absolute inset-0 transition-all duration-300 ${isExpanded
                    ? 'bg-gradient-to-r from-war-gold/15 via-transparent to-transparent'
                    : 'bg-background/40 group-hover:bg-gradient-to-r group-hover:from-war-gold/10 group-hover:via-transparent group-hover:to-transparent'
                    }`} />

                {/* Border effect */}
                <div className={`absolute inset-0 border rounded-lg transition-colors duration-300 ${isExpanded
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
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded
                            ? 'bg-gradient-to-br from-war-gold to-war-gold/60 shadow-lg shadow-war-gold/30'
                            : 'bg-gradient-to-br from-war-gold/20 to-war-gold/10 group-hover:from-war-gold/30 group-hover:to-war-gold/20'
                            }`}>
                            <IconComponent className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${isExpanded ? 'text-background' : 'text-war-gold'
                                }`} />
                        </div>
                        {/* Rank number */}
                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full font-military font-bold text-sm flex items-center justify-center transition-all duration-300 ${isExpanded
                            ? 'bg-war-gold text-background ring-2 ring-background'
                            : 'bg-background border border-war-gold/30 text-war-gold/70 group-hover:text-war-gold'
                            }`}>
                            {index + 1}
                        </div>
                    </div>

                    {/* Title and description */}
                    <div className="flex-grow text-left">
                        <h3 className={`font-military text-xl md:text-2xl transition-colors duration-300 ${isExpanded ? 'text-gradient-gold' : 'text-foreground group-hover:text-war-gold'
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
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-war-gold/10 transition-all duration-300 group-hover:bg-war-gold/20 ${isExpanded ? 'rotate-180 bg-war-gold/20' : ''
                            }`}>
                            <ChevronDown className={`w-5 h-5 text-war-gold transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                }`} />
                        </div>
                    </div>
                </div>
                {/* Shimmer Effect on Hover */}
                <div className="shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="mt-3 overflow-hidden rounded-lg border border-war-gold/20 bg-background/50 backdrop-blur-sm animate-in slide-in-from-top-2 duration-300 relative">
                    {/* Scan Line Effect */}
                    <div className="scan-line" />
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
};

export default TutorialCard;
