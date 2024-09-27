import React from 'react';

import Title from '@/components/elements/title';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Services: React.FC<ClassProps> = ({ className }) => {
  return (
    <>
      <Title
        title="services"
        description="turn your creative ideas into stunning animations"
        id="services"
      />
      <section className={cn('', className)} id="services">
        services
      </section>
    </>
  );
};

export default Services;
