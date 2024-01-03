import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

import { MdOutlineClose } from "react-icons/md";
import styles from "./Navbar.module.css";
import { TbUfo } from "react-icons/tb";
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 980 ? true : false
  );
  const closeNavHandler = () => {
    if (window.innerWidth < 980) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };
  return (
    <div className="navbar_section">
      <nav>
        <div className={`${styles.container} ${styles.nav_container}`}>
          <Link
            to="/"
            className={`${styles.nav_logo}`}
            onClick={closeNavHandler}>
            <img
              className={`${styles.logo_img}`}
              src="https://i.ibb.co/yNK9kLr/Logo.png"
              alt=""
            />
          </Link>
          {isNavShowing && (
            <ul className={`${styles.nav_menu}`}>
              <li>
                <Link to="/" onClick={closeNavHandler}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" onClick={closeNavHandler}>
                  All Jobs
                </Link>
              </li>
              <li>
                <Link to="/favorite" onClick={closeNavHandler}>
                  Favorites
                </Link>{" "}
              </li>
              <li>
                <Link to="/about" onClick={closeNavHandler}>
                  About
                </Link>{" "}
              </li>
              <li>
                <Link to="/contact" onClick={closeNavHandler}>
                  Contact
                </Link>{" "}
              </li>
              <li>
                <Link to="/login" onClick={closeNavHandler}>
                  Login
                </Link>{" "}
              </li>
              <li>
                <Link to="/createpost" onClick={closeNavHandler}>
                  Register
                </Link>{" "}
              </li>
              <li>
                <Link to="/register" onClick={closeNavHandler}>
                  LogOut
                </Link>{" "}
              </li>
            </ul>
          )}
          <button
            onClick={() => setIsNavShowing(!isNavShowing)}
            className={`${styles.Nav_toggle_btn}`}>
            {isNavShowing ? <MdOutlineClose /> : <HiMiniBars3CenterLeft />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
