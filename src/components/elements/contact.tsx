import React from 'react';

import ContactForm from '@/components/elements/contactForm';
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
      <section className={cn('container h-[1080px] flex-center relative', className)}>
        <ContactForm className="w-[820px]" />
        <Image className="absolute -bottom-12 left-0 -z-50 w-[900px] h-[600px]" src="/feather-huge.png" alt="huge feather" width={900} height={600} />
        <Image className="absolute -top-52 -right-12 -z-50" src="/feather-small.png" alt="small feather" width={548} height={686} quality={100} />
        <Image className="absolute top-32 -right-14 -z-50" src="/feathers.png" alt="feathers" width={411} height={571} quality={100} />
      </section>
    </div>
  );
};

export default Contact;
