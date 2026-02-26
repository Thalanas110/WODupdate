import tutorial1 from '@/assets/tutorials/tutorial1.png';
import tutorial2 from '@/assets/tutorials/tutorial2.png';
import tutorial3 from '@/assets/tutorials/tutorial3.png';
import tutorial4 from '@/assets/tutorials/tutorial4.png';
import tutorial5 from '@/assets/tutorials/tutorial5.png';

import skin1 from '@/assets/skins/skin1.png';
import skin2 from '@/assets/skins/skin2.png';
import skin3 from '@/assets/skins/skin3.png';
import skin4 from '@/assets/skins/skin4.png';

import map1 from '@/assets/maps/map1.png';
import map2 from '@/assets/maps/map2.png';
import map3 from '@/assets/maps/map3.png';
import map4 from '@/assets/maps/map4.png';

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

// maps maps maps
export const customizationSections = [
    {
        title: 'Create your own maps',
        content: 'Bring your imagination to life by customizing your own maps. You can create entirely new battlegrounds from scratch or fine-tune existing ones to better match your strategy or scenario. The map editor is easily accessible from the top-right corner, giving you full control over layout, balance, and overall gameplay flow.',
        image: map1,
    },
    {
        title: 'Terrain Creation',
        content: 'Shape the battlefield by adding diverse terrain elements such as mountains, forests, rivers, and plains. Terrain doesn’t just make your map visually appealing—it also influences movement, strategy, and tactical decisions. Use terrain wisely to create natural defenses, choke points, or hidden routes for clever maneuvers.',
        image: map2,
    },
    {
        title: 'Unit placement',
        content: 'Populate your map with infantry and armored units to simulate active frontlines, ambushes, or defensive positions. Strategic unit placement allows you to recreate historical battles, design challenging scenarios, or set traps that force your opponent to think carefully before advancing.',
        image: map3,
    },
    {
        title: 'City placement',
        content: 'Place cities across your map to represent key urban centers and strategic objectives. Cities generate funds over time, making them valuable assets worth fighting over. They can be captured by your opponent—or reclaimed by you in future matches—adding an extra layer of economic strategy and long-term planning.',
        image: map4,
    },
];

// unit skin customization sections
// WOD Skin Maker customization sections
export const skinCustomizationSections = [
    {
        title: 'Section 1: Base Dot / 100% Health',
        content: 'This section is where you create your base dot, which will serve as the foundation for all health orb states. The base dot defines the visual style, colors, and overall clarity of your skin. Proper care here ensures that all derived orbs maintain a consistent look and feel.\n\nTips and best practices: Recommended image size is 128x128 pixels for editing. If you draw your skin yourself, it is slightly more likely to get added. Keep the circle crop centered and maintain consistent ring thickness (4-8 pixels recommended).',
        image: skin1,
    },
    {
        title: 'Section 2: Medium Health Orb (50%)',
        content: 'In this step, you create the medium health orb, representing 50% player health. This orb is derived from the full health base dot and a broken dot reference. Proper care ensures players can easily recognize medium health visually.\n\nTips and best practices: Use a 128x128 image for editing; final resizing occurs later. Clean up any artifacts using the Eraser Tool for smooth visuals. Ensure the medium orb maintains proportions similar to the full health orb. Naming convention: inf2_nameofskin or tank2_nameofskin.',
        image: skin2,
    },
    {
        title: 'Section 2.1: Low Health Orb (25%)',
        content: 'This step creates the low health orb, representing 25% player health. It uses a different broken dot reference than the medium orb to simulate damage and distinguish it visually. The low health orb should appear clearly damaged compared to other health states.\n\nTips and best practices: Recommended editing size is 128x128 pixels. Self drawn skins are slightly more likely to be added. Ensure alignment and proportions match previous health states, and clean any visual artifacts with the Eraser Tool. Save as inf1_nameofskin or tank1_nameofskin.',
        image: skin3,
    },
    {
        title: 'Section 2.2: Final Full Health Orb (Resized)',
        content: 'This step resizes your full health orb to the required in-game size of 200×200 pixels, ensuring proper display and visual clarity. Centering and alignment are important to prevent stretched or off-center images.\n\nTips and best practices: Keep the original 256×256 images for editing. Verify that the orb remains centered after resizing. Save as inf_nameofskin or tank_nameofskin. Self-drawn skins are slightly more likely to be added.',
        image: skin4,
    },
    {
        title: 'End / Workflow Completed',
        content: 'You have now completed the full health orb creation workflow. At this point, you should have three images representing full, medium, and low health states, all ready to be placed in the game’s skins folder.\n\nTips and best practices: Keep backups of all images. Test in-game to ensure the skins display correctly. Using self-drawn designs slightly increases the likelihood of them being added. Repeat the workflow for additional custom skins. Recommended editing size remains 128x128 pixels for clarity and consistency.',
        image: skin1
    }
];