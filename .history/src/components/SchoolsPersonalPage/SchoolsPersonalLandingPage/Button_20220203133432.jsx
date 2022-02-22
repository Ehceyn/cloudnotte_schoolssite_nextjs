import React from "react";
import "./school_page_button.css";

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
