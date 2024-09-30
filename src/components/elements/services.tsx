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

  const changeService = React.useCallback((index: number) => {
    setActiveService(index);
  }, []);
  return (
    <>
      <Title
        title="services"
        description="turn your creative ideas into stunning animations"
        id="services"
      />
      <section className={cn('mb-44', className)} id="services">
        <div className="mb-20 flex w-full">
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
        <AnimatePresence>
          {services[activeService].listTitle && (
            <motion.div
              className="mb-20 box-content flex-col overflow-hidden px-5 flex-center"
              initial={{ height: '0', marginBottom: 0, opacity: 0 }}
              animate={{ height: 'auto', marginBottom: 20 * 4, opacity: 1 }}
              exit={{ height: 0, marginBottom: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-10 font-phosphate text-[32px] uppercase">
                {services[activeService].listTitle}
              </h4>
              {services[activeService].list()}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="container grid auto-rows-min grid-cols-4 gap-14">
          {services.map((service, index) => (
            <ServiceMiniCard
              isActive={activeService === index}
              service={service}
              changeService={changeService}
              key={service.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
