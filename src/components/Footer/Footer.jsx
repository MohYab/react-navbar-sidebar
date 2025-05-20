import React from 'react';
import './Footer.css';

const Footer = ({ sidebarOpen }) => {
  return (
    <footer className={`footer ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="footer-content">
        <p>© 2025 Mohammed Yabrag. Alla rättigheter är förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;
