import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import axios from "axios";

const Register = () => {
  // ============
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // ===============
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { VITE_URL } = import.meta.env;

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    // axios.post("http://localhost:8000/users/register", userData).then((res) => {
    //   console.log(res);
    // });

    try {
      const response = await axios.post(`${VITE_URL}/users/register`, userData);
      const newUser = await response.data;
      console.log(newUser);

      if (!newUser) {
        setError("Couldn't register user. please try again");
      }
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // ==========================
  return (
    <div className={`${styles.register_section}`}>
      <div className={`${styles.form_secion}`}>
        <div className={`${styles.form_title}`}>
          <h2 className={`${styles.title}`}>Create Account</h2>
          <p className={`${styles.loginLink}`}>
            AllReady have an account ?{" "}
            <NavLink className={`${styles.link}`} to="/login">
              Log In
            </NavLink>
          </p>
        </div>
        <form onSubmit={registerUser} className={`${styles.form}`}>
          {error && <p className={`${styles.error_message}`}>{error}</p>}
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              name="name"
              onChange={handleInputChange}
              value={userData.name}
              type="text"
              placeholder="Firs Name"
              autoFocus
            />
          </div>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              name="email"
              onChange={handleInputChange}
              value={userData.email}
              type="text"
              placeholder="Email Address"
            />
          </div>

          <PasswordInput
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <PasswordInput
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={handleInputChange}
          />

          <button className={`${styles.submit_btn}`} type="submit">
            Create Account <FaLongArrowAltRight />
          </button>
        </form>
      </div>
      <div>
        <div className="form_banner">
          <img
            className="register_img"
            src="https://i.ibb.co/G3LqV3b/registration-application-paper-form-concept-53876-167141.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
