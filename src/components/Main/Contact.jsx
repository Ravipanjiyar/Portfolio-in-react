import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import '../../App.css';

function Contact() {
  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const { fullname, email, message } = data;
    setIsFormValid(fullname && email && message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className='cnt'>
      <h2 className="abt">Contact</h2>
      <hr className='yellow' />

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Full name" 
              required 
              value={formData.fullname} 
              onChange={handleInputChange} 
            />
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email address" 
              required 
              value={formData.email} 
              onChange={handleInputChange} 
            />
          </div>
          <textarea 
            name="message" 
            className="form-input form2" 
            placeholder="Your Message" 
            required 
            value={formData.message} 
            onChange={handleInputChange} 
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isFormValid}>
            <IonIcon name='paper-plane' />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
