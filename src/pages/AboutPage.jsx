/**
 * About Page - ConsultMetal
 * 
 * About Us page: Hero → Background → Mission → CTA → Industries
 */

import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import './AboutPage.css';

const AboutPage = () => {
  const { getText } = useLanguage();
  const { about, industries } = companyConfig;

  // Industry icons mapping based on emoji
  const industryIcons = {
    'HVAC': '🌡️',
    'Door': '🚪',
    'Stainless': '⚙️',
    'Lab': '🔬',
    'Agricultural': '🚜',
    'Job': '🔧',
  };

  const getIndustryIcon = (industryName) => {
    const name = industryName.en || industryName;
    if (name.includes('HVAC')) return industryIcons['HVAC'];
    if (name.includes('Door')) return industryIcons['Door'];
    if (name.includes('Stainless')) return industryIcons['Stainless'];
    if (name.includes('Lab')) return industryIcons['Lab'];
    if (name.includes('Agricultural')) return industryIcons['Agricultural'];
    if (name.includes('Job')) return industryIcons['Job'];
    return industryIcons['HVAC']; // default
  };

  const getIconClass = (industryName) => {
    const name = industryName.en || industryName;
    if (name.includes('Agricultural')) return 'industry-icon tractor';
    return 'industry-icon';
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">{getText(about.hero.title)}</p>
            <h1 className="hero-title">{getText(about.hero.heading)}</h1>
            <p className="hero-description">{getText(about.hero.subtitle)}</p>
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
              <p className="section-label">{getText(about.background.label)}</p>
              <h2 className="section-title">{getText(about.background.title)}</h2>
              <div className="background-paragraphs">
                {about.background.paragraphs.map((paragraph, index) => (
                  <p key={index} className="background-paragraph">
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Image on Right */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <p className="section-label">{getText(about.mission.label)}</p>
              <h2 className="section-title">{getText(about.mission.title)}</h2>
              <div className="mission-paragraphs">
                {about.mission.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mission-paragraph">
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
            </div>
            <div className="mission-image">
              <img src="/images/about/mission.png" alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Between Mission and Industries */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">{getText(about.cta.title)}</h2>
              <p className="cta-subtitle">{getText(about.cta.subtitle)}</p>
            </div>
            <div className="cta-button">
              <a href="/contact" className="btn btn-cta">
                {getText(about.cta.buttonText)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries-section section">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">{getText(industries.title)}</h2>
            <p className="section-description">
              {getText({
                en: "Specialized expertise across diverse manufacturing sectors",
                fr: "Expertise spécialisée dans divers secteurs manufacturiers"
              })}
            </p>
          </div>

          <div className="industries-grid">
            {industries.list.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className={getIconClass(industry.name)}>
                  {getIndustryIcon(industry.name)}
                </div>
                <h3 className="industry-name">{getText(industry.name)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
