import React from 'react';
import { animate, AnimationPlaybackControls, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

interface CarouselOptions {
  initialDuration: number;
  stopOnHover?: boolean;
  columnGap: number;
  direction: 'right' | 'left';
}

const useInfiniteCarousel = ({ initialDuration, stopOnHover = true, columnGap, direction = 'left' }: CarouselOptions) => {
  const [controls, setControls] = React.useState<AnimationPlaybackControls | null>(null);
  const [rerender, setRerender] = React.useState(false);
  
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  
  const slowDownFactor = 2;
  
  React.useEffect(() => {
    const finalPosition = -width / 2 - (columnGap / 2);
    
    const startAnimation = (from: number, to: number, duration: number) => {
      return animate(xTranslation, direction === 'left' ? [from, to] : [to, from], {
        repeat: Infinity,
        repeatType: 'loop',
        duration,
        ease: 'linear'
      });
    };
    
    const newControls = startAnimation(0, finalPosition, initialDuration);
    setControls(newControls);
    
    return () => newControls.stop();
  }, [xTranslation, width, initialDuration, rerender, columnGap]);
  
  const handleHoverStart = () => {
    const finalPosition = direction === 'left' ? -width / 2 - (columnGap / 2) : width / 2 + (columnGap / 2);
    if (controls) {
      if (stopOnHover) {
        controls.pause();
      } else {
        controls.stop();
        const currentPosition = xTranslation.get();
        const newDuration = initialDuration * (1 - currentPosition / finalPosition) * slowDownFactor;
        const newControls = animate(xTranslation, [currentPosition, finalPosition], {
          ease: 'linear',
          duration: newDuration,
          onComplete: () => setRerender(!rerender)
        });
        setControls(newControls);
      }
    }
  };
  
  const handleHoverEnd = () => {
    const finalPosition = -width / 2 - (columnGap / 2);
    if (controls) {
      if (stopOnHover) {
        controls.play();
      } else {
        controls.stop();
        const currentPosition = xTranslation.get();
        const newDuration = direction === 'left' ? initialDuration * (1 - currentPosition / finalPosition) : initialDuration;
        const newKeyframes = direction === 'left' ? [currentPosition, finalPosition] : [currentPosition, 0];
        const newControls = animate(xTranslation, newKeyframes, {
          ease: 'linear',
          duration: newDuration,
          onComplete: () => setRerender(!rerender)
        });
        setControls(newControls);
      }
    }
  };
  
  return {
    xTranslation,
    handleHoverStart,
    handleHoverEnd,
    ref
  };
};

export default useInfiniteCarousel;
