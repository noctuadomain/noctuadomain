'use client';

import React, { Dispatch, SetStateAction } from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn, getVideoId } from '@/lib/utils';

interface YoutubeProps extends ClassProps {
  link: string;
  setActiveVideo: Dispatch<SetStateAction<string>>;
}

const YouTube: React.FC<YoutubeProps> = ({ className, link, setActiveVideo }) => {
  const videoId = getVideoId(link);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setActiveVideo('');
    }
  };

  if (!videoId) {
    return <div>Error: Invalid YouTube URL...</div>;
  }

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 bg-black flex-center"
        onClick={handleClose}
      >
        <iframe
          className={cn(
            'aspect-video',
            'h-[80%]',
            '2xl:h-[70%]',
            'xl:h-[65%]',
            'lg:h-[50%]',
            'md:h-[40%]',
            'sm:h-[25%]',
            className
          )}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        />
      </div>
    </>
  );
};

export default YouTube;
