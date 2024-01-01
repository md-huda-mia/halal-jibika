import React from "react";
import jobs from "../../assets/data";
import JobsCard from "../Jobs/JobsCard";
import styles from "../Jobs/AllJobs.module.css";

const HomeJobCard = () => {
  return (
    <div className={`${styles.job_secion}`}>
      <div className={`${styles.jobCard}`}>
        {jobs?.slice(0, 4).map((job) => (
          <JobsCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomeJobCard;
