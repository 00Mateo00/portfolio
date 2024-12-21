import "./App.scss";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Aboutme from "./components/Aboutme";
import Email from "./components/Email";

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
          <div className="content">
            <Projects />
            <Aboutme />
            <Email />
          </div>
          <footer>
            <p>© 2024 Mateo Ossa. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
