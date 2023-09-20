import React from 'react';
import Igstudio from '../../assets/Igstudio.png';
import Vector from '../../assets/Vector.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header-component">
        <div className='logo'>
        <img src={Vector} alt='logo2' className="logo-2" />
        <img src={Igstudio} alt='logo1' className="logo-1" />
        </div>
      <div className='header-pages'>
    <p>Home</p>
    <p>Attorneys</p>
    <p>Practice Areas</p>
    <p>About Us</p>
      </div>
    <div className="button">Contact Now</div>
    </div>
  )
}

export default Header
