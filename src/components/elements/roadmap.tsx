import React from 'react';

import Title from '@/components/elements/title';
import Image from 'next/image';
import Button from '@/components/ui/button';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import Play from '@/components/ui/icons/play';

const Roadmap: React.FC<ClassProps> = ({ className }) => {
  return (
    <>
      <Title
        title="roadmap"
        description="full support from concept to final video delivery"
      />
      <section className={cn('container my-44', className)} id="roadmap">
        <Image className="mb-14" src="/roadmap.png" alt="roadmap" width={1820} height={1413} quality={100} />
        <div className="max-w-[1100px] flex-center flex-col gap-14 mx-auto">
          <p className="text-xl text-center">Take a journey through our creative process and
            see how we transform simple ideas into incredible animations. Watch
            the fun video, complete with cool visuals and sounds, that shows
            every exciting step we take!
          </p>
          <Button className="px-7 group/button" variant="outline">
            <Play className="mr-3" />
            Watch a demo
          </Button>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
