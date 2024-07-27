// components/useFadeInCenter.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useFadeInCenter = (duration = 1, delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.5 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: duration, 
        delay: delay, 
        ease: 'power2.out',
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

export default useFadeInCenter;
