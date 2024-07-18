import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer_logo" />
          <p>Turning Vision into Reality</p>
        </div>
        <div className="footer-top-right">
        <div className="footer-email">
          <img src={user_icon} alt="" />
          <input type="email" placeholder="Enter your email" />
          </div>
        <div className="footer-subscribe">
          Subscribe
        </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© Ritam Chatterjee 2024  All Rights Reserved</p>
        </div>
        <div className="footer-bottom-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
