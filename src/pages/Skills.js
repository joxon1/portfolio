import React, { useEffect, useState } from "react";
import "../styles/Skills.css";
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
          <h1>1</h1>
          <span>Lorem</span>
        </div>
        <div className="progress_container" style={{ "--x": 2 }}>
          <h1>2</h1>
          <span>Lorem</span>
        </div>
        <div className="progress_container" style={{ "--x": 3 }}>
          <h1>3</h1>
          <span>Lorem</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
