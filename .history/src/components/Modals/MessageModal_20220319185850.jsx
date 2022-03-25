import React, { useState } from "react";
import Button from "./Button";

function MessageModal(props) {
  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed inset-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallMessageModal}
    >
      <div
        className="w-96 h-96 border rounded-2xl bg-white px-6 py-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6"></div>
        <article className="w-full flex items-center justify-center">
          <Button
            borderRaduis="rounded-full"
            px="px-5 w-full sm:w-[200px]"
            py="py-3"
          >
            {" "}
            OK
          </Button>
        </article>
      </div>
    </section>
  );
}

export default MessageModal;
