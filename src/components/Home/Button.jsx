import React from "react";
import styles from "../../../styles/Home.module.css";

function Button(props) {
  return (
    <button
      className={` flex items-center justify-center hover:brightness-90 ${props.customStyle} font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export function CardButton(props) {
  return (
    <button
      className={` ${styles.btn_2} flex items-center justify-center hover:brightness-90 ${props.customStyle} font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export default Button;
