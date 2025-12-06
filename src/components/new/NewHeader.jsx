/**
 * NewHeader Component - ConsultMetal New Design
 * Metallic header with gradient effects and industrial design
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import './NewHeader.scss';

const NewHeader = () => {
  const { getText, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const nav = companyConfig.navigation;

  // Detect scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    return () => {
      setIsMobileMenuOpen(false);
    };
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`new-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-background"></div>
      
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <div className="logo-icon">
              <span className="logo-letter">C</span>
              <span className="logo-letter">M</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">{getText(companyConfig.business.name)}</span>
              <span className="logo-tagline">{getText(companyConfig.business.tagline)}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              {getText(nav.home)}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              {getText(nav.aboutUs)}
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services') || location.pathname.startsWith('/services/') ? 'active' : ''}`}
            >
              {getText(nav.services)}
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActive('/products') || location.pathname.startsWith('/products/') ? 'active' : ''}`}
            >
              {getText(nav.products)}
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              {getText(nav.contact)}
            </Link>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button 
              onClick={toggleLanguage} 
              className="language-toggle"
              aria-label="Toggle Language"
            >
              {getText(nav.language)}
            </button>

            <Link to="/contact" className="btn-primary btn-small">
              {getText(nav.bookConsultation)}
            </Link>

            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
            {getText(nav.home)}
          </Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
            {getText(nav.aboutUs)}
          </Link>
          <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>
            {getText(nav.services)}
          </Link>
          <Link to="/products" className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}>
            {getText(nav.products)}
          </Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
            {getText(nav.contact)}
          </Link>
          
          <div className="mobile-actions">
            <button onClick={toggleLanguage} className="language-toggle-mobile">
              {getText(nav.language)}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NewHeader;
