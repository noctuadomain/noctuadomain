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
        'container max-w-[1600px] py-16 text-center font-phosphate uppercase',
        className
      )}
      {...props}
    >
      <h2 className="mb-5 text-[96px]">{title}</h2>
      <h3 className="text-5xl">{description}</h3>
    </div>
  );
};

export default React.memo(Title);
