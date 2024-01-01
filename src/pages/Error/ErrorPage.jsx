import React from "react";
import styles from "./Error.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className={`${styles.errorPage}`}>
      <div className={`${styles.errorContent}`}>
        <h2 className={`${styles.error_title}`}>Opps! Page Not Found</h2>
        <p>
          Something went wrong. It's look link the link is <br /> broken or the
          page is removed.
        </p>
        <div className={`${styles.error_btn}`}>
          <button className={`${styles.btn1} ${styles.btn1_home}`}>
            Home <FaLongArrowAltRight />
          </button>
          <button className={`${styles.btn1}`}>Go Back</button>
        </div>
      </div>
      <div className="">
        <img
          src="https://i.ibb.co/8dPgHtt/istockphoto-1359560918-612x612-removebg-preview-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
