import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import socials from '@/data/socials';
import sections from '@/data/sections';

const Header: React.FC<ClassProps> = ({ className }) => {
  return (
    <header
      className={cn('container gap-10 px-4 py-10 flex-space-between lg:gap-5', className)}
      id="home"
    >
      <div className="flex items-center lg:w-full lg:justify-between md:justify-center">
        <div className="mr-44 2xl:mr-32 xl:mr-20 lg:mr-0">
          <Image
            className="2xl:h-[30px] 2xl:w-[174px] xl:h-[25px] xl:w-[150px] md:h-[30px] md:w-[174px]"
            src="/logo.png"
            alt="logo"
            width={232}
            priority
            height={40}
          />
        </div>
        <nav>
          <ul className="flex gap-8 text-lg 2xl:gap-6 2xl:text-base xl:text-sm lg:gap-3 md:hidden">
            {sections.map(section => (
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
      <ul className="flex items-center gap-5 text-lg 2xl:gap-4 2xl:text-base xl:text-sm lg:hidden">
        {socials.map(social => (
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
