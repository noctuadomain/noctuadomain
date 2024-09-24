import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Services: React.FC<ClassProps> = ({ className }) => {
  return (
    <section className={cn('', className)} id="services">
      services
    </section>
  );
};

export default Services;
