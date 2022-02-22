import React from "react";
import styles from "../../../../styles/SchoolPage.module.css";

function Button1(props) {
  return (
    <button
      className={`${styles.school_page_btn_1} ${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export function Button2(props) {
  return (
    <button
      className={`${styles.school_page_btn_1} ${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export default Button1;
