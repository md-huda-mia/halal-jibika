import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`${styles.navbar_section}  section_padding`}>
      <div className={`${styles.navbar_area}`}>
        {/* ==== Logo ===== */}

        <div className={`${styles.logo}`}>
          <button className={`${styles.menu_button}`} onClick={toggleMenu}>
            <FaBars className={`${styles.bar_icon}`} />
          </button>
          {/* <img
            className="logoImg"
            src="https://i.ibb.co/P6MZ8FM/Screenshot-2023-12-31-002754-removebg-preview.png"
            alt=""
          /> */}
          <h3 className={`${styles.logo_text}`}>
            Halal<span className={`${styles.logo_Span}`}>Jibika</span>{" "}
          </h3>
        </div>
        {/* ==== navbar ====== */}

        <ul
          className={`${styles.navbar_menu} ${
            menuOpen ? styles.show_menu : ""
          }`}>
          <li>
            <NavLink className={`${styles.nav_link}`} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={`${styles.nav_link}`} to="/jobs">
              Find Jobs
            </NavLink>
          </li>
          <li>
            <NavLink className={`${styles.nav_link}`} to="/favorite">
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink className={`${styles.nav_link}`} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={`${styles.nav_link}`} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        {/* ===== user menu ==== */}
        <div className={`${styles.user_menu}`}>
          <img
            className={`${styles.userImg}`}
            src="https://i.ibb.co/0J4FH5f/Zrks-Pz-H5-Aadq.gif"
            alt=""
          />
          <div className={`${styles.user_button}`}>
            <NavLink to="/register">
              <button className={`${styles.btn_1}`}>Register</button>
            </NavLink>

            <button className={`${styles.btn_1}`}>LogOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
