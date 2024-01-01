import React from "react";
import { Link, useParams } from "react-router-dom";
import jobs from "../../assets/data";
import styles from "./DetailsJob.module.css";
import JobTopHead from "../FindJobs/JobTopHead";

const DetailsJob = () => {
  const { position } = useParams();
  const job = jobs.find((job) => job.position == position);
  return (
    <section>
      <JobTopHead />
      <div className={`${styles.details_page}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.details__wrapper}`}>
            <div className={`${styles.details__top}`}>
              <div>
                <h1>{job.company}</h1>
              </div>

              <button>
                <Link to={job.companySite}>Company Site</Link>
              </button>
            </div>

            <div className={`${styles.job__details}`}>
              <div className={`${styles.about__job}`}>
                <div>
                  <h6>
                    {job.postedAt} - {job.contract}
                  </h6>
                  <h1>{job.position}</h1>
                  <span>{job.location}</span>
                </div>

                <button className={`${styles.btn}`}>Apply</button>
              </div>

              <p className={`${styles.job__desc}`}>{job.desc}</p>
              <div className={`${styles.requirements}`}>
                <h1>Requirements</h1>
                <p>{job.requirements.reqTitle}</p>

                <ul className={`${styles.requirement__item}`}>
                  {job.requirements.reqItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.responsibility}`}>
                <h1>What you will do?</h1>
                <p>{job.responsibility.resTitle}</p>

                <ol type="1" className={`${styles.responsibility__item}`}>
                  {job.responsibility.resItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsJob;
