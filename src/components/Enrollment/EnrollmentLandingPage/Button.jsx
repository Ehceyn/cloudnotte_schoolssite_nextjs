import React from "react";
import styles from "../../../../styles/EnrollmentPage.module.css";

function Button(props) {
  return (
    <button
      type="submit"
      className={`${styles.enrollment_landing_btn_1} ${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export function Button2(props) {
  return (
    <button
      type="submit"
      className={`${styles.enrollment_landing_btn_2} ${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export function Button3(props) {
  return (
    <button
      type="submit"
      className={`${styles.enrollment_landing_btn_3}
 ${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export function Button4(props) {
  return (
    <button
      type="button"
      className={`${styles.enrollment_landing_btn_3}
 ${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export default Button;
