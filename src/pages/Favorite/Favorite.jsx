import React, { useEffect, useState } from "react";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
// import styles from "./Jobs/AllJobs.module.css";
import styles from "../../components/Jobs/AllJobs.module.css";
const Favorite = () => {
  const [favorite, setFavorite] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorite(favoriteItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  console.log(favorite);

  return (
    <>
      <div className={`${styles.header}`}>
        <h2>favorite</h2>
      </div>
      <div className={`${styles.favorite_page}`}>
        <div className="favorite_wrapper">
          <div className={`${styles.jobCard}`}>
            {favorite?.map((job) => (
              <FavoriteCard job={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
