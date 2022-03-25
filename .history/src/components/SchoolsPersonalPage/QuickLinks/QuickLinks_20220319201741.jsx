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
        <a
          href="www.cloudnotte.com/check-result"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8ea2ba]"
        >
          {" "}
          Check results
        </a>
      </button>
      <button
        type="button"
        className="bg-white border flex border-[#5f9af2] text-[#5f9af2] text-xs hover:brightness-[98%] mr-2 mb-2 font-bold py-2 px-1 sm:px-4 rounded-full"
      >
        <a
          href="https://play.google.com/store/apps/details?id=app.cloudnotte"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8ea2ba]"
        >
          Download School App
        </a>
      </button>
    </div>
  );
}

export default QuickLinks;
