'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import YouTube from '@/components/ui/youtube';
import Image from 'next/image';

import { ClassProps, Project } from '@/ts/interfaces';
import { cn, getPreviewSrc } from '@/lib/utils';
import useInfiniteCarousel from '@/hooks/useInfiniteCarousel';

interface ProjectsCarouselProps extends ClassProps {
  elements: Project[];
  direction?: 'left' | 'right';
  stopOnHover?: boolean;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  className,
  elements,
  direction = 'right',
  stopOnHover = true
}) => {
  const { ref, xTranslation, handleHoverStart, handleHoverEnd } = useInfiniteCarousel({
    initialDuration: 25,
    stopOnHover: stopOnHover,
    columnGap: 20,
    direction: direction
  });
  const [activeVideo, setActiveVideo] = React.useState<string>('');

  const openVideo = (link: string) => {
    setActiveVideo(link);
  };

  return (
    <>
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50" // Добавляем фиксированное позиционирование и высокий z-index
          >
            <YouTube link={activeVideo} setActiveVideo={setActiveVideo} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={cn('relative w-full', className)}>
        <motion.div
          className="inline-flex h-[516px] gap-5"
          ref={ref}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          style={{ x: xTranslation }}
        >
          {[...elements, ...elements].map((element) => (
            <div
              className="relative h-full w-[405px] flex-shrink-0 cursor-pointer overflow-hidden grayscale hover:grayscale-0 hover:transition-all hover:duration-300"
              key={element.id}
              onClick={() => openVideo(element.link)}
            >
              <Image
                className="absolute left-0 top-0 object-cover"
                src={getPreviewSrc(element.link)}
                alt={`project-${element.id}`}
                fill
              />
            </div>
          ))}
        </motion.div>
        <div className="projects-ellipse absolute -top-[46px] h-20 w-screen bg-black" />
        <div className="projects-ellipse absolute -bottom-[46px] h-20 w-screen bg-black" />
      </div>
    </>
  ); // FIXME: change image preview alt
};

export default ProjectsCarousel;
