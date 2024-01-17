import React from "react";
import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import "./PostItem.css";
import CustomHooks from "../../Hooks/CustomHooks";
import { toast } from "react-toastify";
import PostAuthor from "../Author/PostAuthor";
const JobsCard = ({ job }) => {
  const { user } = CustomHooks();
  const {
    _id: id,
    thumbnail,
    title,
    description,
    creator,
    contract,
    createdAt,
    vacancy,
  } = job || {};

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
        <img src={`${import.meta.env.VITE_URL}/uploads/${thumbnail}`} alt="" />
      </div>
      <div className="post_content">
        <h3>
          <Link to={`/jobs/${id}`}>{title}</Link>
        </h3>
        <h4>{vacancy}</h4>
      </div>
      <p>{description.slice(0, 30)}...</p>
      <div className="post_author">
        <div className="auth_info">
          <PostAuthor createdAt={createdAt} authorID={creator} />
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
