import React from 'react';

import Glow from '@/components/elements/glow';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const AboutUs: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('container relative flex-center px-20 my-44', className)}>
      <Glow className="h-[450px] w-[300px] bottom-20 -left-20 rotate-[45deg]" />
      <p className="uppercase font-phosphate text-[96px] text-center leading-tight">Noctua Production is a 3D
        <span className="text-gradient-orange"> animation</span> and <span className="text-gradient-red-to-blue">design studio</span> that transforms your ideas into stunning visual content. From concept to final video, we <span className="text-gradient-blue">handle</span> <span className="text-gradient-orange">every step</span> with a dedicated team of professionals.
      </p>
    </div>
  );
};

export default AboutUs;
