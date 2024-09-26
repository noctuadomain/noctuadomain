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
    <div className={cn('flex-center flex-shrink-0 w-full', className)}>
      <div className="flex-shrink-0 mr-4 rounded-full size-[208px] relative overflow-hidden">
        <Image className="relative -top-6 w-[210px] h-auto" src={image} alt="review-1" width={210} height={0} />
      </div>
      <div className="flex flex-col">
        <strong className="text-2xl font-bold">{name}</strong>
        <p className="text-xl opacity-50 mb-5">{position}</p>
        <p className="text-xl">{comment}</p>
      </div>
    </div>
  );
};

export default React.memo(Review);
