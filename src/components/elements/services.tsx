import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Services: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>
    
    </div>
  );
};

export default Services;
