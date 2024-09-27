import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import sections from '@/data/sections';
import socials from '@/data/socials';

const Footer: React.FC<ClassProps> = ({ className }) => {
  return (
    <footer className={cn('container px-10 pt-10 pb-6', className)}>
      <div className="flex-space-between">
        <div className="inline-flex relative">
          <Image src="/owl_halfmoon.png" alt="logo footer" width={169}
            height={169}/>
          <div className="font-sans absolute bottom-3 right-5 select-none">
            <h1
              className="text-[12px] font-extralight leading-[12px]">NOCTUA<strong
                className="font-semibold m-0">DOMAIN</strong></h1>
            <h1 className="text-[7px] text-right">PRODUCTION</h1>
          </div>
        </div>
        <nav>
          <ul className="flex gap-10 text-[12px] uppercase font-bold">
            {sections.map(section => (
              <li
                className="flex-shrink-0 hover:text-cyan transition-colors hover:duration-300"
                key={section.name}>
                <Link href={section.href}>{section.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-end border-t border-solid border-[#202328] pt-6">
        <p className="font-sora">
          © noctuadomainproduction 2024. All rights reserved
        </p>
        <div className="flex gap-10">
          {socials.map(social => (
            <Link key={social.name} href={social.href} target="_blank" aria-label="Connect with us on our social media platforms">
              <social.icon className="p-4 size-[30px] box-content" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
