'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Title from '@/components/elements/title';
import ServiceCard from './service-card';
import ServiceMiniCard from './service-mini-card';
import CarouselButton from '../ui/carousel-button';
import ScrollBar from '@/components/ui/scroll-bar';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const MOBILE_WIDTH = 500;

const Services: React.FC<ClassProps> = ({ className }) => {
  const [activeService, setActiveService] = React.useState<number>(0);
  const [isFirstRender, setIsFirstRender] = React.useState(true); // to prevent CLS
  const containerRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const changeService = React.useCallback((index: number) => {
    setActiveService(index);
  }, []);

  const scrollToActiveService = (index: number) => {
    if (window.innerWidth <= MOBILE_WIDTH) return;

    if (containerRef.current && cardRefs.current[index]) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRefs.current[index]?.offsetWidth || 0;
      const cardLeft = cardRefs.current[index]?.offsetLeft || 0;
      let scrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;
      if (scrollLeft < 0) scrollLeft = 0;

      containerRef.current.style.transform = `translateX(-${scrollLeft}px)`;
    }
  };

  const handlePrevClick = () => {
    setActiveService(prev => {
      const newIndex = prev === 0 ? services.length - 1 : prev - 1;
      scrollToActiveService(newIndex);
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setActiveService(prev => {
      const newIndex = prev === services.length - 1 ? 0 : prev + 1;
      scrollToActiveService(newIndex);
      return newIndex;
    });
  };

  React.useEffect(() => {
    scrollToActiveService(activeService);
  }, [activeService]);

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
        className={cn('lg:my-26 my-14 flex flex-col 2xl:my-20 md:my-16 sm:my-10', className)}
        id="services"
      >
        <div
          className="service-mini-cards-scroll-area mb-8 flex gap-10 pl-10 transition-transform duration-700 xl:gap-8 lg:gap-5 md:px-4 sm:order-2 sm:mb-5 sm:mt-2 sm:gap-2 sm:overflow-x-scroll"
          ref={containerRef}
        >
          {services.map((service, index) => (
            <ServiceMiniCard
              isActive={activeService === index}
              service={service}
              changeService={changeService}
              key={service.title}
              ref={el => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>
        <ScrollBar className="hidden sm:block" containerRef={containerRef} />
        <div className="mb-10 flex items-center justify-center sm:hidden">
          <div className="inline-flex w-32 gap-10 2xl:gap-8">
            <CarouselButton
              className="size-[44px] border-none bg-white 2xl:size-[40px]"
              direction="prev"
              onClick={handlePrevClick}
              disabled={activeService === 0}
            />
            <CarouselButton
              className="size-[44px] border-none bg-white 2xl:size-[40px]"
              direction="next"
              onClick={handleNextClick}
              disabled={activeService === services.length - 1}
            />
          </div>
        </div>
        <div className="mb-14 flex w-full 2xl:mb-10 md:mb-6">
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
              className="box-content flex-col overflow-hidden px-5 flex-center 2xl:mb-16 lg:mb-10 sm:order-3 sm:px-3"
              initial={isFirstRender ? false : { height: '0', marginBottom: 0, opacity: 0 }}
              animate={{ height: 'auto', marginBottom: 20 * 4, opacity: 1 }}
              exit={{ height: 0, marginBottom: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-10 font-phosphate text-[32px] uppercase 2xl:mb-8 2xl:text-2xl lg:mb-4">
                {services[activeService].listTitle}
              </h4>
              {services[activeService].list()}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Services;
