// components/useFlipAnimation.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFlipAnimation = (duration = 1, delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      { rotationY: 0 },
      { 
        rotationY: 360, 
        duration: duration, 
        delay: delay, 
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [duration, delay]);

  return ref;
};

export default useFlipAnimation;
