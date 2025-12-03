/**
 * Products Page - ConsultMetal
 * 
 * Products listing page with hero section, breadcrumbs, and product cards
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import CTASection from '../components/Shared/CTASection';
import IndustriesSection from '../components/Shared/IndustriesSection';
import HeroAnimated from '../components/Shared/HeroAnimated';
import './ProductsPage.css';

const ProductsPage = () => {
  const { getText } = useLanguage();
  const { products, productsPage } = companyConfig;

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <HeroAnimated
              subtitle={getText({ en: 'OUR PRODUCTS', fr: 'NOS PRODUITS' })}
              title={getText({ en: 'Products', fr: 'Produits' })}
              description={getText(productsPage.headerDescription)}
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
                  en: 'Products',
                  fr: 'Produits'
                })}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-content section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/products/${product.slug}`} className="product-image-link">
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={getText(product.name)}
                      onError={(e) => {
                        e.target.src = '/images/products/placeholder.jpg';
                      }}
                    />
                  </div>
                </Link>
                <div className="product-content">
                  <Link to={`/products/${product.slug}`} className="product-title-link">
                    <h2 className="product-title">{getText(product.name)}</h2>
                  </Link>
                  {/* <p className="product-description">
                    {getText(product.description)}
                  </p> */}
                  <Link to={`/products/${product.slug}`} className="btn btn-primary">
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

export default ProductsPage;
