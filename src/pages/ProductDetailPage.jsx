/**
 * Product Detail Page - ConsultMetal
 * 
 * Individual product page with hero, breadcrumbs, image, and full description
 */

import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { getText } = useLanguage();
  const { products } = companyConfig;

  // Find the product by slug
  const product = products.find(p => p.slug === slug);

  // If product not found, redirect to products page
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              {getText({
                en: 'PRODUCT',
                fr: 'PRODUIT'
              })}
            </p>
            <h1 className="hero-title">{getText(product.name)}</h1>
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
                <Link to="/products">
                  {getText({
                    en: 'Products',
                    fr: 'Produits'
                  })}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {getText(product.name)}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Content */}
      <section className="product-detail-content section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Product Image */}
            <div className="product-detail-image">
              <img 
                src={product.image} 
                alt={getText(product.name)}
                onError={(e) => {
                  e.target.src = '/images/products/placeholder.jpg';
                }}
              />
            </div>

            {/* Product Description */}
            <div className="product-detail-text">
              <h2 className="product-detail-title">{getText(product.name)}</h2>
              
              <div className="product-detail-description">
                <p>{getText(product.description)}</p>
              </div>

              {/* Features/Details */}
              {product.features && (
                <div className="product-features">
                  <h3 className="features-title">
                    {getText({
                      en: 'Key Features',
                      fr: 'Caractéristiques principales'
                    })}
                  </h3>
                  <ul className="features-list">
                    {getText(product.features).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <div className="product-cta">
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

export default ProductDetailPage;
