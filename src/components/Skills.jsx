import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {["Effective communication", "Adaptability", "Problem-solving", "Time management", "Teamwork", "Empathy"].map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <h2>Tools</h2>
      <div className="skills-grid">
        {["JavaScript", "TypeScript", "CSS", "Sass", "React", "Node.js", "GraphQL", "Express", "MongoDB", "Java", "Springboot", "MySQL"].map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <h2>Language</h2>
      <div className="language">
        {[
          { language: "Spanish", level: "Native" },
          { language: "English", level: "Fluent" },
          { language: "Japanese", level: "On progress" },
        ].map((skill) => (
          <div>
            {skill.language}: {skill.level}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
