import React from 'react';

import { IconProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Play: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg className={cn('', className)} width="11" height="13" viewBox="0 0 11 13" fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        className="group-hover/button:stroke-cyan group-hover/button:transition-colors group-hover/button:duration-300"
        d="M4.68003 11.0721C3.3586 12.0378 1.5 11.094 1.5 9.45734V3.08465C1.5 1.44798 3.3586 0.504205 4.68003 1.46987L9.0403 4.65621C10.1336 5.45516 10.1336 7.08684 9.0403 7.88578L4.68003 11.0721Z"
        stroke="white" strokeWidth="2" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Play;
