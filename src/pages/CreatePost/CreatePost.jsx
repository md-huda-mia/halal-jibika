import React, { useState } from "react";
import "./CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, sethumbnail] = useState("");
  const [category, setCategory] = useState("unCategorize");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("jobCategorize");

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
    "Freelancer",
    "Web-developer",
    "Business",
    "Teaching",
    "Full-Time",
    "Junior-web-developer",
    "Desinger",
  ];
  const JOBS_CATEGORIES = ["Full-Time", "Part-Time", "Remote"];

  return (
    <div className="create-post">
      <div className="container">
        <h2>Create post</h2>
        <p className="form_error_message">This is an error message</p>
        <form action="" className="form create_post_form">
          <input
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
          <ReactQuill
            modules={modules}
            formats={formates}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            onChange={(e) => sethumbnail(e.target.files[0])}
            accept="png, jpg, jpeg"
          />
          <button type="submit" className="btn primary">
            {" "}
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
