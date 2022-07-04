import React, { useEffect, useState } from "react";
import "../styles/Project.css";
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
      <div className="collection_container"></div>
    </div>
  );
};

export default Project;
