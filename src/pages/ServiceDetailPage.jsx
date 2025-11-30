/**
 * Service Detail Page - ConsultMetal
 * 
 * Individual service page with hero, breadcrumbs, image, and full description
 */

import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { getText } = useLanguage();
  const { services } = companyConfig;

  // Find the service by slug
  const service = services.find(s => s.slug === slug);

  // If service not found, redirect to services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              {getText({
                en: 'SERVICE',
                fr: 'SERVICE'
              })}
            </p>
            <h1 className="hero-title">{getText(service.name)}</h1>
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
              <li className="breadcrumb-item">
                <Link to="/services">
                  {getText({
                    en: 'Services',
                    fr: 'Services'
                  })}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {getText(service.name)}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Service Content */}
      <section className="service-detail-content section">
        <div className="container">
          <div className="service-detail-grid">
            {/* Service Image */}
            <div className="service-detail-image">
              <img 
                src={service.image} 
                alt={getText(service.name)}
                onError={(e) => {
                  e.target.src = '/images/services/placeholder.jpg';
                }}
              />
            </div>

            {/* Service Description */}
            <div className="service-detail-text">
              <h2 className="service-detail-title">{getText(service.name)}</h2>
              
              <div className="service-detail-description">
                <p>{getText(service.description)}</p>
              </div>

              {/* Details */}
              {service.details && (
                <div className="service-details">
                  <h3 className="details-title">
                    {getText({
                      en: 'Details',
                      fr: 'Détails'
                    })}
                  </h3>
                  <ul className="details-list">
                    {getText(service.details).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <div className="service-cta">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {getText({
                    en: 'Get in Touch',
                    fr: 'Contactez-nous'
                  })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
