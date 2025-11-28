/**
 * Header Component - ConsultMetal
 * 
 * Transparent header that becomes white on scroll
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './Header.css';

const Header = () => {
  const { getText, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const nav = companyConfig.navigation;

  // Detect scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo" onClick={closeMobileMenu}>
            <img src={companyConfig.business.logo} alt={getText(companyConfig.business.name)} />
            <span className="logo-text">{getText(companyConfig.business.name)}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              {getText(nav.home)}
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
              {getText(nav.aboutUs)}
            </Link>
            <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} onClick={closeMobileMenu}>
              {getText(nav.products)}
            </Link>
            <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeMobileMenu}>
              {getText(nav.services)}
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
              {getText(nav.contact)}
            </Link>

            {/* Mobile-only CTA & Language */}
            <div className="mobile-actions">
              <Link to="/contact" className="btn btn-primary" onClick={closeMobileMenu}>
                {getText(nav.bookConsultation)}
              </Link>
              <button 
                onClick={() => { toggleLanguage(); closeMobileMenu(); }} 
                className="language-toggle-mobile"
              >
                {getText(nav.language)}
              </button>
            </div>
          </nav>

          {/* Desktop CTA & Language Toggle */}
          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary">
              {getText(nav.bookConsultation)}
            </Link>
            <button onClick={toggleLanguage} className="language-toggle">
              {getText(nav.language)}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
