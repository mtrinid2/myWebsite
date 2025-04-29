import React, { use, useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  const [showServiceDescription, setShowServiceDescription] = useState(true); 
  const [showContactDescription, setShowContactDescription] = useState(false)
  const [showFullStack, setService1] = useState(true)
  const [showUserDev, setService2] = useState(false)
  const [services, setActiveTab] = useState("services")

  const handleServiceClick = () => {
    setShowServiceDescription(true);
    setShowContactDescription(false)
    setActiveTab("services")
  }

  const handleContactClick = () => {
    setShowContactDescription(true);
    setShowServiceDescription(false)
    setActiveTab("contact-me")
  }

  const handleService1 = () => {
    setService1(true)
    setService2(false)
  }

  const handleService2 = () => {
    setService2(true)
    setService1(false)
  }

  return (
    <div className='header'>
        <div className="header-options">
            <div className="position">
                <h2 onClick={handleServiceClick} className={services === "services" ? "active" : ""}>Services</h2>
            </div>
            <div className="asd">
                <h2 id='contact-me' onClick={handleContactClick} className={services === "contact-me" ? "active" : ""}>Contact me</h2>
            </div>
        </div>
        <div className="description-box">
            {showServiceDescription && ( 
                <div className="services-box">
                    <h3>Services</h3>
                    <p>Here you will find detailed descriptions of the web development, design, and other services provided. High-quality work and timely delivery.</p>
                    {showFullStack && (
                        <div className="full-stack">
                            <p>1. Full Stack Web Development</p>
                            <div className="full-stack-details">
                                <p>Our comprehensive Full Stack Web Development package includes everything you need for both user and admin functionality:</p>
                                <li>A fully responsive website tailored for the user experience.</li>
                                <li>A separate admin panel for configuring and managing the user site.</li>
                                <li>Integration of a secure database for data management.</li>  
                                <p>Price: $2000</p>
                                <p>This service ensures that you have a complete solution, from front-end user interactions to back-end data handling, empowering you to manage your website seamlessly and efficiently.</p>
                            </div>
                        </div>    
                    )}
                    {showUserDev && (
                        <div className="user-dev">
                            <p>2. Custom User Website Development</p>
                            <div className="user-dev-details">
                                <p>This service focuses solely on creating a high-quality, responsive website for your users, tailored to your brand’s needs. We ensure an engaging user experience with modern design principles and seamless functionality.</p>
                                <li>Appointment Scheduling or Delivery</li>
                                <li>Showcase Services</li>
                                <li>Secure Payments</li>
                                <p>Price: $1500</p>
                                <p>This option is perfect for businesses or individuals who need a professional and custom website without the need for an administrative interface.</p>
                            </div>
                        </div>
                    )}   
                    <div className="dot">
                        <img onClick={handleService1} src={assets.dot}/>
                        <img onClick={handleService2} src={assets.dot}/>
                    </div>                     
                </div>
            )}

            {showContactDescription && (
                <div className="contact-me-box">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to us for inquiries, quotes, or any questions. You can contact us at:</p>
                    <div className="info">
                        <ul>
                            <li>Email: mrte020198@outlook.com</li>
                            <li>Phone: 571-340-6851</li>
                        </ul>
                        <div className="social-media">
                            <img src={assets.instagram}/>
                            <img src={assets.facebook}/>
                        </div>  
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default Header;
