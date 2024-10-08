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
        'rounded-2xl p-5 xl:p-4 md:p-2.5',
        isActive ? 'service-mini-card-bg' : 'cursor-pointer bg-transparent',
        className
      )}
      onClick={() => changeService(service.id)}
    >
      <div
        className={cn(
          'mb-10 inline-flex rounded-3xl bg-[#3ADCFF1A] p-4 transition-colors duration-300 2xl:mb-7',
          isActive && 'bg-[#FFFFFF12]'
        )}
      >
        <Image
          className={cn(
            'size-16 transition-opacity duration-300 2xl:size-12 md:size-8',
            isActive ? 'opacity-100' : 'opacity-50'
          )}
          src={service.iconSrc}
          alt={`${service.title}-icon`}
          width={64}
          height={64}
        />
      </div>
      <div className="relative bottom-0">
        <h4 className="mb-4 text-[30px] 2xl:text-2xl xl:text-xl md:text-sm">{service.title}</h4>
        <p className="text-xl opacity-50 2xl:text-base xl:text-sm md:text-[12px]">
          {service.miniDescription}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ServiceMiniCard);
