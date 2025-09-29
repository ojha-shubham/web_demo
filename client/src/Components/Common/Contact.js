import React from 'react';
import "../../Utils/css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Company:</strong> LGTS IT Solution</p>
        <p><strong>Address:</strong> 123 Innovation Park, Patna, Bihar, India</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Email:</strong> contact@lgtsitsolution.com</p>
        <p><strong>Website:</strong> www.lgtsitsolution.com</p>
      </div>
      <div className="contact-footer">
        &copy; {new Date().getFullYear()} LGTS IT Solution. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
