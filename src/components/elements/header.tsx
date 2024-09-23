import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import socials from '@/data/socials';

const sections = [
  {
    name: 'Home',
    href: '#hero'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'About Us',
    href: '#about-us'
  },
  {
    name: 'Roadmap',
    href: '#roadmap'
  }
];

const Header: React.FC<ClassProps> = ({ className }) => {
  return (
    <header className={cn('container py-10 flex-space-between gap-10', className)}>
      <div className="flex items-center">
        <div className="mr-44">
          <a href="#home">
            <Image src="/logo.png" alt="logo" width={232} height={40}/>
          </a>
        </div>
        <nav>
          <ul className="flex gap-8 text-lg">
            {sections.map(section => (
              <li className="flex-shrink-0" key={section.name}>
                <a href={section.href}>{section.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="flex items-center gap-5 opacity-50 text-lg">
        {socials.map(social => (
          <li key={social.name}>
            <Link href={social.href} target="_blank">{social.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
