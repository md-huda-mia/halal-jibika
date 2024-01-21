import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./AllAuthors.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/users`);
        setAllUsers(res?.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="authors">
      {allUsers?.map((user) => (
        <>
          <Link to={`/posts/users/${user._id}`} className="auhotrs_item">
            <div className="post_author_avatar">
              <img
                className="user_avatar"
                src={`${import.meta.env.VITE_URL}/uploads/${user?.avatar}`}
                alt={`${user.name}`}
              />
            </div>
            <div className="post_author_details">
              <h4>{user?.name} </h4>
              <small>Posts: {user?.posts}</small>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default AllUsers;
