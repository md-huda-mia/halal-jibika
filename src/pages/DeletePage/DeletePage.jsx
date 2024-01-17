import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const DeletePage = () => {
  // =========
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return <Link className="delete-btn">Delete</Link>;
};

export default DeletePage;
