import React from "react";
import styles from "../../../styles/Home.module.css";

export function Button1(props) {
  return (
    <button
      className={` ${styles.btn_1} flex items-center justify-center hover:brightness-90 ${props.customStyle} font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export function Button2(props) {
  return (
    <button
      className={` ${styles.btn_2} flex items-center justify-center hover:brightness-90 ${props.customStyle} font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}
