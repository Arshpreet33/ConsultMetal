/**
 * GeometricFrame Component - ConsultMetal New Design
 * Reusable corner frame decoration
 */

import './GeometricFrame.scss';

const GeometricFrame = ({ children, className = '' }) => {
  return (
    <div className={`geometric-frame ${className}`}>
      <div className="frame-corner top-left"></div>
      <div className="frame-corner top-right"></div>
      <div className="frame-corner bottom-left"></div>
      <div className="frame-corner bottom-right"></div>
      {children}
    </div>
  );
};

export default GeometricFrame;
