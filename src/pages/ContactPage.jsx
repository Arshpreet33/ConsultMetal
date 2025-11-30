/**
 * Contact Page - ConsultMetal
 * 
 * Contact page with hero section and contact form
 */

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import companyConfig from '../config/company.config';
import './ContactPage.css';

const ContactPage = () => {
  const { getText } = useLanguage();
  const { contact } = companyConfig;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState('');

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return !value.trim() ? getText({
          en: 'Name is required',
          fr: 'Le nom est requis'
        }) : '';
      case 'email':
        if (!value.trim()) {
          return getText({
            en: 'Email is required',
            fr: 'L\'email est requis'
          });
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return getText({
            en: 'Please enter a valid email address',
            fr: 'Veuillez entrer une adresse email valide'
          });
        }
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      phone: '',
      email: validateField('email', formData.email),
      message: ''
    };

    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(error => error !== '');

    // Focus the first invalid field for accessibility
    if (hasError) {
      const firstErrorField = Object.keys(newErrors).find(key => newErrors[key]);
      if (firstErrorField) {
        const el = document.getElementById(firstErrorField);
        if (el && typeof el.focus === 'function') el.focus();
      }
    }

    return !hasError;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    const successMessage = getText({
      en: 'Thank you for contacting us! We will get back to you soon.',
      fr: 'Merci de nous avoir contactés! Nous vous répondrons bientôt.'
    });
    setFormSuccess(successMessage);
    // clear success message after 6 seconds
    setTimeout(() => setFormSuccess(''), 6000);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    
    // Reset errors
    setErrors({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              {getText({
                en: 'CONTACT US',
                fr: 'CONTACTEZ-NOUS'
              })}
            </p>
            <h1 className="hero-title">Contact</h1>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">
                {getText({
                  en: 'Reach Out To',
                  fr: 'Contactez'
                })}
              </h2>
              <h3 className="section-subtitle">
                {getText({
                  en: 'One of Our Experts',
                  fr: 'L\'un de nos experts'
                })}
              </h3>
              <p className="section-description">
                {getText({
                  en: 'Get in touch with our representatives and start your journey on expanding your company and making your business better, more agile and profitable.',
                  fr: 'Contactez nos représentants et commencez votre voyage pour développer votre entreprise et rendre votre entreprise meilleure, plus agile et rentable.'
                })}
              </p>

              {/* Contact Details */}
              <div className="contact-details">
                <h4 className="details-heading">
                  {getText({
                    en: 'What We Do:',
                    fr: 'Ce que nous faisons:'
                  })}
                </h4>
                <p>
                  {getText({
                    en: 'We provide cutting-edge software solutions and consulting services for the sheet metal industry, helping businesses optimize their manufacturing processes.',
                    fr: 'Nous fournissons des solutions logicielles de pointe et des services de conseil pour l\'industrie de la tôle, aidant les entreprises à optimiser leurs processus de fabrication.'
                  })}
                </p>

                <div className="contact-item">
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <strong>{getText(contact.form.email)}:</strong>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <strong>{getText(contact.form.phone)}:</strong>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                </div>

                {/* Address removed per request */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {formSuccess && (
                  <div className="form-success" role="status" aria-live="polite">
                    {formSuccess}
                  </div>
                )}
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">
                    {getText(contact.form.name)}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                  />
                  {errors.name && (
                    <div id="error-name" className="error-message" role="alert" aria-live="assertive">{errors.name}</div>
                  )}
                </div>

                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="phone">
                    {getText(contact.form.phone)}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                  />
                  {errors.phone && (
                    <div id="error-phone" className="error-message" role="alert" aria-live="assertive">{errors.phone}</div>
                  )}
                </div>

                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">
                    {getText(contact.form.email)}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  {errors.email && (
                    <div id="error-email" className="error-message" role="alert" aria-live="assertive">{errors.email}</div>
                  )}
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">
                    {getText(contact.form.message)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                  ></textarea>
                  {errors.message && (
                    <div id="error-message" className="error-message" role="alert" aria-live="assertive">{errors.message}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  {getText(contact.form.submit)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
