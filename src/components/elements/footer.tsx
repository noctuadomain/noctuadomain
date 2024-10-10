import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import sections from '@/data/sections';
import socials from '@/data/socials';

const Footer: React.FC<ClassProps> = ({ className }) => {
  return (
    <footer className={cn('container px-10 pb-6 pt-10 2xl:px-7 2xl:pb-4 2xl:pt-7', className)}>
      <div className="flex-space-between sm:flex-col">
        <div className="relative inline-flex sm:mb-10">
          <Image
            className="footer-owl-halfmoon md:size-[151px] sm:size-[169px]"
            src="/owl_halfmoon.png"
            alt="logo footer"
            width={169}
            height={169}
          />
          <div className="absolute bottom-3 right-5 select-none font-sans">
            <h1 className="text-[12px] font-extralight leading-[12px] sm:text-[10px]">
              NOCTUA<strong className="m-0 font-semibold">DOMAIN</strong>
            </h1>
            <h1 className="text-right text-[7px]">PRODUCTION</h1>
          </div>
        </div>
        <nav>
          <ul className="flex gap-10 text-[12px] font-bold uppercase lg:gap-5 sm:text-[11px]">
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
      <div className="flex items-center justify-between border-t border-solid border-[#202328] pt-6 sm:flex-col sm:border-none">
        <p className="font-sora 2xl:text-[14px] md:text-[10px] sm:order-2 sm:mt-4 sm:text-[11px]">
          © noctuadomainproduction 2024. All rights reserved
        </p>
        <div className="flex gap-10 xl:gap-4">
          {socials.map(social => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              aria-label="Connect with us on our social media platforms"
            >
              <social.icon className="box-content size-[30px] p-4 md:size-[22px]" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
