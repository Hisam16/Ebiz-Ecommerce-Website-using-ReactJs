// InfoSection.js
import React from 'react';
import './InfoSection.css';

const InfoCard = ({ title, description, imageUrl }) => (
    <div className="info-card">
        
    <img src={imageUrl} alt="Card Image" className="info-card-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const InfoSection = () => {
    const infoData = [
        { title: 'Data-Driven-Decisions', description: "We're not fans of guesswork. We analyze every click, conversion,and customer interaction, providing actionable insights to optimize your strategy and maximize your ROI.", imageUrl: '../images/logo1.png' },
        { title: 'Onboarding the Platforms', description: "We streamline your entry into the e-commerce arena, setting up your store, integrating platforms, and optimizing everything for seamless operation", imageUrl: '../images/logo2.png' },
        { title: 'Listing Management', description: "Our SEO wizards craft high-converting listings that climb search engine ranks and attract the right customers. We handle inventory updates, A+ content creation, and keyword optimization, ensuring your products stand out from the crowd", imageUrl: '../images/logo3.png' },
        { title: 'Ad Management', description: "We help you navigate through the twisted world of paid advertising, crafting targeted campaigns that reach your ideal audience and convert clicks into loyal customers.", imageUrl: '../images/logo4.png' },
        { title: 'Constant Communication', description: "We're your co-pilot, always available to discuss your goals, answer questions, and celebrate your victories.", imageUrl: '../images/logo5.png' },
    ];
    
    return (
       
    <div className="info-section">
       
        {infoData.map((info, index) => (
        <InfoCard
          key={index}
          title={info.title}
          description={info.description}
          imageUrl={info.imageUrl}
        />
      ))}
        

     
    </div>
  );
};

export default InfoSection;
