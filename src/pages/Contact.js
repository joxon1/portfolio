import React, { useEffect, useState } from "react";
import {
  BsGithub,
  BsInstagram,
  BsYoutube,
  BsTelegram,
  BsTelephoneFill,
} from "react-icons/bs";
import "../styles/Contact.css";

const Contact = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const contact = document.querySelector(".contact_container");
      let contact_top = contact.getBoundingClientRect().top;
      if (contact_top < windowHeight - animationPoint) {
        setActive(true);
      }
    }
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
  return (
    <div className={`contact_container ${active && "active"}`}>
      <h1>
        <span>Контактный</span> <b>адрес</b>
      </h1>
      <div className="socials">
        <a href="https://www.google.com" className="icon" style={{ "--c": "#00ff00" }}>
          <BsTelephoneFill className="social_icons" />
          <div className="icon_name">телефон</div>
        </a>
        <a className="icon" style={{ "--c": "#2299d2" }}>
          <BsTelegram className="social_icons" />
          <div className="icon_name">telegram</div>
        </a>
        <a className="icon" style={{ "--c": "#ff5cff" }}>
          <BsInstagram className="social_icons" />
          <div className="icon_name">instagram</div>
        </a>
        <a className="icon" style={{ "--c": "#ff0000" }}>
          <BsYoutube className="social_icons" />
          <div className="icon_name">youtube</div>
        </a>
        <a className="icon" style={{ "--c": "#2a0080" }}>
          <BsGithub className="social_icons" />
          <div className="icon_name">github</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
