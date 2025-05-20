import "./MainContent.css";

const MainContent = ({ sidebarOpen }) => {
  return (
    <main className={`main-content ${sidebarOpen ? "" : "sidebar-closed"}`}>
      <h1>Välkommen till React-applikationen</h1>
      <p>Detta är en React-applikation med en responsiv navbar och sidebar.</p>
    </main>
  );
};

export default MainContent;
