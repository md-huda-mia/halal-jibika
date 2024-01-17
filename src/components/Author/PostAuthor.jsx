import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PostAuthor.css";
const PostAuthor = ({ createdAt, authorID }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/users/${authorID}`
        );
        setAuthor(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  }, []);

  return (
    <Link to={`/post/users/${authorID}`} className="Post_atuhor">
      <div className="post_author_avatar">
        <img
          className="user_avatar"
          src={`${import.meta.env.VITE_URL}/uploads/${author?.avatar}`}
          alt=""
        />
      </div>
      <div className="post_author_details">
        <h4>{author?.name} </h4>
        <small>Just now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
