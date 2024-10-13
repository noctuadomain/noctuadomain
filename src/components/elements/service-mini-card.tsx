import React from 'react';
import Image from 'next/image';
import { type ServiceCard } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const ServiceMiniCard = React.forwardRef<HTMLDivElement, ServiceCard>(
  ({ className, isActive, service, changeService }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-[330px] flex-shrink-0 rounded-2xl p-5 xl:w-[240px] xl:p-4 md:w-[200px] md:p-2.5 sm:h-[140px] sm:w-[160px] sm:rounded-lg sm:p-2',
          isActive ? 'service-mini-card-bg' : 'cursor-pointer bg-transparent',
          className
        )}
        onClick={() => changeService(service.id)}
      >
        <div
          className={cn(
            'mb-6 inline-flex rounded-3xl bg-[#FFFFFF12] p-4 transition-colors duration-300 2xl:mb-4 sm:rounded-xl sm:p-3',
            isActive && 'bg-[#3ADCFF1A]'
          )}
        >
          <Image
            className={cn(
              'size-14 transition-opacity duration-300 2xl:size-12 md:size-8 sm:size-5',
              isActive ? 'opacity-100' : 'opacity-50'
            )}
            src={service.iconSrc}
            alt={`${service.title}-icon`}
            width={64}
            height={64}
          />
        </div>
        <div className="relative bottom-0">
          <h4 className="mb-4 text-2xl 2xl:text-2xl xl:text-xl lg:mb-2 lg:text-base md:text-sm sm:text-xs sm:leading-4">
            {service.title}
          </h4>
          <p className="text-lg opacity-50 2xl:text-base xl:text-sm md:text-xs sm:text-[9px] sm:leading-3">
            {service.miniDescription}
          </p>
        </div>
      </div>
    );
  }
);

ServiceMiniCard.displayName = 'ServiceMiniCard';

export default React.memo(ServiceMiniCard);
