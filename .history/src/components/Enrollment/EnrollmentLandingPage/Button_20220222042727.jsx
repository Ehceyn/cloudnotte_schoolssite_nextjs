import React from "react";
import styles from "../../../../styles/EnrollmentPage.module.css";

function Button(props) {
  return (
    <button
      className={`${styles.enrollment_landing_btn_1} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export default Button;