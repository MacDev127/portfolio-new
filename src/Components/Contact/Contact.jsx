import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" />

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
    </div>
  );
};

export default ContactForm;
