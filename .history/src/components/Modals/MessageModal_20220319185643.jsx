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
        className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
          <article className="sm:mr-5 mb-5 sm:mb-0">
            <select className="shadow-sm h-12 pl-3 border border-[#CFDBEA] text-gray-900 text-sm rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block p-2.5 w-[250px] bg-[#F8FBFF] ">
              <option disabled="disabled" selected="selected">
                State{" "}
              </option>
              <option>telekinesis</option>
              <option>time travel</option>
              <option>invisibility</option>
            </select>
          </article>
        </div>
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
