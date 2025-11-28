/**
 * Footer Component - ConsultMetal
 * 
 * Professional footer with company info, contact details, and copyright
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './Footer.css';

const Footer = () => {
  const { getText } = useLanguage();
  const { business, contact, footer, navigation } = companyConfig;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={business.logo} alt={getText(business.name)} />
              <h3>{getText(business.name)}</h3>
            </div>
            <p className="footer-tagline">
              {getText({
                en: 'Technical solutions for Sheet Metal industries',
                fr: 'Solutions techniques pour les industries de la tôlerie'
              })}
            </p>
            <p className="footer-experience">
              {business.establishedYear} {getText({
                en: 'of experience',
                fr: 'd\'expérience'
              })}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-heading">
              {getText({
                en: 'Quick Links',
                fr: 'Liens rapides'
              })}
            </h4>
            <nav className="footer-links">
              <Link to="/">{getText(navigation.home)}</Link>
              <Link to="/about">{getText(navigation.aboutUs)}</Link>
              <Link to="/products">{getText(navigation.products)}</Link>
              <Link to="/services">{getText(navigation.services)}</Link>
              <Link to="/contact">{getText(navigation.contact)}</Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-heading">{getText(contact.title)}</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="contact-item">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
              <div className="contact-item">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <address>
                  {contact.address.street}<br />
                  {contact.address.city}, {contact.address.province}<br />
                  {contact.address.postalCode}<br />
                  {contact.address.country}
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            {getText(footer.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
