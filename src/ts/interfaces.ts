import { ComponentProps } from 'react';

export interface ClassProps {
  className?: string;
}

export interface IconProps extends ClassProps, ComponentProps<'svg'> {}

export interface Project {
  id: number;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  miniDescription: string;
  listTitle?: string;
  list: () => React.ReactNode;
  iconSrc: string;
  imageSrc: string;
}

export interface ServiceCard extends ClassProps {
  isActive: boolean;
  service: Service;
  changeService: (index: number) => void;
}
