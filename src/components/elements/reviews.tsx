'use client';

import React from 'react';

import Title from '@/components/elements/title';
import Review from '@/components/elements/review';
import CarouselButton from '@/components/ui/carousel-button';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import reviews from '@/data/reviews';

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
      <Title
        title="reviews"
        description="smooth projects management and delivery"
      />
      <section className={cn('container my-32 flex-center', className)}>
        <div className="w-[1320px] relative review-outer-gradient border border-solid border-[#161A2F] rounded-[20px]">
          <div className="overflow-hidden">
            <div className="flex justify-start transition-transform duration-500" style={{ transform: `translateX(${-1320 * currReview}px)` }}>
              {reviews.map(({ image, name, position, comment }) => (
                <Review key={name} image={image} name={name} position={position}
                  comment={comment} currReview={currReview}
                />
              ))}
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
