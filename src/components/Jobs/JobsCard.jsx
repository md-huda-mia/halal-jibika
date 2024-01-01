import React from "react";
import { CiClock2 } from "react-icons/ci";
import styles from "./AllJobs.module.css";
import { NavLink } from "react-router-dom";
const JobsCard = ({ job }) => {
  const { position, logo, company, desc, contract, vacancy, location } =
    job || {};
  return (
    <div className={`${styles.singleCard}`}>
      <div className={`${styles.card_title}`}>
        <div className={`${styles.title_info}`}>
          <h3 className={`${styles.title}`}>{position}</h3>
        </div>
        <span className={`${styles.time_info}`}>
          <CiClock2 className={`${styles.icon_clock}`} />
          Now
        </span>
      </div>
      <div className={`${styles.com_info}`}>
        <p className={`${styles.info}`}>{vacancy}</p>
        <p className={`${styles.info}`}>{contract}</p>
      </div>
      <hr />
      <div className="">
        <p className={`${styles.des}`}>{desc.slice(0, 100)}</p>
        <div className={`${styles.company_info}`}>
          <div className={`${styles.logo}`}>
            <img className={`${styles.com_logo}`} src={logo} alt="" />
            <h4 className={`${styles.com_name}`}>{company}</h4>
          </div>
          <p className={`${styles.info}`}>{location}</p>
        </div>
      </div>
      <NavLink to="/register">
        <button className={`${styles.card_btn}`}>Apply Now</button>
      </NavLink>
    </div>
  );
};

export default JobsCard;
