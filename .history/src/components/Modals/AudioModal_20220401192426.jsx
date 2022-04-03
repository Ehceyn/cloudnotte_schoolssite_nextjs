import React, { useState } from "react";
import Button from "./Button";

function AudioModal(props) {
  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallAudioModal}
    >
      <div
        className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <article className="w-full flex justify-center mb-4">
          <p className="font-bold">School Anthem</p>
        </article>
        <div className="flex justify-center items-center mb-6">
          <audio controls src={props.audio}></audio>
        </div>
        <article className="w-full flex items-center justify-center">
          <Button
            borderRaduis="rounded-full"
            px="px-5 w-full xs:w-[200px]"
            py="py-3"
          >
            Proceed{" "}
          </Button>
        </article>
      </div>
    </section>
  );
}

export default AudioModal;
