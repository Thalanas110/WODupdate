import { Gamepad2, Settings, Palette, ChevronDown } from 'lucide-react';

interface TabNavigationProps {
    activeTab: 'howto' | 'customize' | 'skin';
    setActiveTab: (tab: 'howto' | 'customize' | 'skin') => void;
    showDropdown: boolean;
    setShowDropdown: (show: boolean) => void;
    setShowModal: (show: boolean) => void;
}

const TabNavigation = ({ activeTab, setActiveTab, showDropdown, setShowDropdown, setShowModal }: TabNavigationProps) => {
    return (
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
                                        setActiveTab(tab.id as 'howto' | 'customize' | 'skin');
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
    );
};

export default TabNavigation;
