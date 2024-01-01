import React, { useState } from "react";
import styles from "./Register.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import CustomHooks from "../../Hooks/CustomHooks";
import PasswordInput from "./PasswordInput";
// =========
const inisialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(inisialState);
  const { email, password } = formData;
  const { signin, resetPassword, signInWithGoogle } = CustomHooks();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    signin(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(from, { replace: true });
        console.log("User:", user);
      })
      .catch((error) => {
        console.log("Login Error:", error);
      });
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
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <PasswordInput
            placeholder="Password"
            name="password"
            value={password}
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
