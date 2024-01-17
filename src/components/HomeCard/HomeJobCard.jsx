import React, { useEffect, useState } from "react";
// import jobs from "../../assets/data";
import JobsCard from "../Jobs/JobsCard";
import styles from "../Jobs/AllJobs.module.css";

const HomeJobCard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);
  return (
    <div className={`${styles.job_secion}`}>
      <div className={`${styles.jobCard}`}>
        {jobs?.slice(0, 4).map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomeJobCard;
