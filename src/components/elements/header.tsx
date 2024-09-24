import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import socials from '@/data/socials';

const sections = [
  {
    name: 'Home',
    href: '#home'
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
    <header className={cn('container py-10 flex-space-between gap-10', className)} id="home">
      <div className="flex items-center">
        <div className="mr-44">
          <Image src="/logo.png" alt="logo" width={232} height={40}/>
        </div>
        <nav>
          <ul className="flex gap-8 text-lg">
            {sections.map(section => (
              <li className="flex-shrink-0 hover:text-cyan transition-colors hover:duration-300" key={section.name}>
                <a href={section.href}>{section.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="flex items-center gap-5 text-lg">
        {socials.map(social => (
          <li className="opacity-50 hover:opacity-100 transition-opacity hover:duration-300" key={social.name}>
            <Link href={social.href} target="_blank">{social.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
