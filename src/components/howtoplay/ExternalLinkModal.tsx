import { X, AlertTriangle, ExternalLink } from 'lucide-react';
import { GUIDE_URL, MAP_MODDING_URL, SKIN_URL } from '@/constants/socials';

interface ExternalLinkModalProps {
    isOpen: boolean;
    onClose: () => void;
    activeTab: 'howto' | 'customize' | 'skin';
}

const ExternalLinkModal = ({ isOpen, onClose, activeTab }: ExternalLinkModalProps) => {
    if (!isOpen) return null;

    const getUrl = () => {
        switch (activeTab) {
            case 'howto': return GUIDE_URL;
            case 'customize': return MAP_MODDING_URL;
            case 'skin': return SKIN_URL;
            default: return GUIDE_URL;
        }
    };

    const url = getUrl();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with enhanced blur */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
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
                    onClick={onClose}
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
                        {url}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onClose}
                            className="btn-war px-8 py-3 rounded-md font-semibold uppercase tracking-wider text-foreground hover:bg-war-gold/20 hover:border-war-gold/50 transition-all duration-300"
                        >
                            Abort
                        </button>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="inline-flex items-center justify-center gap-2 btn-war-gold px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:scale-105 hover:shadow-lg hover:shadow-war-gold/40 transition-all duration-300 group"
                        >
                            <span>Launch</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExternalLinkModal;
