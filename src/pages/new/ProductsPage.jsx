/**
 * Products Page - ConsultMetal New Design
 * Product showcase with filtering and categories
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import PageBanner from '../../components/new/PageBanner';
import IndustrialBadge from '../../components/new/IndustrialBadge';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import './ProductsPage.scss';

const ProductsPage = () => {
  const { getText } = useLanguage();
  const { products, imageAssets } = companyConfig;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, isVisible] = useScrollReveal();

  // Get unique categories
  const categories = ['all', ...new Set(products.filter(p => p.category).map(p => getText(p.category)))];

  // Filter products
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category && getText(p.category) === selectedCategory);

  return (
    <div className="products-page">
      {/* Page Banner */}
      <PageBanner
        badge={getText({ en: 'OUR PORTFOLIO', fr: 'NOTRE PORTEFEUILLE' })}
        title="Our"
        highlight="Products"
        description={getText({
          en: 'Explore our comprehensive range of precision-manufactured metal products and components.',
          fr: 'Explorez notre gamme complète de produits et composants métalliques fabriqués avec précision.'
        })}
        backgroundImage={imageAssets.products?.hero || imageAssets.home.hero.image}
        height="medium"
      />

      {/* Products Section */}
      <section className="products-section" ref={ref}>
        <div className="container">
          {/* Category Filter */}
          <div className="filter-section">
            <IndustrialBadge 
              text={getText({ en: 'FILTER BY CATEGORY', fr: 'FILTRER PAR CATÉGORIE' })}
              centered 
            />
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' 
                    ? getText({ en: 'All Products', fr: 'Tous les produits' })
                    : category
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className={`products-grid ${isVisible ? 'visible' : ''}`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.slug}
                className="product-card"
                style={{ transitionDelay: `${index * 0.05}s` }}
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
                  {product.category && <div className="product-badge">{getText(product.category)}</div>}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{getText(product.name)}</h3>
                  <p className="product-description">{getText(product.description)}</p>
                  <Link to={`/products/${product.slug}`} className="product-link">
                    <span className="link-text">
                      {getText({ en: 'Learn More', fr: 'En savoir plus' })}
                    </span>
                    <span className="link-icon">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>{getText({ 
                en: 'No products found in this category.', 
                fr: 'Aucun produit trouvé dans cette catégorie.' 
              })}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={getText({
          en: 'Need a Custom Solution?',
          fr: 'Besoin d\'une solution personnalisée ?'
        })}
        subtitle={getText({
          en: 'We specialize in creating bespoke metal products tailored to your exact specifications.',
          fr: 'Nous sommes spécialisés dans la création de produits métalliques sur mesure adaptés à vos spécifications exactes.'
        })}
        backgroundImage={imageAssets.home.hero.image}
        overlay="dark"
        pattern
        primaryCta={{
          text: getText({ en: 'Contact Us', fr: 'Contactez-nous' }),
          link: '/contact'
        }}
        secondaryCta={{
          text: getText({ en: 'Our Services', fr: 'Nos services' }),
          link: '/services'
        }}
      />

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <IndustrialBadge 
              text={getText({ en: 'WHY CHOOSE US', fr: 'POURQUOI NOUS CHOISIR' })}
              centered 
            />
            <h2 className="section-title centered">
              <span className="title-highlight">Proven</span> Excellence
            </h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3 className="benefit-title">
                {getText({ en: '20+ Years Experience', fr: '20+ ans d\'expérience' })}
              </h3>
              <p className="benefit-description">
                {getText({
                  en: 'Deep industry knowledge from shop floor to management level.',
                  fr: 'Connaissance approfondie de l\'industrie de l\'atelier au niveau de la direction.'
                })}
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3 className="benefit-title">
                {getText({ en: 'Tailored Solutions', fr: 'Solutions personnalisées' })}
              </h3>
              <p className="benefit-description">
                {getText({
                  en: 'Custom strategies designed specifically for your business needs.',
                  fr: 'Stratégies personnalisées conçues spécifiquement pour vos besoins commerciaux.'
                })}
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3 className="benefit-title">
                {getText({ en: 'Measurable Results', fr: 'Résultats mesurables' })}
              </h3>
              <p className="benefit-description">
                {getText({
                  en: 'Proven track record of improving efficiency and reducing costs.',
                  fr: 'Bilan éprouvé d\'amélioration de l\'efficacité et de réduction des coûts.'
                })}
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3 className="benefit-title">
                {getText({ en: 'Ongoing Support', fr: 'Support continu' })}
              </h3>
              <p className="benefit-description">
                {getText({
                  en: 'Long-term partnership ensuring continued success and growth.',
                  fr: 'Partenariat à long terme assurant un succès et une croissance continus.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
