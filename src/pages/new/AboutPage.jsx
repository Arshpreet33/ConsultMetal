/**
 * About Page - ConsultMetal New Design
 * Modern industrial metallic design with symmetrical layouts
 * Exact replica of AboutPageV2 with new components
 */

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import PageBanner from '../../components/new/PageBanner';
import './AboutPage.scss';

const AboutPage = () => {
  const { getText } = useLanguage();
  const { about, imageAssets } = companyConfig;
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

    const elements = [historyRef.current, missionRef.current, valuesRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

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
    <div className="about-page">
      {/* Page Banner */}
      <PageBanner
        badge={getText(about.hero.heading)}
        title="About"
        highlight="Us"
        description={getText(about.hero.subtitle)}
        backgroundImage="/images/about/about-hero.jpeg"
        height="medium"
      />

      {/* History Section - Split Layout with Geometric Accent */}
      <section className="history-section" ref={historyRef}>
        <div className="geometric-bg left"></div>
        <div className="container">
          <div className="history-grid">
            <div className="history-image-wrapper">
              <div className="image-frame">
                <img src="/images/about/history.jpeg" alt="Our History" />
                <div className="frame-corner tl"></div>
                <div className="frame-corner tr"></div>
                <div className="frame-corner bl"></div>
                <div className="frame-corner br"></div>
              </div>
            </div>
            <div className="history-content">
              <div className="section-badge">
                <span className="badge-line"></span>
                <span className="badge-text">{getText({ en: 'OUR JOURNEY', fr: 'NOTRE PARCOURS' })}</span>
                <span className="badge-line"></span>
              </div>
              <h2 className="section-title">
                <span className="title-highlight">Our</span> History
              </h2>
              <div className="content-paragraphs">
                {about.background.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={`paragraph ${index === 0 ? 'lead' : ''}`}
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
              <Link to="/products" className="btn btn-primary">
                <span className="btn-text">{getText({ en: 'Discover More', fr: 'Découvrir plus' })}</span>
                <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Reversed Split Layout */}
      <section className="mission-section" ref={missionRef}>
        <div className="geometric-bg right"></div>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="section-badge">
                <span className="badge-line"></span>
                <span className="badge-text">{getText({ en: 'OUR PURPOSE', fr: 'NOTRE OBJECTIF' })}</span>
                <span className="badge-line"></span>
              </div>
              <h2 className="section-title">
                <span className="title-highlight">Our</span> Mission
              </h2>
              <div className="content-paragraphs">
                {about.mission.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={`paragraph ${index === 0 ? 'lead' : ''}`}
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
              <Link to="/services" className="btn btn-primary">
                <span className="btn-text">{getText({ en: 'What We Offer', fr: 'Ce que nous offrons' })}</span>
                <span className="btn-icon">→</span>
              </Link>
            </div>
            <div className="mission-image-wrapper">
              <div className="image-frame">
                <img src="/images/about/mission.png" alt="Our Mission" />
                <div className="frame-corner tl"></div>
                <div className="frame-corner tr"></div>
                <div className="frame-corner bl"></div>
                <div className="frame-corner br"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Card Grid */}
      <section className="values-section" ref={valuesRef}>
        <div className="container">
          <div className="values-header">
            <div className="section-badge centered">
              <span className="badge-line"></span>
              <span className="badge-text">{getText({ en: 'WHAT DRIVES US', fr: 'CE QUI NOUS MOTIVE' })}</span>
              <span className="badge-line"></span>
            </div>
            <h2 className="section-title centered">
              <span className="title-highlight">Core</span> Values
            </h2>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-card-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={getText({
          en: 'Partner with Industry Leaders',
          fr: 'Collaborez avec les leaders de l\'industrie'
        })}
        subtitle={getText({
          en: 'Join hundreds of satisfied clients who trust us for precision manufacturing solutions and exceptional service.',
          fr: 'Rejoignez des centaines de clients satisfaits qui nous font confiance pour des solutions de fabrication de précision et un service exceptionnel.'
        })}
        backgroundImage={imageAssets.about.background}
        overlay="dark"
        pattern
        primaryCta={{
          text: getText({ en: 'Start Your Project', fr: 'Démarrer votre projet' }),
          link: '/contact'
        }}
        secondaryCta={{
          text: getText({ en: 'View Our Work', fr: 'Voir notre travail' }),
          link: '/products'
        }}
      />

      {/* Industries We Serve Section */}
      <IndustriesSection />
    </div>
  );
};

export default AboutPage;
