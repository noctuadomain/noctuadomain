'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { services, type Services } from '@/data/services';

const Services: React.FC<ClassProps> = ({ className }) => {
  const [servicesOrder, setServicesOrder] = React.useState<Services[]>(services);
  const [activeService, setActiveService] = React.useState<number>(0);

  const changeService = () => {
    if (index === activeService) return;

    const elemsLeftToIdx = services.slice(0, index);
    const elemsRightToIdx = services.slice(index + 1);
    const newOrder = [services[index], ...elemsRightToIdx, ...elemsLeftToIdx];
    setActiveService(index);
    setServicesOrder(newOrder);
  };

  return (
    <>
      <Title
        title="services"
        description="turn your creative ideas into stunning animations"
        id="services"
      />
      <section className={cn('mb-44', className)} id="services">
        <div className="mb-20 flex w-full">
          {servicesOrder.map((service, index) => (
            <div
              className={cn(
                'relative h-[560px] overflow-hidden transition-all duration-500',
                0 !== index
                  ? 'flex-1 cursor-pointer grayscale hover:flex-2'
                  : 'service-card-shadow flex-8 grayscale-0',
                1 === index ? 'opacity-60 grayscale-0' : 0 !== index ? 'opacity-70' : 'opacity-100' // next card - all other cards - activeCard
              )}
              key={service.title}
              onClick={() => changeService(index)}
            >
              <Image
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={service.imageSrc}
                alt={service.title}
                width={1100}
                height={560}
              />
              {0 === index && (
                <motion.div
                  className="absolute bottom-5 left-5 right-5 z-10 flex flex-col"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <h3 className="mb-5 text-[40px] font-bold">{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <AnimatePresence>
          {servicesOrder[0].listTitle && (
            <motion.div
              className="mb-20 box-content flex-col overflow-hidden px-5 flex-center"
              initial={{ height: '0', marginBottom: 0, opacity: 0 }}
              animate={{ height: 'auto', marginBottom: 20 * 4, opacity: 1 }}
              exit={{ height: 0, marginBottom: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-10 font-phosphate text-[32px] uppercase">
                {servicesOrder[0].listTitle}
              </h4>
              {servicesOrder[0].list()}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="container grid auto-rows-min grid-cols-4 gap-14">
          {services.map((service, index) => (
            <div
              className={cn(
                'rounded-2xl p-5',
                activeService === index ? 'service-mini-card-bg' : 'cursor-pointer bg-transparent'
              )}
              key={service.title}
              onClick={() => changeService(index)}
            >
              <div
                className={cn(
                  'mb-10 inline-flex rounded-3xl bg-[#3ADCFF1A] p-4 transition-colors duration-300',
                  activeService !== index ? 'bg-[#FFFFFF12]' : ''
                )}
              >
                <Image
                  className="size-16"
                  src={service.iconSrc}
                  alt={`${service.title}-icon`}
                  width={64}
                  height={64}
                />
              </div>
              <div className="relative bottom-0">
                <h4 className="mb-4 text-[30px]">{service.title}</h4>
                <p className="text-xl opacity-50">{service.miniDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
