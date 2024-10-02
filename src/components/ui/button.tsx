import React, { ComponentProps } from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface ButtonProps extends ClassProps, ComponentProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
}

const primary =
  'bg-white text-black primary-btn-hover primary-btn-outline hover:transition-shadow hover:duration-300';
const outline =
  'border border-white bg-transparent hover:text-cyan hover:border-cyan hover:transition-all hover:duration-300 outline-btn-hover';
const ghost = 'bg-black';

const ghostChildren =
  'underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-white';

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={cn(
        'group rounded-lg p-4 text-xl font-medium active:translate-y-[1px] active:scale-[0.99] active:transition-transform disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' ? primary : variant === 'outline' ? outline : ghost,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={cn(
          'flex flex-shrink-0 items-center',
          variant === 'ghost' ? ghostChildren : null
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default React.memo(Button);
