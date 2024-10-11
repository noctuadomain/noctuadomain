'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import ServiceCard from './service-card';
import ServiceMiniCard from './service-mini-card';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const Services: React.FC<ClassProps> = ({ className }) => {
  const [activeService, setActiveService] = React.useState<number>(0);
  const [isFirstRender, setIsFirstRender] = React.useState(true); // to prevent CLS

  const changeService = React.useCallback((index: number) => {
    setActiveService(index);
  }, []);

  React.useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <>
      <Title
        title="services"
        description="turn your creative ideas into stunning animations"
        id="services"
      />
      <section
        className={cn('lg:my-26 my-44 2xl:my-32 md:my-20 sm:my-10', className)}
        id="services"
      >
        <div className="mb-20 flex w-full 2xl:mb-14 lg:mb-12 md:mb-10">
          {services.map((service, index) => (
            <ServiceCard
              className={
                activeService === index + 1 || activeService === index - 1
                  ? 'opacity-60 grayscale-0'
                  : ''
              }
              isActive={activeService === index}
              service={service}
              changeService={changeService}
              key={service.title}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <AnimatePresence>
            {services[activeService].listTitle && (
              <motion.div
                className="box-content flex-col overflow-hidden px-5 flex-center 2xl:mb-16 lg:mb-10 sm:order-2 sm:px-3"
                initial={isFirstRender ? false : { height: '0', marginBottom: 0, opacity: 0 }}
                animate={{ height: 'auto', marginBottom: 20 * 4, opacity: 1 }}
                exit={{ height: 0, marginBottom: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="mb-10 font-phosphate text-[32px] uppercase 2xl:text-2xl">
                  {services[activeService].listTitle}
                </h4>
                {services[activeService].list()}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="container grid auto-rows-min grid-cols-4 gap-14 xl:gap-8 lg:gap-5 md:px-4 sm:order-1 sm:mb-5 sm:mt-10 sm:flex sm:grid-cols-none sm:gap-2 sm:overflow-y-scroll">
            {services.map((service, index) => (
              <ServiceMiniCard
                isActive={activeService === index}
                service={service}
                changeService={changeService}
                key={service.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
