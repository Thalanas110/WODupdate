import { useState, useEffect, useRef, TouchEvent } from 'react';
import { screenshots } from '@/constants/screenshotsgp.ts';

export const useCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const goToSlide = (index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const nextSlide = () => {
        goToSlide((currentIndex + 1) % screenshots.length);
    };

    const prevSlide = () => {
        goToSlide((currentIndex - 1 + screenshots.length) % screenshots.length);
    };

    // Touch swipe handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const swipeDistance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (swipeDistance > minSwipeDistance) {
            nextSlide();
        } else if (swipeDistance < -minSwipeDistance) {
            prevSlide();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Auto-advance slides (pauses on interaction)
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    };
};
