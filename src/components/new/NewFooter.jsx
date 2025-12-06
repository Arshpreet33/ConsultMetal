/**
 * NewFooter Component - ConsultMetal New Design
 * Metallic footer with gradient effects and industrial design
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import IndustrialBadge from './IndustrialBadge';
import './NewFooter.scss';

const NewFooter = () => {
  const { getText } = useLanguage();
  const { business, contact, navigation } = companyConfig;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="new-footer">
      <div className="footer-background"></div>
      <div className="footer-pattern"></div>
      
      <div className="container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-letter">C</span>
                <span className="logo-letter">M</span>
              </div>
              <div className="logo-text">
                <span className="logo-name">{getText(business.name)}</span>
                <span className="logo-tagline">{getText(business.tagline)}</span>
              </div>
            </div>
            
            <p className="footer-description">
              {getText({
                en: 'Precision manufacturing solutions with over 20 years of industry expertise. We transform sheet metal manufacturing through cutting-edge technology and expert consultation.',
                fr: 'Solutions de fabrication de précision avec plus de 20 ans d\'expertise dans l\'industrie. Nous transformons la fabrication de tôle grâce à une technologie de pointe et à des conseils d\'experts.'
              })}
            </p>

            <div className="footer-badge">
              <IndustrialBadge 
                text={`${business.establishedYear} ${getText({ en: 'OF EXCELLENCE', fr: 'D\'EXCELLENCE' })}`}
              />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-heading">
              {getText({ en: 'Quick Links', fr: 'Liens rapides' })}
            </h4>
            <nav className="footer-links">
              <Link to="/" className="footer-link">{getText(navigation.home)}</Link>
              <Link to="/about" className="footer-link">{getText(navigation.aboutUs)}</Link>
              <Link to="/services" className="footer-link">{getText(navigation.services)}</Link>
              <Link to="/products" className="footer-link">{getText(navigation.products)}</Link>
              <Link to="/contact" className="footer-link">{getText(navigation.contact)}</Link>
            </nav>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-heading">
              {getText({ en: 'Our Services', fr: 'Nos services' })}
            </h4>
            <nav className="footer-links">
              <Link to="/services/workflow-design" className="footer-link">
                {getText({ en: 'Workflow Design', fr: 'Conception du flux de travail' })}
              </Link>
              <Link to="/services/product-analysis" className="footer-link">
                {getText({ en: 'Product Analysis', fr: 'Analyse de produits' })}
              </Link>
              <Link to="/services/software-recommendation" className="footer-link">
                {getText({ en: 'Software Recommendation', fr: 'Recommandation de logiciels' })}
              </Link>
              <Link to="/services/software-development" className="footer-link">
                {getText({ en: 'Software Development', fr: 'Développement logiciel' })}
              </Link>
              <Link to="/services/capital-expenditure-recommendation" className="footer-link">
                {getText({ en: 'Capital Expenditure', fr: 'Dépenses en capital' })}
              </Link>
              <Link to="/services/cad-development" className="footer-link">
                {getText({ en: 'CAD Development', fr: 'Développement CAO' })}
              </Link>
            </nav>
          </div>

          {/* Products Section */}
          <div className="footer-section">
            <h4 className="footer-heading">
              {getText({ en: 'Our Products', fr: 'Nos produits' })}
            </h4>
            <nav className="footer-links">
              <Link to="/products/nesting-software" className="footer-link">
                {getText({ en: 'Nesting Software', fr: 'Logiciel de nidification' })}
              </Link>
              <Link to="/products/cad-cam-software" className="footer-link">
                {getText({ en: 'CAD/CAM Software', fr: 'Logiciel CAD/CAM' })}
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-heading">{getText(contact.title)}</h4>
            <div className="footer-contact">
              <a href={`mailto:${contact.email}`} className="contact-item">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contact.email}</span>
              </a>
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="contact-item">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contact.phone}</span>
              </a>
            </div>

            <Link to="/contact" className="btn-primary btn-footer">
              {getText(navigation.bookConsultation)}
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {getText(business.name)}. {getText({ en: 'All rights reserved.', fr: 'Tous droits réservés.' })}
            </p>
            <div className="footer-bottom-links">
              <Link to="/contact" className="footer-bottom-link">
                {getText({ en: 'Privacy', fr: 'Confidentialité' })}
              </Link>
              <Link to="/contact" className="footer-bottom-link">
                {getText({ en: 'Terms', fr: 'Conditions' })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
