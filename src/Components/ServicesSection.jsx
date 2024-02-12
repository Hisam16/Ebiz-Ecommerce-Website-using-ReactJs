// ServicesSection.js
import React from 'react';
import './ServicesSection.css';

const ServiceCard = ({ logoUrl, subheading, description }) => (
  <div className="service-card">
    <img src={logoUrl} alt="Service Logo" className="service-logo" />
    <h4>{subheading}</h4>
    <p>{description}</p>
  </div>
);

const ServicesSection = () => {
  const servicesData = [
    { logoUrl: '../images/service1.png', subheading: 'Setting Up a Seller Account ', description: "Establishing a seller account is simple with our expert assistance. We’ll smoothly walk you through the registration process and promptly address any seller account concerns that arise." },
    { logoUrl: '../images/service2.png', subheading: 'Ecommerce Product Listing ', description: "Our product listing experts understand marketplace guidelines. We prioritize crafting detailed, appealing listings to attract online buyers, leading to increased sales" },
    { logoUrl: '../images/service3.png', subheading: 'Ecommerce Advertising & Marketing', description: "Our advertising services, tailored to increase sales and boost efficiency, focus on optimizing your ads for enhanced performance, rankings, efficient conversions, and ultimately driving more sales for your business." },
    { logoUrl: '../images/service4.png', subheading: 'Ecommerce SEO ', description: "Our experts find the most relevant keywords for your products and create a comprehensive listing. We use the best keyword research tools to optimize your products and help your listings remain competitive in search results." },
    { logoUrl: '../images/service5.png', subheading: 'Product Listing Optimization ', description:"We improve your product pages through optimization, boosting keyword rankings. With our SEO know-how, we make the most of these rankings to raise and maintain high conversion rates for your product listings." },
    { logoUrl: '../images/service6.png', subheading: 'Brand Registry & Protection ', description: "Our experts not only create a customized seller account for you but also take care of such as brand registry and protection, managing case legs, category optimization, sponsored ads, order management, feedback management, etc." },
  ];

  return (
    <div className="services-section">
      <h2 className="services-section-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            logoUrl={service.logoUrl}
            subheading={service.subheading}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
