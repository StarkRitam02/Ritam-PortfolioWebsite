import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [select, setSelect] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setSelect("home")}>Home</p>
          </AnchorLink>
          {select === "home" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setSelect("about")}>About Me</p></AnchorLink>{select==="about"?<img src={underline} alt=""/>:<> </>}</li> 
        
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setSelect("services")}>Services</p>
          </AnchorLink>
          {select === "services" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setSelect("work")}>Portfolio</p>
          </AnchorLink>
          {select === "work" ? <img src={underline} alt="" /> : <> </>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setSelect("contact")}>Contact</p>
          </AnchorLink>
          {select === "contact" ? <img src={underline} alt="" /> : <> </>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
