// MainSection.js
import React from 'react';
import './MainSection.css'; // Import the CSS file for your styles
import EnquiryForm from './EnquiryForm';
const MainSection = () => {
  return (
    <div className='main-section'>
      <div className='main-image'>
        <img src='../images/mainimg2.png' alt='Main Image'></img>
      </div>
      <EnquiryForm/>
    </div>
  );
}

export default MainSection;
