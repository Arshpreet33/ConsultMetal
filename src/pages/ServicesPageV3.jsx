/**
 * Services Page V3 - ConsultMetal
 * 
 * Creative modern design with:
 * - Asymmetric grid layout with varying card sizes
 * - Gradient overlays with smooth transitions
 * - Card-based design with depth and shadows
 * - Icon integration with modern animations
 * - Staggered hover effects
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import CTASection from '../components/Shared/CTASection';
import IndustriesSection from '../components/Shared/IndustriesSection';
import HeroAnimated from '../components/Shared/HeroAnimated';
import './ServicesPageV3.css';

const ServicesPageV3 = () => {
  const { getText } = useLanguage();
  const { services } = companyConfig;

  return (
    <div className="services-page-v3">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <HeroAnimated
              title={getText({ en: 'Services', fr: 'Services' })}
              description={getText({ 
                en: 'Discover our innovative solutions', 
                fr: 'Découvrez nos solutions innovantes' 
              })}
              clipOriginY="30%"
            />
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="breadcrumbs">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link to="/">
                  {getText({ en: 'Home', fr: 'Accueil' })}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {getText({ en: 'Services V3', fr: 'Services V3' })}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Services Grid - Creative Asymmetric Design */}
      <section className="services-content section">
        <div className="container">
          <div className="services-grid-v3">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`} 
                className={`service-card-v3 service-card-${index + 1}`}
                style={{ '--card-index': index }}
              >
                <div className="service-card-inner">
                  <div className="service-image-container">
                    <img 
                      src={service.image} 
                      alt={getText(service.name)}
                      className="service-image-v3"
                      onError={(e) => {
                        e.target.src = '/images/services/placeholder.jpg';
                      }}
                    />
                    <div className="service-gradient-overlay"></div>
                  </div>
                  
                  <div className="service-content-v3">
                    <div className="service-icon-wrapper">
                      {service.icon}
                    </div>
                    <h3 className="service-title-v3">{getText(service.name)}</h3>
                    <p className="service-excerpt">
                      {getText(service.description).substring(0, 120)}...
                    </p>
                    <span className="service-link-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Industries We Serve Section */}
      <IndustriesSection />
    </div>
  );
};

export default ServicesPageV3;
