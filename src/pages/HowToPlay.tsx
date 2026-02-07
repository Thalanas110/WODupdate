import { useEffect, useState } from 'react';
import { BookOpen, Crosshair } from 'lucide-react';
import { tutorialSections, customizationSections, skinCustomizationSections } from '@/constants/howto';
import GrassEffect from '@/components/ux/grass/grasseffect';
import Header from '@/components/howtoplay/Header';
import TabNavigation from '@/components/howtoplay/TabNavigation';
import TutorialCard from '@/components/howtoplay/TutorialCard';
import QuestionsSection from '@/components/howtoplay/QuestionsSection';
import ExternalLinkModal from '@/components/howtoplay/ExternalLinkModal';

const HowToPlay = () => {
    const [showModal, setShowModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState<'howto' | 'customize' | 'skin'>('howto');
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activeSections = activeTab === 'howto' ? tutorialSections : activeTab === 'customize' ? customizationSections : skinCustomizationSections;

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Fog overlay */}
                <div className="fog-overlay absolute inset-0 opacity-60" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
            </div>

            <Header />

            {/* Main Content */}
            <main className="relative z-10 pt-28 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <div className="text-center mb-20 animate-fade-up relative z-30">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Crosshair className="w-8 h-8 md:w-10 md:h-10 text-war-gold/70" />

                            <BookOpen className="w-10 h-10 md:w-14 md:h-14 text-war-gold" />
                            <Crosshair className="w-8 h-8 md:w-10 md:h-10 text-war-gold/70" />
                        </div>
                        <h1 className="font-military text-5xl md:text-7xl text-gradient-gold mb-4 drop-shadow-lg glitch-effect" data-text="FIELD MANUAL">
                            FIELD MANUAL
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-[0.2em]">
                            Tactical Operations Guide
                        </p>
                        {/* Decorative line */}
                        <div className="mt-8 mx-auto w-64 h-1 bg-gradient-to-r from-transparent via-war-gold/50 to-transparent" />

                        <TabNavigation
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            showDropdown={showDropdown}
                            setShowDropdown={setShowDropdown}
                            setShowModal={setShowModal}
                        />
                    </div>

                    {/* Tutorial Sections */}
                    <div className="space-y-6">
                        {activeSections.map((section, index) => (
                            <TutorialCard
                                key={`${activeTab}-${index}`}
                                section={section}
                                index={index}
                                activeTab={activeTab}
                                isExpanded={expandedIndex === index}
                                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    <QuestionsSection onShowModal={() => setShowModal(true)} />
                </div>
            </main>

            <ExternalLinkModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                activeTab={activeTab}
            />

            <GrassEffect />
        </div>
    );
};

export default HowToPlay;
