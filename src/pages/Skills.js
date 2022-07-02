import React, { useEffect, useState } from "react";
import "../styles/Skills.css";

import react_logo from "../assets/prog_icon/react.png";
import js_logo from "../assets/prog_icon/js.png";
import html_logo from "../assets/prog_icon/html_css.png";

const Skills = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const skills = document.querySelector(".skills_container");
      let skills_top = skills.getBoundingClientRect().top;
      if (skills_top < windowHeight - animationPoint) {
        setActive(true);
      }
    }
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
  return (
    <div className={`skills_container ${active && "active"}`} id="Section">
      <div className="skills_text_content">
        <div className="text tex1">
          <h1>
            How i <span>Started</span>
          </h1>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            atque deleniti nulla, nostrum voluptatum a.
          </h2>
        </div>
        <div className="text tex2">
          <h1>
            <span>Experiences</span> so far
          </h1>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            atque deleniti nulla, nostrum voluptatum a.
          </h2>
        </div>
      </div>
      <div className="progress">
        <div className="progress_container" style={{ "--x": 1 }}>
          <h1>100%</h1>
          <img src={html_logo} alt="HTML/CSS" />
          <span>Html/CSS</span>
        </div>
        <div className="progress_container" style={{ "--x": 2 }}>
          <h1>50-70%</h1>
          <img src={js_logo} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="progress_container" style={{ "--x": 3 }}>
          <h1>50-70%</h1>
          <img src={react_logo} alt="React JS" />
          <span>React JS</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
