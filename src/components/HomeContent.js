import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeContent.css";

import { PROJECT_ROUTE } from "../utils/const";

const HomeContent = () => {
  return (
    <div className="home_container" id="Home">
      <div className="home_content">
        <p className="home_collapse home_frs">Road</p>
        <h1>for</h1>
        <p className="home_collapse home_sec">Junior</p>
      </div>
      <Link to={PROJECT_ROUTE} className="home_link">
        View Projects
      </Link>
    </div>
  );
};

export default HomeContent;
