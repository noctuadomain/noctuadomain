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
            'aspect-video size-[85%] 3xl:h-[75%] 2xl:h-[60%] xl:h-[55%] lg:h-[45%] md:h-[32%] sm:h-[24%]',
            className
          )}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </>
  );
};

export default YouTube;
