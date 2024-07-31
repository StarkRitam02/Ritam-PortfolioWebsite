import {React,useState} from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Subscribe');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setMessage('Invalid!!');
    } else {
      setMessage('Subscribed!');
    }
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="footer_logo" /> */}
          <h1><span>R</span>itam<span>.</span></h1>
          <p>Turning Vision into Reality</p>
        </div>
        <div className="footer-top-right">
        <div  className="footer-email"  >
          <img src={user_icon} alt="" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
        <div className="footer-subscribe"  onClick={handleSubscribe}>
          {message && <p className="subscribe_status">{message}</p>}
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
