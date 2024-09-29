import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import socials from '@/data/socials';
import sections from '@/data/sections';

const Header: React.FC<ClassProps> = ({ className }) => {
  return (
    <header className={cn('container gap-10 py-10 flex-space-between', className)} id="home">
      <div className="flex items-center">
        <div className="mr-44">
          <Image src="/logo.png" alt="logo" width={232} height={40} />
        </div>
        <nav>
          <ul className="flex gap-8 text-lg">
            {sections.map((section) => (
              <li
                className="flex-shrink-0 transition-colors hover:text-cyan hover:duration-300"
                key={section.name}
              >
                <Link href={section.href}>{section.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="flex items-center gap-5 text-lg">
        {socials.map((social) => (
          <li
            className="opacity-50 transition-opacity hover:opacity-100 hover:duration-300"
            key={social.name}
          >
            <Link href={social.href} target="_blank">
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
