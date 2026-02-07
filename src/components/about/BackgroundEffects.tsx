import { Shield } from 'lucide-react';

const BackgroundEffects = () => {
    return (
        <>
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[10%] w-48 h-48 bg-war-red/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-war-blue/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-war-gold/3 rounded-full blur-3xl" />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-12 left-8 text-war-gold/10 hidden md:block">
                <Shield className="w-12 h-12" />
            </div>
            <div className="absolute top-12 right-8 text-war-gold/10 hidden md:block rotate-12">
                <Shield className="w-12 h-12" />
            </div>
        </>
    );
};

export default BackgroundEffects;
