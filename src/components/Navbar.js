import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { BsCollection, BsChatLeftText } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
  SKILLS_ROUTE,
} from "../utils/const";
const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3200);
  }, []);
  return (
    <nav className="nav">
      <div className={`menu ${animate && "active"}`} style={{ "--d": 1 }}>
        <Link to={HOME_ROUTE} className="menu_link">
          <AiOutlineHome />
        </Link>
        <div id="tooltip">Главный</div>
      </div>
      <div className={`menu ${animate && "active"}`} style={{ "--d": 2 }}>
        <Link to={SKILLS_ROUTE} className="menu_link">
          <TbListDetails />
        </Link>
        <div id="tooltip">Знания</div>
      </div>
      <div className={`menu ${animate && "active"}`} style={{ "--d": 3 }}>
        <Link to={PROJECT_ROUTE} className="menu_link">
          <BsCollection />
        </Link>
        <div id="tooltip">Коллекция</div>
      </div>
      <div className={`menu ${animate && "active"}`} style={{ "--d": 4 }}>
        <Link to={CONTACT_ROUTE} className="menu_link">
          <BsChatLeftText />
        </Link>
        <div id="tooltip">Контакт</div>
      </div>
    </nav>
  );
};

export default Navbar;
