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
    <div className={cn('w-full flex-shrink-0 flex-center', className)}>
      <div className="relative mr-4 size-[208px] flex-shrink-0 overflow-hidden rounded-full">
        <Image
          className="relative -top-6 h-auto w-[210px]"
          src={image}
          alt="review-1"
          width={210}
          height={0}
        />
      </div>
      <div className="flex flex-col">
        <strong className="text-2xl font-bold">{name}</strong>
        <p className="mb-5 text-xl opacity-50">{position}</p>
        <p className="text-xl">{comment}</p>
      </div>
    </div>
  );
};

export default React.memo(Review);
