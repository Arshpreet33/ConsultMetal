import React, { useEffect, useRef } from 'react';
import './HeroAnimated.css';

const HeroAnimated = ({ subtitle, title, description, children, className = '', clipOriginY = '30%' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const heroEl = ref.current;
    if (!heroEl) return;

    let didAnimate = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroEl.classList.add('animate-in');
          didAnimate = true;
          observer.unobserve(heroEl);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(heroEl);

    // fallback to ensure animate-in is added if observer doesn't fire
    const fallback = setTimeout(() => {
      if (!didAnimate) {
        heroEl.classList.add('animate-in');
      }
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`hero-animated ${className}`}
      style={{ ['--hero-clip-origin-y']: clipOriginY }}
    >
      {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      {title && <h1 className="hero-title">{title}</h1>}
      {description && <p className="hero-description">{description}</p>}
      {children}
    </div>
  );
};

export default HeroAnimated;
