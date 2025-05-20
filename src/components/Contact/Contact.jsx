import React from 'react';
import './Contact.css';

const Contact = ({ sidebarOpen }) => {
  return (
    <div className={`contact-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-details">
          <h2>Kontaktuppgifter</h2>
          <p><strong>E-post:</strong> mohammed.yabrag@hotmail.com</p>
          <p><strong>Adress:</strong> Kapellvägen, 261 39 Landskrona</p>
        </div>
        <div className="contact-map">
          <h2>Hitta hit</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1wE4J944HAUGluafR-bNIXO20IDQbUJQ&ehbc=2E312F" 
              width="100%" 
              height="480"
              title="Google Maps"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
