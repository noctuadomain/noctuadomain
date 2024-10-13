import React, { ComponentProps } from 'react';

import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface CarouselButtonProps extends ClassProps, ComponentProps<'button'> {
  direction: 'next' | 'prev';
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  className,
  onClick,
  direction,
  disabled
}) => {
  return (
    <button
      className={cn(
        'rounded-full border border-solid border-[#4593F3] bg-cyan p-4 flex-center disabled:pointer-events-none disabled:opacity-30 disabled:transition-opacity disabled:duration-300',
        className
      )}
      style={{ transform: `rotate(${direction === 'prev' ? '180deg' : null})` }}
      onClick={onClick}
      disabled={disabled}
    >
      <Image
        className="h-auto w-2 2xl:w-1.5"
        src="/icons/reviews-arrow.svg"
        alt="reviews arrow"
        width={8}
        height={0}
      />
    </button>
  );
};

export default React.memo(CarouselButton);
