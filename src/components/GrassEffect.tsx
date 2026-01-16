import { useMemo } from 'react';

// this is mainly lightweighht css only, for the grass.
// Tested on mobile oon an honor x8b and never lagged.
const GrassEffect = () => {
    // Generate grass blades with varied heights and positions
    // Use useMemo to prevent regeneration on every render
    const { mobileBlades, desktopExtraBlades } = useMemo(() => {
        // Base blades for mobile (40 blades)
        const mobile = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: `${(i / 40) * 100}%`,
            height: 40 + Math.random() * 35,
            delay: Math.random() * 2,
            duration: 2.5 + Math.random() * 1.5,
        }));

        // Extra blades for desktop only (60 more blades = 100 total)
        const desktopExtra = Array.from({ length: 60 }, (_, i) => ({
            id: i + 100,
            left: `${((i + 0.5) / 60) * 100}%`,
            height: 45 + Math.random() * 40,
            delay: Math.random() * 2,
            duration: 2.5 + Math.random() * 1.5,
        }));

        return { mobileBlades: mobile, desktopExtraBlades: desktopExtra };
    }, []);

    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-16 md:h-28 pointer-events-none overflow-hidden"
            style={{ zIndex: 50 }}
            aria-hidden="true"
        >
            {/* Base grass layer - darker background */}
            <div
                className="absolute bottom-0 left-0 right-0 h-4 md:h-6"
                style={{
                    background: 'linear-gradient(to top, hsl(100 30% 12%), transparent)',
                }}
            />

            {/* Primary grass blades - visible on all devices */}
            {mobileBlades.map((blade) => (
                <div
                    key={blade.id}
                    className="grass-blade absolute bottom-0"
                    style={{
                        left: blade.left,
                        height: `${blade.height}px`,
                        width: '3px',
                        background: `linear-gradient(to top, hsl(100 35% 18%), hsl(90 40% 22%) 50%, hsl(80 30% 15%))`,
                        transformOrigin: 'bottom center',
                        borderRadius: '2px 2px 0 0',
                        animationDelay: `${blade.delay}s`,
                        animationDuration: `${blade.duration}s`,
                    }}
                />
            ))}

            {/* Secondary grass layer - slightly lighter, shorter */}
            {mobileBlades.slice(0, 25).map((blade, i) => (
                <div
                    key={`secondary-${blade.id}`}
                    className="grass-blade absolute bottom-0"
                    style={{
                        left: `${(i / 25) * 100 + 1.5}%`,
                        height: `${blade.height * 0.7}px`,
                        width: '2px',
                        background: `linear-gradient(to top, hsl(95 30% 20%), hsl(85 35% 25%))`,
                        transformOrigin: 'bottom center',
                        borderRadius: '1px 1px 0 0',
                        animationDelay: `${blade.delay + 0.3}s`,
                        animationDuration: `${blade.duration + 0.5}s`,
                        opacity: 0.8,
                    }}
                />
            ))}

            {/* Desktop-only extra grass blades - hidden on mobile */}
            <div className="hidden md:contents">
                {desktopExtraBlades.map((blade) => (
                    <div
                        key={blade.id}
                        className="grass-blade absolute bottom-0"
                        style={{
                            left: blade.left,
                            height: `${blade.height}px`,
                            width: '3px',
                            background: `linear-gradient(to top, hsl(100 35% 18%), hsl(90 40% 22%) 50%, hsl(80 30% 15%))`,
                            transformOrigin: 'bottom center',
                            borderRadius: '2px 2px 0 0',
                            animationDelay: `${blade.delay}s`,
                            animationDuration: `${blade.duration}s`,
                        }}
                    />
                ))}

                {/* Desktop-only secondary layer */}
                {desktopExtraBlades.slice(0, 40).map((blade, i) => (
                    <div
                        key={`desktop-secondary-${blade.id}`}
                        className="grass-blade absolute bottom-0"
                        style={{
                            left: `${(i / 40) * 100 + 0.8}%`,
                            height: `${blade.height * 0.65}px`,
                            width: '2px',
                            background: `linear-gradient(to top, hsl(95 30% 20%), hsl(85 35% 25%))`,
                            transformOrigin: 'bottom center',
                            borderRadius: '1px 1px 0 0',
                            animationDelay: `${blade.delay + 0.5}s`,
                            animationDuration: `${blade.duration + 0.3}s`,
                            opacity: 0.75,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default GrassEffect;

