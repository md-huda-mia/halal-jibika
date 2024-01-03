import React from "react";
import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import "./PostItem.css";
import CustomHooks from "../../Hooks/CustomHooks";
import { toast } from "react-toastify";
const JobsCard = ({ job }) => {
  const { user } = CustomHooks();
  const { id, thumbnail, position, desc, logo, contract, location, vacancy } =
    job || {};

  const handleToFavorite = () => {
    if (user) {
      const addedFavoritesArray = [];
      const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
      if (!favoriteItems) {
        addedFavoritesArray.push(job);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        toast.success("Good Job! added successfully!");
      } else {
        const isExits = favoriteItems.find((job) => job.id === id);
        if (!isExits) {
          addedFavoritesArray.push(...favoriteItems, job);
          localStorage.setItem(
            "favorites",
            JSON.stringify(addedFavoritesArray)
          );
          toast.success("Good Job! added successfully!");
        } else {
          toast.warning("No Add Duplicate Item");
        }
      }
      console.log(favoriteItems);
    } else {
      toast.warning("please login, you are not valid user ");
    }
  };

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
        <button onClick={handleToFavorite} className="icon">
          <CiHeart />
        </button>
      </div>
    </div>
  );
};

export default JobsCard;
/** 
import React from "react";
import { CiClock2 } from "react-icons/ci";
import styles from "./AllJobs.module.css";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import CustomHooks from "../../Hooks/CustomHooks";
const JobsCard = ({ job }) => {
  const { user } = CustomHooks();
  const { position, logo, company, desc, contract, vacancy, location, id } =
    job || {};

  // ============================
  const handleToFavorite = () => {
    if (user) {
      const addedFavoritesArray = [];
      const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
      if (!favoriteItems) {
        addedFavoritesArray.push(job);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        toast.success("Good Job! added successfully!");
      } else {
        const isExits = favoriteItems.find((job) => job.id === id);
        if (!isExits) {
          addedFavoritesArray.push(...favoriteItems, job);
          localStorage.setItem(
            "favorites",
            JSON.stringify(addedFavoritesArray)
          );
          toast.success("Good Job! added successfully!");
        } else {
          toast.warning("No Add Duplicate Item");
        }
      }
      console.log(favoriteItems);
    } else {
      toast.warning("please login, you are not valid user ");
    }
  };

  // ===========================

  return (
    <div className={`${styles.post}`}>
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
            onClick={handleToFavorite}
            className={`${styles.card_btn} ${styles.icon_btn}`}>
            <FaRegHeart />
          </button>
        </NavLink>
        <NavLink to={`/jobs/${job.id}`}>
          <button className={`${styles.card_btn}`}>Apply Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default JobsCard;
*/
