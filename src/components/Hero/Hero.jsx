// import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Profileimg.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div  id="home" className="hero">
      <img src={profile_img} alt="" /> 
      <h1><span>I'm Ritam Chatterjee,</span>frontend developer based in India</h1>
      <p>I am a Frontend developer  from Kolkata ,India  and am currently pursuing my Bachelors of Technology in the field of Information Technology.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">Download CV</div>
      </div>
    </div>
  );
};

export default Hero;
