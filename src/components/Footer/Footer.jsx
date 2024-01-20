import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <ul className={`${styles.footer_categories}`}>
        <li>
          <Link to="/posts/categories/App Developer">App Developer</Link>
        </li>
        <li>
          <Link to="/posts/categories/Web Developer">Web Developer</Link>
        </li>
        <li>
          <Link to="/posts/categories/Seo Expart">Seo Expart</Link>
        </li>
        <li>
          <Link to="/posts/categories/Business">Business</Link>
        </li>
        <li>
          <Link to="/posts/categories/Designer">Designer</Link>
        </li>
        <li>
          <Link to="/posts/categories/Education">Education</Link>
        </li>
      </ul>
      <div className={`${styles.footer_copy_right}`}>
        <small>All Rights Reserved &copy; Copyright, Md Huda Mia </small>
      </div>
    </footer>
  );
};

export default Footer;
