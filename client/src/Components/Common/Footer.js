// Footer.js
import React from "react";
import MyImage from "../../Utils/images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          {/* Insert your logo or site name here */}
          <img  src={MyImage} alt="Your Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          {/* Add your social media icons and links here */}
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Add additional footer content or copyright information here */}
        &copy; 2023 MystiCode Solution. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
