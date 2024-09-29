import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Glow: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('absolute -z-50 h-96 w-72 -rotate-45 blur-[80px] filter', className)}>
      <div
        className="h-full w-full rounded-full shadow-lg"
        style={{
          background: 'linear-gradient(180deg, #E83A1D50 80%, #230F3A 95%)'
        }}
      />
    </div>
  );
};

export default React.memo(Glow);
