import React from "react";
import styles from "./User.module.css";
import CustomHooks from "../../Hooks/CustomHooks";
const User = () => {
  const { user } = CustomHooks();
  return (
    <div className={`${styles.user_page}`}>
      <div className={`${styles.user_wrapper}`}>
        <div className={`${styles.user_img}`}>
          <img
            src="https://i.ibb.co/1XdRmVb/Pngtree-vector-users-icon-4144740.png"
            alt=""
          />
          <h3>{user.displayName}</h3>
        </div>
        <div className={`${styles.user_form}`}>
          <form action="">
            <div className={`${styles.input_field}`}>
              <input type="text" placeholder={user.displayName} />
            </div>
            <div className={`${styles.input_field}`}>
              <input type="text" placeholder="email" />
            </div>
            <div className={`${styles.input_field}`}>
              <input type="password" placeholder="Current Password" />
            </div>
            <div className={`${styles.input_field}`}>
              <input type="password" placeholder="New Password" />
            </div>
            <div className={`${styles.input_field}`}>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button className={`${styles.user_btn}`} type="Submit">
              Update My Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
