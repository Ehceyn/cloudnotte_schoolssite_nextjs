import React from "react";

function Button(props) {
  return (
    <button
      className={`flex items-center justify-center bg-[#5f9af2] hover:brightness-90 ${props.customStyle} text-white font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export default Button;
