/**
 * Industries Section Component - ConsultMetal
 * 
 * Reusable Industries We Serve section
 * Used across Products, Services, and About pages
 */

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const { getText } = useLanguage();
  const { industries } = companyConfig;
  const [isVisible, setIsVisible] = useState(false);
  const [flipped, setFlipped] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { 
          threshold: 0.3,
          rootMargin: '-150px 0px'
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

  // Industry icons mapping based on emoji
  const industryIcons = {
    'HVAC': '🌡️',
    'Door': '🚪',
    'Stainless': '⚙️',
    'Lab': '🔬',
    'Agricultural': '🚜',
    'Job': '🔧',
  };

  const getIndustryIcon = (industryName) => {
    const name = industryName.en || industryName;
    if (name.includes('HVAC')) return industryIcons['HVAC'];
    if (name.includes('Door')) return industryIcons['Door'];
    if (name.includes('Stainless')) return industryIcons['Stainless'];
    if (name.includes('Lab')) return industryIcons['Lab'];
    if (name.includes('Agricultural')) return industryIcons['Agricultural'];
    if (name.includes('Job')) return industryIcons['Job'];
    return industryIcons['HVAC']; // default
  };

  const getIconClass = (industryName) => {
    const name = industryName.en || industryName;
    if (name.includes('Agricultural')) return 'industries-icon tractor';
    return 'industries-icon';
  };

  return (
    <section className="industries-section section" ref={sectionRef}>
      <div className="container">
        <div className={`industries-section-header centered ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="industries-section-title">{getText(industries.title)}</h2>
          <p className="industries-section-description">
            {getText({
              en: "Specialized expertise across diverse manufacturing sectors",
              fr: "Expertise spécialisée dans divers secteurs manufacturiers"
            })}
          </p>
        </div>

        <div className="industries-grid">
          {industries.list.map((industry, index) => (
            <div
              key={index}
              className={`industries-card-wrapper ${isVisible ? 'animate-in' : ''} ${flipped[index] ? 'is-flipped' : ''}`}
              style={{ animationDelay: `${index * 0.18}s` }}
              role="button"
              tabIndex={0}
              aria-pressed={!!flipped[index]}
              aria-label={`Toggle ${getText(industry.name)}`}
              onClick={() => setFlipped((prev) => ({ ...prev, [index]: !prev[index] }))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
                }
              }}
            >
              <div className="industries-card">
                    {/* Front of card - Icon only */}
                    <div className="industries-card-front" aria-hidden={!!flipped[index]}>
                      <div className={getIconClass(industry.name)}>
                        {getIndustryIcon(industry.name)}
                      </div>
                    </div>
                    {/* Back of card - Name */}
                    <div className="industries-card-back" aria-hidden={!flipped[index]}>
                      <h3 className="industries-name">{getText(industry.name)}</h3>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
