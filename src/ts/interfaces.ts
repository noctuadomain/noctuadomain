import { ComponentProps } from 'react';

export interface ClassProps {
  className?: string;
}

export interface IconProps extends ClassProps, ComponentProps<'svg'> {}

export interface Project {
  color: string;
}
