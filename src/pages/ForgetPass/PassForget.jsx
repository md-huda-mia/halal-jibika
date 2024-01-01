import React, { useState } from "react";
import styles from "../Register/Register.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import CustomHooks from "../../Hooks/CustomHooks";
import { toast } from "react-toastify";
// =========
const inisialState = {
  email: "",
  password: "",
};
const PassForget = () => {
  // =======
  const { resetPassword } = CustomHooks();
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  // ==========

  //Reset Pass
  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(userEmail)
      .then(() => {
        toast.success("Reset link has been sent, please check email");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className={`${styles.register_section} `}>
      <div className={`${styles.form_secion} ${styles.reset_pass}`}>
        <div className={`${styles.form_title}`}>
          <h2 className={`${styles.title}`}>Forget Password</h2>
          <p className={`${styles.loginLink}`}>
            Duis Iuctus interdum metus, ut consectetetur ante consectetur sed{" "}
            <br /> Suspendisse euismod viverra massa sit amet mollis.
          </p>
        </div>
        <form onSubmit={handleReset} className={`${styles.form}`}>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              type="text"
              placeholder="Email Address"
              onBlur={(e) => setUserEmail(e.target.value)}
              name="email"
              required
            />
          </div>

          <button className={`${styles.submit_btn}`} type="submit">
            <span> Send reset link</span> <FaLongArrowAltRight />
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default PassForget;
