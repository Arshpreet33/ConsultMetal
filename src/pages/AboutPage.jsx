/**
 * About Page - ConsultMetal
 * 
 * About Us page: Hero → Background → Mission → CTA → Industries
 */

import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import CTASection from '../components/Shared/CTASection';
import IndustriesSection from '../components/Shared/IndustriesSection';
import HeroAnimated from '../components/Shared/HeroAnimated';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { getText } = useLanguage();
  const { about } = companyConfig;

  useEffect(() => {
    // Animate section headings
    const headings = document.querySelectorAll('.about-page .section-heading');
    const backgroundContent = document.querySelector('.background-content');
    const missionContent = document.querySelector('.mission-content');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px 0px' }
    );

    // Observe headings
    if (headings && headings.length > 0) {
      headings.forEach((h) => observer.observe(h));
    }
    
    // Observe content sections
    if (backgroundContent) observer.observe(backgroundContent);
    if (missionContent) observer.observe(missionContent);

    return () => {
      if (headings && headings.length > 0) {
        headings.forEach((h) => observer.unobserve(h));
      }
      if (backgroundContent) observer.unobserve(backgroundContent);
      if (missionContent) observer.unobserve(missionContent);
    };
  }, []);

  // Hero animation is handled by the shared `HeroAnimated` component

  // Hero animation is handled by the shared `HeroAnimated` component

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <HeroAnimated
              title={getText(about.hero.heading)}
              description={getText(about.hero.subtitle)}
              clipOriginY="30%"
            />
          </div>
        </div>
      </section>

      {/* Background/History Section - Image on Left */}
      <section className="background-section section">
        <div className="container">
          <div className="background-content">
            <div className="background-image">
              <img src="/images/about/history.jpeg" alt="Our History" />
            </div>
            <div className="background-text">
              {/* <p className="section-label">{getText(about.background.label)}</p> */}
              <div className="section-heading" data-dir="from-right">
                <h2 className="section-title">
                  <span className="title-our">Our History</span>
                </h2>
              </div>
              <div className="background-paragraphs">
                {about.background.paragraphs.map((paragraph, index) => (
                  <p key={index} className="background-paragraph">
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
              <Link to="/products" className="btn btn-primary">
                {getText({ en: 'Discover More', fr: 'Découvrir plus' })} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Image on Right */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              {/* <p className="section-label">{getText(about.mission.label)}</p> */}
              <div className="section-heading" data-dir="from-left">
                <h2 className="section-title">
                  <span className="title-our">Our Mission</span>
                </h2>
              </div>
              <div className="mission-paragraphs">
                {about.mission.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mission-paragraph">
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
              <Link to="/services" className="btn btn-primary">
                {getText({ en: 'What We Offer', fr: 'Ce que nous offrons' })} &rarr;
              </Link>
            </div>
            <div className="mission-image">
              <img src="/images/about/mission.png" alt="Our Mission" />
            </div>
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

export default AboutPage;
