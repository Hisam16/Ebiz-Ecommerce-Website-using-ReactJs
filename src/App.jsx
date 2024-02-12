import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';
import InfoSection from './Components/InfoSection'; 
import ServicesSection from './Components/ServicesSection';
import FooterSection from './Components/FooterSection';
import whatsapp from '../images/whatsapp.png';

function App() {
  const [count, setCount] = useState(0);

  // Sample image names in the "images" folder
  const carouselImages = [
    'etsyimg.png',
    'meesho.png',
    'myntraimg1.png',
    'jiomartimg.png',
    'ebayimg.png',
    'flipkartimg.png',
    'amazonimg.png',
    // Add more image names as needed
  ];

  return (
    <div>
      <Navbar />
      <MainSection />
      
 {/* WhatsApp button */}
     
<div className="qlwapp-container">
  <a
    href="https://web.whatsapp.com/send?phone=917231973888&text=Hello"
    target="_blank"
  >
    <img className="whatsapp-logo" src={whatsapp} alt="WhatsApp Logo" />
  </a>
</div>




       {/* New Section for Advertisement Carousel */}
      <div className="advertisement-section">
        <h2 style={{ textAlign: 'center', fontSize: '2em', color: 'purple' }}>
          We Help You Sell On
        </h2>
        <div className="carousel-container">
          <Swiper
            spaceBetween={5}
            slidesPerView={6}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            speed={800}
            className="swiper-container"
          >
            {carouselImages.map((imageName, index) => (
              <SwiperSlide key={index} className="carousel-image-container">
                <img
                  src={`./images/${imageName}`}
                  alt={`carousel-image-${index}`}
                  className="carousel-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
<InfoSection />
      <ServicesSection />
    <div className="full-screen-image">
        <img src='../images/ad1.png' alt="Full Screen Image" className="image" />
        <img src='../images/ad2.png' alt='full image'></img>
  </div>

      
      {/* New Section for Footer */}
      <FooterSection />
           {/* New sub-footer section */}

   


<div className="sub-footer">
        <p>©2019-23 Ebiz India. All rights Reserved. Powered by Gosotek Technologies Private Limited.</p>
      </div>

    </div>
  );
}

export default App;
