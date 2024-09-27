import React from 'react';

import Button from '@/components/ui/button';
import Glow from '@/components/elements/glow';
import Image from 'next/image';
import Link from 'next/link';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Hero: React.FC<ClassProps> = ({ className }) => {
  return (
    <section className={cn('container flex-space-between relative', className)}>
      <Glow className="h-[500px] w-[320px] -bottom-[400px] right-20" />
      <Glow className="h-[750px] w-[550px] -top-20 left-20 rotate-45 opacity-60" />
      <div className="flex flex-col max-w-[790px]">
        <h1 className="text-[155px] font-phosphate leading-[0.85]">ANIMATION STUDIO</h1>
        <p className="font-light text-xl mb-20">All you need to do is trust our extensive experience and enjoy the journey. Share your thoughts with us, and we will start building your story today.</p>
        <div className="flex gap-5">
          <Link href="#contact-us" tabIndex={-1}>
            <Button
              className="px-10 hover:transition-shadow hover:duration-300 group flip-animate">
              <span data-hover="Get in touch">Contact Us</span>
              <Image
                className="ml-6 group-hover:translate-x-3 transition-transform duration-300"
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                width={36}
                height={24}
              />
            </Button>
          </Link>
          <Link href="#showreel" tabIndex={-1}>
            <Button className="px-10 group" variant="ghost">
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
      <Image src="/owl_halfmoon.png" alt="owl-halfmoon" width={900} height={900}/>
    </section>
  );
};

export default Hero;
