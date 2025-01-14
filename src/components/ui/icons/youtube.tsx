import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Youtube: React.FC<ClassProps> = ({ className }) => {
  return (
    <svg
      width="35"
      height="24"
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('youtube', className)}
    >
      <path
        d="M33.688 3.74727C33.2962 2.27455 32.1374 1.11273 30.6629 0.714546C27.997 2.60093e-07 17.3007 0 17.3007 0C17.3007 0 6.60978 2.60093e-07 3.93842 0.714546C2.46944 1.10727 1.31058 2.26909 0.91341 3.74727C0.200684 6.42 0.200684 12 0.200684 12C0.200684 12 0.200684 17.58 0.91341 20.2527C1.30514 21.7255 2.464 22.8873 3.93842 23.2855C6.60978 24 17.3007 24 17.3007 24C17.3007 24 27.997 24 30.6629 23.2855C32.1319 22.8927 33.2908 21.7309 33.688 20.2527C34.4007 17.58 34.4007 12 34.4007 12C34.4007 12 34.4007 6.42 33.688 3.74727Z"
        fill="white"
      />
      <path d="M13.8839 17.1436L22.7685 12L13.8839 6.85636V17.1436Z" fill="black" />
    </svg>
  );
};

export default Youtube;
