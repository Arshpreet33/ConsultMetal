/**
 * Services Page - ConsultMetal
 * 
 * Services listing page with hero section, breadcrumbs, and service cards
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import CTASection from '../components/Shared/CTASection';
import IndustriesSection from '../components/Shared/IndustriesSection';
import HeroAnimated from '../components/Shared/HeroAnimated';
import './ServicesPage.css';

const ServicesPage = () => {
  const { getText } = useLanguage();
  const { services } = companyConfig;

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="container">
            <div className="hero-content">
              <HeroAnimated
                title={getText({ en: 'Services', fr: 'Services' })}
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
                  {getText({
                    en: 'Home',
                    fr: 'Accueil'
                  })}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {getText({
                  en: 'Services',
                  fr: 'Services'
                })}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <Link to={`/services/${service.slug}`} className="service-image-link">
                  <div className="service-image">
                    <img 
                      src={service.image} 
                      alt={getText(service.name)}
                      onError={(e) => {
                        e.target.src = '/images/services/placeholder.jpg';
                      }}
                    />
                  </div>
                </Link>
                <div className="service-content">
                  <Link to={`/services/${service.slug}`} className="service-title-link">
                    <h2 className="service-title">{getText(service.name)}</h2>
                  </Link>
                  <Link to={`/services/${service.slug}`} className="btn btn-primary">
                    {getText({
                      en: 'Learn More',
                      fr: 'En savoir plus'
                    })}
                  </Link>
                </div>
              </div>
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

export default ServicesPage;
