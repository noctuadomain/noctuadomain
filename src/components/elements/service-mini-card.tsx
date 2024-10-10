import React from 'react';

import Image from 'next/image';

import { type ServiceCard } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const ServiceMiniCard: React.FC<ServiceCard> = ({
  className,
  isActive,
  service,
  changeService
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-5 xl:p-4 md:p-2.5 sm:w-[120px] sm:flex-shrink-0 sm:p-2',
        isActive ? 'service-mini-card-bg' : 'cursor-pointer bg-transparent',
        className
      )}
      onClick={() => changeService(service.id)}
    >
      <div
        className={cn(
          'mb-10 inline-flex rounded-3xl bg-[#FFFFFF12] p-4 transition-colors duration-300 2xl:mb-7 sm:rounded-xl sm:p-2',
          isActive && 'bg-[#3ADCFF1A]'
        )}
      >
        <Image
          className={cn(
            'size-16 transition-opacity duration-300 2xl:size-12 md:size-8 sm:size-6',
            isActive ? 'opacity-100' : 'opacity-50'
          )}
          src={service.iconSrc}
          alt={`${service.title}-icon`}
          width={64}
          height={64}
        />
      </div>
      <div className="relative bottom-0">
        <h4 className="mb-4 text-[30px] 2xl:text-2xl xl:text-xl md:text-sm sm:mb-2 sm:text-[10px] sm:leading-4">
          {service.title}
        </h4>
        <p className="text-xl opacity-50 2xl:text-base xl:text-sm md:text-[12px] sm:text-[8px] sm:leading-4">
          {service.miniDescription}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ServiceMiniCard);
