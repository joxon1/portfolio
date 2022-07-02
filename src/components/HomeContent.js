import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeContent.css";
import { PROJECT_ROUTE } from "../utils/const";
const HomeContent = () => {
  return (
    <div className="home_container" id="home">
      <div className="bg"></div>
      <div className="home_content">
        <h1>
          <p className="home_collapse_1">Road</p> for
          <p className="home_collapse_2">Junior</p> <br />
        </h1>
        <Link to={PROJECT_ROUTE} className="show_me">
          <span>Смотреть</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
