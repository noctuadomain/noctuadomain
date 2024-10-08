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
      className="group relative flex w-[405px] flex-shrink-0 cursor-pointer flex-col overflow-hidden grayscale hover:grayscale-0 hover:transition-all hover:duration-300"
      onClick={() => openVideo(element.link)}
    >
      <Image
        className="h-[441px] object-cover"
        src={getPreviewSrc(element.link)}
        alt={`project-${element.id}`}
        width={405}
        height={441}
      />
      <div className="z-10 mt-4 scale-95 text-lg font-light opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <h5>{element.title}</h5>
      </div>
    </div>
  );
};

export default CarouselItem;
