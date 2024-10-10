import React, { ComponentProps } from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface TitleProps extends ClassProps, ComponentProps<'div'> {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ className, title, description, ...props }) => {
  return (
    <div
      className={cn(
        'container max-w-[1600px] px-4 py-16 text-center font-phosphate uppercase 2xl:py-11 md:py-10 sm:px-3 sm:py-0',
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-[96px] leading-[104px] 2xl:text-[72px] 2xl:leading-[80px] lg:text-[66px] lg:leading-[72px] md:text-[60px] md:leading-[68px] sm:mb-3 sm:text-[30px] sm:leading-[34px]">
        {title}
      </h2>
      <h3 className="text-5xl 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm">{description}</h3>
    </div>
  );
};

export default React.memo(Title);
