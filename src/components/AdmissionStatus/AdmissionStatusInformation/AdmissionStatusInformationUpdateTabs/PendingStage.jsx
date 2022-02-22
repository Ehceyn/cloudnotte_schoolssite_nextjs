import React from "react";

function PendingStage() {
  return (
    <>
      <section className="flex flex-col items-center mt-5">
        <div className="flex flex-col items-center mb-10">
          <p className="font-bold text-lg text-[#F44336] mb-1 text-center">
            You have not been admitted yet
          </p>
          <p className="flex">
            Please kindly check back later
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#8EA2BA"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
        </div>
      </section>
    </>
  );
}

export default PendingStage;
