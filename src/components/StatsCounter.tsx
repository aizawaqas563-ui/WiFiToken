/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  end: number;
  suffix?: string;
  duration?: number; // duration in ms
  formatter?: (val: number) => string;
}

export default function StatsCounter({ end, suffix = "", duration = 2000, formatter }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing function (easeOutQuad)
            const easedProgress = progress * (2 - progress);
            
            const currentVal = Math.floor(easedProgress * end);
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [end, duration]);

  const defaultFormatter = (val: number) => {
    return val.toLocaleString();
  };

  const formatFn = formatter || defaultFormatter;

  return (
    <span ref={elementRef} className="font-display font-black">
      {formatFn(count)}
      {suffix}
    </span>
  );
}
