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
            Как я <span>Начинал</span>
          </h1>
          <h2>
            С 2015 по 2022 года работал сфере услуг в фотосалоне. Начал изучать
            программирование с 2021 года. Учил HTML/CSS, Java Scipt, React JS и
            многое другое.
          </h2>
        </div>
        <div className="text tex2">
          <h1>
            <span>В Будущем</span> хочу
          </h1>
          <h2>
            Буду работать над собой, оттачивать знание, изучать все библиотеки и
            разные программные языки. Собственно Vue JS, Angular, Go и по части
            Backand разработки.
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
