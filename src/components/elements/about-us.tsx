import React from 'react';

import Glow from '@/components/elements/glow';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const AboutUs: React.FC<ClassProps> = ({ className }) => {
  return (
    <section
      className={cn(
        'container relative my-44 px-20 flex-center 3xl:px-16 2xl:my-36 2xl:px-12 xl:my-20 xl:px-8 sm:px-4',
        className
      )}
    >
      <Glow className="-left-20 bottom-20 h-[450px] w-[300px] rotate-[45deg] 3xl:h-[350px] 3xl:w-[250px] 2xl:bottom-0 2xl:blur-[60px] xl:h-[300px] xl:w-[200px] md:hidden" />
      <div className="about-us-text text-center font-phosphate text-8xl uppercase 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl">
        Noctua Production is a 3D
        <em className="text-gradient-orange inline-block"> animation</em> and{' '}
        <em className="text-gradient-red-to-blue inline-block">design studio</em> that transforms
        your ideas into stunning visual content. From concept to final video, we{' '}
        <em className="text-gradient-blue inline-block">handle</em>{' '}
        <em className="text-gradient-orange inline-block">every step</em> with a dedicated team of
        professionals.
      </div>
    </section>
  );
};

export default AboutUs;
