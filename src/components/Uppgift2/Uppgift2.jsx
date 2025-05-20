import React from 'react';
import './Uppgift2.css';

const Uppgift2 = ({ sidebarOpen }) => {
  return (
    <div className={`uppgift2-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Uppgift 2</h1>
      <div className="uppgift2-content">
        <h2>Om uppgiften</h2>
        <p>I denna uppgift kommer du att fortsätta utveckla och bygga vidare på det första projektet som vi har börjat med: F25D-React-app med Navbar och Sidobar.</p>
        <p>Du behöver att utöka projektet med mer komponenter.</p>
        
        <h2>Case</h2>
        <p>Du har en bild där kan du se tre olika komponenter 1, 2 och 3 som ska byggas och anropas i main section i huvud komponent (App).</p>
        <p>Uppgiften handlar om att utveckla ett React-projekt enligt en specifik layout med tre komponenter som ska integreras i huvudapplikationen.</p>
      </div>
    </div>
  );
};

export default Uppgift2;
