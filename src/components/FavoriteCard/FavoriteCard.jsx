import React from "react";
import styles from "../Jobs/AllJobs.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const FavoriteCard = ({ job, deleteHandler }) => {
  const { position, logo, company, desc, contract, vacancy, location, id } =
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
      <div className={`${styles.groupCard}`}>
        <NavLink>
          <button
            onClick={() => deleteHandler(id)}
            className={`${styles.card_btn} ${styles.icon_btn}`}>
            <MdDeleteOutline className={`${styles.delete_icon}`} />
          </button>
        </NavLink>
        <NavLink to={`/jobs/${job.position}`}>
          <button className={`${styles.card_btn}`}>Apply Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default FavoriteCard;
