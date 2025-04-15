import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, children, onClick, variant }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
