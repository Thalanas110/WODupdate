// imports have been moved to the socials.ts.
export const RELEASE_DATE = new Date('2026-01-17T00:00:00Z').getTime();
let timeOffset = 0;
let isSynced = false;

const syncTimeWithServer = async (): Promise<void> => {
    // this section contains the worldtime api for getting the current time from a single true time source to prevent relying on system time because fuck system time
    try {
        const requestStart = Date.now();
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        const requestEnd = Date.now();

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        const serverTime = new Date(data.utc_datetime).getTime();
        const networkLatency = (requestEnd - requestStart) / 2;
        const actualServerTime = serverTime + networkLatency;
        timeOffset = requestEnd - actualServerTime;
        isSynced = true;
    }
    catch (error) {
        console.warn('Failed to sync time with server, using system time:', error);
        timeOffset = 0;
    }
};
// function to sync time lol      
syncTimeWithServer();
setInterval(syncTimeWithServer, 5 * 60 * 1000);

export const getAccurateUTCTime = (): number => {
    return Date.now() - timeOffset;
};
export const isTimeSynced = (): boolean => isSynced;

// function to calculate time left based from commmand
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