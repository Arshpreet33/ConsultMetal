/**
 * Industries Section V2 Component - ConsultMetal
 * 
 * Modern metallic design matching AboutPageV2
 * - Industrial card design with metallic accents
 * - Hover effects and animations
 * - Symmetrical grid layout
 */

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './IndustriesSectionV2.css';

const IndustriesSectionV2 = () => {
  const { getText } = useLanguage();
  const { industries } = companyConfig;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
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
  }, []);

  // Industry icons mapping
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
    return industryIcons['HVAC'];
  };

  return (
    <section className="industries-section-v2" ref={sectionRef}>
      <div className="container">
        <div className="industries-header-v2">
          <div className="section-badge-v2 centered">
            <span className="badge-line-v2"></span>
            <span className="badge-text-v2">{getText({ en: 'INDUSTRIES WE SERVE', fr: 'INDUSTRIES QUE NOUS SERVONS' })}</span>
            <span className="badge-line-v2"></span>
          </div>
          <h2 className="section-title-v2 centered">
            <span className="title-highlight-v2">Specialized</span> Expertise
          </h2>
          <p className="industries-description-v2">
            {getText({
              en: "Delivering precision solutions across diverse manufacturing sectors",
              fr: "Fournir des solutions de précision dans divers secteurs manufacturiers"
            })}
          </p>
        </div>

        <div className="industries-grid-v2">
          {industries.list.map((industry, index) => (
            <div
              key={index}
              className={`industry-card-v2 ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="industry-card-v2-inner">
                <div className="industry-icon-v2">
                  {getIndustryIcon(industry.name)}
                </div>
                <h3 className="industry-name-v2">{getText(industry.name)}</h3>
                <p className="industry-description-v2">{getText(industry.description)}</p>
                <div className="industry-accent-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSectionV2;
