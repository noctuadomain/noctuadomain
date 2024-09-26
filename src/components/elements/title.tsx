import React, { ComponentProps } from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface TitleProps extends ClassProps, ComponentProps<'div'> {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ className, title, description, ...props }) => {
  return (
    <div className={cn('container py-16 uppercase text-center font-phosphate max-w-[1600px]', className)} {...props}>
      <h2 className="text-[96px] mb-5">{title}</h2>
      <h3 className="text-5xl">{description}</h3>
    </div>
  );
};

export default React.memo(Title);
