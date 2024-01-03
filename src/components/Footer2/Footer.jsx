import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles.footer_section}`}>
      <div className={`${styles.single_item}`}>
        <h3 className={`${styles.footer_item_title}`}>
          Halal<span className={`${styles.logo_Span}`}>Jibika</span>{" "}
        </h3>
        <div className="call_info">
          <span className={`${styles.text_footer}`}>
            Call now: (319) 555-0115
          </span>{" "}
          <br />
          <br />
          <p className={`${styles.text_footer}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            placeat labore animi optio amet, provident temporibus.
          </p>
        </div>
      </div>
      <div className={`${styles.single_item}`}>
        <h3 className={`${styles.footer_item_title}`}>Company </h3>
        <div className="footer_menu">
          <ul className={`${styles.footer_list}`}>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.single_item}`}>
        <h3 className={`${styles.footer_item_title}`}>Resources </h3>
        <div className="footer_menu">
          <ul className={`${styles.footer_list}`}>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.single_item}`}>
        <h3 className={`${styles.footer_item_title}`}>Support </h3>
        <div className="footer_menu">
          <ul className={`${styles.footer_list}`}>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.single_item}`}>
        <h3 className={`${styles.footer_item_title}`}>Contact Info </h3>
        <div className="footer_menu">
          <ul className={`${styles.footer_list}`}>
            <li>
              <a href="">halaljibika@gmail.com</a>
            </li>
          </ul>
          <div className={`${styles.icon_footer}`}>
            <FaFacebook className={`${styles.icon}`} />
            <FaFacebookMessenger className={`${styles.icon}`} />
            <FaTwitter className={`${styles.icon}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
