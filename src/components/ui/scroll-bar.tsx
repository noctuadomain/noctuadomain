import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

interface ScrollBarProps extends ClassProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ className, containerRef }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const progress = (scrollLeft / maxScrollLeft) * 100;
        setScrollPosition(progress);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [containerRef]);

  return (
    <div
      className={cn(
        'relative mx-auto mb-10 h-1 w-28 rounded-lg bg-[#0C2028] sm:order-2',
        className
      )}
    >
      <div
        className="h-full rounded-lg bg-cyan"
        style={{ transform: `translateX(${scrollPosition * 3}%)`, width: '25%' }}
      ></div>
    </div>
  );
};

export default React.memo(ScrollBar);
