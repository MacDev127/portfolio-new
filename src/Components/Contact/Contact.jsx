import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    setFormStatus('Submitting...');

    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setFormStatus('Email sent successfully!');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      })
      .catch(() => {
        setFormStatus('Error sending the email. Please try again.');
      });
  };

  return (
    <div className="contact" id="contact">
      <h1 className="title">Get in touch</h1>
      <form
        className="contact-form row"
        method="POST"
        data-netlify="true"
        name="contact"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="hidden"
          name="subject"
          value="Sales inquiry from mysitename.netlify.app"
        />

        <div className="field__container">
          <div className="form-field col x-50">
            <input
              id="name"
              className="input-text js-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-field col x-50">
            <input
              id="email"
              className="input-text js-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
        </div>

        <div className="form__field--wrapper">
          <div className="form-field col x-100">
            <textarea
              id="message"
              className="input-text js-input"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <label className="label" htmlFor="message">
              Message
            </label>
          </div>
          <div className="form-field col x-100 align-center">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </div>
      </form>
      {/* Display form status message */}
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default ContactForm;
