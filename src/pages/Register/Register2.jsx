import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import CustomHooks from "../../Hooks/CustomHooks";
import { toast } from "react-toastify";

const inisialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register2 = () => {
  // ===============
  const { createUser, updateName, verifyEmail } = CustomHooks();
  const [formData, setFormData] = useState(inisialState);
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // ===== password conform
  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // password matching check
    if (password !== password2) {
      toast.warning("Password and confirm password do not match");
      return;
    }
    // all password condition check
    if (!(uCase && num && sChar && passLength)) {
      toast.warning("Password does not meet all conditions");
      return;
    }
    // valid email check
    if (!emailRegex.test(email)) {
      toast.warning("Invalid email address");
      return;
    }
    // ========== Create new User ============
    createUser(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        //2. Update Name
        updateName(name)
          .then(() => {
            toast.success("User Create Successfully");
            //3. Email verification
            verifyEmail()
              .then(() => {
                toast.success("Please check your email for verification link");
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
        console.log(user);
      })
      .catch((error) => {
        toast.success(error);
        console.log(error);
      });
  };

  useEffect(() => {
    // Check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }
    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }
    // Check For Special char

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    if (password.length >= 6) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

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
        <form onSubmit={loginUser} className={`${styles.form}`}>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              name="name"
              onChange={handleInputChange}
              value={name}
              type="text"
              placeholder="Firs Name"
            />
          </div>
          <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText} ${styles.input}`}
              name="email"
              onChange={handleInputChange}
              value={email}
              type="text"
              placeholder="Email Address"
            />
          </div>
          {/* <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText}`}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div> */}
          <PasswordInput
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <PasswordInput
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleInputChange}
          />
          {/*======= Display password strength indicators ======*/}
          <div className={`${styles.password_strength}`}>
            <div
              className={
                uCase
                  ? `${styles.indicator} ${styles.active}`
                  : `${styles.indicator}`
              }>
              Uppercase
            </div>
            <div
              className={
                num
                  ? `${styles.indicator} ${styles.active}`
                  : `${styles.indicator}`
              }>
              Number (0,9)
            </div>
            <div
              className={
                sChar
                  ? `${styles.indicator} ${styles.active}`
                  : `${styles.indicator}`
              }>
              Special Character
            </div>
            <div
              className={
                passLength
                  ? `${styles.indicator} ${styles.active}`
                  : `${styles.indicator}`
              }>
              At least 6 characters
            </div>
          </div>
          {/* <div className={`${styles.input_field}`}>
            <input
              className={`${styles.inputText}`}
              name="password2"
              type="password"
              placeholder="Confirm Password"
            />
          </div> */}

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

export default Register2;
