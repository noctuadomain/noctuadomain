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
        'container max-w-[1600px] px-4 py-16 text-center font-phosphate uppercase',
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-[96px] 2xl:text-[72px] lg:text-[66px] md:text-[60px]">{title}</h2>
      <h3 className="text-5xl 2xl:text-4xl lg:text-3xl md:text-2xl">{description}</h3>
    </div>
  );
};

export default React.memo(Title);
