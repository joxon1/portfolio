import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// icon
import { AiOutlineHome } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { BsCollection, BsChatLeftText } from "react-icons/bs";
// link
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
  SKILLS_ROUTE,
} from "../utils/const";
//css
import "../styles/Navbar.css";
const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3200);
  }, []);
  return (
    <nav className="navbar">
      <div className={`menu ${animate && "active"}`} style={{ "--d": 1 }}>
        <Link to={HOME_ROUTE} className="navbar_link">
          <AiOutlineHome />
        </Link>
        <div id="navbar_name">Главный</div>
      </div>
      <div className={`menu ${animate && "active"}`} style={{ "--d": 2 }}>
        <Link to={SKILLS_ROUTE} className="navbar_link">
          <TbListDetails />
        </Link>
        <div id="navbar_name">Образования</div>
      </div>
      <div className={`menu ${animate && "active"}`} style={{ "--d": 3 }}>
        <Link to={PROJECT_ROUTE} className="navbar_link">
          <BsCollection />
        </Link>
        <div id="navbar_name">Проекты</div>
      </div>
      <div className={`menu ${animate && "active"}`} style={{ "--d": 4 }}>
        <Link to={CONTACT_ROUTE} className="navbar_link">
          <BsChatLeftText />
        </Link>
        <div id="navbar_name">Контакты</div>
      </div>
    </nav>
  );
};

export default Navbar;
