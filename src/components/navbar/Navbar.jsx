import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo3.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [select, setSelect] = useState("home");
  const menuref=useRef();
  const openMenu=()=>{
    menuref.current.style.right='0';
  } 
  const closeMenu=()=>{
    menuref.current.style.right='-350px';
  } 
  return (
    <div className="navbar">
      {/* <img src={logo} alt="" /> */}
      <h1><span>R</span>itam<span>.</span></h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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
