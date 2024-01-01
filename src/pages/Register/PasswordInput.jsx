import React, { useState } from "react";
import styles from "./Register.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
const PasswordInput = ({ placeholder, name, value, onChange, onPaste }) => {
  // =========
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`${styles.input_field}`}>
      <input
        required
        className={`${styles.inputText}`}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
      />

      <div className={`${styles.show_icon}`} onClick={togglePassword}>
        {showPassword ? (
          <IoEyeOutline className={`${styles.eye_icon}`} />
        ) : (
          <IoEyeOffOutline className={`${styles.eye_icon}`} />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
