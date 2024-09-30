import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { type ServiceCard } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const ServiceCard: React.FC<ServiceCard> = ({ className, isActive, service, changeService }) => {
  return (
    <div
      className={cn(
        'relative h-[560px] overflow-hidden opacity-100 transition-all duration-700',
        isActive
          ? 'service-card-shadow flex-8 grayscale-0'
          : 'flex-1 cursor-pointer opacity-50 grayscale hover:flex-1.5',
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
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <h3 className="mb-5 text-[40px] font-bold">{service.title}</h3>
          <p>{service.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(ServiceCard);
