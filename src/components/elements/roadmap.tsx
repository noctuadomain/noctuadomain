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
        id="roadmap"
      />
      <section className={cn('container my-44', className)}>
        <Image
          className="mb-14"
          src="/roadmap.png"
          alt="roadmap"
          width={1820}
          height={1413}
          quality={100}
        />
        <div className="mx-auto max-w-[1100px] flex-col gap-14 flex-center">
          <p className="text-center text-xl">
            Take a journey through our creative process and see how we transform simple ideas into
            incredible animations. Watch the fun video, complete with cool visuals and sounds, that
            shows every exciting step we take!
          </p>
          <Button className="group/button px-7" variant="outline">
            <Play className="mr-3" />
            Watch a demo
          </Button>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
