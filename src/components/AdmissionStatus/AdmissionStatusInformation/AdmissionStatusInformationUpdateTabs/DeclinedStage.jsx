import React from "react";

function DeclinedStage() {
  return (
    <>
      <section className="flex flex-col items-center mt-5">
        <div className="flex flex-col items-center mb-10">
          <p className="font-bold text-center text-lg mb-1">
            Sorry Ugochukwu your admission was{" "}
            <span className="text-[#F44336] font-bold "> declined</span>
          </p>
          <p className="flex justify-center font-bold mb-1">Reasons:</p>
          <p className="">
            Your health condition is too bad very very very bad, so we will not
            admit you in this life, maybe in the next
          </p>
        </div>
      </section>
    </>
  );
}

export default DeclinedStage;
