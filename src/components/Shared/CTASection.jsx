/**
 * CTA Section Component - ConsultMetal
 * 
 * Reusable Call-to-Action section: "Ready to optimize your operations?"
 * Used across Products, Services, and About pages
 */

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './CTASection.css';

const CTASection = () => {
  const { getText } = useLanguage();
  const { about } = companyConfig;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Add delay to ensure we catch the scroll trigger
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { 
          threshold: 0.2,
          rootMargin: '-100px 0px'
        }
      );

      const currentSection = sectionRef.current;

      if (currentSection) {
        observer.observe(currentSection);
      }

      return () => {
        if (currentSection) {
          observer.unobserve(currentSection);
        }
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <div className={`cta-text ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="cta-title">{getText(about.cta.title)}</h2>
            <p className="cta-subtitle">{getText(about.cta.subtitle)}</p>
          </div>
          <div className={`cta-button ${isVisible ? 'animate-in' : ''}`}>
            <a href="/contact" className="btn btn-cta">
              {getText(about.cta.buttonText)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
