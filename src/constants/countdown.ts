// Countdown Timer Constants

// Release date: January 17, 2026
export const RELEASE_DATE = new Date('2026-01-17T00:00:00').getTime();

// Steam store link
export const STEAM_URL = 'https://store.steampowered.com/app/3902430/War_of_Dots/';

// Time calculation utilities
export const calculateTimeLeft = (targetDate: number) => {
    try {
        const now = Date.now();
        const difference = targetDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
                isExpired: false,
            };
        }

        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isExpired: true,
        };
    }
    catch (error) {
        console.error('Error calculating time left:', error);
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isExpired: true,
        };
    }
};