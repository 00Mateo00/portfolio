import "./App.scss";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div className="app">
      <div className="portfolio">
        <aside>
          <Skills />
          <Social />
        </aside>
        <main className="portfolio__main">
          <Header />
          <Projects />
          <Aboutme />
        </main>
      </div>
      <footer>
        <p>© 2024 Mateo Ossa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
