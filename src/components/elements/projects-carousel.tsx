'use client';

import React from 'react';

import { motion } from 'framer-motion';

import CarouselItem from './carousel-item';
import Loading from '@/components/ui/loading';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import useInfiniteCarousel from '@/hooks/useInfiniteCarousel';

interface ProjectsCarouselProps extends ClassProps {
  elements: Project[];
  direction?: 'left' | 'right';
  stopOnHover?: boolean;
  openVideo: (link: string) => void;
  isLoading?: boolean;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  className,
  elements,
  direction = 'right',
  stopOnHover = true,
  openVideo,
  isLoading
}) => {
  const { ref, xTranslation, handleHoverStart, handleHoverEnd } = useInfiniteCarousel({
    initialDuration: 25,
    stopOnHover: stopOnHover,
    columnGap: 20,
    direction: direction
  });

  return (
    <div className={cn('relative min-h-[516px] w-full', className)}>
      {isLoading ? (
        <div className="flex h-[516px] items-center justify-center">
          <Loading className="mx-auto" />
        </div>
      ) : (
        <motion.div
          className="inline-flex h-[516px] gap-5"
          ref={ref}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          style={{ x: xTranslation }}
        >
          {[...elements, ...elements].map((element, index) => (
            <CarouselItem
              key={`id#${element.id}-${index}`}
              element={element}
              openVideo={openVideo}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(ProjectsCarousel);
