import React from 'react';
import Image from 'next/image';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface ReviewProps extends ClassProps {
  image: string;
  name: string;
  position: string;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({ className, image, name, position, comment }) => {
  return (
    <div className={cn('w-full flex-shrink-0 flex-center sm:flex-col', className)}>
      <div className="relative mr-4 size-[208px] flex-shrink-0 overflow-hidden rounded-full 2xl:size-[158px] md:size-[117px] sm:mb-2">
        <Image
          className="relative -top-6 h-auto w-[210px] sm:pt-2"
          src={image}
          alt="review-1"
          width={210}
          height={300}
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <strong className="text-2xl font-bold 2xl:text-xl sm:text-base">{name}</strong>
        <p className="mb-5 text-xl opacity-50 2xl:mb-3 2xl:text-base sm:text-[14px]">{position}</p>
        <p className="text-xl 2xl:text-base sm:text-[12px] sm:leading-[18px]">{comment}</p>
      </div>
    </div>
  );
};

export default React.memo(Review);
