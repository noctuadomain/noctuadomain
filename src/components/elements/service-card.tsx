import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { type ServiceCard } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const ServiceCard: React.FC<ServiceCard> = ({ className, isActive, service, changeService }) => {
  return (
    <div
      className={cn(
        'relative h-[520px] overflow-hidden opacity-100 transition-all duration-700 2xl:h-[460px] xl:h-[430px] lg:h-[400px] md:h-[370px] sm:h-[250px]',
        isActive
          ? 'service-card-shadow flex-8 grayscale-0 xl:flex-7 lg:flex-1'
          : 'flex-1 cursor-pointer opacity-50 grayscale hover:flex-1.5 lg:flex-0',
        className
      )}
      onClick={() => changeService(service.id)}
    >
      <Image
        className="absolute left-0 top-0 h-full w-full object-cover"
        src={service.imageSrc}
        alt={service.title}
        width={1100}
        height={560}
      />
      {isActive && (
        <motion.div
          className="absolute bottom-5 left-5 right-5 z-10 flex flex-col"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.3 }}
        >
          <h3 className="mb-5 text-[40px] font-bold 2xl:text-[35px] xl:text-[30px] lg:text-[25px] sm:mb-2 sm:text-base">
            {service.title}
          </h3>
          <p className="lg:text-sm sm:text-[10px] sm:leading-[13px]">{service.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(ServiceCard);
