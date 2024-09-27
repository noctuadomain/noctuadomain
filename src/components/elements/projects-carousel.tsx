'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import useInfiniteCarousel from '@/hooks/useInfiniteCarousel';

interface ProjectsCarouselProps extends ClassProps {
  elements: Project[];
  direction?: 'left' | 'right';
  stopOnHover?: boolean;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ className, elements, direction = 'right', stopOnHover = true }) => {
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
        {[...elements, ...elements].map((element, index) => (
          <div
            className="w-[405px] h-full flex-shrink-0 grayscale hover:grayscale-0 hover:transition-all hover:duration-300"
            style={{ backgroundColor: element.color }}
            key={`${element.color} - ${index}`}
          />
        ))}
      </motion.div>
      <div className="w-screen bg-black h-20 absolute -top-[46px] projects-ellipse" />
      <div className="w-screen bg-black h-20 absolute -bottom-[46px] projects-ellipse" />
    </div>
  );
};

export default ProjectsCarousel;
