/**
 * IndustrialBadge Component - ConsultMetal New Design
 * Reusable badge with metallic lines and text
 */

import './IndustrialBadge.scss';

const IndustrialBadge = ({ text, centered = false, className = '' }) => {
  return (
    <div className={`industrial-badge ${centered ? 'centered' : ''} ${className}`}>
      <span className="badge-line"></span>
      <span className="badge-text">{text}</span>
      <span className="badge-line"></span>
    </div>
  );
};

export default IndustrialBadge;
