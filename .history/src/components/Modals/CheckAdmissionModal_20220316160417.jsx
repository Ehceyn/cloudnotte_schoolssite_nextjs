import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";
import Link from "next/link";

function CheckAdmissionModal(props) {
  const [input, setInput] = useState({
    admissionNo: "",
  });

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallCheckAdmissionModal}
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
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-bold">Check Admission Status</p>
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
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
                console.log(input, "input me");
              }}
              className="shadow-sm h-12 pl-12 border border-[#CFDBEA] text-base text-gray-900 rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#F8FBFF]"
              placeholder="Enter your admission number here"
              required
            />
          </article>
        </div>

        <Link
          href="/schools/admission_status/[admissionId]"
          as={`/schools/admission_status/${input.admissionNo}`}
          passHref
        >
          <article
            className="w-full flex items-center justify-center "
            onClick={() => setInput({ admissionNo: "" })}
          >
            <Button
              borderRaduis="rounded-full"
              px="px-5 w-full xs:w-[200px]"
              py="py-3"
            >
              Check Status
            </Button>
          </article>
        </Link>
      </div>
    </section>
  );
}

export default CheckAdmissionModal;
