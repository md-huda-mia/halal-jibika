import React, { useEffect, useState } from "react";
import styles from "./AllJobs.module.css";
import CustomHooks from "../../Hooks/CustomHooks";
import JobsCard from "./JobsCard";

const AllJobs = ({ jobData, searchTermValue, searchTerm }) => {
  console.log(jobData);
  return (
    <div className={`${styles.job_secion}`}>
      <div className={`${styles.jobCard}`}>
        {jobData
          ?.filter((job) => {
            if (searchTerm === "") return job;
            if (
              job.position.toLowerCase().includes(searchTermValue) ||
              job.company.toLowerCase().includes(searchTermValue)
            )
              return job;
          })
          .map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
      </div>
    </div>
  );
};

export default AllJobs;
