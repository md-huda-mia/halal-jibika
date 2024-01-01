import React from "react";
import styles from "./FindJobs.module.css";
const JobTopHead = () => {
  return (
    <div className={`${styles.job_header}`}>
      <div className={`${styles.job_banner}`}>
        <h2 className={`${styles.title}`}>Dev Jobs</h2>
      </div>
    </div>
  );
};

export default JobTopHead;
