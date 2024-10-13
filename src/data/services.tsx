import React from 'react';
import Image from 'next/image';

import { type Service } from '@/ts/interfaces';

export const services: Service[] = [
  {
    id: 0,
    title: '3D Mapping',
    description:
      '3D mapping is a spectacular animation show projected onto any surface—buildings, sculptures, water, gas, or even cars. Our expertise makes these visual miracles possible.\nTransform ordinary surfaces into extraordinary visual experiences with the magic of 3D mapping.',
    miniDescription: 'Creating detailed 3D models of real-world places.',
    listTitle: 'Use it for',
    list: () => (
      <ul className="service-list flex flex-wrap gap-10 text-xl 2xl:text-base 2xl:gap-6 lg:text-sm lg:gap-5 md:text-xs sm:text-[10px] sm:gap-2">
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Product Launches: Create grand impressions.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Advertisements: Capture attention.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Festival Announcements: Generate buzz.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Holiday Celebrations: Enhance festivities.
        </li>
      </ul>
    ),
    iconSrc: '/icons/3d-mapping.svg',
    imageSrc: '/services/3d-mapping.png'
  },
  {
    id: 1,
    title: 'Character & Environment Design',
    description:
      'Creating characters and environments is essential for bringing brilliant ideas to life. We design unique heroes and perfect surroundings tailored to your story.\nLet us help you bring your story to life with unique characters and immersive environments.',
    miniDescription: 'Designing cool characters and their amazing worlds.',
    listTitle: 'What We Can Do',
    list: () => (
      <ul className="service-list flex flex-wrap gap-10 text-xl 2xl:text-base 2xl:gap-6 lg:text-sm lg:gap-5 md:text-xs sm:text-[10px] sm:gap-2">
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Nature Elements: Trees, flowers, rocks, etc.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Simulations: Realistic water, fire, smoke, etc.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Accessories & Weapons: Detailed props.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Vehicles: Cars, buses, planes, etc.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Characters: Fully textured and rigged.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Terrain: Mountains, islands, and more.
        </li>
      </ul>
    ),
    iconSrc: '/icons/character-and-environment-design.svg',
    imageSrc: '/services/character-and-environment-design.png'
  },
  {
    id: 2,
    title: '3D & 2D Animations',
    description:
      'Visual storytelling is the best way to convey a message. It has six times the impact of written or spoken information. Even a small 3D animation can leave unforgettable emotions, especially when crafted by our talented team.\nLet us help you convey your message memorably through stunning animations.',
    miniDescription: 'Making things move in both flat  and realistic  styles.',
    listTitle: '',
    list: () => null,
    iconSrc: '/icons/3d-and-2d-animations.svg',
    imageSrc: '/services/3d-and-2d-animations.png'
  },
  {
    id: 3,
    title: 'Visual Effects',
    description:
      'VFX enhance your videos by adding or manipulating content, characters, actions, or environments. Commonly used in films, TV shows, commercials, and more, VFX elevate visual storytelling.\nLet our expert VFX services bring your vision to life with stunning and immersive visuals.',
    miniDescription: 'Adding special effects that make videos look magical.',
    listTitle: '',
    list: () => null,
    iconSrc: '/icons/visual-effects.svg',
    imageSrc: '/services/visual-effects.png'
  },
  {
    id: 4,
    title: 'Motion Graphics',
    description:
      'Motion graphics are essential for ads, explainer videos, educational content, blogs, social media, and TV show openings. They powerfully propel your brand forward by increasing engagement and conversions.\nHarness the power of motion graphics to captivate your audience and drive your brand\'s success.',
    miniDescription: 'Creating moving graphics to make videos more exciting.',
    listTitle: '',
    list: () => null,
    iconSrc: '/icons/motion-graphics.svg',
    imageSrc: '/services/motion-graphics.png'
  },
  {
    id: 5,
    title: 'Video Shooting / Production',
    description:
      'Looking for top-notch video production? Share your vision, and we\'ll handle the rest. We offer comprehensive services from concept and script development to professional shooting and expert editing.\nLet us bring your ideas to life with expert video production.',
    miniDescription: 'Filming and editing videos to tell stories.',
    listTitle: 'We specialize in',
    list: () => (
      <ul className="service-list flex flex-wrap gap-10 text-xl 2xl:text-base 2xl:gap-6 lg:text-sm lg:gap-5 md:text-xs sm:text-[10px] sm:gap-2">
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Corporate Videos: Showcase your business.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Commercial Marketing: Engaging promotions.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Digital Videos: High-quality content.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Trailers: Compelling previews.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Social Media Videos: Captivate your audience.
        </li>
      </ul>
    ),
    iconSrc: '/icons/video-shooting-production.svg',
    imageSrc: '/services/video-shooting-production.png'
  },
  {
    id: 6,
    title: 'AR/VR',
    description:
      'AR and VR enhance or replace real-life environments with immersive simulations. We combine programming, animation, and design to offer comprehensive AR/VR services.\nHarness AR/VR to captivate your audience and bring your visions to life.',
    miniDescription:
      'Building fun and interactive virtual reality or augmented reality experiences.',
    listTitle: 'Use AR/VR for',
    list: () => (
      <ul className="service-list flex flex-wrap gap-10 text-xl 2xl:text-base 2xl:gap-6 lg:text-sm lg:gap-5 md:text-xs sm:text-[10px] sm:gap-2">
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Advertisements: Create interactive ads.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Exhibitions: Offer virtual tours.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Education: Enhance learning experiences.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Events: Provide memorable interactions.
        </li>
        <li className="flex-center">
          <Image
            className="list-checkmark mr-3"
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={30}
            height={30}
          />
          Performances: Add new dimensions to shows.
        </li>
      </ul>
    ),
    iconSrc: '/icons/ar-vr.svg',
    imageSrc: '/services/ar-vr.png'
  },
  {
    id: 7,
    title: 'Performance',
    description:
      'Every performance is a unique work of art. We offer creative solutions like interactive dance, 3D mapping, and laser shows. Our shows are crafted with interactive animation to ensure a memorable and engaging experience for your audience.',
    miniDescription: 'Making sure everything runs smoothly for the best results.',
    listTitle: '',
    list: () => null,
    iconSrc: '/icons/performance.svg',
    imageSrc: '/services/performance.png'
  }
];
