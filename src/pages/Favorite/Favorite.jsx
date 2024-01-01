import React, { useEffect, useState } from "react";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
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
  //======== deleteHandler ========
  //======== deleteHandler ========
  const deleteHandler = (id) => {
    const updatedFavorite = favorite.filter((job) => job.id !== id);
    setFavorite(updatedFavorite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorite));
  };

  return (
    <>
      <div className={`${styles.header}`}>
        <h2>{favorite.length} Favorite Jobs </h2>
      </div>
      <div className={`${styles.favorite_page}`}>
        {favorite.length > 0 ? (
          <>
            <div className="favorite_wrapper">
              <div className={`${styles.jobCard}`}>
                {favorite?.map((job) => (
                  <FavoriteCard
                    key={job.id}
                    job={job}
                    deleteHandler={deleteHandler}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.noData}`}>
              <p>
                No Data Found <br />
                <span className={`${styles.text}`}>
                  Please Add your favorite Jobs
                </span>{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Favorite;
