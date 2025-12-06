/**
 * Contact Page - ConsultMetal New Design
 * Enhanced contact form with company information
 */

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import companyConfig from '../../config/company.config';
import PageBanner from '../../components/new/PageBanner';
import IndustrialBadge from '../../components/new/IndustrialBadge';
import useScrollReveal from '../../hooks/useScrollReveal';
import './ContactPage.scss';

const ContactPage = () => {
  const { getText } = useLanguage();
  const { business, imageAssets } = companyConfig;
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
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
        backgroundImage={imageAssets.contact?.banner || imageAssets.home.hero.image}
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
                      required
                      placeholder={getText({ en: 'John Doe', fr: 'Jean Dupont' })}
                    />
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
                      required
                      placeholder={getText({ en: 'john@example.com', fr: 'jean@exemple.com' })}
                    />
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
                    required
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
                    required
                    placeholder={getText({
                      en: 'Tell us about your project...',
                      fr: 'Parlez-nous de votre projet...'
                    })}
                  ></textarea>
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
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <div className="info-label">
                        {getText({ en: 'Address', fr: 'Adresse' })}
                      </div>
                      <div className="info-value">{business.address}</div>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <div className="info-label">
                        {getText({ en: 'Phone', fr: 'Téléphone' })}
                      </div>
                      <a href={`tel:${business.phone}`} className="info-value">
                        {business.phone}
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div className="info-content">
                      <div className="info-label">
                        {getText({ en: 'Email', fr: 'E-mail' })}
                      </div>
                      <a href={`mailto:${business.email}`} className="info-value">
                        {business.email}
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
                  <a href={`tel:${business.phone}`} className="btn btn-outline">
                    <span className="btn-text">{business.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
