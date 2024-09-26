import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import ig from "../Assets/instagram_icon.png";
import pinteres from "../Assets/pintester_icon.png";
import wa from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>DELL <br /> SHOP</p>
      </div>
      <ul className="footer-link">
        <li>company</li>
        <li>product</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-icon">
        <div className="social-icon">
          <img src={ig} alt="" />
        </div>
        <div className="social-icon">
          <img src={pinteres} alt="" />
        </div>
        <div className="social-icon">
          <img src={wa} alt="" />
        </div>
      </div>
        <div className="footer-copyright">
          <hr />
          <p>copyright & 2023 - ALL rightreserved</p>
        </div>
    </div>
  );
};

export default Footer;
