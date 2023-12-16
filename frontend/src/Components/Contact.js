import React, { useState } from 'react';
import Footer from './FooterPage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <di>
        <div className="contact-form-container" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTtop: "50px"
          }}>
          <h2>Contact Us</h2>
          <form className="contact-form" style={{
            display: "flex",
            flexDirection: "column",
            width: "900px",
            marginTop: "20px",}} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                marginBottom: "10px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                marginBottom: "10px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                marginBottom: "10px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                height: "20vh",
              }}
              >
              </textarea>
            <button type="submit" 
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#0000ff84",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}>Submit</button>
          </form>
        </div>
        <Footer/>
      </di>
  );
};

export default Contact;
