/**
 * About Page V2 - ConsultMetal
 * 
 * Modern, creative redesign with:
 * - Industrial metallic design theme
 * - Symmetrical layouts with geometric accents
 * - Enhanced typography and spacing
 * - Smooth animations and transitions
 * - Sheet metal inspired visual elements
 */

import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import CTASection from '../components/Shared/CTASection';
import IndustriesSectionV2 from '../components/Shared/IndustriesSectionV2';
import HeroAnimated from '../components/Shared/HeroAnimated';
import './AboutPageV2.css';
import { Link } from 'react-router-dom';

const AboutPageV2 = () => {
  const { getText } = useLanguage();
  const { about } = companyConfig;
  const statsRef = useRef(null);
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    const elements = [statsRef.current, historyRef.current, missionRef.current, valuesRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  const companyStats = [
    { 
      number: '20+', 
      label: getText({ en: 'Years Experience', fr: 'Années d\'expérience' })
    },
    { 
      number: '500+', 
      label: getText({ en: 'Projects Completed', fr: 'Projets réalisés' })
    },
    { 
      number: '100%', 
      label: getText({ en: 'Client Satisfaction', fr: 'Satisfaction client' })
    },
    { 
      number: '24/7', 
      label: getText({ en: 'Support Available', fr: 'Support disponible' })
    }
  ];

  const coreValues = [
    {
      icon: '⚡',
      title: getText({ en: 'Innovation', fr: 'Innovation' }),
      description: getText({ 
        en: 'Cutting-edge solutions that push the boundaries of manufacturing technology',
        fr: 'Solutions de pointe qui repoussent les limites de la technologie de fabrication'
      })
    },
    {
      icon: '🎯',
      title: getText({ en: 'Precision', fr: 'Précision' }),
      description: getText({ 
        en: 'Meticulous attention to detail in every project we undertake',
        fr: 'Attention méticuleuse aux détails dans chaque projet que nous entreprenons'
      })
    },
    {
      icon: '🤝',
      title: getText({ en: 'Partnership', fr: 'Partenariat' }),
      description: getText({ 
        en: 'Building lasting relationships based on trust and mutual success',
        fr: 'Construire des relations durables basées sur la confiance et le succès mutuel'
      })
    },
    {
      icon: '🚀',
      title: getText({ en: 'Excellence', fr: 'Excellence' }),
      description: getText({ 
        en: 'Unwavering commitment to delivering superior quality and results',
        fr: 'Engagement indéfectible à fournir une qualité et des résultats supérieurs'
      })
    }
  ];

  return (
    <div className="about-page-v2">
      {/* Hero Section with Metallic Overlay */}
      <section className="hero-v2">
        <div className="hero-v2-overlay"></div>
        <div className="hero-v2-pattern"></div>
        <div className="container">
          <div className="hero-v2-content">
            <HeroAnimated
              title={getText(about.hero.heading)}
              description={getText(about.hero.subtitle)}
              clipOriginY="30%"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Metallic Cards */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {companyStats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="stat-card-inner">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section - Split Layout with Geometric Accent */}
      <section className="history-section-v2" ref={historyRef}>
        <div className="geometric-bg-v2 left"></div>
        <div className="container">
          <div className="history-grid-v2">
            <div className="history-image-wrapper-v2">
              <div className="image-frame-v2">
                <img src="/images/about/history.jpeg" alt="Our History" />
                <div className="frame-corner-v2 tl"></div>
                <div className="frame-corner-v2 tr"></div>
                <div className="frame-corner-v2 bl"></div>
                <div className="frame-corner-v2 br"></div>
              </div>
            </div>
            <div className="history-content-v2">
              <div className="section-badge-v2">
                <span className="badge-line-v2"></span>
                <span className="badge-text-v2">{getText({ en: 'OUR JOURNEY', fr: 'NOTRE PARCOURS' })}</span>
                <span className="badge-line-v2"></span>
              </div>
              <h2 className="section-title-v2">
                <span className="title-highlight-v2">Our</span> History
              </h2>
              <div className="content-paragraphs-v2">
                {about.background.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={`paragraph-v2 ${index === 0 ? 'lead-v2' : ''}`}
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
              <Link to="/products" className="btn-v2 btn-primary-v2">
                <span className="btn-v2-text">{getText({ en: 'Discover More', fr: 'Découvrir plus' })}</span>
                <span className="btn-v2-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Reversed Split Layout */}
      <section className="mission-section-v2" ref={missionRef}>
        <div className="geometric-bg-v2 right"></div>
        <div className="container">
          <div className="mission-grid-v2">
            <div className="mission-content-v2">
              <div className="section-badge-v2">
                <span className="badge-line-v2"></span>
                <span className="badge-text-v2">{getText({ en: 'OUR PURPOSE', fr: 'NOTRE OBJECTIF' })}</span>
                <span className="badge-line-v2"></span>
              </div>
              <h2 className="section-title-v2">
                <span className="title-highlight-v2">Our</span> Mission
              </h2>
              <div className="content-paragraphs-v2">
                {about.mission.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={`paragraph-v2 ${index === 0 ? 'lead-v2' : ''}`}
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
              <Link to="/services" className="btn-v2 btn-primary-v2">
                <span className="btn-v2-text">{getText({ en: 'What We Offer', fr: 'Ce que nous offrons' })}</span>
                <span className="btn-v2-icon">→</span>
              </Link>
            </div>
            <div className="mission-image-wrapper-v2">
              <div className="image-frame-v2">
                <img src="/images/about/mission.png" alt="Our Mission" />
                <div className="frame-corner-v2 tl"></div>
                <div className="frame-corner-v2 tr"></div>
                <div className="frame-corner-v2 bl"></div>
                <div className="frame-corner-v2 br"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Card Grid */}
      <section className="values-section-v2" ref={valuesRef}>
        <div className="container">
          <div className="values-header-v2">
            <div className="section-badge-v2 centered-v2">
              <span className="badge-line-v2"></span>
              <span className="badge-text-v2">{getText({ en: 'WHAT DRIVES US', fr: 'CE QUI NOUS MOTIVE' })}</span>
              <span className="badge-line-v2"></span>
            </div>
            <h2 className="section-title-v2 centered-v2">
              <span className="title-highlight-v2">Core</span> Values
            </h2>
          </div>
          <div className="values-grid-v2">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="value-card-v2"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon-v2">{value.icon}</div>
                <h3 className="value-title-v2">{value.title}</h3>
                <p className="value-description-v2">{value.description}</p>
                <div className="value-card-accent-v2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Industries We Serve Section V2 */}
      <IndustriesSectionV2 />
    </div>
  );
};

export default AboutPageV2;
