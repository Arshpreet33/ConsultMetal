/**
 * StatsSection Component - ConsultMetal New Design
 * Metallic stats cards with shimmer animation
 */

import useScrollReveal from '../../hooks/useScrollReveal';
import IndustrialBadge from './IndustrialBadge';
import './StatsSection.scss';

const StatsSection = ({ label, items, className = '' }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className={`stats-section ${className}`} ref={ref}>
      <div className="container">
        {label && <IndustrialBadge text={label} centered />}
        
        <div className="stats-grid">
          {items.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="stat-card-inner">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                {stat.description && (
                  <div className="stat-description">{stat.description}</div>
                )}
                <div className="stat-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
