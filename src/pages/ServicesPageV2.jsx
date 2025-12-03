/**
 * Services Page V2 - ConsultMetal
 * 
 * Modern sleek design with:
 * - Bigger images with text overlay at bottom
 * - Blue overlay (90% opacity) on text area
 * - Minimal spacing, no rounded corners
 * - Full dark overlay on hover with scale effect
 */

import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import CTASection from '../components/Shared/CTASection';
import IndustriesSection from '../components/Shared/IndustriesSection';
import HeroAnimated from '../components/Shared/HeroAnimated';
import './ServicesPageV2.css';

const ServicesPageV2 = () => {
  const { getText } = useLanguage();
  const { services } = companyConfig;
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="services-page-v2">
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
                  {getText({ en: 'Home', fr: 'Accueil' })}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {getText({ en: 'Services V2', fr: 'Services V2' })}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Services Grid - Modern Design */}
      <section className="services-content">
        <div className="container-fluid">
          <div className="services-grid-v2">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`} 
                className="service-card-v2"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={getText(service.name)}
                    className="service-image-v2"
                    onError={(e) => {
                      e.target.src = '/images/services/placeholder.jpg';
                    }}
                  />
                  <div className="service-overlay-full"></div>
                  <div className="service-text-overlay">
                    <h2 className="service-title-v2">{getText(service.name)}</h2>
                    {/* <span className="service-cta">
                      {getText({ en: 'Explore', fr: 'Explorer' })} &rarr;
                    </span> */}
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

export default ServicesPageV2;
