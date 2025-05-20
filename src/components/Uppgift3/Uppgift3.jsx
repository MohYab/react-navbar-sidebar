import React from 'react';
import './Uppgift3.css';

const Uppgift3 = ({ sidebarOpen }) => {
  return (
    <div className={`uppgift3-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h1>Uppgift 3</h1>
      <div className="uppgift3-content">
        <h2>Om uppgiften</h2>
        <p>I denna övning ska du skapa en låneansökningsformulär i React. Användaren ska kunna fylla i sina personliga och ekonomiska uppgifter och skicka en ansökan. Fokus ligger på att träna formulärhantering, state-hantering och enkel validering i React.</p>
        
        <p>Den färdiga applikationen ska ha en snygg design och vara responsiv så att den fungerar både på dator och mobil.</p>
        
        <h2>Case</h2>
        <p>Designa ett formulär som innehåller följande fält:</p>
        <ul>
          <li>Telefonnummer – Textinput, helst numeriskt.</li>
          <li>Är du anställd? – Checkbox.</li>
          <li>Din lön – Dropdown / select-meny med olika löneintervall (exempel: "Mindre än $500", "$500 - $1000", "$1000 - $2000", "Över $2000").</li>
          <li>Lånebelopp – Nummerinput.</li>
          <li>Syftet med lånet – Textinput.</li>
          <li>Återbetalningstid i år – Nummerinput.</li>
          <li>Kommentarer – Textarea för extra meddelanden.</li>
        </ul>
        
        <h2>Vad du ska göra</h2>
        <p>Skapa ett nytt React-projekt (t.ex. med Vite, Create React App, eller annan valfri setup).</p>
      </div>
    </div>
  );
};

export default Uppgift3;
