import React from "react";

function QuickLinks(props) {
  return (
    <div className="w-full flex flex-wrap items-center justify-end mb-4">
      <p className="mr-2 font-bold text-xs sm:text-base">Quick Links: </p>
      <button
        type="button"
        className="bg-white border border-[#5f9af2] text-[#5f9af2] text-xs hover:brightness-[98%] mr-2 mb-2 font-bold py-2 px-1 sm:px-4 rounded-full"
        onClick={props.onCallCheckAdmissionModal}
      >
        Admission status
      </button>
      <button
        type="button"
        className="bg-white border border-[#5f9af2] text-[#5f9af2] text-xs hover:brightness-[98%] mr-2 mb-2 font-bold py-2 px-1 sm:px-4 rounded-full"
        onClick={props.onCallEntranceExamModal}
      >
        Take entrance exam
      </button>{" "}
      <button
        type="button"
        className="bg-white border border-[#5f9af2] text-[#5f9af2] text-xs hover:brightness-[98%] mr-2 mb-2 font-bold py-2 px-1 sm:px-4 rounded-full"
      >
        Check results
      </button>
      <button
        type="button"
        className="bg-white border flex border-[#5f9af2] text-[#5f9af2] text-xs hover:brightness-[98%] mr-2 mb-2 font-bold py-2 px-1 sm:px-4 rounded-full"
      >
        Download School App{" "}
      </button>
    </div>
  );
}

export default QuickLinks;
