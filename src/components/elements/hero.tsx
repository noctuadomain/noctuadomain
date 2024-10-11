'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Button from '@/components/ui/button';
import Glow from '@/components/elements/glow';
import Image from 'next/image';
import Link from 'next/link';
import YouTube from '../ui/youtube';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import socials from '@/data/socials';

const roadmapURI = 'https://www.youtube.com/watch?v=uz8XBUhl3J8';

const Hero: React.FC<ClassProps> = ({ className }) => {
  const [activeVideo, setActiveVideo] = React.useState<string>('');

  const openVideo = React.useCallback((link: string) => {
    setActiveVideo(link);
  }, []);

  return (
    <section className={cn('container relative px-4 flex-space-between md:flex-col', className)}>
      <Glow className="-bottom-[400px] right-20 h-[500px] w-[320px] 3xl:h-[400px] 3xl:w-[270px] 2xl:blur-[60px] xl:-bottom-[300px] xl:right-6 xl:h-[320px] xl:w-[180px] md:-bottom-[200px] md:-right-32 md:size-[335px] sm:hidden" />
      <Glow className="-top-20 left-20 h-[750px] w-[550px] rotate-45 opacity-75 3xl:h-[600px] 3xl:w-[400px] 2xl:blur-[60px] xl:-top-10 xl:h-[420px] xl:w-[320px] lg:h-[350px] lg:w-[250px] md:-left-20 md:-top-20 md:size-[400px] sm:hidden" />
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50"
          >
            <YouTube link={activeVideo} setActiveVideo={setActiveVideo} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex max-w-[790px] flex-col md:order-2">
        <h1 className="animation-studio font-phosphate text-[155px] leading-[0.85] 3xl:text-[125px] 2xl:text-[116px] xl:text-[95px] lg:text-[80px] md:mb-5 md:text-center md:text-[116px]">
          ANIMATION STUDIO
        </h1>
        <p className="animation-studio-desc mb-20 text-xl font-light 2xl:text-base xl:mb-14 xl:text-[14px] lg:mb-10 lg:text-[12px] lg:leading-5 md:mb-5 md:text-center md:text-base">
          All you need to do is trust our extensive experience and enjoy the journey. Share your
          thoughts with us, and we will start building your story today.
        </p>
        <div className="flex gap-5 md:flex-center sm:gap-4">
          <Link href="#contact-us" tabIndex={-1}>
            <Button className="flip-animate group px-10">
              <span data-hover="Get in touch">Contact Us</span>
              <Image
                className="ml-6 transition-transform duration-300 group-hover:translate-x-3 xl:h-5 xl:w-7 xl:group-hover:translate-x-2 sm:ml-3"
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                priority
                width={36}
                height={24}
              />
            </Button>
          </Link>
          <Button className="group px-10" variant="ghost" onClick={() => openVideo(roadmapURI)}>
            <Image
              className="mr-6 group-hover:scale-[1.15] group-hover:transition-transform group-hover:duration-300 xl:size-7 sm:mr-3"
              src="/icons/play-in-circle.svg"
              alt="play-in-circle"
              priority
              width={32}
              height={32}
            />
            Watch showreel
          </Button>
        </div>
        <div className="my-12 hidden gap-12 md:flex-center">
          {socials.map(social => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              aria-label="Connect with us on our social media platforms"
            >
              <social.icon
                className={`box-content size-[28px] ${social.name.toLowerCase()}-white`}
              />
            </Link>
          ))}
        </div>
      </div>
      <Image
        className="owl-halfmoon 3xl:size-[775px] 2xl:size-[675px] xl:size-[575px] lg:size-[475px] md:order-1 md:size-[675px]"
        src="/owl_halfmoon.png"
        alt="owl-halfmoon"
        width={900}
        height={900}
        priority={true}
      />
    </section>
  );
};

export default Hero;
