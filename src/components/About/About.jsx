// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./About.css";
import profile_img from "../../assets/about_profileimg.svg";
import Title from '../Title/Title';
const About = () => {
  return (
    <div id='about' className="about">
      <Title text="About Me" />
      <div className="about-content">
        <div className="about-content-left">
          <img src={profile_img} alt="profile_img" />
        </div>
        <div className="about-content-right">
          <div className="about-right-text">
            <h2>Hi, I&apos;m Ritam Chatterjee</h2>
            <p>
            I am an IT undergraduate passionate about technology and web development. My expertise spans programming languages like Java, JavaScript, and Python, along with frameworks such as ReactJS and NodeJS. I've also gained hands-on experience during my internship at IBM SkillsBuild, where I developed machine learning models and worked on cloud integration projects.
            </p>
            <p>
            Currently, I&apos;m pursuing my BTech in Information Technology from Netaji Subhash Engineering College. My academic and project experiences, including building web applications like the Train X railway reservation system, have equipped me with the skills and knowledge to tackle real-world challenges. I&apos;m always excited to learn, innovate, and contribute to the tech community.</p>
            <p>When I&apos;m not coding, I enjoy engaging with the tech community, sharing knowledge, and exploring new technologies. Let&apos;s connect and create something amazing together!</p>
            
          </div>
          <div className="about-right-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h3>1 +</h3>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>20 +</h3>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
