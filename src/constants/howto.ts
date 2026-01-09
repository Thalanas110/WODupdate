import tutorial1 from '@/assets/tutorials/tutorial1.png';
import tutorial2 from '@/assets/tutorials/tutorial2.png';
import tutorial3 from '@/assets/tutorials/tutorial3.png';
import tutorial4 from '@/assets/tutorials/tutorial4.png';
import tutorial5 from '@/assets/tutorials/tutorial5.png';

import skin1 from '@/assets/skins/skin1.png';
import skin2 from '@/assets/skins/skin1.png';
import skin3 from '@/assets/skins/skin3.png';
import skin4 from '@/assets/skins/skin4.png';

export const tutorialSections = [
    {
        title: 'The Goal',
        content: 'The goal in this game is to capture the opponent\'s cities and capital which are the yellow dots (or star for the capital) with the colored flag. Cities can be captured by placing your unit on top of them. There can also be up to 4 Players in one game, depending on the gamemode. In that case you must capture and hold all the capitals + 80% of each of the opposing player\'s cities to win!',
        image: tutorial4,
    },
    {
        title: 'How do I capture cities?',
        content: 'You have two unit types at your disposal. Light units or infantry, which are the plain-colored circles and heavy units or tanks. Light units are faster and cheaper but heavy units have more health and do more damage. Both unit types have health and morale which impacts how much damage they do. You can see if a unit is low on health if it starts to look like it is breaking apart!',
        image: tutorial1,
    },
    {
        title: 'Are there other types of units?',
        content: 'Yes! You can put both light and heavy units in water to transform them into ships. Ships can be used to invade your opponent from the sea and take them by surprise! But you must be careful as it takes time for units to transform into ships and after that, they will slowly start to take damage. Plan your moves carefully!',
        image: tutorial5,
    },
    {
        title: 'How do I get more units?',
        content: 'You start with a set amount of units. To get more or to replace your losses, each city generates 5 funds per second. If you have enough funds, you can spend funds to produce more units. However you must be careful, all units cost 1 fund per second to upkeep, except when the unit is standing on top of a city. This means that one city can support 5 active units before you start to lose funds! Protect your cities at all costs!',
        image: tutorial3,
    },
    {
        title: 'How do I win battles?',
        content: 'To win battles, you need to get the upperhand over your opponent and capture their cities. Try to bait your opponent into traps, encircle their units, use the numbers advantage to gang up on isolated units and build up a strong economy to supply your front lines!',
        image: tutorial2,
    },
];

// all of thse are currently placeholders lol
export const customizationSections = [
    {
        title: 'Map Settings',
        content: 'Placeholder only',
        image: tutorial1,
    },
    {
        title: 'Unit Settings',
        content: 'Placeholder only',
        image: tutorial3,
    },
    {
        title: 'Mapping itself',
        content: 'Placeholder only',
        image: tutorial5,
    },
    {
        title: 'Visual Customization',
        content: 'Placeholder only',
        image: tutorial4,
    },
];

// unit skin customization sections
export const skinCustomizationSections = [
    {
        title: 'Base Dot | 100% Health',
        content: 'Create your base dot (256x256 recommended). Crop it circular, add a ring of 16–18 pixels, and save it. This will be the foundation for all other health states.',
        image: skin1,
    },
    {
        title: 'Medium Health Orb | 50% Health',
        content: 'Create the medium (50%) health orb using your previously saved full health orb and a broken dot reference. Clean up any visual artifacts and save as inf2_nameofskin or tank2_nameofskin.',
        image: skin2,
    },
    {
        title: 'Low Health Orb | 25% Health',
        content: 'Create the low (25%) health orb using a different broken dot reference. Clean up artifacts and save as inf1_nameofskin or tank1_nameofskin.',
        image: skin3,
    },
    {
        title: 'Full Health Orb | 100% Health (Resized)',
        content: 'Resize your full health orb to 200x200 pixels for in-game use. Save as inf_nameofskin or tank_nameofskin.',
        image: skin4,
    },
];