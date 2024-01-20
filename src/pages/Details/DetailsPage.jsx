import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./DetailsJob.module.css";
import jobs from "../../assets/data";
import PostAuthor from "../../components/Author/PostAuthor";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import DeletePage from "../DeletePage/DeletePage";

const DetailsPage = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState();
  const [creatorID, setCreatorID] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  console.log(jobData);
  console.log(jobData?.creator);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/posts/${id}`);
        setJobData(res?.data);
        setCreatorID(res.data.creator);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPost();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className={`${styles.detailPage}`}>
      {error && <p className="error">{error}</p>}
      {jobData && (
        <div className={`${styles.details_page}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.details__wrapper}`}>
              <div className={`${styles.details__top}`}>
                <PostAuthor
                  authorID={jobData.creator}
                  createdAt={jobData.createdAt}
                />
                {currentUser?.id == jobData?.creator && (
                  <div className={`${styles.user_btn}`}>
                    <Link to="" className={`${styles.btn_2}`}>
                      {" "}
                      <DeletePage />{" "}
                    </Link>
                    <Link
                      to={`/post/users/${jobData?._id}/edit`}
                      className={`${styles.btn_1}`}>
                      Edit
                    </Link>
                  </div>
                )}
              </div>

              <div className={`${styles.job__details}`}>
                <div className={`${styles.about__job}`}>
                  <div className="">
                    <h1>{jobData.title}</h1>
                    <h3 className={`${styles.vacancy}`}>{jobData.category}</h3>
                  </div>
                  <button className={`${styles.btn}`}>Apply</button>
                </div>
                <div className={`${styles.detail_thumb}`}>
                  <img
                    src={`${import.meta.env.VITE_URL}/uploads/${
                      jobData.thumbnail
                    }`}
                    alt=""
                  />
                </div>
                <p className={`${styles.job__desc}`}>{jobData.description}</p>
                <div className={`${styles.requirements}`}>
                  <h1>Requirements</h1>
                  {/* <p>{job.requirements.reqTitle}</p> */}

                  {/* <ul className={`${styles.requirement__item}`}>
                  {job.requirements.reqItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
                </div>

                <div className={`${styles.responsibility}`}>
                  <h1>What you will do?</h1>
                  {/* <p>{job.responsibility.resTitle}</p> */}

                  <ol type="1" className={`${styles.responsibility__item}`}>
                    {/* {job.responsibility.resItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))} */}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailsPage;
