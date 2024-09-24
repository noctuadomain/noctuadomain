import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface ButtonProps extends ClassProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
}

const primary = 'bg-white text-black primary_btn_hover primary-btn-outline';
const outline = 'border border-white bg-transparent';
const ghost = 'bg-black';

const ghostText = 'underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-white';

const Button: React.FC<ButtonProps> = ({ className, children, variant = 'primary' }) => {
  return (
    <button className={cn(
      'flex items-center text-xl font-medium p-4 rounded-lg flex-shrink-0 active:translate-y-[1px] active:scale-[0.99] active:transition-transform disabled:pointer-events-none disabled:opacity-50 group',
      variant === 'primary' ? primary : variant === 'outline' ? outline : ghost,
      className)}>
      <div className={cn('flex', ghostText)}>{children}</div>
    </button>
  );
};

export default React.memo(Button);
