import React from "react";

function Button(props) {
  return (
    <button
      type="submit"
      className={`flex items-center justify-center bg-[#5f9af2] hover:brightness-90 ${props.customStyle} text-white font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export function Button2(props) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center bg-[#5f9af2] hover:brightness-90 ${props.customStyle} text-white font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export function Button3(props) {
  return (
    <button
      disabled={!props.disabled}
      type="button"
      className={`flex items-center justify-center hover:brightness-90 ${props.customStyle} text-white font-medium ${props.py} ${props.px} ${props.borderRaduis} ${props.height} capitalize`}
    >
      {props.children}
    </button>
  );
}

export default Button;
