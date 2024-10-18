'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import Button from '@/components/ui/button';
import Play from '@/components/ui/icons/play';
import YouTube from '../ui/youtube';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const roadmapURI = 'https://www.youtube.com/watch?v=tqNsnzNprq4';

const Roadmap: React.FC<ClassProps> = ({ className }) => {
  const [activeVideo, setActiveVideo] = React.useState<string>('');

  const openVideo = React.useCallback((link: string) => {
    setActiveVideo(link);
  }, []);

  return (
    <>
      <Title
        title="roadmap"
        description="full support from concept to final video delivery"
        id="roadmap"
      />
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
      <section className={cn('container mb-44 2xl:mb-36 xl:mb-20', className)}>
        <video
          src="/roadmap.mp4"
          width={1800}
          height={1400}
          autoPlay
          muted
          loop
          playsInline // for Safari
          // poster="/roadmap.webp"
        />
        <div className="mx-auto mt-14 max-w-[1100px] flex-col gap-14 flex-center 2xl:mt-12 2xl:gap-12 xl:mt-8 xl:gap-8">
          <p className="px-4 text-center text-xl 2xl:text-base sm:text-xs">
            Take a journey through our creative process and see how we transform simple ideas into
            incredible animations. Watch the fun video, complete with cool visuals and sounds, that
            shows every exciting step we take!
          </p>
          <Button
            className="group/button px-7"
            variant="outline"
            onClick={() => openVideo(roadmapURI)}
          >
            <Play className="mr-3" />
            Watch a full video
          </Button>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
