/**
 * Services Page V2 - ConsultMetal New Design
 * Enhanced version with service images for visual appeal
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import PageBanner from '../../components/new/PageBanner';
import IndustrialBadge from '../../components/new/IndustrialBadge';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import './ServicesPageV2.scss';

const ServicesPageV2 = () => {
  const { getText } = useLanguage();
  const { services, imageAssets } = companyConfig;
  const [ref, isVisible] = useScrollReveal();

  return (
    <div className="services-page-v2">
      {/* Page Banner */}
      <PageBanner
        badge={getText({ en: 'WHAT WE OFFER', fr: 'CE QUE NOUS OFFRONS' })}
        title="Our"
        highlight="Services"
        description={getText({
          en: 'Comprehensive metal fabrication and manufacturing solutions tailored to your industry needs.',
          fr: 'Solutions complètes de fabrication et de transformation des métaux adaptées aux besoins de votre industrie.'
        })}
        backgroundImage={imageAssets.services?.hero || imageAssets.home.hero.image}
        height="medium"
      />

      {/* Services Grid Section */}
      <section className="services-section" ref={ref}>
        <div className="container">
          <div className="section-intro">
            <IndustrialBadge 
              text={getText({ en: 'EXPERTISE & SOLUTIONS', fr: 'EXPERTISE & SOLUTIONS' })}
              centered 
            />
            <h2 className="section-title">
              <span className="title-highlight">Complete</span> Service Portfolio
            </h2>
            <p className="section-description">
              {getText({
                en: 'From precision machining to complete fabrication, our services cover every aspect of metal manufacturing with unmatched quality and expertise.',
                fr: 'De l\'usinage de précision à la fabrication complète, nos services couvrent tous les aspects de la fabrication de métaux avec une qualité et une expertise inégalées.'
              })}
            </p>
          </div>

          <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                {service.image && (
                  <div className="service-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={getText(service.name)}
                      className="service-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                )}
                
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-name">{getText(service.name)}</h3>
                  
                  <div className="service-features">
                    {service.features && service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span className="feature-text">{getText(feature)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-link-wrapper">
                    <span className="link-text">
                      {getText({ en: 'Learn More', fr: 'En savoir plus' })}
                    </span>
                    <span className="link-icon">→</span>
                  </div>
                </div>

                <div className="card-accent"></div>
                <div className="card-shine"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={getText({
          en: 'Ready to Start Your Project?',
          fr: 'Prêt à démarrer votre projet ?'
        })}
        subtitle={getText({
          en: 'Contact our team today to discuss your manufacturing needs and get a custom quote.',
          fr: 'Contactez notre équipe dès aujourd\'hui pour discuter de vos besoins de fabrication et obtenir un devis personnalisé.'
        })}
        backgroundImage={imageAssets.home.hero.image}
        overlay="dark"
        pattern
        primaryCta={{
          text: getText({ en: 'Get a Quote', fr: 'Obtenir un devis' }),
          link: '/contact'
        }}
        secondaryCta={{
          text: getText({ en: 'View Products', fr: 'Voir les produits' }),
          link: '/products'
        }}
      />

      {/* Industries We Serve Section */}
      <IndustriesSection />
    </div>
  );
};

export default ServicesPageV2;
