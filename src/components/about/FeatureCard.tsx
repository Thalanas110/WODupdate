import { LucideIcon } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface FeatureCardProps {
    feature: Feature;
    index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
    return (
        <div
            className="animate-float"
            style={{ animationDelay: `${index * 0.5}s` }}
        >
            <div
                className="war-card p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300 relative h-full"
            >
                {/* Card corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-war-gold/20 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-war-gold/20 rounded-br-lg" />

                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-military text-xl md:text-2xl text-primary mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                            {feature.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
