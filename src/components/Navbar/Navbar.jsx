import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import CustomHooks from "../../Hooks/CustomHooks";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = CustomHooks();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.navbar_section} section_padding`}>
      <div className={`${styles.navbar_area}`}>
        <div className={`${styles.logo}`}>
          {/* Use the onClick event for the toggle button */}
          <button
            className={`${styles.bar_icon} ${styles.menu_button}`}
            onClick={toggleMenu}>
            <FaBars />
          </button>

          {/* ============ */}

          <h3 className={`${styles.logo_text}`}>
            Halal<span className={`${styles.logo_Span}`}>Jibika</span>{" "}
          </h3>
        </div>

        {/* Use a conditional class to show/hide the mobile menu */}
        <ul
          className={`${styles.navbar_menu} ${
            menuOpen ? styles.show_menu : ""
          }`}>
          <li>
            <NavLink to="/" className={`${styles.nav_link}`}>
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

        <div className={`${styles.user_menu}`}>
          {user?.email ? (
            <>
              <img
                className={`${styles.userImg}`}
                src="https://i.ibb.co/0J4FH5f/Zrks-Pz-H5-Aadq.gif"
                alt=""
              />
              <button onClick={logout} className={`${styles.btn_1}`}>
                LogOut
              </button>
            </>
          ) : (
            <>
              <div className={`${styles.user_button}`}>
                <NavLink to="/register">
                  <button className={`${styles.btn_1}`}>Register</button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
