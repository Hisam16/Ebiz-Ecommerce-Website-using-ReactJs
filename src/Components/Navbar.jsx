import React from 'react';
import './Navbar.css'; // Import the CSS file for your styles

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logoimg'>
         <img src='../images/logo.png' alt='Logo' className='navbar-image'></img>
</div>
      <div className='menuimg1'><img src='../images/navimg1.png' alt='Image1' className='navbar-image'></img></div>
      <div className='menuimg2'> <img src='../images/navimg2.png' alt='Image2' className='navbar-image'></img></div>
      <div className='menuimg3'> <img src='../images/navimg3.png' alt='Image3' className='navbar-image'></img></div>
      <div className='menuimg4'>  <img src='../images/navimg4.png' alt='Image4' className='navbar-image'></img></div>
    </div>
  );
}

export default Navbar;
