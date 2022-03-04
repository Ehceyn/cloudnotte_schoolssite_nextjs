import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center bg-slate-400 fixed top-0 bottom-0 w-full right-0 left-0 space-x-2">
      <div
        className="spinner-border text-blue-500 animate-spin inline-block w-12 h-12 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
