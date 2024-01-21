import React, { useEffect, useState } from "react";
import JobsCard from "../../components/Jobs/JobsCard";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./AuthorPost.css";
import { useParams } from "react-router-dom";

const AuthorPost = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/posts/users/${id}`
        );
        setJobData(res?.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="posts">
      {jobData.length > 0 ? (
        <>
          <div className=" posts_container">
            {jobData.map((job) => (
              <JobsCard job={job} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 className="center">No posts found</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthorPost;
