import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface TitleProps extends ClassProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ className, title, description }) => {
  return (
    <div className={cn('container py-16 uppercase text-center font-phosphate', className)}>
      <h2 className="text-[96px] mb-5">{title}</h2>
      <h3 className="text-5xl">{description}</h3>
    </div>
  );
};

export default Title;
