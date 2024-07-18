import React, { useState } from "react";
import "./Contact.css";
import Title from "../Title/Title";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("Send Message");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(process.env);
    console.log(process.env.VITE_REACT_MAIL_API_KEY);
    formData.append("access_key", process.env.VITE_REACT_MAIL_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(() => setResult("Send Message"), 5000);
  };
  return (
    <div id="contact" className="contact">
      <Title text="Let's Connect" />
      <div className="contact__content">
        <div className="contact__content__left">
          <h2>Get in Touch</h2>
          <p>Have a question or want to work together?</p>
          <div className="contact_details">
            <div className="contact_details__item">
              <img src={mail_icon} alt="mail_icon" />
              <p>ritamchatterjeeprofacc@gmail.com</p>
            </div>
            <div className="contact_details__item">
              <img src={call_icon} alt="mail_icon" />
              <p>+91-7449565225</p>
            </div>
            <div className="contact_details__item">
              <img src={location_icon} alt="mail_icon" />
              <p>Kolkata,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact__content__right">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your email here " />
          <label htmlFor="message">Write your message here </label>
          <textarea name="message" rows="8" placeholder="Enter your message " />
          <button className="contact__submit" type="submit">
            {result}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
