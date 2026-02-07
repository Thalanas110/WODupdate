import { useState, useEffect } from 'react';
import worldMap from '@/assets/world-map.png';
import gameplay1 from '@/assets/gameplay-1.png';
import gameplay2 from '@/assets/gameplay-2.png';
import gameplay3 from '@/assets/gameplay-3.png';
import gameplay4 from '@/assets/gameplay-4.png';
import gameplay5 from '@/assets/gameplay-5.png';
import gameplay6 from '@/assets/gameplay-6.png';

const mapImages = [worldMap, gameplay1, gameplay2, gameplay3, gameplay4, gameplay5, gameplay6];

const BackgroundMap = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % mapImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0">
            {mapImages.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt="War of Dots Map"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-40' : 'opacity-0'
                        }`}
                />
            ))}
            {/* Fog of War Overlay */}
            <div className="fog-overlay absolute inset-0" />
            {/* Scanline Overlay */}
            <div className="scanline absolute inset-0 opacity-20 pointer-events-none" />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>
    );
};

export default BackgroundMap;
