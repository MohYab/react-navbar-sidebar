import React from 'react';
import './About.css';

const About = ({ sidebarOpen }) => {
  return (
    <div className={`about-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>About</h1>
      <div className="about-content">
        <h2>Om uppgiften</h2>
        <p>I den här uppgiften ska du bygga en React-applikation med två huvudkomponenter: en navbar (huvudmeny) och en sidebar (en meny för extra funktioner). Du kommer att använda JSX för att strukturera komponenterna samt CSS för att skapa en responsiv design som fungerar bra på både datorer och mobila enheter.</p>
        
        <h2>Beskrivning</h2>
        <p>I den här uppgiften ska du bygga en React-applikation med två huvudkomponenter: en navbar (huvudmeny) och en sidebar (en meny för extra funktioner). Du kommer att använda JSX för att strukturera komponenterna samt CSS för att skapa en responsiv design som fungerar bra på både datorer och mobila enheter.</p>
        
        <h2>Vad du ska göra</h2>
        <ul>
          <li>Skapa en React-app med Vite</li>
          <li>Skapa två huvudkomponenter:
            <ul>
              <li>Navbar: Innehåller tre länkar (Home, About, Contact Us)</li>
              <li>Sidebar: Innehåller två länkar (Uppgift 2, Uppgift 3)</li>
            </ul>
          </li>
          <li>Organisera appen i flera komponenter för att göra koden mer modulär och lättläst</li>
          <li>Använda JSX för att definiera strukturen i varje komponent</li>
          <li>Använda CSS för att skapa en responsiv design som fungerar bra på olika skärmstorlekar</li>
          <li>Se till att både navbar och sidebar fungerar på mobila enheter, exempelvis genom att använda en "hamburger"-meny för mobilen</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
