import React from 'react';

import Image from 'next/image';

import { type Project } from '@/ts/interfaces';
import { getPreviewSrc } from '@/lib/utils';

interface CarouselItemProps {
  element: Project;
  openVideo: (link: string) => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ element, openVideo }) => {
  return (
    <div
      className="relative h-full w-[405px] flex-shrink-0 cursor-pointer overflow-hidden grayscale hover:grayscale-0 hover:transition-all hover:duration-300"
      onClick={() => openVideo(element.link)}
    >
      <Image
        className="absolute left-0 top-0 object-cover"
        src={getPreviewSrc(element.link)}
        alt={`project-${element.id}`}
        fill
      />
    </div>
  );
};

export default CarouselItem;
