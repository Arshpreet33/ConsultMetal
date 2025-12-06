/**
 * Home Page - ConsultMetal New Design
 * Modern industrial metallic design with comprehensive sections
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import StatsSection from '../../components/new/StatsSection';
import IndustrialBadge from '../../components/new/IndustrialBadge';
import GeometricFrame from '../../components/new/GeometricFrame';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import './HomePage.scss';

const HomePage = () => {
  const { getText } = useLanguage();
  const { homePage, imageAssets, services } = companyConfig;
  
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [productsRef, productsVisible] = useScrollReveal();
  const [videoRef, videoVisible] = useScrollReveal();
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();

  // Get the first 3 services for the preview section
  const featuredServices = services.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        {/* Background Image */}
        <div className="hero-background">
          <img 
            src={imageAssets.home.hero.background} 
            alt="Manufacturing" 
            className="hero-image"
          />
          {/* Video logic commented out for now
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={imageAssets.home.hero.video} type="video/mp4" />
          </video>
          */}
        </div>

        {/* Overlay Content Box */}
        <div className="hero-content-box">
          <h1 className="hero-title">
            {getText(homePage.hero.title)}
            <span className="hero-highlight"> {getText(homePage.hero.highlight)}</span>
          </h1>
          <p className="hero-subtitle">{getText(homePage.hero.subtitle)}</p>
          <div className="hero-actions">
            <Link to={homePage.hero.cta.primary.link} className="btn-primary">
              {getText(homePage.hero.cta.primary.text)}
            </Link>
            <Link to={homePage.hero.cta.secondary.link} className="btn-outline">
              {getText(homePage.hero.cta.secondary.text)}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection items={homePage.stats.items.map(stat => ({
        value: stat.value,
        label: getText(stat.label),
        description: getText(stat.description)
      }))} />

      {/* Services Preview Section */}
      <section className="services-preview" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <IndustrialBadge 
              text={getText(homePage.servicesPreview.label)}
              centered 
            />
            <h2 className="section-title">
              <span className="title-highlight">{getText(homePage.servicesPreview.highlight)}</span>{' '}
              {getText(homePage.servicesPreview.title)}
            </h2>
            <p className="section-description">
              {getText(homePage.servicesPreview.description)}
            </p>
          </div>

          <div className={`services-grid ${servicesVisible ? 'visible' : ''}`}>
            {featuredServices.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={getText(service.name)}
                    className="service-image"
                  />
                </div>
                <div className="service-title-overlay">
                  <h3 className="service-name">{getText(service.name)}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">
              <span className="btn-text">
                {getText({ en: 'View All Services', fr: 'Voir tous les services' })}
              </span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={`about-preview ${aboutVisible ? 'visible' : ''}`} ref={aboutRef}>
        <div className="geometric-bg left"></div>
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <GeometricFrame>
                <img 
                  src={imageAssets.home.about.image} 
                  alt={getText({ en: 'About ConsultMetal', fr: 'À propos de ConsultMetal' })}
                />
              </GeometricFrame>
            </div>
            <div className="about-content">
              <IndustrialBadge 
                text={getText(homePage.aboutPreview.label)} 
              />
              <h2 className="section-title">
                {getText(homePage.aboutPreview.title)}{' '}
                <span className="title-highlight">{getText(homePage.aboutPreview.highlight)}</span>
              </h2>
              <div className="about-text">
                <p className="paragraph lead">
                  {getText(homePage.aboutPreview.description)}
                </p>
              </div>
              <div className="about-features">
                {homePage.aboutPreview.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-item"
                    style={{ transitionDelay: `${(index + 2) * 0.15}s` }}
                  >
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{getText(feature)}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">
                <span className="btn-text">
                  {getText(homePage.aboutPreview.cta.text)}
                </span>
                <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Products Showcase Section */}
      <section className={`products-showcase ${productsVisible ? 'visible' : ''}`} ref={productsRef}>
        <div className="container">
          <div className="section-header">
            <IndustrialBadge 
              text={getText(homePage.productsShowcase.label)}
              centered 
            />
            <h2 className="section-title centered">
              <span className="title-highlight">{getText(homePage.productsShowcase.highlight)}</span>{' '}
              {getText(homePage.productsShowcase.title)}
            </h2>
            <p className="section-description">
              {getText(homePage.productsShowcase.description)}
            </p>
          </div>

          <div className="products-grid">
            {companyConfig.products.map((product, index) => (
              <div
                key={index}
                className="product-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={getText(product.name)}
                  />
                  <div className="product-overlay">
                    <Link to={`/products/${product.slug}`} className="overlay-link">
                      <span className="link-text">
                        {getText({ en: 'View Details', fr: 'Voir les détails' })}
                      </span>
                      <span className="link-icon">→</span>
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{getText(product.name)}</h3>
                  <p className="product-category">{product.category ? getText(product.category) : ''}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/products" className="btn btn-primary">
              <span className="btn-text">
                {getText(homePage.productsShowcase.cta.text)}
              </span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`video-section ${videoVisible ? 'visible' : ''}`} ref={videoRef}>
        <div className="geometric-bg right"></div>
        <div className="container">
          <div className="video-grid">
            <div className="video-content">
              <IndustrialBadge 
                text={getText(homePage.videoSection.label)} 
              />
              <h2 className="section-title">
                {getText(homePage.videoSection.title)}{' '}
                <span className="title-highlight">{getText(homePage.videoSection.highlight)}</span>
              </h2>
              <p className="section-description">
                {getText(homePage.videoSection.description)}
              </p>
            </div>
            <div className="video-wrapper">
              <GeometricFrame>
                <iframe
                  src={homePage.videoSection.youtubeUrl}
                  title="ConsultMetal Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </GeometricFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        title={getText(homePage.finalCta.title)}
        subtitle={getText(homePage.finalCta.subtitle)}
        backgroundImage={imageAssets.home.hero.background}
        overlay="medium"
        pattern
        primaryCta={{
          text: getText(homePage.finalCta.cta.primary.text),
          link: homePage.finalCta.cta.primary.link
        }}
        secondaryCta={{
          text: getText(homePage.finalCta.cta.secondary.text),
          link: homePage.finalCta.cta.secondary.link
        }}
      />

      {/* Testimonials Section */}
      <section className={`testimonials-section ${testimonialsVisible ? 'visible' : ''}`} ref={testimonialsRef}>
        <div className="container">
          <div className="section-header">
            <IndustrialBadge 
              text={getText(homePage.testimonials.label)}
              centered 
            />
            <h2 className="section-title centered">
              {getText(homePage.testimonials.title)}{' '}
              <span className="title-highlight">{getText(homePage.testimonials.highlight)}</span>
            </h2>
            <p className="section-description">
              {getText(homePage.testimonials.description)}
            </p>
          </div>

          <div className="testimonials-grid">
            {homePage.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{getText(testimonial.quote)}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{getText(testimonial.author)}</div>
                    <div className="author-title">{getText(testimonial.position)}</div>
                  </div>
                </div>
                <div className="testimonial-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
