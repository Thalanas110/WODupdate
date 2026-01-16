/**
 * GrassEffect - A lightweight, CSS-only animated grass effect
 * Uses CSS animations for performance (no JS/requestAnimationFrame)
 * Positioned fixed at the bottom of the viewport
 */
const GrassEffect = () => {
    // Generate grass blades with varied heights and positions
    const grassBlades = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${(i / 40) * 100}%`,
        height: 30 + Math.random() * 25, // 30-55px height
        delay: Math.random() * 2, // Stagger animations
        duration: 2.5 + Math.random() * 1.5, // 2.5-4s duration
    }));

    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden"
            style={{ zIndex: 50 }}
            aria-hidden="true"
        >
            {/* Base grass layer - darker background */}
            <div
                className="absolute bottom-0 left-0 right-0 h-4"
                style={{
                    background: 'linear-gradient(to top, hsl(100 30% 12%), transparent)',
                }}
            />

            {/* Grass blades */}
            {grassBlades.map((blade) => (
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
            {grassBlades.slice(0, 25).map((blade, i) => (
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
        </div>
    );
};

export default GrassEffect;
