import React from 'react';

import Title from '@/components/elements/title';
import Review from '@/components/elements/review';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Reviews: React.FC<ClassProps> = ({ className }) => {
  return (
    <>
      <Title
        title="reviews"
        description="smooth projects management and delivery"
      />
      <section className={cn('container flex-center my-32', className)}>
        <Review />
      </section>
    </>
  );
};

export default Reviews;
