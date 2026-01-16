import { useState, useEffect } from 'react';
import FlipDigit from './FlipDigit';
import steamLogo from '@/assets/steam logo.webp';
import { RELEASE_DATE, calculateTimeLeft } from '@/constants/countdown';
import { STEAM_URL } from '@/constants/socials';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      try {
        const result = calculateTimeLeft(RELEASE_DATE);
        setTimeLeft({
          days: result.days,
          hours: result.hours,
          minutes: result.minutes,
          seconds: result.seconds,
        });
        if (result.isExpired) {
          setIsExpired(true);
        }
      }
      catch (error) {
        console.error('Error in CountdownTimer:', error);
        setIsExpired(true);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // countdown timer

  const [useFlip, setUseFlip] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUseFlip(window.innerWidth > 1100);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  // Render Steam button when timer is expired
  if (isExpired) {
    return (
      <div className="flex flex-col items-center gap-8">
        {/* Announcement Badge */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-lg blur-sm opacity-75 animate-pulse" />
          <div className="relative px-6 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-amber-500/50">
            <span className="text-lg md:text-2xl uppercase tracking-[0.3em] text-gradient-gold font-military">
              🎮 Out Now! 🎮
            </span>
          </div>
        </div>

        {/* Steam Button - Large & Prominent */}
        <a
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* Animated glow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1b2838] via-[#66c0f4] to-[#1b2838] rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-[pulse_2s_ease-in-out_infinite]" />

          {/* Button content */}
          <div className="relative flex items-center gap-5 px-10 py-5 md:px-14 md:py-6 bg-gradient-to-br from-[#1b2838] via-[#171d25] to-[#1b2838] rounded-xl border-2 border-[#66c0f4]/40 group-hover:border-[#66c0f4] transition-all duration-300 shadow-2xl group-hover:shadow-[0_0_50px_rgba(102,192,244,0.4)]">
            {/* Steam Logo */}
            <img
              src={steamLogo}
              alt="Steam"
              className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            />

            <div className="flex flex-col">
              <span className="text-xs md:text-sm text-[#66c0f4] uppercase tracking-widest font-medium">
                Available on
              </span>
              <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#66c0f4] transition-colors duration-300 tracking-wide">
                Steam
              </span>
            </div>

            {/* Arrow indicator */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8 ml-2 text-[#66c0f4] group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        </a>

        {/* Free-to-play badge */}
        <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs uppercase font-semibold tracking-wider border border-green-500/30">
            Free to Play
          </span>
          <span className="text-foreground/60">•</span>
          <span>Join the battle today!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground">
        Launching In
      </h3>
      <div className="flex gap-2 md:gap-4">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Mins' },
          { value: timeLeft.seconds, label: 'Secs' },
        ].map((item, index) => (
          <div key={item.label} className="flex flex-col items-center">
            {useFlip ? (
              <FlipDigit value={item.value} />
            ) : (
              <div className="countdown-digit w-14 h-16 md:w-20 md:h-24 flex items-center justify-center rounded-md">
                <span className="font-military text-2xl md:text-4xl text-gradient-gold">
                  {formatNumber(item.value)}
                </span>
              </div>
            )}
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        January 17, 2026
      </p>
    </div>
  );
};

export default CountdownTimer;
