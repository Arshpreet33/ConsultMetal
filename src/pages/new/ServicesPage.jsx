/**
 * Services Page - ConsultMetal New Design
 * Comprehensive services showcase with metallic design
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import PageBanner from '../../components/new/PageBanner';
import IndustrialBadge from '../../components/new/IndustrialBadge';
import CTASection from '../../components/new/CTASection';
import IndustriesSection from '../../components/new/IndustriesSection';
import './ServicesPage.scss';

const ServicesPage = () => {
  const { getText } = useLanguage();
  const { services, imageAssets } = companyConfig;

  return (
    <div className="services-page">
      {/* Page Banner */}
      <PageBanner
        badge={getText({ en: 'WHAT WE OFFER', fr: 'CE QUE NOUS OFFRONS' })}
        title="Our"
        highlight="Services"
        description={getText({
          en: 'Comprehensive metal fabrication and manufacturing solutions tailored to your industry needs.',
          fr: 'Solutions complètes de fabrication et de transformation des métaux adaptées aux besoins de votre industrie.'
        })}
        backgroundImage={imageAssets.services?.banner || imageAssets.home.hero.image}
        height="medium"
      />

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-intro">
            <IndustrialBadge 
              text={getText({ en: 'EXPERTISE & SOLUTIONS', fr: 'EXPERTISE & SOLUTIONS' })}
              centered 
            />
            <h2 className="section-title">
              <span className="title-highlight">Complete</span> Service Portfolio
            </h2>
            <p className="section-description">
              {getText({
                en: 'From precision machining to complete fabrication, our services cover every aspect of metal manufacturing with unmatched quality and expertise.',
                fr: 'De l\'usinage de précision à la fabrication complète, nos services couvrent tous les aspects de la fabrication de métaux avec une qualité et une expertise inégalées.'
              })}
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="service-card"
              >
                <div className="service-card-inner">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">{service.icon}</div>
                    <div className="icon-bg"></div>
                  </div>
                  
                  <h3 className="service-name">{getText(service.name)}</h3>
                  <p className="service-description">{getText(service.description)}</p>
                  
                  <div className="service-features">
                    {service.features && service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span className="feature-text">{getText(feature)}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/services/${service.slug}`} 
                    className="service-link"
                  >
                    <span className="link-text">
                      {getText({ en: 'Learn More', fr: 'En savoir plus' })}
                    </span>
                    <span className="link-icon">→</span>
                  </Link>

                  <div className="card-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <IndustrialBadge 
              text={getText({ en: 'OUR ADVANTAGES', fr: 'NOS AVANTAGES' })}
              centered 
            />
            <h2 className="section-title centered">
              <span className="title-highlight">Why Choose</span> ConsultMetal
            </h2>
          </div>

          <div className="advantages-grid">
            {[
              {
                icon: '🎯',
                title: getText({ en: 'Precision Engineering', fr: 'Ingénierie de précision' }),
                description: getText({
                  en: 'State-of-the-art equipment and skilled craftsmen ensure exceptional accuracy.',
                  fr: 'Équipement de pointe et artisans qualifiés assurent une précision exceptionnelle.'
                })
              },
              {
                icon: '⚡',
                title: getText({ en: 'Fast Turnaround', fr: 'Délai rapide' }),
                description: getText({
                  en: 'Efficient processes and dedicated teams deliver projects on time, every time.',
                  fr: 'Processus efficaces et équipes dédiées livrent les projets à temps, à chaque fois.'
                })
              },
              {
                icon: '🏆',
                title: getText({ en: 'Quality Assured', fr: 'Qualité assurée' }),
                description: getText({
                  en: 'Rigorous quality control at every stage ensures industry-leading standards.',
                  fr: 'Contrôle qualité rigoureux à chaque étape garantit des normes de pointe.'
                })
              },
              {
                icon: '💡',
                title: getText({ en: 'Custom Solutions', fr: 'Solutions personnalisées' }),
                description: getText({
                  en: 'Tailored approaches that meet your unique specifications and requirements.',
                  fr: 'Approches sur mesure qui répondent à vos spécifications et exigences uniques.'
                })
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className="advantage-card"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="advantage-icon">{advantage.icon}</div>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={getText({
          en: 'Ready to Start Your Project?',
          fr: 'Prêt à démarrer votre projet ?'
        })}
        subtitle={getText({
          en: 'Contact our team today to discuss your manufacturing needs and get a custom quote.',
          fr: 'Contactez notre équipe dès aujourd\'hui pour discuter de vos besoins de fabrication et obtenir un devis personnalisé.'
        })}
        backgroundImage={imageAssets.home.hero.image}
        overlay="dark"
        pattern
        primaryCta={{
          text: getText({ en: 'Get a Quote', fr: 'Obtenir un devis' }),
          link: '/contact'
        }}
        secondaryCta={{
          text: getText({ en: 'View Products', fr: 'Voir les produits' }),
          link: '/products'
        }}
      />

      {/* Industries We Serve Section */}
      <IndustriesSection />
    </div>
  );
};

export default ServicesPage;
