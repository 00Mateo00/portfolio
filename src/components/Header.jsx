import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Mateo Ossa</h1>
          <p>Full-stack Developer</p>
        </div>
        <nav className="nav">
          <ul>
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
