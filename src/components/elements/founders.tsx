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
        id="about-us"
      />
      <section
        className={cn(
          'container my-32 flex justify-between gap-20 2xl:my-24 2xl:gap-14 xl:gap-10 lg:my-20 lg:flex-wrap lg:justify-center',
          className
        )}
      >
        <div className="max-w-[480px] py-[284px] font-light 2xl:max-w-[360px] 2xl:py-[200px] xl:py-[160px] lg:order-2 lg:py-0 lg:text-center sm:px-4">
          <p className="mb-4 text-2xl 2xl:text-xl sm:text-base">
            <strong className="font-bold">KYRYLO:</strong> Co-founder, VFX supervisor
          </p>
          <p className="text-xl 2xl:text-lg xl:text-base sm:text-[13px]">
            Kirill brings 10 years of experience and technical prowess to the team. He is proficient
            in various software programs and is highly skilled in working with 2D designers, 3D
            designers, VFX artists, and other creative professionals. Kirill is not just a technical
            expert; he is also adept at guiding and mentoring his team, ensuring the highest quality
            in every project.
          </p>
        </div>
        <Image
          className="h-[826px] w-[550px] 2xl:h-[619px] 2xl:w-[420px] lg:order-1 sm:h-[495px] sm:w-[336px]"
          src="/founders.webp"
          alt="founders"
          width={550}
          height={826}
        />
        <div className="max-w-[480px] py-[284px] font-light 2xl:max-w-[360px] 2xl:py-[200px] xl:py-[160px] lg:order-3 lg:py-0 lg:text-center sm:px-4">
          <p className="mb-4 text-2xl 2xl:text-xl sm:text-base">
            <strong className="font-bold">MARIIA:</strong> Co-founder, Manager
          </p>
          <p className="text-xl 2xl:text-lg xl:text-base sm:text-[13px]">
            Maria&apos;s journey in the industry is a testament to her dedication and expertise.
            Starting as a project manager, she has risen to become the production manager, now fully
            running the studio. With 7 years of experience, Maria&apos;s leadership and vision drive
            our projects to excellence.
          </p>
        </div>
      </section>
    </>
  );
};

export default Founders;
