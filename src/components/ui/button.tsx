import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface ButtonProps extends ClassProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
}

const primary = 'bg-white text-black';
const outline = 'border border-white bg-transparent';
const ghost = 'bg-black';

const Button: React.FC<ButtonProps> = ({ className, children, variant = 'primary' }) => {
  return (
    <button className={cn(
      'flex items-center text-xl font-medium p-4 rounded-lg flex-shrink-0',
      variant === 'primary' ? primary : variant === 'outline' ? outline : ghost,
      className)}>
      {children}
    </button>
  );
};

export default React.memo(Button);
