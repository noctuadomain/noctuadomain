'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import Image from 'next/image';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import services from '@/data/services';

const Services: React.FC<ClassProps> = ({ className }) => {
  const [activeService, setActiveService] = React.useState<number>(0);
  
  const changeService = (index: number) => {
    setActiveService(index);
  };
  // TODO: optimize renders somehow
  return (
    <>
      <Title
        title="services"
        description="turn your creative ideas into stunning animations"
        id="services"
      />
      <section className={cn('mb-44', className)} id="services">
        <div className="w-full flex mb-20">
          {services.map((service, index) => (
            <div
              className={cn(
                'h-[560px] relative overflow-hidden transition-all duration-500',
                activeService !== index ? ' flex-1 hover:flex-2 cursor-pointer grayscale' : 'grayscale-0 flex-8 service-card-shadow',
                activeService + 1 === index ? 'opacity-60 grayscale-0' : activeService !== index ? 'opacity-70' : 'opacity-100' // next card - all other cards - activeCard
              )}
              key={service.title}
              onClick={() => changeService(index)}
            >
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={service.imageSrc}
                alt={service.title}
                width={1100}
                height={560}
              />
              {activeService === index && (
                <motion.div
                  className="flex flex-col absolute bottom-5 left-5 right-5 z-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <h3 className="font-bold text-[40px] mb-5">{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <AnimatePresence>
          {services[activeService].listTitle && (
            <motion.div
              className="flex-center flex-col px-5 overflow-hidden mb-20 box-content"
              initial={{ height: '0', marginBottom: 0, opacity: 0 }}
              animate={{ height: 'auto', marginBottom: 20 * 4, opacity: 1 }}
              exit={{ height: 0, marginBottom: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-[32px] mb-10 uppercase font-phosphate">
                {services[activeService].listTitle}
              </h4>
              {services[activeService].list()}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-4 auto-rows-min gap-14 container">
          {services.map((service, index) => (
            <div
              className={cn(
                'rounded-2xl p-5',
                activeService === index ? 'service-mini-card-bg' : 'bg-transparent cursor-pointer'
              )}
              key={service.title}
              onClick={() => changeService(index)}
            >
              <div className={cn(
                'inline-flex rounded-3xl bg-[#3ADCFF1A] p-4 mb-10 transition-colors duration-300',
                activeService !== index ? 'bg-[#FFFFFF12]' : ''
              )}>
                <Image className="size-16" src={service.iconSrc}
                  alt={`${service.title}-icon`} width={64} height={64}/>
              </div>
              <div className="relative bottom-0">
                <h4 className="text-[30px] mb-4">{service.title}</h4>
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
