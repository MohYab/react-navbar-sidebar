import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Uppgift2 from './components/Uppgift2/Uppgift2';
import Uppgift3 from './components/Uppgift3/Uppgift3';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`main-wrapper ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Routes>
              <Route path="/" element={<MainContent sidebarOpen={sidebarOpen} />} />
              <Route path="/about" element={<About sidebarOpen={sidebarOpen} />} />
              <Route path="/contact" element={<Contact sidebarOpen={sidebarOpen} />} />
              <Route path="/uppgift2" element={<Uppgift2 sidebarOpen={sidebarOpen} />} />
              <Route path="/uppgift3" element={<Uppgift3 sidebarOpen={sidebarOpen} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer sidebarOpen={sidebarOpen} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
