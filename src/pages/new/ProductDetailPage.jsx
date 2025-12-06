/**
 * Product Detail Page - ConsultMetal New Design
 * Dynamic product detail page
 */

import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import PageBanner from '../../components/new/PageBanner';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import { useEffect, useRef, useState } from 'react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { getText } = useLanguage();
  const { products, imageAssets } = companyConfig;
  
  const product = products.find(p => p.slug === slug);

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
  }, [product]);

  if (!product) {
    return (
      <div className="product-detail-page">
        <PageBanner
          badge="404"
          title="Product"
          highlight="Not Found"
          description="The product you're looking for doesn't exist."
          height="small"
        />
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <Link to="/products" className="btn btn-primary">
            <span className="btn-text">Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <PageBanner
        badge={product.category ? getText(product.category) : getText({ en: 'PRODUCT', fr: 'PRODUIT' })}
        title={getText(product.name)}
        description={product.teaser ? getText(product.teaser) : getText(product.description)}
        backgroundImage={imageAssets.products?.hero || imageAssets.home.hero.image}
        height="medium"
      />

      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div>
              <img 
                src={product.image} 
                alt={getText(product.name)}
                style={{ 
                  width: '100%', 
                  borderRadius: '1rem', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px) scale(1.02)';
                  e.target.style.boxShadow = '0 20px 60px rgba(52, 52, 119, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                }}
              />
            </div>
            <div>
              <div 
                data-animate="true" 
                data-index="badge"
                style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 1rem', 
                  background: 'linear-gradient(135deg, #343477, #565695)',
                  color: '#fff',
                  borderRadius: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  opacity: visibleElements.has('badge') ? 1 : 0,
                  transform: visibleElements.has('badge') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease'
                }}>
                {product.category ? getText(product.category) : getText({ en: 'PRODUCT', fr: 'PRODUIT' })}
              </div>
              <h2 
                data-animate="true" 
                data-index="title"
                style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '1.5rem',
                  opacity: visibleElements.has('title') ? 1 : 0,
                  transform: visibleElements.has('title') ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s'
                }}>
                {getText(product.name)}
              </h2>
              <p 
                data-animate="true" 
                data-index="description"
                style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#5a5a7a', 
                  marginBottom: '2rem',
                  opacity: visibleElements.has('description') ? 1 : 0,
                  transform: visibleElements.has('description') ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                  whiteSpace: 'pre-line'
                }}>
                {getText(product.description)}
              </p>
              
              {product.features && product.features.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h3 
                    data-animate="true" 
                    data-index="features-title"
                    style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '1rem', 
                      color: '#343477',
                      opacity: visibleElements.has('features-title') ? 1 : 0,
                      transform: visibleElements.has('features-title') ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s'
                    }}>
                    {getText({ en: 'Key Features', fr: 'Caractéristiques principales' })}
                  </h3>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {getText(product.features).map((feature, idx) => (
                      <div 
                        key={idx} 
                        data-animate="true"
                        data-index={`feature-${idx}`}
                        style={{ 
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '1rem',
                          background: '#f8f9ff',
                          borderRadius: '8px',
                          border: '1px solid #e5e7f2',
                          opacity: visibleElements.has(`feature-${idx}`) ? 1 : 0,
                          transform: visibleElements.has(`feature-${idx}`) ? 'translateX(0)' : 'translateX(-30px)',
                          transition: `opacity 0.6s ease ${0.4 + idx * 0.1}s, transform 0.6s ease ${0.4 + idx * 0.1}s`
                        }}>
                        <span style={{ 
                          color: '#565695',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          minWidth: '1.5rem'
                        }}>
                          ✓
                        </span>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#5a5a7a', margin: 0 }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {product.specifications && (
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    {getText({ en: 'Specifications', fr: 'Spécifications' })}
                  </h3>
                  <div style={{ background: '#f8f9ff', padding: '1.5rem', borderRadius: '0.75rem' }}>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e5e7f2' }}>
                        <span style={{ fontWeight: 600 }}>{key}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span className="btn-text">{getText({ en: 'Request Quote', fr: 'Demander un devis' })}</span>
                </Link>
                <Link to="/products" className="btn btn-outline">
                  <span className="btn-text">{getText({ en: 'All Products', fr: 'Tous les produits' })}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={getText({ en: 'Interested in This Product?', fr: 'Intéressé par ce produit ?' })}
        subtitle={getText({ en: 'Contact our team for pricing and availability.', fr: 'Contactez notre équipe pour les prix et la disponibilité.' })}
        backgroundImage={imageAssets.home.hero.image}
        primaryCta={{ text: getText({ en: 'Get in Touch', fr: 'Contactez-nous' }), link: '/contact' }}
        secondaryCta={{ text: getText({ en: 'Our Services', fr: 'Nos services' }), link: '/services' }}
      />

      {/* Industries We Serve Section */}
      <IndustriesSection />
    </div>
  );
};

export default ProductDetailPage;
