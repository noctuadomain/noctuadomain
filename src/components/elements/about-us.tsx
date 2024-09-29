import React from 'react';

import Glow from '@/components/elements/glow';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const AboutUs: React.FC<ClassProps> = ({ className }) => {
  return (
    <section className={cn('container relative my-44 px-20 flex-center', className)}>
      <Glow className="-left-20 bottom-20 h-[450px] w-[300px] rotate-[45deg]" />
      <p className="text-center font-phosphate text-[96px] uppercase leading-tight">
        Noctua Production is a 3D
        <span className="text-gradient-orange"> animation</span> and{' '}
        <span className="text-gradient-red-to-blue">design studio</span> that transforms your ideas
        into stunning visual content. From concept to final video, we{' '}
        <span className="text-gradient-blue">handle</span>{' '}
        <span className="text-gradient-orange">every step</span> with a dedicated team of
        professionals.
      </p>
    </section>
  );
};

export default AboutUs;
