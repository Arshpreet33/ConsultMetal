/**
 * PageBanner Component - ConsultMetal New Design
 * Consistent page headers for internal pages
 */

import useScrollReveal from '../../hooks/useScrollReveal';
import IndustrialBadge from './IndustrialBadge';
import './PageBanner.scss';

const PageBanner = ({
  badge,
  title,
  highlight,
  description,
  backgroundImage,
  height = 'medium', // 'small', 'medium', 'large'
  className = '',
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      className={`page-banner banner-${height} ${className}`}
      ref={ref}
    >
      {/* Background */}
      {backgroundImage && (
        <div className="banner-background">
          <img src={backgroundImage} alt="" />
        </div>
      )}

      {/* Overlay */}
      <div className="banner-overlay"></div>

      {/* Pattern */}
      <div className="banner-pattern"></div>

      {/* Content */}
      <div className="container">
        <div className={`banner-content ${isVisible ? 'visible' : ''}`}>
          {badge && <IndustrialBadge text={badge} centered />}
          
          {title && (
            <h1 className="banner-title">
              {title}
              {highlight && <span className="banner-highlight"> {highlight}</span>}
            </h1>
          )}
          
          {description && (
            <p className="banner-description">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
