import { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="toggle-icon">
          {isOpen ? '←' : '→'}
        </span>
      </div>
      <div className="sidebar-content">
        <h3 className="sidebar-title">Uppgifter</h3>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="/uppgift2" className="sidebar-link">Uppgift 2</a>
          </li>
          <li className="sidebar-item">
            <a href="/uppgift3" className="sidebar-link">Uppgift 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
