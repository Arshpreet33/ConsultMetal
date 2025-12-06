/**
 * HeroSection Component - ConsultMetal New Design
 * Flexible hero section with overlay, title, subtitle, and CTA buttons
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import './HeroSection.scss';

const HeroSection = ({
  title,
  highlight,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundVideo,
  height = 'full', // 'full', 'large', 'medium', 'small'
  overlay = 'dark', // 'dark', 'medium', 'light'
  alignment = 'center', // 'left', 'center', 'right'
  showPattern = true,
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [videoError, setVideoError] = useState(false);

  return (
    <section 
      className={`hero-section hero-${height} hero-align-${alignment}`}
      ref={ref}
    >
      {/* Background */}
      <div className="hero-background">
        {backgroundVideo && !videoError ? (
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt={title} 
            className="hero-image"
          />
        ) : null}
      </div>

      {/* Overlay */}
      <div className={`hero-overlay overlay-${overlay}`}></div>

      {/* Pattern */}
      {showPattern && <div className="hero-pattern"></div>}

      {/* Content */}
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          {title && (
            <h1 className="hero-title">
              {title}
              {highlight && <span className="hero-highlight"> {highlight}</span>}
            </h1>
          )}
          
          {subtitle && (
            <p className="hero-subtitle">{subtitle}</p>
          )}
          
          {description && (
            <p className="hero-description">{description}</p>
          )}
          
          {(primaryCta || secondaryCta) && (
            <div className="hero-actions">
              {primaryCta && (
                <Link 
                  to={primaryCta.link} 
                  className="btn-primary"
                >
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link 
                  to={secondaryCta.link} 
                  className="btn-outline"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
