import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Showreel: React.FC<ClassProps> = ({ className }) => {
  return (
    <section className={cn('container flex-center pt-16 pb-44', className)} id="showreel">
      <video
        src="/showreel.mp4"
        width={1680}
        height={1105}
        muted
        autoPlay
        loop
        poster="/poster.jpg"
      />
    </section>
  );
};

export default Showreel;
