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
      className="group relative flex w-[405px] flex-shrink-0 cursor-pointer flex-col overflow-hidden grayscale hover:grayscale-0 hover:transition-all hover:duration-300 2xl:w-[303px] lg:w-[233px] md:w-[160px]"
      onClick={() => openVideo(element.link)}
    >
      <div className="relative h-[441px] 2xl:h-[323px] lg:h-[249px] md:h-[175px]">
        <Image
          className="object-cover"
          src={getPreviewSrc(element.link)}
          alt={`project-${element.id}`}
          fill
        />
      </div>
      <div className="z-10 mt-4 scale-95 text-lg font-light opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 2xl:mt-3 2xl:text-base lg:mt-2.5 lg:text-[13px] lg:leading-[18px] md:mt-2 md:text-[10px] md:leading-3">
        <h5>{element.title}</h5>
      </div>
    </div>
  );
};

export default CarouselItem;
