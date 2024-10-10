import React from 'react';

import ContactForm from '@/components/elements/contact-form';
import Title from '@/components/elements/title';
import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Contact: React.FC<ClassProps> = ({ className }) => {
  return (
    <div id="contact-us">
      <Title
        title="contact us"
        description="we are a full-service studio that creates and develops everything from the initial idea to the final results"
      />
      <section
        className={cn(
          'container relative h-[1080px] justify-start flex-center 2xl:h-[810px] md:h-[706px]',
          className
        )}
      >
        <ContactForm className="w-[820px] 2xl:w-[650px] 2xl:p-8 md:mx-4 md:w-[618px]" />
        <Image
          className="absolute -bottom-12 left-0 -z-50 h-[600px] w-[900px] 3xl:-left-10 3xl:bottom-0 3xl:h-[480px] 3xl:w-[720px] 2xl:h-[360px] 2xl:w-[540px] lg:-left-20 lg:h-[324px] lg:w-[486px] md:-left-10 md:h-[291px] md:w-[437px] sm:hidden"
          src="/feather-huge.png"
          alt="huge feather"
          width={900}
          height={600}
        />
        <Image
          className="absolute -right-12 -top-52 -z-50 2xl:-top-40 2xl:h-[548px] 2xl:w-[438px] xl:-top-36 xl:h-[493px] xl:w-[394px] lg:-right-24 lg:-top-32 lg:h-[443px] lg:w-[354px] md:-right-10 md:-top-28 md:h-[398px] md:w-[318px] sm:hidden"
          src="/feather-small.png"
          alt="small feather"
          width={548}
          height={686}
          quality={100}
        />
        <Image
          className="absolute -right-14 top-32 -z-50 2xl:h-[456px] 2xl:w-[328px] xl:h-[410px] xl:w-[295px] lg:-right-24 lg:h-[369px] lg:w-[265px] md:-right-10 md:h-[332px] md:w-[238px] sm:hidden"
          src="/feathers.png"
          alt="feathers"
          width={411}
          height={571}
          quality={100}
        />
      </section>
    </div>
  );
};

export default Contact;
