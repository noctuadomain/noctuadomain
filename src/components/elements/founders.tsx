import React from 'react';

import Title from '@/components/elements/title';
import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Founders: React.FC<ClassProps> = ({ className }) => {
  return (
    <>
      <Title
        title="founders"
        description="we pride ourselves on being professionals who excel at every stage of production"
      />
      <div className={cn('container flex justify-between gap-10 my-32', className)}>
        <div className="max-w-[480px] font-light py-[284px]">
          <p className="text-2xl mb-4">
            <strong className="font-bold">KYRYLO:</strong> Co-founder, VFX
            supervisor
          </p>
          <p className="text-xl">
            Kirill brings 10 years of experience and
            technical prowess to the team. He is proficient in various software
            programs and is highly skilled in working with 2D designers, 3D
            designers, VFX artists, and other creative professionals. Kirill is
            not just a technical expert; he is also adept at guiding and
            mentoring his team, ensuring the highest quality in every
            project.
          </p>
        </div>
        <Image className="object-contain" src="/founders.jpg" alt="founders" width={640} height={826} quality={100}/>
        <div className="max-w-[480px] font-light py-[284px]">
          <p className="text-2xl mb-4">
            <strong className="font-bold">MARIIA:</strong> Co-founder, Manager
          </p>
          <p className="text-xl">
            Maria&apos;s journey in the industry is a testament to her dedication and expertise. Starting as a project manager, she has risen to become the production manager, now fully running the studio. With 7 years of experience, Maria&apos;s leadership and vision drive our projects to excellence.
          </p>
        </div>
      </div>
    </>
  );
};

export default Founders;
