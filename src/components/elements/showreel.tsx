import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Showreel: React.FC<ClassProps> = ({ className }) => {
  return (
    <section className={cn('container mb-44 pt-16 flex-center', className)} id="showreel">
      <video
        src="/showreel.mp4"
        width={1680}
        height={1105}
        muted
        autoPlay
        loop
        poster="/poster.webp"
      />
    </section>
  );
};

export default Showreel;
