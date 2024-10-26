import React from "react";

import "./projects.scss";
const Projects = () => {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>GamesApp</h3>
          <p>game hub application, all games coded manually using matrixes</p>
          <a href="https://00mateo00.github.io/games-app/">got to project →</a>
        </div>
        {[1, 2].map((item) => (
          <div className="project-card" key={item}>
            <h3>Project {item}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
