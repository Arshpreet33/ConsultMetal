/**
 * CTASection Component - ConsultMetal New Design
 * Call-to-action section with metallic design
 */

import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import './CTASection.scss';

const CTASection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className = '',
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className={`cta-section ${className}`} ref={ref}>
      {backgroundImage && (
        <div className="cta-background">
          <img src={backgroundImage} alt="" />
        </div>
      )}
      
      <div className="cta-overlay"></div>
      <div className="cta-pattern"></div>
      
      <div className="container">
        <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
          {title && <h2 className="cta-title">{title}</h2>}
          {subtitle && <p className="cta-subtitle">{subtitle}</p>}
          
          <div className="cta-actions">
            {primaryCta && (
              <Link to={primaryCta.link} className="btn-primary">
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.link} className="btn-outline btn-outline-light">
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
