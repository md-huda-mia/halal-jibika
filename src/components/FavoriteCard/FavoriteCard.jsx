import React from "react";
// import styles from "../../obs/AllJobs.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const FavoriteCard = ({ job, deleteHandler }) => {
  const {
    position,
    logo,
    company,
    desc,
    contract,
    vacancy,
    location,
    thumbnail,
    id,
  } = job || {};
  return (
    <div className="post">
      <div className="post_thumbnail">
        <img src={thumbnail} alt="" />
      </div>
      <div className="post_content">
        <h3>
          <Link to={`/jobs/${id}`}>{position}</Link>
        </h3>
        <h4>{vacancy}</h4>
      </div>
      <p>{desc.slice(0, 80)}</p>
      <div className="post_author">
        <div className="auth_info">
          <img src={logo} alt="" />
          <div className="info">
            <Link to={`posts/${location}`}>{location}</Link>
            <span>
              <CiClock2 /> Now
            </span>
          </div>
        </div>
        <span className="contract">{contract}</span>
      </div>
      <div className="post_btn">
        <Link to={`/jobs/${id}`}>
          <button className="btn">Apply</button>
        </Link>
        <button onClick={() => deleteHandler(id)} className="icon">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
    /**
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
    </div> */
  );
};

export default FavoriteCard;
