import tutorial1 from '@/assets/tutorials/tutorial1.png';
import tutorial2 from '@/assets/tutorials/tutorial2.png';
import tutorial3 from '@/assets/tutorials/tutorial3.png';
import tutorial4 from '@/assets/tutorials/tutorial4.png';
import tutorial5 from '@/assets/tutorials/tutorial5.png';

export const tutorialSections = [
    {
        title: 'The Goal',
        content: 'The goal in this game is to capture the opponents cities and capital which are the yellow dots (or star for the capital) with the colored flag.',
        image: tutorial4,
    },
    {
        title: 'How do I capture cities?',
        content: 'You have two unit types at your disposal. Light units or infantry, which are the plain colored circles and heavy units or tanks. Light units are faster and cheaper but heavy units have more health and do more damage.',
        image: tutorial1,
    },
    {
        title: 'Are there other types of units?',
        content: 'Yes! You can put both light and heavy units in water to transform them into ships. Ships can be used to invade your opponent from the sea and take them by surprise!',
        image: tutorial5,
    },
    {
        title: 'How do I get more units?',
        content: 'You start with a set amount of units. To get more or to replace your losses, each city generates 5 funds per second. If you have enough funds, you can spend funds to produce more units. However all units cost 1 fund per second so one city can support up to five units!',
        image: tutorial3,
    },
    {
        title: 'How do I win battles?',
        content: 'To win battles, you need to get the upperhand over your opponent to capture their cities. Try to tactically outplay your opponent by baiting them into traps and encircling their units.',
        image: tutorial2,
    },
];