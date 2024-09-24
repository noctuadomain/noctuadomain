import React from 'react';
import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Glow: React.FC<ClassProps> = ({ className }) => {
  return (
    <div
      className={cn('absolute w-72 h-96 filter blur-[80px] -rotate-45 -z-50', className)}>
      <div
        className="w-full h-full rounded-full shadow-lg"
        style={{
          background: 'linear-gradient(180deg, #E83A1D50 80%, #230F3A 95%)'
        }}
      />
    </div>
  );
};

export default React.memo(Glow);
