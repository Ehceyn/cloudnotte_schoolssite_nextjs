import React from "react";
import styles from "../../../../../styles/AdmissionPage.module.css";
function Button(props) {
  return (
    <button
      className={`${props.customStyle} flex justify-center items-center font-medium ${props.py} ${props.px} ${props.bg} ${props.color} ${props.hoverBg} capitalize hover:brightness-90`}
    >
      {props.children}
    </button>
  );
}

export default Button;
