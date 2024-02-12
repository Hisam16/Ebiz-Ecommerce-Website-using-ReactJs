// FullScreenImage.js
import React from 'react';
import './FullScreenImage.css';

const FullScreenImage = ({ imageUrl }) => (
  <div className="full-screen-image">
    <img src={imageUrl} alt="Full Screen Image" className="image" />
  </div>
);

export default FullScreenImage;
