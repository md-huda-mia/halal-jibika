import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./DetailsJob.module.css";
import jobs from "../../assets/data";

const DetailsPage = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  console.log(job);
  return (
    <section className={`${styles.detailPage}`}>
      <div className={`${styles.details_page}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.details__wrapper}`}>
            <div className={`${styles.details__top}`}>
              <div className={`${styles.com_top}`}>
                {/* <img src={job.logo} alt="" /> */}
                <div className={`${styles.com_info}`}>
                  <h1>{job.company}</h1>
                  <h6>
                    {job.postedAt} - {job.contract}
                  </h6>

                  <span>{job.location}</span>
                </div>
              </div>

              <div className={`${styles.user_btn}`}>
                <button className={`${styles.btn_1}`}>Edit</button> {""}
                <button className={`${styles.btn_2}`}>Delete</button>
              </div>
            </div>

            <div className={`${styles.job__details}`}>
              <div className={`${styles.about__job}`}>
                <div className="">
                  <h1>{job.position}</h1>
                  <h3 className={`${styles.vacancy}`}>{job.vacancy}</h3>
                </div>
                <button className={`${styles.btn}`}>Apply</button>
              </div>
              <div className={`${styles.detail_thumb}`}>
                <img src={job.thumbnail} alt="" />
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

export default DetailsPage;
