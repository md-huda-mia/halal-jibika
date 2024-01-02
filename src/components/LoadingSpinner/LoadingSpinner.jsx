import React from "react";
import styles from "./Loading.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${styles.loading}`}>
      <img
        className={`${styles.loader_Img}`}
        src="https://i.ibb.co/NZDv2jW/loader.gif"
        alt=""
      />
    </div>
  );
};

export default LoadingSpinner;
