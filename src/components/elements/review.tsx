import React from 'react';

import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import reviews from '@/data/reviews';

interface ReviewProps extends ClassProps {
  image: string;
  name: string;
  position: string;
  comment: string;
  currReview: number;
}

const Review: React.FC<ReviewProps> = ({ className, image, name, position, comment, currReview }) => {
  return (
    <div
      className={cn('max-w-[1240px] flex flex-col justify-between flex-shrink-0 review-inner-gradient p-6 m-10 rounded-[20px] border border-solid border-[#26293C]', className)}>
      <div className="flex-center">
        <div
          className="flex-shrink-0 mr-4 rounded-full w-[208px] h-[208px] relative overflow-hidden">
          <Image className="relative -top-6" src={image}
            alt="review-1" width={210} height={312}/>
        </div>
        <div className="flex flex-col">
          <strong className="text-2xl font-bold">{name}</strong>
          <p className="text-xl opacity-50 mb-5">{position}</p>
          <p className="text-xl">{comment}</p>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="mx-auto flex items-center gap-6">
          {reviews.map((_, index) => (
            <Image
              key={index}
              className={cn(
                'box-content p-2 border border-solid border-transparent rounded-full transition-colors duration-300',
                currReview === index ? 'border-cyan' : null
              )} // TODO: ВЫНЕСТИ DOTS ВНЕ ЭТОГО КОМПОНЕНТА И ОПТИМИЗИРОВАТЬ РЕНДЕРЫ
              src="/icons/dot.svg"
              alt="review dot"
              width={6}
              height={6}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
