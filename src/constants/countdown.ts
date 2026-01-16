// Countdown Timer Constants

// Release date: January 17, 2026 at midnight GMT+0 (Greenwich Mean Time)
export const RELEASE_DATE = new Date('2026-01-17T00:00:00Z').getTime();

// Steam store link
export const STEAM_URL = 'https://store.steampowered.com/app/3902430/War_of_Dots/';

// Time offset from actual UTC (in milliseconds)
// Positive offset means system clock is ahead, negative means behind
let timeOffset = 0;
let isSynced = false;

// Fetch actual UTC time from a reliable time server
const syncTimeWithServer = async (): Promise<void> => {
    try {
        const requestStart = Date.now();
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        const requestEnd = Date.now();

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        const serverTime = new Date(data.utc_datetime).getTime();

        // Account for network latency (approximate round-trip time / 2)
        const networkLatency = (requestEnd - requestStart) / 2;
        const actualServerTime = serverTime + networkLatency;

        // Calculate offset: how far system clock is from actual UTC
        timeOffset = requestEnd - actualServerTime;
        isSynced = true;
    }
    catch (error) {
        console.warn('Failed to sync time with server, using system time:', error);
        // Keep using system time if sync fails
        timeOffset = 0;
    }
};

// Initialize time sync on module load
syncTimeWithServer();

// Re-sync periodically (every 5 minutes) to account for drift
setInterval(syncTimeWithServer, 5 * 60 * 1000);

// Get the current UTC time, corrected for any system clock offset
export const getAccurateUTCTime = (): number => {
    return Date.now() - timeOffset;
};

// Check if time has been synced with server
export const isTimeSynced = (): boolean => isSynced;

// Time calculation utilities
export const calculateTimeLeft = (targetDate: number) => {
    try {
        const now = getAccurateUTCTime();
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