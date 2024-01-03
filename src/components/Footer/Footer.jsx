import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <ul className={`${styles.footer_categories}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/jobs">All Jobs</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite Jobs</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <div className={`${styles.footer_copy_right}`}>
        <small>All Rights Reserved &copy; Copyright, Md Huda Mia </small>
      </div>
    </footer>
  );
};

export default Footer;
