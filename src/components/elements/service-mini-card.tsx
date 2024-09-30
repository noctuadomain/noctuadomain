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
        'rounded-2xl p-5',
        isActive ? 'service-mini-card-bg' : 'cursor-pointer bg-transparent',
        className
      )}
      onClick={() => changeService(service.id)}
    >
      <div
        className={cn(
          'mb-10 inline-flex rounded-3xl bg-[#3ADCFF1A] p-4 transition-colors duration-300',
          isActive && 'bg-[#FFFFFF12]'
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
  );
};

export default React.memo(ServiceMiniCard);
