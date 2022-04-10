import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";
import Link from "next/link";

function GetStudentDataModal(props) {
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
    //.log(input);
  }

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallGetStudentDataModal}
    >
      <div
        className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <article className="w-full flex justify-center mb-4">
          <p className="font-bold">Print Admission Slip</p>
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
              onChange={handleChange}
              value={input.admissionNo}
              className="shadow-sm h-12 pl-12 border border-[#CFDBEA] text-base text-gray-900 rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#F8FBFF]"
              placeholder="Student admission number"
              required
            />
          </article>
        </div>
        <Link
          href="/schools/students_info/[admissionId]"
          as={`/schools/students_info/${input.admissionNo}`}
          passHref
        >
          <article className="w-full flex items-center justify-center">
            <Button
              borderRaduis="rounded-full"
              px="px-5 w-full xs:w-[200px]"
              py="py-3"
            >
              Proceed{" "}
            </Button>
          </article>
        </Link>
      </div>
    </section>
  );
}

export default GetStudentDataModal;
