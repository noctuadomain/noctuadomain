import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import sections from '@/data/sections';
import socials from '@/data/socials';

const Footer: React.FC<ClassProps> = ({ className }) => {
  return (
    <footer className={cn('container px-10 pb-6 pt-10', className)}>
      <div className="flex-space-between">
        <div className="relative inline-flex">
          <Image src="/owl_halfmoon.png" alt="logo footer" width={169} height={169} />
          <div className="absolute bottom-3 right-5 select-none font-sans">
            <h1 className="text-[12px] font-extralight leading-[12px]">
              NOCTUA<strong className="m-0 font-semibold">DOMAIN</strong>
            </h1>
            <h1 className="text-right text-[7px]">PRODUCTION</h1>
          </div>
        </div>
        <nav>
          <ul className="flex gap-10 text-[12px] font-bold uppercase">
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
      <div className="flex items-end justify-between border-t border-solid border-[#202328] pt-6">
        <p className="font-sora">© noctuadomainproduction 2024. All rights reserved</p>
        <div className="flex gap-10">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              aria-label="Connect with us on our social media platforms"
            >
              <social.icon className="box-content size-[30px] p-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
