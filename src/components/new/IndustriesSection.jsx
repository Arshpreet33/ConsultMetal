/**
 * Industries Section Component - ConsultMetal New Design
 * 
 * Modern metallic design matching AboutPageV2
 * - Industrial card design with metallic accents
 * - Hover effects and animations
 * - Symmetrical grid layout
 */

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './IndustriesSection.scss';

const IndustriesSection = () => {
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
    <section className="industries-section" ref={sectionRef}>
      <div className="container">
        <div className="industries-header">
          <div className="section-badge centered">
            <span className="badge-line"></span>
            <span className="badge-text">{getText({ en: 'INDUSTRIES WE SERVE', fr: 'INDUSTRIES QUE NOUS SERVONS' })}</span>
            <span className="badge-line"></span>
          </div>
          <h2 className="section-title centered">
            <span className="title-highlight">Specialized</span> Expertise
          </h2>
          <p className="industries-description">
            {getText({
              en: "Delivering precision solutions across diverse manufacturing sectors",
              fr: "Fournir des solutions de précision dans divers secteurs manufacturiers"
            })}
          </p>
        </div>

        <div className="industries-grid">
          {industries.list.map((industry, index) => (
            <div
              key={index}
              className={`industry-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="industry-card-inner">
                <div className="industry-icon">
                  {getIndustryIcon(industry.name)}
                </div>
                <h3 className="industry-name">{getText(industry.name)}</h3>
                <p className="industry-description">{getText(industry.description)}</p>
                <div className="industry-accent-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
