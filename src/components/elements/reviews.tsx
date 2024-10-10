'use client';

import React from 'react';
import Title from '@/components/elements/title';
import Review from '@/components/elements/review';
import CarouselButton from '@/components/ui/carousel-button';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import reviews from '@/data/reviews';
import Image from 'next/image';

const Reviews: React.FC<ClassProps> = ({ className }) => {
  const [currReview, setCurrReview] = React.useState<number>(0);

  const nextReview = React.useCallback(() => {
    setCurrReview(prev => prev + 1);
  }, []);

  const prevReview = React.useCallback(() => {
    setCurrReview(prev => prev - 1);
  }, []);

  return (
    <>
      <Title title="reviews" description="smooth projects management and delivery" />
      <section className={cn('container my-32 2xl:my-24 2xl:px-8 md:my-20 sm:my-10', className)}>
        <div className="review-outer-gradient relative mx-auto max-w-[1320px] rounded-[20px] border border-solid border-[#161A2F] p-10 2xl:p-7 md:p-5">
          <div className="review-inner-gradient flex w-full max-w-[1240px] flex-col overflow-hidden rounded-[20px] border border-solid border-[#26293C] p-6 2xl:p-4">
            <div
              className="flex w-full gap-7 transition-transform duration-500"
              style={{
                transform: `translateX(calc(${-100 * currReview}% - ${currReview * 1.75}rem))`
              }}
            >
              {reviews.map(({ image, name, position, comment }) => (
                <Review
                  key={name}
                  image={image}
                  name={name}
                  position={position}
                  comment={comment}
                />
              ))}
            </div>
            <div className="mt-10 flex 2xl:mt-6 md:mt-4">
              <div className="mx-auto flex items-center gap-6 sm:gap-3">
                {reviews.map((_, index) => (
                  <Image
                    key={index}
                    className={cn(
                      'box-content rounded-full border border-solid border-transparent p-2 transition-colors duration-300 sm:size-[5px]',
                      currReview === index ? 'border-cyan' : null
                    )}
                    src="/icons/dot.svg"
                    alt="review dot"
                    width={6}
                    height={6}
                  />
                ))}
              </div>
            </div>
          </div>
          <CarouselButton
            className="-left-5 top-1/2 box-content size-[44px] -translate-y-1/2 p-0 2xl:size-[33px]"
            direction="prev"
            onClick={prevReview}
            disabled={currReview <= 0}
          />
          <CarouselButton
            className="-right-5 top-1/2 box-content size-[44px] -translate-y-1/2 p-0 2xl:size-[33px]"
            direction="next"
            onClick={nextReview}
            disabled={currReview >= reviews.length - 1}
          />
        </div>
      </section>
    </>
  );
};

export default Reviews;
