import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";

function TakeEntranceModal(props) {
  const [input, setInput] = useState({
    admissionNo: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
    console.log(input);
  }

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallEntranceExamModal}
    >
      <div
        className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <article className="w-full flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#F44336"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <p className="font-bold">Take Entrance Exam</p>
        </article>
        <div className="flex justify-center items-center mb-6">
          <article className="relative">
            <MdPersonOutline
              style={{
                fontWeight: "100",
                fontSize: "30px",
                color: "#8EA2BA",
                position: "absolute",
                left: "15px",
                top: "8px",
              }}
            />
            <input
              type="text"
              id="admissionNo"
              name="admissionNo"
              className="shadow-sm h-12 pl-12 border border-[#CFDBEA] text-base text-gray-900 rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#F8FBFF]"
              placeholder="Enter your admission number"
              required
              onChange={handleChange}
              value={input.admissionNo}
            />
          </article>
        </div>
        <article className="w-full flex items-center justify-center">
          <a
            href={`https://cloudnotte.com/admission/${input.admissionNo}/cbt
`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              borderRaduis="rounded-full"
              px="px-5 w-full xs:w-[200px]"
              py="py-3"
            >
              {" "}
              Take Entrance Exam{" "}
            </Button>
          </a>
        </article>
      </div>
    </section>
  );
}

export default TakeEntranceModal;
