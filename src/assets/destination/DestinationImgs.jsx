import moon from './image-moon.webp';
import europa from './image-europa.webp';
import mars from './image-mars.webp';
import titan from './image-titan.webp';

const DestinationImgs = {
  moon: {
    name: 'Moon',
    image: moon,
    alt: 'Photo of the Moon',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    dist: '384,400',
    time: '3 DAYS',
  },
  europa: {
    name: 'Europa',
    image: europa,
    alt: 'Photo of the Europa',
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    dist: '628 MIL.',
    time: '3 YEARS',
  },
  mars: {
    name: 'Mars',
    image: mars,
    alt: 'Photo of the Mars',
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    dist: '225 MIL.',
    time: '9 MONTHS',
  },
  titan: {
    name: 'Titan',
    image: titan,
    alt: 'Photo of the Titan',
    desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    dist: '1.6 BIL.',
    time: '7 YEARS',
  },
};

export default DestinationImgs;
