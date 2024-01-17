import React, { useContext, useState } from "react";
import styles from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  // ============
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { setCurrentUser } = useContext(UserContext);
  // ===============
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { VITE_URL } = import.meta.env;

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${VITE_URL}/users/login`, userData);
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={`${styles.register_section}`}>
      <div className={`${styles.form_secion}`}>
        <div className={`${styles.form_title}`}>
          <h2 className={`${styles.title}`}>Sign In</h2>
          <p className={`${styles.loginLink}`}>
            Don't have account ?{" "}
            <NavLink className={`${styles.link}`} to="/register">
              Create Account
            </NavLink>
          </p>
        </div>
        <form onSubmit={loginUser} className={`${styles.form}`}>
          {error && <p className={`${styles.error_message}`}>{error}</p>}
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              type="text"
              placeholder="Email Address"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <PasswordInput
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {/* ======= */}
          <div className={`${styles.forget_pass}`}>
            <NavLink to="/forgetpassword">Forget Password</NavLink>
          </div>
          <button className={`${styles.submit_btn}`} type="submit">
            <span> Sign In</span> <FaLongArrowAltRight />
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

export default Login;
