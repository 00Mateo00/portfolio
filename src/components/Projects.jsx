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
        <div className="project-card">
          <h3>GTD</h3>
          <p>GTD application, originally made using springboot as the backend</p>
          <a href="https://00mateo00.github.io/GTD_project/">got to project →</a>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">Learn more →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
