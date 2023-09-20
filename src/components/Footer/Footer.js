import React from "react";
import "./Footer.css";
import Igstudio from '../../assets/Igstudio.png';
import Vector from '../../assets/Vector.png';
import {GrFacebook} from 'react-icons/gr';
import {GrInstagram} from 'react-icons/gr';
import {FaTwitterSquare} from 'react-icons/fa';
import {GrPinterest} from 'react-icons/gr'

const Footer = () => {
  return (
    <>
    <div className="footer-component">
       
      <div className="logo">
        <img src={Vector} alt="logo2" className="logo-2" />
        <img src={Igstudio} alt="logo1" className="logo-1" />
      </div>
      <div className="header-pages">
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className="social-media">
        <GrInstagram style={{color:'#FDD65B'}}/>
        <GrFacebook style={{color:'#FDD65B'}}/>
        <FaTwitterSquare style={{color:'#FDD65B'}}/>
        <GrPinterest style={{color:'#FDD65B'}}/>
      
      </div>
      </div>
      <div className="footer-bottom">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    
    </>
  );
};

export default Footer;
