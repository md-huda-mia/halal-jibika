import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import JobsCard from "../Jobs/JobsCard";
import "./CategoryPost.css";

const CategoryPost = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { category } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/posts/categories/${category}`
        );
        setJobData(res?.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [category]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="posts">
      {jobData.length > 0 ? (
        <>
          <div className=" posts_container">
            {jobData.map((job) => (
              <JobsCard key={job._id} job={job} />
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

export default CategoryPost;
