'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import useInfiniteCarousel from '@/hooks/useInfiniteCarousel';

const projects = [
  { color: 'red' },
  { color: 'green' },
  { color: 'blue' },
  { color: 'orange' },
  { color: 'yellow' },
  { color: 'brown' },
  { color: 'pink' }
];

interface ProjectsCarouselProps extends ClassProps {
  direction?: 'left' | 'right';
  stopOnHover?: boolean;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ className, direction = 'right', stopOnHover = false }) => {
  const {
    ref,
    xTranslation,
    handleHoverStart,
    handleHoverEnd
  } = useInfiniteCarousel({
    initialDuration: 25,
    stopOnHover: stopOnHover,
    columnGap: 20,
    direction: direction
  });
  
  return (
    <div className={cn('w-full relative', className)}>
      <motion.div
        className="inline-flex h-[516px] gap-5"
        ref={ref}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{ x: xTranslation }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            className="w-[405px] h-full flex-shrink-0 grayscale hover:grayscale-0 hover:transition-all hover:duration-300"
            style={{ backgroundColor: project.color }}
            key={`${project.color} - ${index}`}
          />
        ))}
      </motion.div>
      <div className="w-screen bg-black h-20 absolute -top-7 projects-ellipse" />
      <div className="w-screen bg-black h-20 absolute -bottom-7 projects-ellipse" />
    </div>
  );
};

export default ProjectsCarousel;
