/**
 * Service Detail Page - ConsultMetal New Design
 * Dynamic service detail page
 */

import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import PageBanner from '../../components/new/PageBanner';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import { useEffect, useRef, useState } from 'react';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { getText } = useLanguage();
  const { services, imageAssets } = companyConfig;
  
  const service = services.find(s => s.slug === slug);

  // Animation refs
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [service]);

  if (!service) {
    return (
      <div className="service-detail-page">
        <PageBanner
          badge="404"
          title="Service"
          highlight="Not Found"
          description="The service you're looking for doesn't exist."
          height="small"
        />
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <Link to="/services" className="btn btn-primary">
            <span className="btn-text">Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <PageBanner
        badge={getText({ en: 'SERVICE DETAILS', fr: 'DÉTAILS DU SERVICE' })}
        title={getText(service.name)}
        description={service.teaser ? getText(service.teaser) : getText(service.description)}
        backgroundImage={imageAssets.services?.hero || imageAssets.home.hero.image}
        height="medium"
      />

      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Image and Content Side by Side */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '3rem', 
              alignItems: 'start',
              marginBottom: '4rem'
            }}>
              {/* Large Service Image */}
              <div>
                <img 
                  src={`/images/services/icon-${service.slug}.png`}
                  alt={getText(service.name)}
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(52, 52, 119, 0.15)',
                    border: '1px solid rgba(86, 86, 149, 0.1)',
                    position: 'sticky',
                    top: '2rem',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-10px) scale(1.02)';
                    e.target.style.boxShadow = '0 20px 60px rgba(52, 52, 119, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 10px 40px rgba(52, 52, 119, 0.15)';
                  }}
                />
              </div>
              
              {/* All Content */}
              <div>
                <div 
                  data-animate="true" 
                  data-index="title"
                  style={{ 
                    opacity: visibleElements.has('title') ? 1 : 0,
                    transform: visibleElements.has('title') ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                    {service.icon}
                  </div>
                  <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#343477', fontWeight: 700 }}>
                    {getText(service.name)}
                  </h2>
                </div>
                
                {/* Overview Paragraph */}
                <p 
                  data-animate="true" 
                  data-index="overview"
                  style={{ 
                    fontSize: '1.15rem', 
                    lineHeight: '1.9', 
                    color: '#5a5a7a', 
                    marginBottom: '2rem',
                    opacity: visibleElements.has('overview') ? 1 : 0,
                    transform: visibleElements.has('overview') ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
                  }}
                >
                  {getText(service.description)}
                </p>
                
                {/* All Details as Bulleted Points */}
                {service.details && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {(Array.isArray(service.details) ? getText(service.details) : getText(service.details)).map((detail, idx) => {
                      // Split detail into title and content if it contains a colon
                      const parts = detail.split(':');
                      const hasTitle = parts.length > 1;
                      const title = hasTitle ? parts[0].trim() : null;
                      const content = hasTitle ? parts.slice(1).join(':').trim() : detail;

                      return (
                        <div 
                          key={idx} 
                          data-animate="true"
                          data-index={`detail-${idx}`}
                          style={{ 
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'flex-start',
                            opacity: visibleElements.has(`detail-${idx}`) ? 1 : 0,
                            transform: visibleElements.has(`detail-${idx}`) ? 'translateX(0)' : 'translateX(-30px)',
                            transition: `opacity 0.6s ease ${0.4 + idx * 0.15}s, transform 0.6s ease ${0.4 + idx * 0.15}s`
                          }}
                        >
                          <div style={{
                            minWidth: '8px',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#565695',
                            marginTop: '0.7rem',
                            flexShrink: 0
                          }} />
                          <div style={{ flex: 1 }}>
                            {title && (
                              <h4 style={{ 
                                fontSize: '1.2rem', 
                                marginBottom: '0.5rem', 
                                color: '#343477',
                                fontWeight: 700
                              }}>
                                {title}
                              </h4>
                            )}
                            <p style={{ 
                              fontSize: '1.05rem', 
                              lineHeight: '1.8', 
                              color: '#5a5a7a', 
                              margin: 0
                            }}>
                              {content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link to="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                <span className="btn-text">{getText({ en: 'Get a Quote', fr: 'Obtenir un devis' })}</span>
              </Link>
              <Link to="/services" className="btn btn-outline">
                <span className="btn-text">{getText({ en: 'All Services', fr: 'Tous les services' })}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={getText({ en: 'Ready to Get Started?', fr: 'Prêt à commencer ?' })}
        subtitle={getText({ en: 'Contact us today to discuss your project requirements.', fr: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins.' })}
        backgroundImage={imageAssets.home.hero.image}
        primaryCta={{ text: getText({ en: 'Contact Us', fr: 'Contactez-nous' }), link: '/contact' }}
        secondaryCta={{ text: getText({ en: 'View Products', fr: 'Voir les produits' }), link: '/products' }}
      />

      {/* Industries We Serve Section */}
      <IndustriesSection />
    </div>
  );
};

export default ServiceDetailPage;
