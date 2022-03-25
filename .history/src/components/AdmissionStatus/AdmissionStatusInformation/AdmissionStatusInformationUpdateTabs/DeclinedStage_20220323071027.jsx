import React from "react";

function DeclinedStage({ data }) {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <p className="font-bold text-center text-lg mb-1">
          Sorry {data.studentDetails.firstName} your admission was{" "}
          <span className="text-[#F44336] font-bold "> declined</span>
        </p>
        <p className="flex justify-center font-bold mb-1">Reasons:</p>
        <p className="">{data.admissionReason}</p>
      </div>
    </>
  );
}

export default DeclinedStage;
