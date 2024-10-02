'use client';

import React from 'react';

import Button from '@/components/ui/button';
import Glow from '@/components/elements/glow';
import Image from 'next/image';
import Link from 'next/link';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Hero: React.FC<ClassProps> = ({ className }) => {
  return (
    <section className={cn('container relative flex-space-between', className)}>
      <Glow className="-bottom-[400px] right-20 h-[500px] w-[320px]" />
      <Glow className="-top-20 left-20 h-[750px] w-[550px] rotate-45 opacity-75" />
      <div className="flex max-w-[790px] flex-col">
        <h1 className="font-phosphate text-[155px] leading-[0.85]">ANIMATION STUDIO</h1>
        <p className="mb-20 text-xl font-light">
          All you need to do is trust our extensive experience and enjoy the journey. Share your
          thoughts with us, and we will start building your story today.
        </p>
        <div className="flex gap-5">
          <Link href="#contact-us" tabIndex={-1}>
            <Button className="flip-animate group px-10">
              <span data-hover="Get in touch">Contact Us</span>
              <Image
                className="ml-6 transition-transform duration-300 group-hover:translate-x-3"
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                width={36}
                height={24}
              />
            </Button>
          </Link>
          <Link href="#showreel" tabIndex={-1}>
            <Button className="group px-10" variant="ghost">
              <Image
                className="mr-6 group-hover:scale-[1.15] group-hover:transition-transform group-hover:duration-300"
                src="/icons/play-in-circle.svg"
                alt="play-in-circle"
                width={32}
                height={32}
              />
              Watch video
            </Button>
          </Link>
        </div>
      </div>
      <Image src="/owl_halfmoon.png" alt="owl-halfmoon" width={900} height={900} priority={true} />
    </section>
  );
};

export default Hero;
