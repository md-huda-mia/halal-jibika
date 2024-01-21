import React, { useContext, useEffect, useState } from "react";
import "./CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("unCategorize");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("jobCategorize");
  const [error, setError] = useState("");

  // =========
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formates = [
    "header",
    "bold",
    "italic",
    "underline",
    "strick",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const POST_CATEGORIES = [
    "App Developer",
    "Web Developer",
    "Business",
    "Seo Expart",
    "Education",
    "Designer",
  ];
  const JOBS_CATEGORIES = ["Full-Time", "Part-Time", "Remote"];

  const createPost = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.set("title", title);
    postData.set("category", category);
    postData.set("location", location);
    postData.set("description", description);
    postData.set("jobCategory", jobCategory);
    postData.set("thumbnail", thumbnail);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/posts`,
        postData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) {
        return navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="create-post">
      <div className="container">
        <h2>Create post</h2>
        {error && <p className="form_error_message">{error}</p>}
        <form onSubmit={createPost} action="" className="form create_post_form">
          <input
            className="creInput"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <select
            name="jobCategory"
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}>
            {JOBS_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <input
            className="creInput"
            type="text"
            placeholder="Your Loacation"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            autoFocus
          />
          <ReactQuill
            modules={modules}
            formats={formates}
            value={description}
            onChange={setDescription}
          />
          <input
            className="creInput"
            type="file"
            value={thumbnail}
            // onChange={(e) => sethumbnail(e.target.files[0])}
            onChange={(e) => {
              console.log(e.target.files[0]);
              setThumbnail(e.target.files[0]);
            }}
            accept="png, jpeg, jpg"
          />
          <button type="submit" className="btn primary">
            Create New Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
