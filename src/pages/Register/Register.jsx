import React from "react";
import styles from "./Register.module.css";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Register = () => {
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
        <form className={`${styles.form}`}>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText}`}
              name="name"
              type="text"
              placeholder="Firs Name"
            />
          </div>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText}`}
              name="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText}`}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText}`}
              name="password2"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

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
