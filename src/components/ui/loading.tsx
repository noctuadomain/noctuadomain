import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Loading: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('size-7 relative', className)}>
      <div className="animate-button-loading-spinner absolute content-none top-0 left-0 right-0 bottom-0 m-auto border-4 border-solid border-transparent border-l-inherit rounded-full" />
    </div>
  );
};

export default React.memo(Loading);
