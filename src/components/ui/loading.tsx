import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Loading: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('relative size-7', className)}>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto animate-button-loading-spinner rounded-full border-4 border-solid border-transparent border-l-inherit content-none" />
    </div>
  );
};

export default React.memo(Loading);
