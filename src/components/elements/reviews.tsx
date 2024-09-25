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
    setCurrReview((prev) => prev + 1);
  }, []);
  
  const prevReview = React.useCallback(() => {
    setCurrReview((prev) => prev - 1);
  }, []);
  
  return (
    <>
      <Title title="reviews" description="smooth projects management and delivery" />
      <section className={cn('container my-32', className)}>
        <div className="review-outer-gradient max-w-[1320px] relative mx-auto border border-solid border-[#161A2F] rounded-[20px] p-10">
          <div className="flex flex-col review-inner-gradient w-full max-w-[1240px] p-6 rounded-[20px] border border-solid border-[#26293C] overflow-hidden">
            <div
              className="flex w-full gap-7 transition-transform duration-500"
              style={{ transform: `translateX(calc(${(-100) * currReview}% - ${currReview * 1.75}rem))` }}
            >
              {reviews.map(({ image, name, position, comment }) => (
                <Review key={name} image={image} name={name} position={position} comment={comment} />
              ))}
            </div>
            <div className="flex mt-10">
              <div className="mx-auto flex items-center gap-6">
                {reviews.map((_, index) => (
                  <Image
                    key={index}
                    className={cn(
                      'box-content p-2 border border-solid border-transparent rounded-full transition-colors duration-300',
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
            className="size-[44px] -left-5 top-1/2 -translate-y-1/2"
            direction="prev"
            onClick={prevReview}
            disabled={currReview <= 0}
          />
          <CarouselButton
            className="size-[44px] -right-5 top-1/2 -translate-y-1/2"
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
