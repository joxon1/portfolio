import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";
import { JavascriptData, ReactData } from "../data/ProjectData";

const Project = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const project = document.querySelector(".project_container");
      let project_top = project.getBoundingClientRect().top;
      if (project_top < windowHeight - animationPoint) {
        setActive(true);
      }
    }
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
  return (
    <div className={`project_container ${active && "active"}`}>
      <h1>
        Мои <span>ГОТОВЫЕ</span> проекты
      </h1>
      <div className="collection">
        <div className="col_container">
          <h2>JavaScript</h2>
          <div className="col_link">
            {JavascriptData.map((item) => (
              <a href={item.link} target="_blank" key={item.id}>
                <img src={item.image} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="col_container">
          <h2>React JS</h2>
          <div className="col_link">
            {ReactData.map((item) => (
              <a href={item.link} target="_blank" key={item.id}>
                <img src={item.image} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
