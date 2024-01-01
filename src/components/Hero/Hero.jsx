// https://i.ibb.co/wp45b3H/Illustration.png
import React from "react";
import styles from "./Hero.module.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`${styles.hero_section}`}>
      <div className="hero_content">
        <h1 className={`${styles.hero_title}`}>
          Find a job that suits <br /> your interest & skills.
        </h1>
        <p className={`${styles.hero_text}`}>
          Aliquam vitae turpis in diam convallis finibus in at risus. Nullam{" "}
          <br /> in scelerisque leo, eget sollicitudin velit bestibulum.
        </p>
        <br />
        <NavLink to="/jobs">
          {" "}
          <button className={`${styles.hero_btn}`}> Explore Now</button>
        </NavLink>
      </div>
      <div className="hero_img">
        <img src="https://i.ibb.co/wp45b3H/Illustration.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
