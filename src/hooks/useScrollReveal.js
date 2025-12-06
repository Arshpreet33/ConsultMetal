/**
 * useScrollReveal Hook - ConsultMetal New Design
 * Reusable IntersectionObserver hook for scroll-triggered animations
 *
 * Usage:
 * const [ref, isVisible] = useScrollReveal({ threshold: 0.15, triggerOnce: true });
 *
 * <div ref={ref} className={isVisible ? 'visible' : ''}>Content</div>
 */

import { useState, useEffect, useRef } from "react";

/**
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @returns {Array} [ref, isVisible] - Ref to attach and visibility state
 */
const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -80px 0px",
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

export default useScrollReveal;
