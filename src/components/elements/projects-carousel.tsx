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
    <div
      className={cn(
        'relative min-h-[516px] w-full 2xl:min-h-[387px] lg:min-h-[302px] md:min-h-[220px]',
        className
      )}
    >
      {isLoading ? (
        <div className="flex h-[516px] items-center justify-center 2xl:h-[387px] lg:h-[302px] md:h-[220px]">
          <Loading className="mx-auto" />
        </div>
      ) : (
        <motion.div
          className="inline-flex h-[516px] gap-5 2xl:h-[387px] 2xl:gap-4 lg:h-[302px] lg:gap-3 md:h-[220px] md:gap-2"
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
