/**
 * Contact Page - ConsultMetal New Design
 * Enhanced contact form with company information
 */

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageBanner from '../../components/new/PageBanner';
import IndustrialBadge from '../../components/new/IndustrialBadge';
import useScrollReveal from '../../hooks/useScrollReveal';
import './ContactPage.scss';

const ContactPage = () => {
  const { getText } = useLanguage();
  const [formRef, formVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Validate email on blur
    if (name === 'email' && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFormErrors({ 
        ...formErrors, 
        email: getText({ en: 'Please enter a valid email', fr: 'Veuillez entrer un e-mail valide' })
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Custom validation
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = getText({ en: 'Name is required', fr: 'Le nom est requis' });
    }
    
    if (!formData.email.trim()) {
      errors.email = getText({ en: 'Email is required', fr: 'L\'e-mail est requis' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = getText({ en: 'Please enter a valid email', fr: 'Veuillez entrer un e-mail valide' });
    }
    
    if (!formData.subject) {
      errors.subject = getText({ en: 'Please select a subject', fr: 'Veuillez sélectionner un sujet' });
    }
    
    if (!formData.message.trim()) {
      errors.message = getText({ en: 'Message is required', fr: 'Le message est requis' });
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid - submit
    console.log('Form submitted:', formData);
    
    // Show success toast
    setShowToast(true);
    setToastProgress(100);
    
    // Animate progress bar
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;
    
    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = 100 - (currentStep / steps) * 100;
      setToastProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setShowToast(false);
        setToastProgress(100);
      }
    }, interval);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const closeToast = () => {
    setShowToast(false);
    setToastProgress(100);
  };

  return (
    <div className="contact-page">
      {/* Page Banner */}
      <PageBanner
        badge={getText({ en: 'GET IN TOUCH', fr: 'CONTACTEZ-NOUS' })}
        title="Contact"
        highlight="Us"
        description={getText({
          en: 'We\'re here to answer your questions and discuss your manufacturing needs.',
          fr: 'Nous sommes là pour répondre à vos questions et discuter de vos besoins de fabrication.'
        })}
        backgroundImage="/images/contact/contact-hero.png"
        height="medium"
      />

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className={`contact-form-wrapper ${formVisible ? 'visible' : ''}`} ref={formRef}>
              <IndustrialBadge 
                text={getText({ en: 'SEND US A MESSAGE', fr: 'ENVOYEZ-NOUS UN MESSAGE' })} 
              />
              <h2 className="section-title">
                <span className="title-highlight">Get a</span> Quote
              </h2>
              <p className="section-description">
                {getText({
                  en: 'Fill out the form below and our team will get back to you within 24 hours.',
                  fr: 'Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les 24 heures.'
                })}
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      {getText({ en: 'Full Name', fr: 'Nom complet' })} <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={getText({ en: 'John Doe', fr: 'Jean Dupont' })}
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      {getText({ en: 'Email Address', fr: 'Adresse e-mail' })} <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={getText({ en: 'john@example.com', fr: 'jean@exemple.com' })}
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      {getText({ en: 'Phone Number', fr: 'Numéro de téléphone' })}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      {getText({ en: 'Company Name', fr: 'Nom de l\'entreprise' })}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={getText({ en: 'Your Company', fr: 'Votre entreprise' })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    {getText({ en: 'Subject', fr: 'Sujet' })} <span className="required">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? 'error' : ''}
                  >
                    <option value="">
                      {getText({ en: 'Select a subject', fr: 'Sélectionnez un sujet' })}
                    </option>
                    <option value="quote">
                      {getText({ en: 'Request a Quote', fr: 'Demander un devis' })}
                    </option>
                    <option value="technical">
                      {getText({ en: 'Technical Question', fr: 'Question technique' })}
                    </option>
                    <option value="partnership">
                      {getText({ en: 'Partnership Inquiry', fr: 'Demande de partenariat' })}
                    </option>
                    <option value="other">
                      {getText({ en: 'Other', fr: 'Autre' })}
                    </option>
                  </select>
                  {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {getText({ en: 'Message', fr: 'Message' })} <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={getText({
                      en: 'Tell us about your project...',
                      fr: 'Parlez-nous de votre projet...'
                    })}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary">
                  <span className="btn-text">
                    {getText({ en: 'Send Message', fr: 'Envoyer le message' })}
                  </span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`contact-info-wrapper ${infoVisible ? 'visible' : ''}`} ref={infoRef}>
              <div className="contact-info-card">
                <IndustrialBadge 
                  text={getText({ en: 'CONTACT DETAILS', fr: 'COORDONNÉES' })} 
                />
                <h3 className="info-title">
                  {getText({ en: 'Our Office', fr: 'Notre bureau' })}
                </h3>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <div className="info-label">
                        {getText({ en: 'Phone', fr: 'Téléphone' })}
                      </div>
                      <a href="tel:+15145865982" className="info-value">
                        (514) 586-5982
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div className="info-content">
                      <div className="info-label">
                        {getText({ en: 'Email', fr: 'E-mail' })}
                      </div>
                      <a href="mailto:info@consultmetal.com" className="info-value">
                        info@consultmetal.com
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🕒</div>
                    <div className="info-content">
                      <div className="info-label">
                        {getText({ en: 'Business Hours', fr: 'Heures d\'ouverture' })}
                      </div>
                      <div className="info-value">
                        {getText({ en: 'Mon - Fri: 8:00 AM - 6:00 PM', fr: 'Lun - Ven: 8h00 - 18h00' })}
                        <br />
                        {getText({ en: 'Sat - Sun: Closed', fr: 'Sam - Dim: Fermé' })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-cta">
                  <h4>{getText({ en: 'Prefer to call?', fr: 'Vous préférez appeler ?' })}</h4>
                  <p>
                    {getText({
                      en: 'Our team is ready to answer your questions',
                      fr: 'Notre équipe est prête à répondre à vos questions'
                    })}
                  </p>
                  <a href="tel:+15145865982" className="btn btn-outline">
                    <span className="btn-text">(514) 586-5982</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-icon">✓</div>
            <div className="toast-message">
              <div className="toast-title">
                {getText({ en: 'Message Sent!', fr: 'Message envoyé!' })}
              </div>
              <div className="toast-text">
                {getText({ en: 'We\'ll get back to you within 24 hours.', fr: 'Nous vous répondrons dans les 24 heures.' })}
              </div>
            </div>
            <button className="toast-close" onClick={closeToast} aria-label="Close">
              ×
            </button>
          </div>
          <div className="toast-progress" style={{ width: `${toastProgress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
